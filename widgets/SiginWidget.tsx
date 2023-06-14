import {
  Box,
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";

const SiginWidget: React.FC = () => {
  return (
    <Box className="flex flex-col p-4 space-y-4">
      <TextField
        label="Nome da Escola"
        variant="outlined"
        required
        size="small"
      />
      <TextField label="Email" variant="outlined" required size="small" />

      <TextField
        label="Senha"
        variant="outlined"
        required
        size="small"
        type="password"
      />
      <TextField
        label="Confirme sua Senha"
        variant="outlined"
        required
        size="small"
        type="password"
      />
      <Button variant="contained" color="primary">
        Sigin
      </Button>
    </Box>
  );
};

export default SiginWidget;
