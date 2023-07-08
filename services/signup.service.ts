import axios from "axios";

export const signUpUser = async (newUser: {
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  try {
    const response = await axios.post(`/sign-up`, newUser);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
