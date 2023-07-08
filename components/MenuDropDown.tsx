import { Menu, MenuItem, SvgIconTypeMap } from "@mui/material";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ActionButton from "./ActionButton";
import ConfirmDialog from "./ConfirmDialog";
import { UUID } from "crypto";
import { useRouter } from "next/router";

interface MenuDropDownProps {
  isLarge?: boolean;
  isStudent: boolean;
  userId: UUID;
  userName: string;
  color?: string;
  handleDelete: (userId: UUID) => Promise<boolean>;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const MenuDropDown: React.FC<MenuDropDownProps> = ({
  isLarge,
  isStudent,
  userName,
  color,
  userId,
  handleDelete,
  icon,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);

  const [openDialog, setOpenDialog] = React.useState(false);
  const router = useRouter();

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
    isStudent ? router.push(`/students/${userId}`) : router.push(`/employees/${userId}`);
  };

  const handleDeleteUser = (isConfirmed: boolean) => {
    if (isConfirmed) {
      handleDelete(userId);
      isStudent ? router.push('/students') : router.push('/employees');
    }
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
        <MenuItem onClick={handleEditUser}>Editar</MenuItem>

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
