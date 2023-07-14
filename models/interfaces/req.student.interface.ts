export interface RequestStudentInterface {
  matricula: number | undefined;
  status: string;
  nome: string;
  email: string;
  emailResponsavel: string;
  serie: string;
  RG: string;
  CPF: string;
  nascimento: string;
  sexo: string;
  endereco: string;
}

export function convertStudentJsonToFormData(
  data: RequestStudentInterface,
  avatar: File,
  isEdit: boolean
): FormData {
  const formData = new FormData();

  if (!isEdit) {
    formData.append("matricula", String(data.matricula));
  }
  formData.append("status", data.status);
  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("emailResponsavel", data.emailResponsavel);
  formData.append("serie", data.serie);
  formData.append("RG", data.RG);
  formData.append("CPF", data.CPF);
  formData.append("nascimento", data.nascimento);
  formData.append("sexo", data.sexo);
  formData.append("endereco", data.endereco);
  formData.append("file", avatar);

  return formData;
}
