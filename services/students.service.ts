import axios from "axios";
import { baseUrl } from "./base.service";
import { RequestStudentInterface } from "@/models/interfaces/req.student.interface";
import { parseCookies } from "nookies";
import { UUID } from "crypto";

export const getAllStudents = async (
  accessToken: string
): Promise<Map<string, any> | null> => {
  try {
    const response = await axios.get(`${baseUrl}/alunos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getStudentById = async (
  accessToken: string,
  userId: string
): Promise<Map<string, any> | null> => {
  try {
    const response = await axios.get(`${baseUrl}/alunos/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createStudent = async (newStudent: RequestStudentInterface) => {
  try {
    const cookies = parseCookies();
    const response = await axios.post(`${baseUrl}/alunos`, newStudent, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteStudent = async (userId: UUID) => {
  try {
    const cookies = parseCookies();
    const response = await axios.delete(`${baseUrl}/alunos/${userId}`, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editStudent = async (userId: UUID, student: RequestStudentInterface) => {
  try {
    const cookies = parseCookies();
    const response = await axios.put(`${baseUrl}/alunos/${userId}`, student, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
