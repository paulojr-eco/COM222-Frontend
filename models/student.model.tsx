import { UUID } from "crypto";
import { UserInterface } from "./interfaces/user.interface";

export class StudentModel {
  id: UUID;
  name: string;
  email: string;
  phone: string;
  registration: number;
  role: string;
  status: string;
  photo?: string;

  constructor({
    id,
    name,
    email,
    phone,
    registration,
    role,
    status,
    photo,
  }: UserInterface) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.registration = registration;
    this.role = role;
    this.status = status;
    this.photo = photo;
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
      photo: "profile.png"
    });
  };
}
