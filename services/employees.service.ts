import api from "./api.service";
import { parseCookies } from "nookies";
import { UUID } from "crypto";
import { RequestEmployeeInterface } from "@/models/interfaces/req.employee.interface";

export const getAllEmployees = async (
  accessToken?: string
): Promise<Map<string, any> | null> => {
  try {
    const response = await api.get(`/funcionarios`, {
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
    const response = await api.get(`/funcionarios/${userId}`, {
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
    const response = await api.post(`/funcionarios`, newEmployee, {
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
    const response = await api.delete(`/funcionarios/${userId}`, {
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

export const editEmployee = async (
  userId: UUID,
  employee: RequestEmployeeInterface
) => {
  try {
    const cookies = parseCookies();
    const response = await api.put(`/funcionarios/${userId}`, employee, {
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
