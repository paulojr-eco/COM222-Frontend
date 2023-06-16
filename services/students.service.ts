import axios from "axios";
import { StudentModel } from "@/models/student.model";

const baseUrl = process.env.BASE_URL || "http://localhost:3333/api";

export const getAllStudents = async (): Promise<Map<string, any>> => {
  const response = await axios.get(`${baseUrl}/alunos`);
  return response.data;
};

export const getStudentById = (id: number) => {};
