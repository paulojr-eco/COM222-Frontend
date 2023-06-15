import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

interface HeaderProps {
  title: string;
  description: string;
  imagePath: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ title, description, imagePath }) => {
  return (
    <Box className="px-8 rounded-t-lg md:max-h-[20vh]" bgcolor="secondary.main">
      <div className="flex flex-row items-end place-content-between">
        <div className="my-auto py-6 md:py-0">
          <Typography variant="h1"> {title} </Typography>
          <Typography> {description} </Typography>
        </div>
        <Image
          className="w-auto md:w-[26%] max-h-20 md:h-auto md:max-h-fit md:pt-4"
          src={imagePath}
          alt="Usuário à frente de um notebook"
        />
      </div>
    </Box>
  );
};

export default Header;
