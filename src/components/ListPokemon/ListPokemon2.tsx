"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardActionArea,
  Chip,
  Pagination,
} from "@mui/material";
import Image from "next/image";
import Pokemon from "../../../public/bg-pokemon.png";
import PokeModal from "@/components/PokemonModal/PokeModal";
import { useFetchData } from "@/hooks/useFetchData";

const ITEMS_PER_PAGE = 9;
const API_URL = "https://pokeapi.co/api/v2/pokemon";

export default function ListPokemon2() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const {
    data: pokemons,
    totalCount,
    loading,
    error,
  } = useFetchData(API_URL, ITEMS_PER_PAGE, offset);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (pokemonName: string) => {
    setSelectedPokemon(pokemonName);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const typeColors: Record<string, string> = {
    "Type 1": "red",
    "Type 2": "blue",
    "Type 3": "green",
    "Type 4": "yellow",
  };

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
            <Box sx={{ marginRight: "7rem" }}>
              <Typography variant="h3">All The Pokemon</Typography>
              <Typography variant="h3">{`data you'll ever`}</Typography>
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
            <Box sx={{ marginLeft: "6rem", display: "flex" }}>
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
            <Typography variant="body1">{totalCount} Pokemon</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 3,
                mt: 2,
              }}
            >
              {loading ? (
                <Typography>Loading...</Typography>
              ) : error ? (
                <Typography color="error">Error: {error}</Typography>
              ) : (
                pokemons.map((pokemon, index) => (
                  <CardActionArea
                    key={index}
                    onClick={() => handleOpenModal(pokemon.name)}
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
                        <Typography variant="h4" mb={".5rem"}>
                          {pokemon.name}
                        </Typography>
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
                            Pokemon Picture Placeholder
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "start" }}>
                          <Typography variant="caption" color="textSecondary">
                            {offset + index + 1 < 10 ? "#00" : "#0"}
                            {offset + index + 1}
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
                            {pokemon?.name}
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
                            {["Type 1", "Type 2", "Type 3", "Type 4"].map(
                              (type) => (
                                <Chip
                                  key={type}
                                  label={type}
                                  sx={{
                                    backgroundColor: typeColors[type] || "gray",
                                    color: "white",
                                  }}
                                />
                              )
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </CardActionArea>
                ))
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
              size="large"
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
            <Typography sx={{ marginLeft: "2rem" }} variant="h5">
              Total: {totalCount}
            </Typography>
          </Box>
        </Box>
      </Box>

      <PokeModal
        open={openModal}
        onClose={handleCloseModal}
        value={selectedPokemon}
      />
    </>
  );
}
