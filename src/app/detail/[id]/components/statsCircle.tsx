// // components/StatCircle.tsx
// import React from "react";
// import { Box, Typography } from "@mui/material";

// interface StatCircleProps {
//   color: string;
//   value: number;
// }

// const StatCircle: React.FC<StatCircleProps> = ({ color, value }) => {
//   return (
//     <Box
//       sx={{
//         width: 100,
//         height: 100,
//         borderRadius: "50%",
//         backgroundColor: color,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         margin: "10px",
//       }}
//     >
//       <Typography variant="h6" color="white">
//         {value}
//       </Typography>
//     </Box>
//   );
// };

"use client";

import React from "react";
import { Box, Typography, styled } from "@mui/material";

// const StyledImage = styled(Box)({
//   width: "100%",
//   height: 300,
//   backgroundColor: "#f0f0f0",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginBottom: 16,
// });

// const SmallImage = styled(Box)({
//   width: "100%",
//   height: 100,
//   backgroundColor: "#f0f0f0",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

interface StatCircleProps {
  color: string;
  value: number;
  label: string;
}

const StatCircle: React.FC<StatCircleProps> = ({ color, value, label }) => (
  <Box textAlign="center" marginRight={"1.5rem"}>
    <Box
      sx={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        margin: "0 auto",
        mb: 1,
      }}
    >
      {value}
    </Box>
    <Typography variant="caption" display="block">
      {label}
    </Typography>
  </Box>
);

export default StatCircle;
