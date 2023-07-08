import { Box, Typography } from "@mui/material";
import Image from "next/image";
import emailSended from "../../../assets/images/email-send.png";
import * as React from "react";

const ConfirmResetEmail: React.FC = () => {
  return (
    <Box
      className="flex flex-col gap-y-6 rounded-b-xl p-12 pb-8"
      bgcolor={"background.paper"}
    >
      <Image
        className="w-[80%] h-auto mx-auto"
        src={emailSended}
        alt="Ilustração da confirmação de envio de email"
      />
      <Typography className="text-center">
        Verifique seu endereço de e-mail e siga o passo a passo
      </Typography>
    </Box>
  );
};

export default ConfirmResetEmail;
