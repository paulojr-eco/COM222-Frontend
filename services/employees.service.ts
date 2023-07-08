import axios from "axios";
import { baseUrl } from "./base.service";
import { parseCookies } from "nookies";
import { UUID } from "crypto";
import { RequestEmployeeInterface } from "@/models/interfaces/req.employee.interface";

export const getAllEmployees = async (
  accessToken: string
): Promise<Map<string, any> | null> => {
  try {
    const response = await axios.get(`${baseUrl}/funcionarios`, {
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

export const getEmployeeById = async (
  accessToken: string,
  userId: string
): Promise<Map<string, any> | null> => {
  try {
    const response = await axios.get(`${baseUrl}/funcionarios/${userId}`, {
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

export const createEmployee = async (newEmployee: RequestEmployeeInterface) => {
  try {
    const cookies = parseCookies();
    const response = await axios.post(`${baseUrl}/funcionarios`, newEmployee, {
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

export const deleteEmployee = async (userId: UUID) => {
  try {
    const cookies = parseCookies();
    const response = await axios.delete(`${baseUrl}/funcionarios/${userId}`, {
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

export const editEmployee = async (userId: UUID, employee: RequestEmployeeInterface) => {
  try {
    const cookies = parseCookies();
    const response = await axios.put(`${baseUrl}/funcionarios/${userId}`, employee, {
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
