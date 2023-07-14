import { Box, Typography, TextField, Switch, Button } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { loginUser } from "@/services/login.service";
import * as React from "react";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";
import Link from "next/link";
import addEventDestroyCookies from "@/utility/destroyCookiesEvent";

const LoginWidget: React.FC = () => {
  const router = useRouter();
  const [keepSigned, setKeepSigned] = React.useState(true);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleLogin = async () => {
    if (!keepSigned) {
      addEventDestroyCookies();
    }
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
        id="email-input"
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
        id="password-input"
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
        <Switch
          value={keepSigned}
          defaultChecked
          id="keep-conect-toggle"
          size="small"
          className="mr-4"
          onChange={() => {
            setKeepSigned(!keepSigned);
          }}
        />
        <Typography> Manter-me conectado </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        id="login-btn"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Link
        href="/reset-password"
        className="w-[100%]"
        id="forget-password-link"
      >
        <div className="flex flex-row justify-center text-white">
          <Lock color="primary" className="mr-4" />
          <Typography> Esqueceu sua senha? </Typography>
        </div>
      </Link>
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
