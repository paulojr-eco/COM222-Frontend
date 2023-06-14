import * as React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import LoginWidget from "@/widgets/LoginWidget";
import SiginWidget from "./SiginWidget";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LoginTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor="background.paper" className="flex flex-col rounded-b-lg p-6">
      <div>
        <Tabs value={value} onChange={handleChange} centered={true}>
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Sigin" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <LoginWidget />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SiginWidget />
      </TabPanel>
    </Box>
  );
}
