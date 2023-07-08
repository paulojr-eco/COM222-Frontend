import { UUID } from "crypto";
import { StudentInterface } from "./interfaces/student.interface";

export class StudentModel {
  id: UUID;
  name: string;
  email: string;
  phone: string;
  registration: number;
  role: string;
  status: string;
  photo?: string;
  guardianEmail: string;
  grade: string;
  rg: string;
  cpf: string;
  birthDate: string;
  gender: string;
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
    guardianEmail,
    grade,
    rg,
    cpf,
    birthDate,
    gender,
    address,
  }: StudentInterface) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.registration = registration;
    this.role = role;
    this.status = status;
    this.photo = photo;
    this.guardianEmail = guardianEmail;
    this.grade = grade;
    this.rg = rg;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.gender = gender;
    this.address = address;
  }

  static newUserFromMap = (user: any): StudentModel => {
    const {
      email,
      nome,
      CPF,
      emailResponsavel,
      endereco,
      matricula,
      nascimento,
      nomeMae,
      nomePai,
      RG,
      serie,
      sexo,
      status,
      telefoneMae,
      telefonePai,
    } = user.props;
    return new StudentModel({
      id: user._id,
      name: nome,
      email: email,
      phone: "(35) 99999-9999",
      registration: matricula,
      role: "Aluno",
      status: status,
      photo: "profile.png",
      guardianEmail: emailResponsavel,
      grade: serie,
      rg: RG,
      cpf: CPF,
      birthDate: nascimento,
      gender: sexo,
      address: endereco,
    });
  };
}
