import AlertDialog from "@/components/AlertDialog";
import { signUpUser } from "@/services/signup.service";
import { Box, TextField, Button } from "@mui/material";
import validator from "validator";
import * as React from "react";
import { useRouter } from "next/router";

let hasSuccsess = false;

const SignupWidget: React.FC = () => {
  const [newUser, setNewUser] = React.useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const router = useRouter();

  const validatePassword = (): boolean => {
    if (newUser.password === newUser.passwordConfirmation) {
      setInvalidPassword(false);
      return true;
    } else {
      setInvalidPassword(true);
      return false;
    }
  };

  const validateEmail = (): boolean => {
    if (validator.isEmail(newUser.email)) {
      setInvalidEmail(false);
      return true;
    } else {
      setInvalidEmail(true);
      return false;
    }
  };

  const handleSignup = async () => {
    if (validatePassword() && validateEmail()) {
      hasSuccsess = await signUpUser(newUser);
      setOpenAlertDialog(true);
    }
  };

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
    if (hasSuccsess) {
      router.reload();
    }
  };

  return (
    <Box className="flex flex-col px-4 pt-4 pb-6 space-y-4">
      <TextField
        error={invalidEmail}
        helperText={invalidEmail ? "Formato de e-mail inválido" : ""}
        label="Email"
        variant="outlined"
        required
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSignup();
          }
        }}
      />
      <TextField
        error={invalidPassword}
        helperText={invalidPassword ? "As senhas não correspondem." : ""}
        label="Senha"
        variant="outlined"
        required
        type="password"
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSignup();
          }
        }}
      />
      <TextField
        error={invalidPassword}
        helperText={invalidPassword ? "As senhas não correspondem." : ""}
        label="Confirme sua Senha"
        variant="outlined"
        required
        type="password"
        onChange={(e) =>
          setNewUser({ ...newUser, passwordConfirmation: e.target.value })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSignup();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSignup}
      >
        Sigin
      </Button>
      <AlertDialog
        open={openAlertDialog}
        title={hasSuccsess ? "Conta criado com sucesso!" : "Algo deu Errado..."}
        text={
          hasSuccsess
            ? "Realize o Login para acessar o Portal."
            : "Erro ao fazer o Cadastro. Tente Novamente."
        }
        onClose={handleDismissDialog}
      />
    </Box>
  );
};

export default SignupWidget;
