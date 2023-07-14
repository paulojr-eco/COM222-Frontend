import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { SidebarData, SidebarFixedData, SchoolInfo } from "./SideMenuData";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { setCookie, parseCookies } from "nookies";
import logoutIcon from "../assets/images/logout-icon.png";

interface SideMobileMenuBarProps {
  handleExpand: Function;
}

const SideMobileMenuBar: React.FC<SideMobileMenuBarProps> = ({
  handleExpand,
}) => {
  const [expand, setExpand] = React.useState(false);
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setCookie(null, "theme", !isDarkMode ? "dark" : "light", {
      maxAge: 365 * 24 * 60 * 60,
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  };

  React.useEffect(() => {
    const cookieExpanded = parseCookies().expandedSideBar;
    const expandedSideBar = cookieExpanded === "true" ? true : false;
    setExpand(expandedSideBar);
  }, []);

  React.useEffect(() => {
    const cookieTheme = parseCookies().theme;
    const theme = cookieTheme === "dark" ? true : false;
    setDarkMode(theme);
  }, []);

  return (
    <Box
      bgcolor="common.black"
      className="fixed left-0 flex flex-col h-[100vh] place-content-between p-2 z-50"
      style={{ width: expand ? "300px" : "80px" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row py-2 items-center place-content-between gap-x-1.5">
          <Link href={SchoolInfo.path} className="w-[100%] no-underline">
            <div className={expand ? "pl-6" : "pl-5"}>
              <div className="flex flex-row items-center h-14 text-white gap-x-4">
                <Image
                  className="h-7 w-auto"
                  src={SchoolInfo.icon}
                  alt="Icon"
                />
                {expand && (
                  <Typography variant="h2" className="whitespace-nowrap">
                    {SchoolInfo.name}
                  </Typography>
                )}
              </div>
            </div>
          </Link>
          <div className="pr-6">
            <MenuIcon
              onClick={(e) => {
                handleExpand();
              }}
            />
          </div>
        </div>
        <Divider variant="middle" />
        <div>
          <ul className="p-0">
            {SidebarData.map((element) => (
              <li className="list-none hover:bg-indigo-500" key={element.title}>
                <Link
                  href={element.path}
                  className="flex flex-row items-center h-14 no-underline text-white gap-x-4"
                >
                  <div className={expand ? "pl-6" : "pl-[30%]"}>
                    <div className="flex flex-row items-center h-14 no-underline text-white gap-x-4">
                      <Image
                        className="h-7 w-auto"
                        src={element.icon}
                        alt="Icon"
                      />
                      {expand && (
                        <Typography className="whitespace-nowrap">
                          {element.title}
                        </Typography>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="hover:bg-indigo-500">
          <Link
            href={"/login"}
            className="flex flex-row items-center h-14 no-underline text-white gap-x-4"
          >
            <div className={expand ? "pl-6" : "pl-[30%]"}>
              <div className="flex flex-row items-center h-14 no-underline text-white gap-x-4">
                <Image className="h-7 w-auto" src={logoutIcon} alt="Icon" />
                {expand && (
                  <Typography
                    noWrap
                    className="overflow-hidden text-ellipsis pr-6 w-44"
                  >
                    Sair
                  </Typography>
                )}
              </div>
            </div>
          </Link>
        </div>
        {SidebarFixedData.map((element) => (
          <div className="hover:bg-indigo-500" key={element.title}>
            <Link
              href={element.path}
              className="flex flex-row items-center h-14 no-underline text-white gap-x-4"
            >
              <div className={expand ? "pl-6" : "pl-[30%]"}>
                <div className="flex flex-row items-center h-14 no-underline text-white gap-x-4">
                  <Image className="h-7 w-auto" src={element.icon} alt="Icon" />
                  {expand && (
                    <Typography
                      noWrap
                      className="overflow-hidden text-ellipsis pr-6 w-44"
                    >
                      {element.title}
                    </Typography>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SideMobileMenuBar;
