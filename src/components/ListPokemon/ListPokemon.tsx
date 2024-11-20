"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Pokemon from "../../../public/bg-pokemon.png";
import {
  Card,
  Container,
  Chip,
  CardActionArea,
  Pagination,
} from "@mui/material";
import PokeModal from "@/components/PokemonModal/PokeModal";
import axios from "axios";

export default function ListPokemon() {
  const [openModal, setOpenModal] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const ITEMS_PER_PAGE = 9;
  const [totalData, setTotalData] = useState(0);
  const [offset, setOffset] = useState(0);
  const [select, setSelect] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      )
      .then((response) => {
        setPokemons(response.data.results);
        setTotalData(response.data.count);
        setTotalPages(Math.ceil(response.data.count / ITEMS_PER_PAGE));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    setOffset((page - 1) * ITEMS_PER_PAGE);
  };

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const samplePokemon = {
    name: "Charizard",
    weight: 905,
    height: 17,
    abilities: ["Blaze", "Solar Power (hidden)"],
    types: ["Fire", "Flying", "grass"],
    logo: "",
  };
  const types = ["Type 1", "Type 2", "Type 3", "Type 4"];

  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: -1 }}>
        <Container fixed>
          <Box
            height="87vh"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginRight: "7rem",
              }}
            >
              <Typography variant="h3">All The Pokemon</Typography>
              <Typography variant="h3">data you'll ever</Typography>
              <Typography variant="h3">need in one place!</Typography>
              <Typography variant="body2" color="text.secondary">
                need in one place!
              </Typography>

              <a href="#pokedex">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ textTransform: "capitalize", marginTop: "1rem" }}
                >
                  <Typography
                    variant="caption"
                    color="#fff"
                    fontWeight={"bold"}
                  >
                    Check Pokedex
                  </Typography>
                </Button>
              </a>
            </Box>
            <Box
              sx={{
                marginLeft: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image alt="bg-pokemon" src={Pokemon} height={475} />
            </Box>
          </Box>
        </Container>
        <Box id="pokedex" sx={{ background: "#FFE31A", padding: "3rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3">PokeDex</Typography>
            <Typography variant="body1">All Generation Totaling</Typography>
            <Typography variant="body1">9999 Pokemon</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 3,
                mt: 2,
              }}
            >
              {loading && pokemons?.length === 0 ? (
                <Typography>Loading...</Typography>
              ) : (
                pokemons?.map((value: any, index: number) => {
                  return (
                    <CardActionArea
                      key={index}
                      onClick={() => {
                        setSelect(value.name);
                        handleOpenModal();
                      }}
                    >
                      <Card
                        sx={{
                          width: 325,
                          height: 500,
                          borderRadius: 4,
                          boxShadow: 3,
                          textAlign: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            p: "1rem",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                            }}
                          >
                            <Typography variant="h4" mb={".5rem"}>
                              {value.name}
                            </Typography>
                          </Box>
                          {/* {
                        value?.image ? (
                          <Box
                            sx={{
                              height: 250,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1px solid gray",
                              borderRadius: 1,
                            }}
                          >
                            <Image alt="bg-pokemon" src={value?.image} />
                          </Box>
                        ) : ( */}
                          <Box
                            sx={{
                              height: 250,
                              backgroundColor: "#e0e0e0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography variant="body2" color="textSecondary">
                              Pokemon Picture <br /> Placeholder
                            </Typography>
                          </Box>
                          {/* // )
                        // } */}
                          <Box
                            sx={{ display: "flex", justifyContent: "start" }}
                          >
                            <Typography variant="caption" color="textSecondary">
                              {`#00${index}`}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{ fontWeight: "bold" }}
                            >
                              {value?.name}
                            </Typography>
                            <Box
                              sx={{
                                width: "9rem",
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 100%)",
                                gap: 1,
                                mt: 1,
                              }}
                            >
                              {types?.map((type: any) => {
                                let typeColor;
                                switch (type) {
                                  case "Type 1":
                                    typeColor = "red";
                                    break;
                                  case "Type 2":
                                    typeColor = "blue";
                                    break;
                                  case "Type 3":
                                    typeColor = "green";
                                    break;
                                  case "Type 4":
                                    typeColor = "yellow";
                                    break;
                                  default:
                                    typeColor = "gray";
                                }
                                return (
                                  <Chip
                                    label={type}
                                    style={{ width: "100%" }}
                                    sx={{
                                      backgroundColor: typeColor,
                                      color: "white",
                                      width: "100%",
                                    }}
                                  />
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    </CardActionArea>
                  );
                })
              )}
            </Box>
          </Box>
          <Box
            marginTop="2rem"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              variant="outlined"
              shape="rounded"
              sx={{ display: "flex", justifyContent: "center", color: "#fff" }}
              size="large"
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              // classes={{ ul: classes.ul }}
            />

            <Typography sx={{ color: "#fff", marginLeft: "2rem" }} variant="h5">
              Total:{totalData}
            </Typography>
          </Box>
        </Box>
      </Box>

      <PokeModal open={openModal} onClose={handleCloseModal} value={select} />
    </>
  );
}
