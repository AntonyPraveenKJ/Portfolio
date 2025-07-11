import React from "react";
import { Box, IconButton } from "@mui/material";

const IconsRow = ({ icon, link, color }) => {
  return (
    <Box display="flex" justifyContent="start" gap={1} mt={2}>
      <IconButton
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: color,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      >
        {icon}
      </IconButton>
    </Box>
  );
};

export default IconsRow;
