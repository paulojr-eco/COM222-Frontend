import * as React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputAdornment,
} from "@mui/material";

import InputMask from "react-input-mask";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ptLocale from "date-fns/locale/pt-BR";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Dropzone from "react-dropzone";

const CreateStudentWidget: React.FC = () => {
  const [grade, setGrade] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };

  const [selectedBirthDate, setelectedBirthDate] = React.useState(null);

  return (
    <Box
      className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-14 rounded-b-xl gap-x-6 gap-y-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      bgcolor={"background.paper"}
    >
      <TextField label="Nome" variant="outlined" required />

      <TextField label="Email" variant="outlined" required />

      <TextField
        label="Telefone"
        variant="outlined"
        required
        InputProps={{
          inputComponent: InputMask as any,
          inputProps: {
            mask: "(99) 99999-9999",
            maskChar: null,
          },
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
          value={grade}
          label="Série"
          onChange={handleChange}
        >
          <MenuItem value={1}>Primeira</MenuItem>
          <MenuItem value={2}>Segunda</MenuItem>
          <MenuItem value={3}>Terceira</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="RG"
        variant="outlined"
        InputProps={{
          inputComponent: InputMask as any,
          inputProps: {
            mask: "**-99.999.999",
            maskChar: null,
          },
        }}
      />

      <TextField
        label="CPF"
        variant="outlined"
        InputProps={{
          inputComponent: InputMask as any,
          inputProps: {
            mask: "999.999.999-99",
            maskChar: null,
          },
        }}
      />

      <FormControl required>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={ptLocale}
        >
          <DatePicker label="Data de Nascimento*" />
        </LocalizationProvider>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-gender-label">Sexo</InputLabel>
        <Select
          fullWidth
          labelId="select-grgenderade-label"
          id="select-gender"
          value={grade}
          label="Sexo"
          onChange={handleChange}
        >
          <MenuItem value={"Feminino"}>Feminino</MenuItem>
          <MenuItem value={"Masculino"}>Masculino</MenuItem>
          <MenuItem value={"N/A"}>N/A</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Endereço" variant="outlined" required />

      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <TextField
                fullWidth
                label="Foto"
                disabled
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
      >
        Criar Aluno
      </Button>
    </Box>
  );
};

export default CreateStudentWidget;
