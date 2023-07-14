import * as React from "react";
import CustomStudentCrudPage from "../../components/CustomStudentCrudPage";
import { StudentModel } from "@/models/student.model";
import { getAllStudents } from "@/services/students.service";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import SideMenuBar from "@/components/SideMenuBar";

interface PageProps {
  users: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const users = await getAllStudents(cookies.accessToken);
  if (typeof users === "object" && users !== null) {
    for (const [key] of Object.entries(users)) {
      if (key === "redirect") {
        return { redirect: { destination: "/login", permanent: false } };
      }
    }
  }
  return {
    props: {
      users,
    },
  };
};

const Index: React.FC<PageProps> = ({ users }) => {
  const listUsers = users.map((user: Map<string, any>) =>
    StudentModel.newUserFromMap(user)
  );
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="mx-auto">
        <CustomStudentCrudPage
          title={"Alunos"}
          crudName="students"
          hasSearch={true}
          users={listUsers}
        />
      </div>
    </div>
  );
};

export default Index;
