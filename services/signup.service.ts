import api from "./api.service";

export const signUpUser = async (newUser: {
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  try {
    const response = await api.post(`/sign-up`, newUser);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
