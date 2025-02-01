import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";

const OptionCard = ({ title, imageUrl }) => {
  return (
    <Box
      sx={{
        perspective: "1000px",
        width: "300px",
        height: "450px",
        margin: "16px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            alt={title}
            height="200"
            image={imageUrl}
            title={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "#ffffff" }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default OptionCard;
