import * as React from "react";
import { Box, Typography } from "@mui/material";
import { StudentModel } from "@/models/student.model";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import IconText from "@/components/IconText";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuDropDown from "@/components/MenuDropDown";
import { deleteStudent } from "@/services/students.service";
import { deleteEmployee } from "@/services/employees.service";

interface StudentCardProps {
  user: StudentModel;
  key: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ user }) => {
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
      <div className="relative">
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
      <IconText text={user.cpf} Icon={AssignmentIndIcon}></IconText>
      <IconText
        text={user.registration.toString()}
        Icon={ReceiptIcon}
      ></IconText>
      <IconText text={user.grade} Icon={SchoolIcon}></IconText>
      <IconText
        text={user.status === "ATIVO" ? "Ativo" : "Inativo"}
        Icon={Brightness1Icon}
        color={user.status === "ATIVO" ? "#34C38F" : "#F6C344"}
      ></IconText>
    </Box>
  );
};

export default StudentCard;
