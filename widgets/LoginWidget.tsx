import {
  Box,
  Typography,
  Divider,
  TextField,
  Switch,
  Button,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import * as React from "react";

const LoginWidget: React.FC = () => {
  return (
    <Box
      className="flex flex-col p-4 space-y-4"
    >
      <TextField label="Email" variant="outlined" required size="small" />
      <TextField
        label="Senha"
        variant="outlined"
        required
        size="small"
        type="password"
      />
      <div className="flex flex-row justify-center">
        <Switch defaultChecked size="small" className="mr-4" />
        <Typography> Manter-me conectado </Typography>
      </div>
      <Button variant="contained" color="primary">
        Login
      </Button>
      <div className="flex flex-row justify-center">
        <Lock color="primary" className="mr-4" />
        <Typography> Esqueceu sua senha? </Typography>
      </div>
    </Box>
  );
};

export default LoginWidget;
