import { Box, Fab, SvgIconTypeMap } from "@mui/material";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ActionButtonProps {
  isLarge?: boolean;
  color?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  handleClick: Function;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  Icon,
  isLarge = false,
  color = "blue",
  handleClick,
}) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        size={isLarge ? "large" : "small"}
        className={
          color == "blue"
            ? "bg-gradient-to-br from-sky-600 to-violet-600"
            : "bg-gradient-to-br from-green-500 to-green-700"
        }
        aria-label="options"
        onClick={(e) => handleClick(e)}
      >
        <Icon sx={{ color: "white" }} />
      </Fab>
    </Box>
  );
};

export default ActionButton;
