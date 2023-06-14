import * as React from "react";
import loginImage from "../assets/images/login-img.png";
import Header from "../components/Header";
import LoginTabPanel from "../widgets/LoginTabPanel";

export default function index() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center max-w-lg md:w-1/2">
        <Header
          title={"Portal Escolar"}
          description={"Preencha os dados abaixo"}
          imagePath={loginImage}
        />
        <LoginTabPanel/>
        </div>
      </div>
    </>
  );
}
