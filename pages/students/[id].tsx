import * as React from "react";
import createImage from "../../assets/images/create-resource.png";
import Header from "@/components/Header";
import CrudStudentWidget from "@/components/widgets/users/CrudStudentWidget";
import SideMenuBar from "@/components/SideMenuBar";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getStudentById } from "@/services/students.service";
import { StudentModel } from "@/models/student.model";

interface PageProps {
  user: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const cookies = parseCookies(context);
  const user = await getStudentById(cookies.accessToken, String(id));

  return {
    props: {
      user,
    },
  };
};

const Index: React.FC<PageProps> = ({ user }) => {
  const userFromMap = StudentModel.newUserFromMap(user);
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="flex flex-col mx-auto md:w-1/2">
        <Header
          title={`Editar o aluno ${userFromMap.name}`}
          description={"Confira os dados abaixo"}
          imagePath={createImage}
        />
        <CrudStudentWidget user={userFromMap} isEdit={true} />
      </div>
    </div>
  );
};

export default Index;
