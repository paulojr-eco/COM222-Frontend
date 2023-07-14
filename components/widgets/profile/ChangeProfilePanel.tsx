import { Box, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import AlertDialog from "@/components/AlertDialog";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import { AvatarData } from "./AvatarData";
import Image, { StaticImageData } from "next/image";

const ChangeProfilePanel: React.FC = () => {
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
  const [currentAvatar, setCurrentAvatar] = React.useState(defaultAvatar);
  const [profile, setProfile] = React.useState({
    avatar: "",
    nome: "",
    email: "",
    oldPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleDismissDialog = () => {
    setOpenAlertDialog(false);
  };
  const handleChangeAvatar = (avatar: StaticImageData) => {
    setCurrentAvatar(avatar);
  };

  return (
    <Box
      bgcolor={"background.paper"}
      className="rounded-b-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <div className="flex flex-row px-14 py-8 place-content-evenly">
        <div className="flex flex-col place-content-start">
          <Typography> Avatar Atual: </Typography>
          <Image
            className="h-auto w-32 md:w-52"
            src={currentAvatar}
            alt="Avatar Atual"
          />
        </div>
        <div className="flex flex-col place-content-start gap-y-4">
          <Typography> Escolha o avatar desejado: </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
            {AvatarData.map((avatar) => (
              <Image
                key={avatar.key}
                className="h-auto w-14 md:w-24"
                src={avatar.icon}
                alt="Avatar Atual"
                onClick={() => {
                  handleChangeAvatar(avatar.icon);
                }}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:pb-12 md:px-12  gap-x-6 gap-y-6 ">
        <TextField
          label="Nome"
          variant="outlined"
          required
          onKeyDown={(e) => {
            if (e.key === "Enter") {
            }
          }}
          onChange={(e) => setProfile({ ...profile, nome: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          onKeyDown={(e) => {
            if (e.key === "Enter") {
            }
          }}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-y-6 gap-x-6">
          <TextField
            label="Senha Antiga"
            variant="outlined"
            required
            type="password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
            onChange={(e) =>
              setProfile({ ...profile, oldPassword: e.target.value })
            }
          />
          <TextField
            label="Nova Senha"
            variant="outlined"
            required
            type="password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <TextField
            className="md:col-span-0.3"
            label="Confirmar Nova Senha"
            variant="outlined"
            required
            type="password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
            onChange={(e) =>
              setProfile({ ...profile, passwordConfirmation: e.target.value })
            }
          />
        </div>
        <Button
          className="md:col-span-2"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {}}
        >
          Atualizar Perfil
        </Button>
      </div>

      <AlertDialog
        open={openAlertDialog}
        title={"Algo deu errado..."}
        text={"Erro ao editar Perfil. Tente Novamente."}
        onClose={handleDismissDialog}
      />
    </Box>
  );
};

export default ChangeProfilePanel;
