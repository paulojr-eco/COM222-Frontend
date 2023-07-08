import * as React from "react";
import createImage from "../../assets/images/create-resource.png";
import Header from "@/components/Header";
import SideMenuBar from "@/components/SideMenuBar";
import CrudEmployeeWidget from "@/components/widgets/users/CrudEmployeeWidget";

export default function index() {
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="flex flex-col mx-auto md:w-1/2">
        <Header
          title={"Cadastrar novo Funcionário"}
          description={"Preencha os dados abaixo"}
          imagePath={createImage}
        />
        <CrudEmployeeWidget />
      </div>
    </div>
  );
}
