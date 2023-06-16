import * as React from "react";
import { Box, Typography } from "@mui/material";
import { StudentModel } from "@/models/student.model";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import IconText from "@/components/IconText";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Image from "next/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuDropDown from "@/components/MenuDropDown";

interface UserCardProps {
  user: StudentModel;
  key: string;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Box
      className="flex flex-col gap-y-3 rounded-3xl p-6 max-w-xl"
      bgcolor="common.black"
    >
      <div className="relative mx-auto pr-24 pb-8">
        <Image
          className="w-24 h-auto absolute -top-14"
          src={defaultAvatar}
          alt="Imagem de perfil do usuário"
        />
      </div>
      <div className="relative">
        <div className="absolute -top-14 -right-2">
          <MenuDropDown
            icon={MoreVertIcon}
            isStudent={user.role === "Aluno" ? true : false}
            userName={user.name}
          />
        </div>
      </div>
      <Typography className="mx-auto" variant="h3">
        {user.name}
      </Typography>
      <IconText text={user.email} Icon={MarkunreadOutlinedIcon}></IconText>
      <IconText text={user.phone} Icon={CallOutlinedIcon}></IconText>
      <IconText
        text={user.registration.toString()}
        Icon={ReceiptIcon}
      ></IconText>
      <IconText text={`${user.role}(a)`} Icon={WorkOutlineIcon}></IconText>
      <IconText
        text={user.status === "ATIVO" ? "Ativo" : "Inativo"}
        Icon={Brightness1Icon}
        color={user.status === "ATIVO" ? "#34C38F" : "#F6C344"}
      ></IconText>
    </Box>
  );
};

export default UserCard;
