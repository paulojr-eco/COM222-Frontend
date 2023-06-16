import * as React from "react";
import CustomPage from "../../components/CustomPage";
import { StudentModel } from "@/models/student.model";
import { getAllStudents } from "@/services/students.service";
import { GetServerSideProps } from "next";

interface PageProps {
  users: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getAllStudents();
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
    <div className="flex flex-row justify-center items-center md:h-screen md:w-screen">
      <CustomPage
        title={"Alunos"}
        crudName="students"
        hasSearch={true}
        users={listUsers}
      />
    </div>
  );
};

export default Index;
