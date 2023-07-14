import * as React from "react";
import createImage from "../assets/images/create-resource.png";
import Header from "@/components/Header";
import SideMenuBar from "@/components/SideMenuBar";
import checkAuth from "@/utility/checkAuth";
import { GetServerSideProps } from "next";
import ChangeProfilePanel from "@/components/widgets/profile/ChangeProfilePanel";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkAuth(context);
};

export default function index() {
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="flex flex-col mx-auto md:w-1/2">
        <Header
          title={"Personalize sua Conta"}
          description={"Preencha os dados abaixo"}
          imagePath={createImage}
        />
        <ChangeProfilePanel />
      </div>
    </div>
  );
}
