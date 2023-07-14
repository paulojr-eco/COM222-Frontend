import { Box, TextField, Button } from "@mui/material";
import * as React from "react";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";

let hasSuccsess = true;

const RequestEmailPanel: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const handleConfirmation = async () => {
    /* TO DO
    const hasSuccsess = await sendEmailRequest(email);
    if (!hasSuccsess) {
      setOpenAlertDialog(true);
    } else {
      router.push("/reset-password/confirmation");
    }*/
    setOpenAlertDialog(true);
    router.push("/reset-password/confirmation");
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
        label="Email"
        variant="outlined"
        required
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleConfirmation();
          }
        }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleConfirmation}
      >
        Enviar E-mail
      </Button>
      <AlertDialog
        open={openAlertDialog}
        title={"Algo deu errado..."}
        text={"Erro ao fazer Login. Tente Novamente."}
        onClose={handleDismissDialog}
      />
    </Box>
  );
};

export default RequestEmailPanel;
