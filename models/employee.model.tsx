import { UUID } from "crypto";
import { EmployeeInterface } from "./interfaces/employee.interface";

export class EmployeeModel {
  id: UUID;
  name: string;
  email: string;
  phone: string;
  registration: number;
  role: string;
  status: string;
  photo?: string;
  bond: string;
  admition: string;
  RG: string;
  CPF: string;
  birthDate: string;
  gender: string;
  schooling: string;
  address: string;

  constructor({
    id,
    name,
    email,
    phone,
    registration,
    role,
    status,
    photo,
    bond,
    admition,
    RG,
    CPF,
    birthDate,
    gender,
    schooling,
    address,
  }: EmployeeInterface) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.registration = registration;
    this.role = role;
    this.status = status;
    this.photo = photo;
    this.bond = bond;
    this.admition = admition;
    this.RG = RG;
    this.CPF = CPF;
    this.birthDate = birthDate;
    this.gender = gender;
    this.schooling = schooling;
    this.address = address;
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
    } = user.props;
    return new EmployeeModel({
      id: user._id,
      name: nome,
      email: email,
      phone: "(35) 99999-9999",
      registration: registro,
      role: cargo,
      status: status,
      photo: "profile.png",
      admition: admissao,
      schooling: escolaridade,
      RG: RG,
      CPF: CPF,
      birthDate: nascimento,
      gender: sexo,
      address: endereco,
      bond: vinculo,
    });
  };
}
