import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { Button, DialogActions } from "@mui/material";

interface ConfirmDialogProps {
  open: boolean;
  isStudent: boolean;
  userName: string;
  onClose: (isConfirmed: boolean) => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  isStudent,
  userName,
  onClose
}) => {
  const handleClose = (isConfirmed: boolean) => {
    onClose(isConfirmed);
  };

  return (
    <Dialog open={open} onClose={() => handleClose(false)}>
      <DialogTitle className="text-center">
        Deseja Excluir {isStudent ? "Aluno(a)" : "Funcionário(a)"} {userName}?{" "}
      </DialogTitle>
      <div className="flex flex-row justify-center pb-5 gap-x-4">
      <Button color="error" variant="contained" onClick={() => handleClose(false)}>Cancelar</Button>
      <Button variant="contained" onClick={() => handleClose(true)} color="primary" autoFocus>
        Confirmar
      </Button>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
