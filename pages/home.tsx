import CustomHomePage from "@/components/CustomHomePage";
import SideDektopMenuBar from "@/components/SideDektopMenuBar";
import TopMenuBar from "@/components/TopMenuBar";
import checkAuth from "@/utility/checkAuth";
import { GetServerSideProps } from "next";
import * as React from "react";

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
      {screenWidth > 768 && <SideDektopMenuBar />}
      {screenWidth < 768 && <TopMenuBar />}
      <div className="mt-24 md:mx-auto md:mt-0">
        <CustomHomePage title={"Cronograma"} />
      </div>
    </div>
  );
}
