import * as React from "react";
import Header from "../../components/Header";
import ConfirmResetEmail from "@/components/widgets/reset_password/ConfirmResetEmail";

export default function index() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center max-w-lg md:w-1/2">
          <Header
            title={"Recuperação de Senha"}
            description={
              "Enviamos um e-mail com instruções para redefinir sua senha "
            }
          />
          <ConfirmResetEmail />
        </div>
      </div>
    </>
  );
}
