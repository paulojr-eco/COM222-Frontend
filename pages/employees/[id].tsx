import * as React from "react";
import createImage from "../../assets/images/create-resource.png";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getEmployeeById } from "@/services/employees.service";
import { EmployeeModel } from "@/models/employee.model";
import CrudEmployeeWidget from "@/components/widgets/users/CrudEmployeeWidget";
import SideDektopMenuBar from "@/components/SideDektopMenuBar";
import TopMenuBar from "@/components/TopMenuBar";

interface PageProps {
  user: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const cookies = parseCookies(context);
  const user = await getEmployeeById(cookies.accessToken, String(id));
  if (typeof user === "object" && user !== null) {
    for (const [key] of Object.entries(user)) {
      if (key === "redirect") {
        return { redirect: { destination: "/login", permanent: false } };
      }
    }
  }

  return {
    props: {
      user,
    },
  };
};

const Index: React.FC<PageProps> = ({ user }) => {
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
  const userFromMap = EmployeeModel.newUserFromMap(user);
  return (
    <div className="flex flex-col md:flex-row items-center md:h-screen md:w-screen">
      {screenWidth < 768 && <TopMenuBar />}
      {screenWidth > 768 && <SideDektopMenuBar />}
      <div className="flex flex-col mt-24 md:mt-0 mx-auto md:w-1/2">
        <Header
          title={`Editar o funcionário ${userFromMap.name}`}
          description={"Confira os dados abaixo"}
          imagePath={createImage}
        />
        <CrudEmployeeWidget user={userFromMap} isEdit={true} />
      </div>
    </div>
  );
};

export default Index;
