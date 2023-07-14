import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import ActionButton from "./ActionButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

interface CustomPageProps {
  title: string;
}

const CustomHomePage: React.FC<CustomPageProps> = ({ title }) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [customTitle, setCustomTitle] = React.useState("");
  const [customLink, setCustomLink] = React.useState("");
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const theme = useTheme();

  return (
    <div className="flex flex-col justify-center md:h-[90vh] w-[80vw]">
      <Box className="md:max-w-xs p-3 rounded-t-xl" bgcolor="primary.main">
        <Typography className="text-center" variant="h2">
          {title}
        </Typography>
      </Box>
      <Box
        className="flex flex-col rounded-b-2xl md:rounded-tr-2xl p-6 md:p-14 min-h-screen md:min-h-full items-center overflow-y-scroll shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}
        bgcolor="background.paper"
      >
        <iframe
          className="w-[100%] h-[90vh] md:h-[100%]"
          src="https://calendar.google.com/calendar/embed?src=trabalho.com222%40gmail.com&ctz=America%2FSao_Paulo"
        ></iframe>
      </Box>
      <div className="fixed bottom-2 right-2 md:bottom-[4vh] md:right-[2vw]">
        <ActionButton
          id="home-action-btn"
          Icon={MoreVertIcon}
          isLarge={true}
          color="blue"
          handleClick={handleClickOpen}
        />
      </div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <DialogTitle className="mx-auto">Área Customizada</DialogTitle>
        <DialogContent>
          <DialogContentText className="px-4">
            Customize sua página inicial colocando conteúdos de sua escolha:
          </DialogContentText>
          <div className="flex flex-col pt-4 px-4 gap-y-4">
            <TextField
              label="Título"
              variant="outlined"
              required
              id="title-input"
              onKeyDown={(e) => {}}
              onChange={(e) => setCustomTitle(e.target.value)}
            />
            <TextField
              label="Link"
              variant="outlined"
              id="link-input"
              required
              onKeyDown={(e) => {}}
              onChange={(e) => setCustomLink(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex flex-row pb-4 gap-x-4 mx-auto">
            <Button
              color="error"
              variant="contained"
              id="cancel-btn"
              onClick={() => handleClose()}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClose()}
              color="primary"
              id="confirm-btn"
              autoFocus
            >
              Confirmar
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomHomePage;
