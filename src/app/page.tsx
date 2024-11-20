"use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// import styled from "@emotion/styled";
// import Image from "next/image";
// import Logo from "../../public/bg-logo.png";
// import Pokemon from "../../public/bg-pokemon.png";
// import {
//   Card,
//   Container,
//   Chip,
//   CardActionArea,
//   Pagination,
//   Modal,
// } from "@mui/material";
// import Header from "@/components/layout/Header";
// import PokeModal from "@/components/PokemonModal/PokeModal";
import ListPokeomon from "@/components/ListPokemon/ListPokemon";

export default function Home() {
  // const [openModal, setOpenModal] = React.useState(false);
  // const cardData = [
  //   {
  //     id: 1,
  //     name: "Pikachu",
  //     image: Logo,
  //     type: ["fire", "water", "grass", "bug"],
  //   },
  //   {
  //     id: 2,
  //     name: "Pikachu",
  //     image: Logo,
  //     type: ["fire", "water"],
  //   },
  //   {
  //     id: 3,
  //     name: "Pikachu",
  //     image: "",
  //     type: ["fire"],
  //   },
  //   {
  //     id: 4,
  //     name: "Pikachu",
  //     image: Logo,
  //     type: ["fire", "water", "bug"],
  //   },
  // ];

  // const handleOpenModal = () => setOpenModal(true);
  // const handleCloseModal = () => setOpenModal(false);

  // const samplePokemon = {
  //   name: "Charizard",
  //   weight: 905,
  //   height: 17,
  //   abilities: ["Blaze", "Solar Power (hidden)"],
  //   types: ["Fire", "Flying", "grass"],
  //   logo: "",
  // };

  return <ListPokeomon />;
}
