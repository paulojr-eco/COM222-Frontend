import unifeiIcon from "../assets/images/unifei-icon.png";
import homeIcon from "../assets/images/home-icon.png";
import studentIcon from "../assets/images/student-icon.png";
import employeeIcon from "../assets/images/employee-icon.png";
import logoutIcon from "../assets/images/logout-icon.png";
import defaultAvatar from "../assets/images/default-avatar.png";

export const SchoolInfo = {
  name: "Unifei",
  icon: unifeiIcon,
  path: "/home",
};

export const SidebarData = [
  {
    title: "Página Inicial",
    path: "/home",
    icon: homeIcon,
  },
  {
    title: "Funcionários",
    path: "/employees",
    icon: employeeIcon,
  },
  {
    title: "Alunos",
    path: "/students",
    icon: studentIcon,
  },
];

export const SidebarFixedData = [
  {
    title: "Sair",
    icon: logoutIcon,
    path: "/login",
  },
  {
    title: "Nome Sobrenome",
    path: "/profile",
    icon: defaultAvatar,
  },
];
