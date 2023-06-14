import * as React from "react";
import { Box, Typography } from "@mui/material";

interface CustomPageProps {
  title: string;
}

const CustomPage: React.FC<CustomPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="m-4">
        <Box className="max-w-sm p-3 rounded-t-lg" bgcolor="primary.main">
          <Typography className="text-center" variant="h2"> {title} </Typography>
        </Box>
        <Box className="rounded-b-lg h-32" bgcolor="background.paper"></Box>
      </div>
    </div>
  );
};

export default CustomPage;
