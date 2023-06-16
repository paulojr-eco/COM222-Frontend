import * as React from "react";
import createImage from "../../assets/images/create-resource.png";
import Header from "@/components/Header";
import CreateStudentWidget from "@/components/widgets/users/CreateStudentWidget";

export default function index() {
  return (
    <div className="flex flex-row justify-center items-center md:h-screen md:w-screen">
      <div className="flex flex-col md:w-1/2">
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
