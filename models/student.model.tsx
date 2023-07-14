import { UUID } from "crypto";
import { StudentInterface } from "./interfaces/student.interface";

export class StudentModel {
  id: UUID;
  name: string;
  email: string;
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
  file: string;

  constructor({
    id,
    name,
    email,
    registration,
    role,
    status,
    guardianEmail,
    grade,
    rg,
    cpf,
    birthDate,
    gender,
    address,
    file,
  }: StudentInterface) {
    this.id = id;
    this.name = name;
    this.email = email;

    this.registration = registration;
    this.role = role;
    this.status = status;
    this.guardianEmail = guardianEmail;
    this.grade = grade;
    this.rg = rg;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.gender = gender;
    this.address = address;
    this.file = file;
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
      avatar,
    } = user.props;
    return new StudentModel({
      id: user._id,
      name: nome,
      email: email,
      registration: matricula,
      role: "Aluno",
      status: status,
      guardianEmail: emailResponsavel,
      grade: serie,
      rg: RG,
      cpf: CPF,
      birthDate: nascimento,
      gender: sexo,
      address: endereco,
      file: avatar,
    });
  };
}
