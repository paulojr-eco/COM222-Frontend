import * as React from "react";
import createImage from "../assets/images/create-resource.png";
import Header from "@/components/Header";
import checkAuth from "@/utility/checkAuth";
import { GetServerSideProps } from "next";
import ChangeProfilePanel from "@/components/widgets/profile/ChangeProfilePanel";
import TopMenuBar from "@/components/TopMenuBar";
import SideDektopMenuBar from "@/components/SideDektopMenuBar";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkAuth(context);
};

export default function index() {
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
      <div className="flex flex-col mx-auto mt-24 md:mt-0 md:w-1/2">
        <Header
          title={"Personalize sua Conta"}
          description={"Preencha os dados abaixo"}
          imagePath={createImage}
        />
        <ChangeProfilePanel />
      </div>
    </div>
  );
}
