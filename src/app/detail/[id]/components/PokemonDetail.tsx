import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Chip, Container, Grid2 } from "@mui/material";
import StatCircle from "./statsCircle";
import EvolutionStage from "./evolutionStep";
import { useFetchDetail } from "@/hooks/useFetchData";
interface PokemonDetail {
  name: string;
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

const API = "https://pokeapi.co/api/v2/pokemon";
export default function PokemonDetail(id: any) {
  // const [loading, setLoading] = React.useState(false);
  // const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
  //   null
  // );
  // useEffect(() => {
  //   if (id) {
  //     setLoading(true);
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${id?.id}`)
  //       .then((response) => {
  //         setPokemonDetail(response?.data);
  //         setLoading(false);
  //       })
  //       .catch(() => setLoading(false));
  //   }
  // }, [id?.id]);
  const { pokemonDetail, loading } = useFetchDetail({
    url: `${API}/${id?.id}`,
  });

  // const stats = [
  //   { color: "#2196F3", value: 67, label: "Stat 1" }, // Blue
  //   { color: "#FF9800", value: 67, label: "Stat 2" }, // Orange
  //   { color: "#FFC107", value: 67, label: "Stat 3" }, // Yellow
  //   { color: "#4CAF50", value: 67, label: "Stat 4" }, // Green
  //   { color: "#3F51B5", value: 67, label: "Stat 5" }, // Indigo
  //   { color: "#F44336", value: 67, label: "Stat 6" }, // Red
  // ];

  const evolutionStages = [
    { color: "#4CAF50" }, // Green
    { color: "#FFC107" }, // Yellow
    { color: "#FF9800" }, // Orange
    { color: "#F44336" }, // Red
  ];

  if (loading && !pokemonDetail) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ width: "100%", margin: "0 auto", p: 3 }}>
      <Grid2 container sx={{ columnGap: 8, gridTemplateColumns: "50% 50%" }}>
        {/* {value?.logo ? (
          <Grid2
            sx={{
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid gray",
              borderRadius: 1,
              width: 300,
            }}
          >
            <Image alt="bg-pokemon" src={value?.logo} />
          </Grid2>
        ) : ( */}
        <Grid2
          sx={{
            height: 250,
            display: "flex",
            backgroundColor: "#e0e0e0",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid gray",
            borderRadius: 1,
            width: 300,
          }}
        >
          <Typography variant="h6" color="textSecondary">
            Pokemon Picture <br /> Placeholder
          </Typography>
        </Grid2>
        {/* )} */}
        <Grid2>
          <Box>
            <Typography variant="h4" fontWeight={"bold"} marginBottom={4}>
              {pokemonDetail?.name}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                fontWeight={"bold"}
                marginRight={14}
              >
                Weight:{" "}
                <span style={{ marginLeft: "1rem", fontWeight: 400 }}>
                  {pokemonDetail?.weight}
                </span>
              </Typography>
              <Typography
                fontWeight={"bold"}
                id="modal-modal-title"
                variant="subtitle1"
              >
                Height:
                <span style={{ marginLeft: "1rem", fontWeight: 400 }}>
                  {pokemonDetail?.height}
                </span>
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} mt={2}>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                fontWeight={"bold"}
                marginRight={6}
                display={"flex"}
                alignItems={"baseline"}
              >
                Abilities:{" "}
                <Box marginLeft="1rem">
                  <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                    {pokemonDetail?.abilities?.map(
                      (ability: any, index: number) => (
                        <li style={{ fontWeight: 400 }} key={index}>
                          {ability.ability.name}
                        </li>
                      )
                    )}
                  </ul>
                </Box>
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} marginTop={4}>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                fontWeight={"bold"}
                marginRight={6}
              >
                Type:
                <span style={{ marginLeft: "3.5rem" }}>
                  {pokemonDetail?.types?.map((typeObj: any, index: number) => {
                    const tipe = typeObj.type.name;
                    let typeColor;
                    switch (tipe) {
                      case "fire":
                        typeColor = "red";
                        break;
                      case "water":
                        typeColor = "blue";
                        break;
                      case "grass":
                        typeColor = "green";
                        break;
                      case "Flying":
                        typeColor = "yellow";
                        break;
                      default:
                        typeColor = "gray";
                    }

                    return (
                      <Chip
                        label={tipe}
                        sx={{
                          bgcolor: typeColor,
                          color: "white",
                          width: "6rem",
                          height: "2rem",
                          marginRight: "2rem",
                        }}
                        key={index}
                      />
                    );
                  })}
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Box sx={{ mt: 2, width: "`00%" }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Other Images:
        </Typography>
        <Grid2
          container
          spacing={3}
          sx={{
            mb: 2,
            gridTemplateColumns: "auto auto auto auto auto auto",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Grid2
              key={index}
              sx={{
                height: 125,
                display: "flex",
                backgroundColor: "#e0e0e0",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: 1,
                width: 125,
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" color="textSecondary">
                Pokemon Picture <br /> Placeholder
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Stats:
        </Typography>
        <Grid2 container spacing={2}>
          {pokemonDetail?.stats?.map((stat: any, index: number) => {
            const idxStat = index;
            let typeColor;
            switch (idxStat) {
              case 1:
                typeColor = "red";
                break;
              case 2:
                typeColor = "blue";
                break;
              case 3:
                typeColor = "green";
                break;
              case 4:
                typeColor = "yellow";
                break;
              default:
                typeColor = "gray";
            }

            return (
              <>
                <Grid2 key={index}>
                  <StatCircle
                    color={typeColor}
                    value={stat.base_stat}
                    label={`${stat.stat.name}`}
                  />
                </Grid2>
              </>
            );
          })}

          {/* {stats.map((stat, index) => (
            <Grid2 item xs={4} key={index}>
              <StatCircle {...stat} />
            </Grid2>
          ))} */}
        </Grid2>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Evolution:
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          {evolutionStages.map((stage, index) => (
            <React.Fragment key={index}>
              <EvolutionStage stage={index + 1} color={stage.color} />
              {index < evolutionStages.length - 1 && (
                <Typography>{`==>`}</Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
