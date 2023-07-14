import * as React from "react";
import Header from "../../components/Header";
import { GetServerSideProps } from "next";
import ResetPassword from "@/components/widgets/reset_password/ResetPassword";

interface PageProps {
  token: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { token } = query;
  return {
    props: {
      token,
    },
  };
};

const Index: React.FC<PageProps> = ({ token }) => {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center max-w-lg md:w-1/2">
          <Header
            title={"Redefinição de Senha"}
            description={"Preencha os dados abaixo"}
          />
          <ResetPassword />
        </div>
      </div>
    </>
  );
};

export default Index;
