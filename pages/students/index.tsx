import * as React from "react";
import CustomStudentCrudPage from "../../components/CustomStudentCrudPage";
import { StudentModel } from "@/models/student.model";
import { getAllStudents } from "@/services/students.service";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import TopMenuBar from "@/components/TopMenuBar";
import SideDektopMenuBar from "@/components/SideDektopMenuBar";

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
  const [screenWidth, setScreenWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center md:h-screen md:w-screen">
      {screenWidth < 768 && <TopMenuBar />}
      {screenWidth > 768 && <SideDektopMenuBar />}
      <div className="mt-24 md:mx-auto md:mt-0">
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
