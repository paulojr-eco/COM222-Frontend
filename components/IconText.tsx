import * as React from "react";
import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IconTextProps {
  text: string;
  color?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const IconText: React.FC<IconTextProps> = ({ text, Icon, color }) => {
  return (
    <div className="flex flex-row gap-x-4">
      <Icon sx={{ color: color }} />
      <Typography noWrap>{text}</Typography>
    </div>
  );
};

export default IconText;
