import { UUID } from "crypto";

export interface UserInterface {
  id: UUID;
  name: string;
  email: string;
  registration: number;
  role: string;
  status: string;
  photo?: string;
}
