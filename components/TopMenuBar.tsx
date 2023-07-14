import * as React from "react";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { parseCookies, setCookie } from "nookies";
import SideMobileMenuBar from "./SideMobileMenuBar";

const TopMenuBar: React.FC = () => {
  const [expand, setExpand] = React.useState(false);

  React.useEffect(() => {
    const cookieExpanded = parseCookies().expandedSideBar;
    const expandedSideBar = cookieExpanded === "true" ? true : false;
    setExpand(expandedSideBar);
  }, []);

  const handleExpand = () => {
    setExpand(!expand);
    setCookie(null, "expandedSideBar", (!expand).toString(), {
      maxAge: 7200,
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  };

  return (
    <>
      <Box
        bgcolor="background.paper"
        className="fixed flex flex-row w-[100vw] h-14 items-center z-40"
      >
        <div className="flex-1">
          <MenuIcon
            className="ml-6 mt-1 cursor-pointer"
            onClick={() => {
              handleExpand();
            }}
          />
        </div>
        <Typography className="flex-1 mr-16" variant="h2">
          Unifei
        </Typography>
      </Box>
      {expand && <SideMobileMenuBar handleExpand={handleExpand} />}
    </>
  );
};

export default TopMenuBar;
