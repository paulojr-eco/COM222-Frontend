import * as React from "react";
import Header from "../../components/Header";
import RequestEmailPanel from "@/components/widgets/reset_password/RequestEmailPanel";

export default function index() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center max-w-lg md:w-1/2">
          <Header
            title={"Recuperação de Senha"}
            description={
              "Preencha os dados abaixo e te enviaremos um email de recuperação"
            }
          />
          <RequestEmailPanel />
        </div>
      </div>
    </>
  );
}
