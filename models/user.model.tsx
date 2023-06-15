import { UUID } from "crypto";

export class UserModel {
  id: UUID;
  name: string;
  email: string;
  phone: string;
  registration: number;
  role: string;
  status: boolean;
  photo?: string;

  constructor(
    id: UUID,
    name: string,
    email: string,
    phone: string,
    registration: number,
    role: string,
    status: boolean,
    photo?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.registration = registration;
    this.role = role;
    this.status = status;
    this.photo = photo;
  }
}
