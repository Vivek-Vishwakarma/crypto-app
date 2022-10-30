import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Page({ setPage, page }) {
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <div
      style={{
        width: "98vw",
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
