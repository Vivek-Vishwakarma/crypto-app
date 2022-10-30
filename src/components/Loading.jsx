import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "../App.css";
export default function Loading() {
  return (
    <Box sx={{ width: "80%", pt: 10, mx: "auto" }}>
      <LinearProgress />
    </Box>
  );
}
