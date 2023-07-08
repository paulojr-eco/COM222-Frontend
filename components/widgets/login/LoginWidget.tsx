import { Box, Typography, TextField, Switch, Button } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { loginUser } from "@/services/login.service";
import * as React from "react";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";

const LoginWidget: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleLogin = async () => {
    const hasSuccsess = await loginUser(user);
    if (!hasSuccsess) {
      setOpenAlertDialog(true);
    } else {
      router.push("/home");
    }
  };

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
  };

  return (
    <Box className="flex flex-col p-4 space-y-4">
      <TextField
        label="Email"
        variant="outlined"
        required
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <TextField
        label="Senha"
        variant="outlined"
        required
        type="password"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div className="flex flex-row justify-center">
        <Switch defaultChecked size="small" className="mr-4" />
        <Typography> Manter-me conectado </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleLogin}
      >
        Login
      </Button>
      <div className="flex flex-row justify-center">
        <Lock color="primary" className="mr-4" />
        <Typography> Esqueceu sua senha? </Typography>
      </div>
      <AlertDialog
        open={openAlertDialog}
        title={"Algo deu errado..."}
        text={"Erro ao fazer Login. Tente Novamente."}
        onClose={handleDismissDialog}
      />
    </Box>
  );
};

export default LoginWidget;
