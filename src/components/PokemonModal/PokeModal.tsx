import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Chip, Grid2 } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PokeModal({ open, onClose, value }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({} as any);
  useEffect(() => {
    if (value) {
      setLoading(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => {
          setDetail(response.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [value]);

  if (loading && !detail) {
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Loading...
          </Typography>
        </Box>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ borderRadius: 3 }}
    >
      <Box>
        <Box sx={style}>
          <Box display={"flex"} justifyContent={"end"} marginBottom={1}>
            <Typography
              color="gray"
              variant="caption"
              sx={{ cursor: "pointer" }}
              onClick={onClose}
            >
              X
            </Typography>
          </Box>
          <Grid2
            container
            sx={{ columnGap: 2, gridTemplateColumns: "1fr 1fr" }}
          >
            {/* {value?.logo ? (
              <Grid2
                sx={{
                  height: 202,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid gray",
                  borderRadius: 1,
                  width: 350,
                }}
              >
                <Image alt="bg-pokemon" src={value?.logo} />
              </Grid2>
            ) : ( */}
            <Grid2
              sx={{
                height: 202,
                display: "flex",
                backgroundColor: "#e0e0e0",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid gray",
                borderRadius: 1,
                width: 350,
              }}
            >
              <Typography variant="body2" color="textSecondary">
                Pokemon Picture <br /> Placeholder
              </Typography>
            </Grid2>
            {/* )} */}
            <Grid2>
              <Box>
                <Typography variant="h5" fontWeight={"bold"} marginBottom={2}>
                  {detail?.name}
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    id="modal-modal-title"
                    variant="body2"
                    fontWeight={"bold"}
                    marginRight={6}
                  >
                    Weight:{" "}
                    <span style={{ marginLeft: "1rem", fontWeight: 400 }}>
                      {detail?.weight}
                    </span>
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    id="modal-modal-title"
                    variant="body2"
                  >
                    Height:
                    <span style={{ marginLeft: "1rem", fontWeight: 400 }}>
                      {detail?.height}
                    </span>
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={2}>
                  <Typography
                    id="modal-modal-title"
                    variant="body2"
                    fontWeight={"bold"}
                    marginRight={6}
                    display={"flex"}
                    alignItems={"baseline"}
                  >
                    Abilities:{" "}
                    <Box marginLeft="1rem">
                      <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                        {detail?.abilities?.map(
                          (ability: any, index: number) => (
                            <li style={{ fontWeight: 400 }} key={index}>
                              {ability?.ability?.name}
                            </li>
                          )
                        )}
                      </ul>
                    </Box>
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} marginTop={2}>
                  <Typography
                    id="modal-modal-title"
                    variant="body2"
                    fontWeight={"bold"}
                    marginRight={6}
                  >
                    Type:
                    <span style={{ marginLeft: "2rem" }}>
                      {detail?.types?.map((type: any, index: number) => {
                        const tipe = type?.type?.name;
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
                              width: "5rem",
                              height: "1.3rem",
                              marginRight: "1rem",
                            }}
                            key={index}
                          />
                        );
                      })}
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  textTransform: "none",
                  width: "7rem",
                  height: "1.5rem",
                  borderRadius: ".5rem",
                }}
                // onClick={handleClick}
                onClick={() => {
                  router.push(`/detail/${detail?.name}`);

                  // setDetail(detail?.name);
                }}
                size="small"
              >
                More Detail
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Modal>
  );
}
