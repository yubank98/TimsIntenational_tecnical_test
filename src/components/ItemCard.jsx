import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import { setSelectedItem, openModal } from "../store/actions";
import CustomModal from "./customModal";

const ItemCard = ({
  title,
  description,
  programType,
  imageUrl,
  releaseYear,
}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

    const handleOpenModal = () => {
      dispatch(
        setSelectedItem({
          title,
          description,
          programType,
          releaseYear,
          imageUrl: imageUrl["Poster Art"].url,
        })
      );
      dispatch(openModal());
    };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Box
        sx={{
          width: "300px",
          height: "450px",
          margin: "16px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            margin: "16px",
          },
          cursor: "pointer",
        }}
        onClick={handleOpenModal}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.3s ease-in-out",
            "&:hover": {
              opacity: 0.7,
              border: "5px solid #ffffff",
            },
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          ) : (
            <CardMedia
              component="img"
              image={imageUrl["Poster Art"].url}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "2px",
              }}
            />
          )}

          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              width: "100%",
              textAlign: "center",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "1rem" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ffffff", fontSize: "0.875rem" }}
            >
              Año: {releaseYear}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <CustomModal />
    </>
  );
};

export default ItemCard;
