import { getAllEmployees } from "@/services/employees.service";
import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

const checkAuth = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const cookies = parseCookies(context);
  const obj = await getAllEmployees(cookies.accessToken);
  if (typeof obj === "object" && obj !== null) {
    for (const [key] of Object.entries(obj)) {
      if (key === "redirect") {
        return { redirect: { destination: "/login", permanent: false } };
      }
    }
  }

  return {
    props: {},
  };
};

export default checkAuth;
