import * as React from "react";
import { Box, Divider, Fab, Typography } from "@mui/material";
import { SidebarData, SidebarFixedData, SchoolInfo } from "./SideMenuData";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Image from "next/image";
import Link from "next/link";
import { setCookie, parseCookies } from "nookies";
import logoutIcon from "../assets/images/logout-icon.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SideMenuBar: React.FC = () => {
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
    <Box
      bgcolor="common.black"
      className="left-0 flex flex-col h-[100vh] place-content-between ease-linear duration-300 p-2"
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
            <Fab
              className={"bg-gradient-to-br from-sky-600 to-violet-600 h-4 w-9"}
              aria-label="expand"
              onClick={(e) => {
                handleExpand();
              }}
            >
              <KeyboardDoubleArrowLeftIcon
                sx={{ color: "white" }}
                className={expand ? "" : "rotate-180"}
              />
            </Fab>
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
        <div
          className="cursor-pointer hover:bg-indigo-500"
          onClick={(e) => toggleDarkMode(!isDarkMode)}
        >
          <div className={expand ? "pl-6" : "pl-[30%]"}>
            <div className="flex flex-row items-center h-14 no-underline text-white gap-x-4">
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={() => {}}
                size={30}
              />
              {expand && (
                <Typography
                  noWrap
                  className="overflow-hidden text-ellipsis pr-6 w-44"
                >
                  Tema
                </Typography>
              )}
            </div>
          </div>
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

export default SideMenuBar;
