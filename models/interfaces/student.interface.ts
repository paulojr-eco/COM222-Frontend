import { UserInterface } from "./user.interface";

export interface StudentInterface extends UserInterface {
  guardianEmail: string;
  grade: string;
  rg: string;
  cpf: string;
  birthDate: string;
  gender: string;
  address: string;
}
