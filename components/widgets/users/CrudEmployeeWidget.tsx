import * as React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import InputMask from "react-input-mask";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ptLocale from "date-fns/locale/pt-BR";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Dropzone from "react-dropzone";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";
import { EmployeeModel } from "@/models/employee.model";
import { createEmployee, editEmployee } from "@/services/employees.service";

interface CrudEmployeeWidgetProps {
  user?: EmployeeModel;
  isEdit?: boolean;
}

let hasSuccsess = false;

const CrudEmployeeWidget: React.FC<CrudEmployeeWidgetProps> = ({
  user,
  isEdit = false,
}) => {
  const router = useRouter();
  const [employee, setEmployee] = React.useState({
    registro: 123456,
    status: "ATIVO",
    nome: user ? user.name : "",
    email: user ? user.email : "",
    RG: user ? user.RG : "",
    CPF: user ? user.CPF : "",
    nascimento: user ? user.birthDate : "",
    admissao: user ? user.admition : "",
    cargo: user ? user.role : "",
    escolaridade: user ? user.schooling : "",
    sexo: user ? user.gender : "",
    endereco: user ? user.address : "",
    vinculo: user ? user.bond : "",
    //foto: "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
    if (hasSuccsess) {
      router.push("/employees");
    }
  };

  const handleCreateEmployee = async () => {
    hasSuccsess = await createEmployee(employee);
    setOpenAlertDialog(true);
  };

  const handleEditEmployee = async () => {
    hasSuccsess = await editEmployee(user!.id, employee);
    setOpenAlertDialog(true);
  };

  return (
    <>
      <Box
        className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-14 rounded-b-xl gap-x-6 gap-y-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        bgcolor={"background.paper"}
      >
        <TextField
          label="Nome"
          variant="outlined"
          value={employee.nome}
          required
          onChange={(e) => {
            setEmployee({ ...employee, nome: e.target.value });
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          value={employee.email}
          required
          onChange={(e) => {
            setEmployee({ ...employee, email: e.target.value });
          }}
        />

        <FormControl fullWidth>
          <InputLabel required id="select-role-label">
            Cargo
          </InputLabel>
          <Select
            fullWidth
            labelId="select-role-label"
            id="select-role"
            value={employee.cargo}
            label="Cargo"
            onChange={(e) => {
              setEmployee({ ...employee, cargo: e.target.value });
            }}
          >
            <MenuItem value={"DIRECAO"}>Direção</MenuItem>
            <MenuItem value={"COORDENACAO"}>Coordenação</MenuItem>
            <MenuItem value={"SECRETARIA"}>Secretaria</MenuItem>
            <MenuItem value={"PROFESSOR"}>Professor</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel required id="select-schooling-label">
            Escolaridade
          </InputLabel>
          <Select
            fullWidth
            labelId="select-schooling-label"
            id="select-schooling"
            value={employee.escolaridade}
            label="Escolaridade"
            onChange={(e) => {
              setEmployee({ ...employee, escolaridade: e.target.value });
            }}
          >
            <MenuItem value={"GRADUACAO"}>Graduação</MenuItem>
            <MenuItem value={"POSGRADUACAO"}>Pós-Graduação</MenuItem>
            <MenuItem value={"MESTRADO"}>Mestrado</MenuItem>
            <MenuItem value={"DOUTORADO"}>Doutorado</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="RG"
          variant="outlined"
          value={employee.RG}
          InputProps={{
            inputComponent: InputMask as any,
            inputProps: {
              mask: "**-99.999.999",
              maskChar: null,
            },
          }}
          onChange={(e) => {
            setEmployee({ ...employee, RG: e.target.value });
          }}
        />

        <TextField
          label="CPF"
          variant="outlined"
          value={employee.CPF}
          InputProps={{
            inputComponent: InputMask as any,
            inputProps: {
              mask: "999.999.999-99",
              maskChar: null,
            },
          }}
          onChange={(e) => {
            setEmployee({ ...employee, CPF: e.target.value });
          }}
        />

        <FormControl required>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptLocale}
          >
            <DatePicker
              label="Data de Nascimento*"
              value={user ? new Date(employee.nascimento) : null}
              onChange={(value) => {
                const stringDate = value?.toString();
                setEmployee({
                  ...employee,
                  nascimento: new Date(stringDate!).toISOString(),
                });
              }}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl required>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptLocale}
          >
            <DatePicker
              label="Data de Admissão*"
              value={user ? new Date(employee.admissao) : null}
              onChange={(value) => {
                const stringDate = value?.toString();
                setEmployee({
                  ...employee,
                  admissao: new Date(stringDate!).toISOString(),
                });
              }}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-gender-label">Sexo</InputLabel>
          <Select
            fullWidth
            labelId="select-gender-label"
            id="select-gender"
            value={employee.sexo}
            label="Sexo"
            onChange={(e) => {
              setEmployee({ ...employee, sexo: e.target.value });
            }}
          >
            <MenuItem value={"FEMININO"}>Feminino</MenuItem>
            <MenuItem value={"MASCULINO"}>Masculino</MenuItem>
            <MenuItem value={"NAODEFINIDO"}>N/A</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Endereço"
          variant="outlined"
          value={employee.endereco}
          required
          onChange={(e) => {
            setEmployee({ ...employee, endereco: e.target.value });
          }}
        />

        <FormControl fullWidth>
          <InputLabel required id="select-bond-label">
            Vínculo
          </InputLabel>
          <Select
            fullWidth
            labelId="select-bond-label"
            id="select-bond"
            value={employee.vinculo}
            label="Vínculo"
            onChange={(e) => {
              setEmployee({ ...employee, vinculo: e.target.value });
            }}
          >
            <MenuItem value={"CONTRATADO"}>Contratado</MenuItem>
            <MenuItem value={"CONCURSADO"}>Concursado</MenuItem>
            <MenuItem value={"SUBSTITUTO"}>Substituto</MenuItem>
          </Select>
        </FormControl>

        <Dropzone
          onDrop={
            (acceptedFiles) => console.log(acceptedFiles) //setEmployee({ ...employee, foto: "acceptedFiles" })
          }
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <TextField
                  fullWidth
                  label="Foto"
                  variant="outlined"
                  required
                  helperText="Os formatos permitidos são: png, jpeg e gif"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircleOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </section>
          )}
        </Dropzone>

        <Button
          className="md:col-span-2"
          variant="contained"
          color="primary"
          size="large"
          onClick={isEdit ? handleEditEmployee : handleCreateEmployee}
        >
          {isEdit ? "Editar Funcionário" : "Criar Funcionário"}
        </Button>
      </Box>
      <AlertDialog
        open={openAlertDialog}
        title={
          hasSuccsess
            ? isEdit
              ? "Funcionário editado com sucesso!"
              : "Funcionário criado com sucesso!"
            : "Algo deu Errado..."
        }
        text={
          hasSuccsess
            ? isEdit
              ? `Edição do funcionário ${employee.nome} concluída.`
              : `Cadastro do funcionário ${employee.nome} concluído.`
            : "Erro ao fazer o Cadastro. Tente Novamente."
        }
        onClose={handleDismissDialog}
      />
    </>
  );
};

export default CrudEmployeeWidget;
