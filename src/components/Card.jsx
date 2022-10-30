import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";
export default function Mediacard({ image, rank, name, url }) {
  const navigateToPage = () => {
    window.open(url, "_blank");
  };
  return (
    <Card sx={{ maxWidth: 150 }} onClick={navigateToPage} className="card">
      <CardMedia
        className="cardImg"
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          style={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {rank}
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
