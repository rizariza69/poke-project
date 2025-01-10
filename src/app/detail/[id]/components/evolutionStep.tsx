// // components/EvolutionStep.tsx
// import React from "react";
// import { Box, Typography, Avatar } from "@mui/material";

// interface EvolutionStepProps {
//   image: string;
//   name: string;
// }

// const EvolutionStep: React.FC<EvolutionStepProps> = ({ image, name }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         margin: "10px",
//       }}
//     >
//       <Avatar
//         src={image}
//         alt={name}
//         sx={{ width: 80, height: 80, marginBottom: "8px" }}
//       />
//       <Typography variant="body1">{name}</Typography>
//     </Box>
//   );
// };

// export default EvolutionStep;

"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface EvolutionStageProps {
  stage: number;
  color: string;
}

const EvolutionStage: React.FC<EvolutionStageProps> = ({ stage, color }) => (
  <Box textAlign="center">
    <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        mb: 1,
      }}
    >
      <Typography variant="caption">
        Pokemon evolution
        <br />
        state {stage}
      </Typography>
    </Box>
    <Typography variant="caption" display="block">
      Pokemon evolution state {stage} name
    </Typography>
  </Box>
);

export default EvolutionStage;
