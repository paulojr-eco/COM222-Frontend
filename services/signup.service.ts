import axios from "axios";
import { baseUrl } from "./base.service";

export const signUpUser = async (newUser: {
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  try {
    const response = await axios.post(`${baseUrl}/sign-up`, newUser);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
