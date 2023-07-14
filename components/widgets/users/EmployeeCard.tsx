import * as React from "react";
import { Box, Typography } from "@mui/material";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import IconText from "@/components/IconText";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Image from "next/image";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuDropDown from "@/components/MenuDropDown";
import { deleteStudent } from "@/services/students.service";
import { deleteEmployee } from "@/services/employees.service";
import { EmployeeModel } from "@/models/employee.model";

interface EmployeeCardProps {
  user: EmployeeModel;
  key: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ user }) => {
  return (
    <Box
      className="flex flex-col gap-y-3 rounded-3xl p-6 max-w-xl"
      bgcolor="common.black"
    >
      <div className="relative mx-auto pr-24 pb-8">
        <Image
          className="w-24 h-auto absolute -top-14"
          src={`data:image/png;base64,${user.file}`}
          alt="Imagem de perfil do usuário"
          width={300}
          height={200}
        />
      </div>
      <div className="relative z-10">
        <div className="absolute -top-14 -right-2">
          <MenuDropDown
            icon={MoreVertIcon}
            isStudent={user.role === "Aluno" ? true : false}
            userName={user.name}
            userId={user.id}
            handleDelete={
              user.role === "Aluno" ? deleteStudent : deleteEmployee
            }
          />
        </div>
      </div>
      <Typography className="mx-auto" variant="h3">
        {user.name}
      </Typography>
      <IconText text={user.email} Icon={MarkunreadOutlinedIcon}></IconText>
      <IconText text={user.CPF} Icon={AssignmentIndIcon}></IconText>
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

export default EmployeeCard;
