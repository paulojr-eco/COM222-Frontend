import * as React from "react";
import CustomPage from "../../components/CustomCrudPage";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import SideMenuBar from "@/components/SideMenuBar";
import { getAllEmployees } from "@/services/employees.service";
import { EmployeeModel } from "@/models/employee.model";

interface PageProps {
  users: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const users = await getAllEmployees(cookies.accessToken);
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
    EmployeeModel.newUserFromMap(user)
  );
  return (
    <div className="flex flex-row items-center md:h-screen md:w-screen">
      <SideMenuBar />
      <div className="mx-auto">
        <CustomPage
          title={"Funcionários"}
          crudName="employees"
          hasSearch={true}
          users={listUsers}
        />
      </div>
    </div>
  );
};

export default Index;
