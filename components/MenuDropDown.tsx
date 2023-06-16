import { Menu, MenuItem, SvgIconTypeMap } from "@mui/material";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ActionButton from "./ActionButton";
import ConfirmDialog from "./ConfirmDialog";

interface MenuDropDownProps {
  isLarge?: boolean;
  isStudent: boolean;
  userName: string;
  color?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const MenuDropDown: React.FC<MenuDropDownProps> = ({
  isLarge,
  isStudent,
  userName,
  color,
  icon,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDropDownOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  const handleShowDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleEditUser = () => {
    
  };

  const handleDeleteUser = (isConfirmed:boolean) => {
    console.log( isConfirmed ? 'Pode excluir' : 'Nao pode excluir' );
    handleShowDialog();
  };

  return (
    <div>
      <ActionButton
        Icon={icon}
        handleClick={handleDropDownOpen}
        isLarge={isLarge}
        color={color}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropDown}
        onClose={handleDropDownClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="max-w-[8rem]"
      >
        <MenuItem onClick={() => {}}>Editar</MenuItem>

        <MenuItem onClick={handleShowDialog}>Excluir</MenuItem>
        <ConfirmDialog
          open={openDialog}
          isStudent={isStudent}
          userName={userName}
          onClose={handleDeleteUser}
        />
      </Menu>
    </div>
  );
};

export default MenuDropDown;
