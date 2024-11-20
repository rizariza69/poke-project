import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "@/../public/bg-logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingY: "1rem",
        alignItems: "center",
        width: "100%",
        position: "sticky !important",
        zIndex: 100,
        top: 0,
        bgcolor: "#fff",
        paddingX: "10rem",
      }}
    >
      <Image alt="pokemon-logo" src={Logo} />
      <Button
        variant="text"
        sx={{
          marginRight: "2rem",
          marginLeft: "2rem",
          textTransform: "capitalize",
        }}
        size="medium"
        color="inherit"
      >
        Menu
      </Button>
      <Button
        variant="text"
        sx={{ marginRight: "2rem", textTransform: "capitalize" }}
        size="medium"
        color="inherit"
      >
        Pokemon Type
      </Button>
    </Box>
  );
};

export default Header;
