import { destroyCookie } from "nookies";

const handleBeforeUnload = () => {
  destroyCookie(null, "accessToken");
};

const addEventDestroyCookies = () => {
  window.addEventListener("beforeunload", handleBeforeUnload);
};

export default addEventDestroyCookies;
