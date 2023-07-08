import * as React from "react";
import createImage from "../../assets/images/create-resource.png";
import Header from "@/components/Header";
import CreateStudentWidget from "@/components/widgets/users/CrudStudentWidget";
import SideMenuBar from "@/components/SideMenuBar";

export default function index() {
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="flex flex-col mx-auto md:w-1/2">
        <Header
          title={"Cadastrar novo Aluno"}
          description={"Preencha os dados abaixo"}
          imagePath={createImage}
        />
        <CreateStudentWidget />
      </div>
    </div>
  );
}
