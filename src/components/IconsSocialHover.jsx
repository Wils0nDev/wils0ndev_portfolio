import React from "react";
import { Box, Link } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export const IconsSocialHover = ({ style }) => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }} className={style.social}>
      <Link
        href="https://github.com/Wils0nDev"
        rel="noopener noreferrer"
        target="_blank"
        className={style.github}
      >
        <GitHub className={style.icon} />
      </Link>
      <Link
        href="https://www.instagram.com/ewilsonvasquezc/"
        rel="noopener noreferrer"
        target="_blank"
        className={style.instagram}
      >
        <Instagram className={style.icon} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/edgar-wilson-vasquez-coronado/"
        rel="noopener noreferrer"
        target="_blank"
        className={style.linkedin}
      >
        <LinkedIn className={style.icon} />
      </Link>
    </Box>
  );
};
