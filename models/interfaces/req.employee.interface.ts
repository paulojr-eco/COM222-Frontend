export interface RequestEmployeeInterface {
  registro: number | undefined;
  status: string;
  nome: string;
  email: string;
  RG: string;
  CPF: string;
  nascimento: string;
  admissao: string;
  cargo: string;
  escolaridade: string;
  sexo: string;
  endereco: string;
  vinculo: string;
}

export function convertJsonToFormData(
  data: RequestEmployeeInterface,
  avatar: File,
  isEdit: boolean
): FormData {
  const formData = new FormData();

  if (!isEdit) {
    formData.append("registro", String(data.registro));
  }
  formData.append("status", data.status);
  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("RG", data.RG);
  formData.append("CPF", data.CPF);
  formData.append("nascimento", data.nascimento);
  formData.append("admissao", data.admissao);
  formData.append("cargo", data.cargo);
  formData.append("escolaridade", data.escolaridade);
  formData.append("sexo", data.sexo);
  formData.append("endereco", data.endereco);
  formData.append("vinculo", data.vinculo);
  formData.append("file", avatar);

  return formData;
}
