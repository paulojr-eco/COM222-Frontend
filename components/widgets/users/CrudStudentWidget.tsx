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
import { createStudent, editStudent } from "@/services/students.service";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";
import { StudentModel } from "@/models/student.model";
import base64ToPngFile from "@/utility/base64ToFile";

interface CrudStudentWidgetProps {
  user?: StudentModel;
  isEdit?: boolean;
}

let hasSuccsess = false;

const CrudStudentWidget: React.FC<CrudStudentWidgetProps> = (
  { user, isEdit = false },
  ref
) => {
  const router = useRouter();

  const [student, setStudent] = React.useState({
    matricula: user ? user.registration : undefined,
    status: "ATIVO",
    nome: user ? user.name : "",
    email: user ? user.email : "",
    emailResponsavel: user ? user.guardianEmail : "",
    serie: user ? user.grade : "",
    RG: user ? user.rg : "",
    CPF: user ? user.cpf : "",
    nascimento: user ? user.birthDate : "",
    sexo: user ? user.gender : "",
    endereco: user ? user.address : "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const [avatar, setAvatar] = React.useState<File | undefined>(
    user?.file !== undefined ? base64ToPngFile(user.file, "Avatar") : undefined
  );

  const inputRef = React.useRef();

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
    if (hasSuccsess) {
      router.push("/students");
    }
  };

  const handleCreateStudent = async () => {
    hasSuccsess = await createStudent(student, avatar!);
    setOpenAlertDialog(true);
  };

  const handleEditStudent = async () => {
    hasSuccsess = await editStudent(user!.id, student, avatar!);
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
          id="name-input"
          variant="outlined"
          value={student.nome}
          required
          onChange={(e) => {
            setStudent({ ...student, nome: e.target.value });
          }}
        />

        <TextField
          label="Email"
          id="email-input"
          variant="outlined"
          value={student.email}
          required
          onChange={(e) => {
            setStudent({ ...student, email: e.target.value });
          }}
        />

        <TextField
          label="Matrícula"
          variant="outlined"
          disabled={isEdit ? true : false}
          InputProps={{
            inputComponent: InputMask as any,
            inputProps: {
              mask: "99999",
              maskChar: null,
            },
          }}
          required
          value={student.matricula?.toString()}
          onChange={(e) => {
            setStudent({ ...student, matricula: Number(e.target.value) });
          }}
        />

        <TextField
          label="Email do Responsável"
          variant="outlined"
          value={student.emailResponsavel}
          required
          onChange={(e) => {
            setStudent({ ...student, emailResponsavel: e.target.value });
          }}
        />

        <FormControl fullWidth>
          <InputLabel required id="select-grade-label">
            Série
          </InputLabel>
          <Select
            fullWidth
            labelId="select-grade-label"
            id="select-grade"
            value={student.serie}
            label="Série"
            onChange={(e) => {
              setStudent({ ...student, serie: e.target.value });
            }}
          >
            <MenuItem value={"Primeira"}>Primeira</MenuItem>
            <MenuItem value={"Segunda"}>Segunda</MenuItem>
            <MenuItem value={"Terceira"}>Terceira</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="RG"
          variant="outlined"
          value={student.RG}
          InputProps={{
            inputComponent: InputMask as any,
            inputProps: {
              mask: "**-99.999.999",
              maskChar: null,
            },
          }}
          onChange={(e) => {
            setStudent({ ...student, RG: e.target.value });
          }}
        />

        <TextField
          label="CPF"
          variant="outlined"
          value={student.CPF}
          InputProps={{
            inputComponent: InputMask as any,
            inputProps: {
              mask: "999.999.999-99",
              maskChar: null,
            },
          }}
          onChange={(e) => {
            setStudent({ ...student, CPF: e.target.value });
          }}
        />

        <FormControl required>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptLocale}
          >
            <DatePicker
              label="Data de Nascimento*"
              value={user ? new Date(student.nascimento) : null}
              onChange={(value) => {
                const stringDate = value?.toString();
                setStudent({
                  ...student,
                  nascimento: new Date(stringDate!).toISOString(),
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
            value={student.sexo}
            label="Sexo"
            onChange={(e) => {
              setStudent({ ...student, sexo: e.target.value });
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
          value={student.endereco}
          required
          onChange={(e) => {
            setStudent({ ...student, endereco: e.target.value });
          }}
        />

        <Dropzone
          onDrop={(acceptedFiles) => {
            const fileInput = acceptedFiles[0];
            setAvatar(fileInput);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div>
              <div {...getRootProps()}>
                <input type="file" ref={ref} {...getInputProps()} />
                <TextField
                  fullWidth
                  label={avatar === undefined ? "Foto" : ""}
                  inputRef={inputRef}
                  variant="outlined"
                  disabled
                  required
                  value={avatar !== undefined ? avatar.name : ""}
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
            </div>
          )}
        </Dropzone>

        <Button
          className="md:col-span-2"
          variant="contained"
          color="primary"
          size="large"
          onClick={isEdit ? handleEditStudent : handleCreateStudent}
        >
          {isEdit ? "Editar Aluno" : "Criar Aluno"}
        </Button>
      </Box>
      <AlertDialog
        open={openAlertDialog}
        title={
          hasSuccsess
            ? isEdit
              ? "Aluno editado com sucesso!"
              : "Aluno criado com sucesso!"
            : "Algo deu Errado..."
        }
        text={
          hasSuccsess
            ? isEdit
              ? `Edição do aluno ${student.nome} concluída.`
              : `Cadastro do aluno ${student.nome} concluído.`
            : "Erro ao fazer o Cadastro. Tente Novamente."
        }
        onClose={handleDismissDialog}
      />
    </>
  );
};

export default CrudStudentWidget;
