// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemText from "@mui/material/ListItemText";
// // import Skeleton from "@mui/material/Skeleton";

// // export default function PokemonList({ onSelectPokemon }) {
// //   const [pokemons, setPokemons] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get("https://pokeapi.co/api/v2/pokemon?limit=10") // Fetch first 10 Pokémon
// //       .then((response) => {
// //         setPokemons(response.data.results);
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   }, []);

// //   return (
// //     <List>
// //       {loading
// //         ? Array.from(new Array(10)).map((_, index) => (
// //             <ListItem key={index} disablePadding>
// //               <ListItemButton>
// //                 <Skeleton variant="text" width="100%" height={40} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))
// //         : pokemons.map((pokemon, index) => (
// //             <ListItem key={index} disablePadding>
// //               <ListItemButton onClick={() => onSelectPokemon(pokemon)}>
// //                 <ListItemText primary={pokemon.name} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //     </List>
// //   );
// // }

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemText from "@mui/material/ListItemText";
// // import Skeleton from "@mui/material/Skeleton";
// // import Pagination from "@mui/material/Pagination";

// // interface Pokemon {
// //   name: string;
// //   url: string;
// // }

// // interface PokemonListProps {
// //   onSelectPokemon: (pokemon: Pokemon) => void;
// // }

// // export default function PokemonList({ onSelectPokemon }: PokemonListProps) {
// //   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [currentPage, setCurrentPage] = useState<number>(1);
// //   const [totalPages, setTotalPages] = useState<number>(1);

// //   const ITEMS_PER_PAGE = 9;

// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get(https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE})
// //       .then((response) => {
// //         setPokemons(response.data.results);
// //         setTotalPages(Math.ceil(response.data.count / ITEMS_PER_PAGE));
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   }, [currentPage]);

// //   const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <div>
// //       <List>
// //         {loading
// //           ? Array.from(new Array(ITEMS_PER_PAGE)).map((_, index) => (
// //               <ListItem key={index} disablePadding>
// //                 <ListItemButton>
// //                   <Skeleton variant="text" width="100%" height={40} />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))
// //           : pokemons.map((pokemon, index) => (
// //               <ListItem key={index} disablePadding>
// //                 <ListItemButton onClick={() => onSelectPokemon(pokemon)}>
// //                   <ListItemText primary={pokemon.name} />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))}
// //       </List>

// //       {/* Pagination Controls */}
// //       <Pagination
// //         count={totalPages}
// //         page={currentPage}
// //         onChange={handlePageChange}
// //         color="primary"
// //         sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
// //       />
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";

// export default function PokemonDetail({ pokemon }) {
//   const [details, setDetails] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (pokemon) {
//       setLoading(true);
//       fetch(pokemon.url)
//         .then((response) => response.json())
//         .then((data) => {
//           setDetails(data);
//           setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     }
//   }, [pokemon]);

//   if (loading) {
//     return (
//       <Box>
//         <Skeleton variant="text" width="50%" height={40} />
//         <Skeleton variant="circular" width={100} height={100} />
//         <Skeleton variant="text" width="70%" height={20} />
//         <Skeleton variant="text" width="40%" height={20} />
//       </Box>
//     );
//   }

//   if (!pokemon) {
//     return <Typography>Select a Pokémon to view details.</Typography>;
//   }

//   if (!details) {
//     return <Typography>Failed to load details.</Typography>;
//   }

//   return (
//     <Box>
//       <Typography variant="h5">{details.name}</Typography>
//       <img
//         src={details.sprites.front_default}
//         alt={details.name}
//         style={{ width: 100, height: 100 }}
//       />
//       <Typography variant="body1">Height: {details.height}</Typography>
//       <Typography variant="body1">Weight: {details.weight}</Typography>
//     </Box>
//   );
// }
