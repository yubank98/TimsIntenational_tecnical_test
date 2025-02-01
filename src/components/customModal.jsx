import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  transition: "opacity 0.6s ease-in-out",
  "@media (max-width: 600px)": {
    width: "90%",
    p: 2,
  },
};

const CustomModal = () => {
  const item = useSelector((state) => state.selectedItem);
  const open = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!item) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              {item.title}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Tipo:</strong> {item.programType}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Año de lanzamiento:</strong> {item.releaseYear}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Descripción:</strong> {item.description || "No disponible"}
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Imagen:</strong>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                marginTop: 8,
                borderRadius: 4,
                objectFit: "contain",
                maxHeight: "300px",
              }}
            />
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
