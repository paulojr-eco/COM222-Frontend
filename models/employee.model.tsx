import { UUID } from "crypto";
import { EmployeeInterface } from "./interfaces/employee.interface";

export class EmployeeModel {
  id: UUID;
  name: string;
  email: string;
  registration: number;
  role: string;
  status: string;
  bond: string;
  admition: string;
  RG: string;
  CPF: string;
  birthDate: string;
  gender: string;
  schooling: string;
  address: string;
  file: string;

  constructor({
    id,
    name,
    email,
    registration,
    role,
    status,
    bond,
    admition,
    RG,
    CPF,
    birthDate,
    gender,
    schooling,
    address,
    file,
  }: EmployeeInterface) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.registration = registration;
    this.role = role;
    this.status = status;
    this.bond = bond;
    this.admition = admition;
    this.RG = RG;
    this.CPF = CPF;
    this.birthDate = birthDate;
    this.gender = gender;
    this.schooling = schooling;
    this.address = address;
    this.file = file;
  }

  static newUserFromMap = (user: any): EmployeeModel => {
    const {
      admissao,
      cargo,
      escolaridade,
      email,
      nome,
      CPF,
      endereco,
      nascimento,
      RG,
      registro,
      sexo,
      status,
      vinculo,
      avatar,
    } = user.props;
    return new EmployeeModel({
      id: user._id,
      name: nome,
      email: email,
      registration: registro,
      role: cargo,
      status: status,
      admition: admissao,
      schooling: escolaridade,
      RG: RG,
      CPF: CPF,
      birthDate: nascimento,
      gender: sexo,
      address: endereco,
      bond: vinculo,
      file: avatar,
    });
  };
}
