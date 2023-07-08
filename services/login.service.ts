import axios from "axios";
import { baseUrl } from "./base.service";
import { setCookie } from "nookies";

export const loginUser = async (user: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${baseUrl}/sign-in`, user);
    setCookie(null, "accessToken", response.data.accessToken, {
      maxAge: 7200,
      path: "/",
      secure: true,
      sameSite: "strict",
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
