import { UserInterface } from "./user.interface";

export interface EmployeeInterface extends UserInterface {
  bond: string;
  admition: string;
  RG: string;
  CPF: string;
  birthDate: string;
  gender: string;
  schooling: string;
  address: string;
}
