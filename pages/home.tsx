import CustomHomePage from "@/components/CustomHomePage";
import SideMenuBar from "@/components/SideMenuBar";
import checkAuth from "@/utility/checkAuth";
import { GetServerSideProps } from "next";
import * as React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkAuth(context);
};

export default function index() {
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="mx-auto">
        <CustomHomePage title={"Cronograma"} />
      </div>
    </div>
  );
}
