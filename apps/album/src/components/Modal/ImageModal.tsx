import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { FC } from "react";
import { useGetAlbum } from "../../api/album/getRequest.ts";

interface Props {
  albumId: string;
  open: boolean;
  onClose: () => void;
}

interface Props {
  albumId: string;
  open: boolean;
  onClose: () => void;
}

export const ImageModal: FC<Props> = ({ albumId, open, onClose }) => {
  const { data, isLoading, error } = useGetAlbum(albumId);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "80%",
          maxWidth: "600px",
          margin: "100px auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center" variant="h6">
            Failed to load album. Please try again later.
          </Typography>
        ) : data && data.length > 0 ? (
          <Carousel>
            {data.map((image, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "500px",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        ) : (
          <Typography align="center" variant="h6">
            No images available in this album.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};
