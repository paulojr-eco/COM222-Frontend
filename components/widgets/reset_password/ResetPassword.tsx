import { Box, TextField, Button } from "@mui/material";
import * as React from "react";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";

let hasSuccsess = true;

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [resetPassword, setResetPassword] = React.useState({
    password: "",
    passwordConfirmation: "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleConfirmation = async () => {
    /*const hasSuccsess = await sendEmailRequest(email);
    if (!hasSuccsess) {
      setOpenAlertDialog(true);
    } else {
      router.push("/login");
    }*/
    setOpenAlertDialog(true);
    router.push("/login");
  };

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
  };

  return (
    <Box
      className="flex flex-col gap-y-6 rounded-b-xl p-12 pb-8"
      bgcolor={"background.paper"}
    >
      <TextField
        label="Senha"
        variant="outlined"
        required
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleConfirmation();
          }
        }}
        onChange={(e) =>
          setResetPassword({ ...resetPassword, password: e.target.value })
        }
      />
      <TextField
        label="Confirme sua Senha"
        variant="outlined"
        required
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleConfirmation();
          }
        }}
        onChange={(e) =>
          setResetPassword({
            ...resetPassword,
            passwordConfirmation: e.target.value,
          })
        }
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleConfirmation}
      >
        Redefinir Senha
      </Button>
      <AlertDialog
        open={openAlertDialog}
        title={
          hasSuccsess ? "Senha Redefinida com Sucesso" : "Algo deu errado..."
        }
        text={
          hasSuccsess
            ? "Sua senha foi alterada. Agora realize o Login para acessar o portal"
            : "Erro ao fazer a redefinição. Tente Novamente."
        }
        onClose={handleDismissDialog}
      />
    </Box>
  );
};

export default ResetPassword;
