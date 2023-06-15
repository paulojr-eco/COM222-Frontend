import { Box, Fab, Menu, MenuItem, SvgIconTypeMap } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ActionButton from "./ActionButton";

interface MenuDropDownProps {
  isLarge?: boolean;
  color?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const MenuDropDown: React.FC<MenuDropDownProps> = ({
  isLarge,
  color,
  icon,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ActionButton
        Icon={icon}
        handleClick={handleClick}
        isLarge={isLarge}
        color={color}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="max-w-[8rem]"
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleClose}>Excluir</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDropDown;
