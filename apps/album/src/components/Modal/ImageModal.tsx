import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useGetAlbum } from "../../api/album/getRequest.ts";
import { useCreateImage } from "../../api/album/postRequest.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteImage } from "../../api/album/deleteRequest.ts";

interface Props {
  albumId: string;
  open: boolean;
  onClose: () => void;
}

export const ImageModal: FC<Props> = ({ albumId, open, onClose }) => {
  const { data, isLoading, error } = useGetAlbum(albumId);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { mutate: createImageMutate } = useCreateImage();
  const { mutate: deleteImageMutate } = useDeleteImage();
  const openImageHandler = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const createImage = () => {
    createImageMutate({ albumId, url: imageUrl });
    setImageUrl("");
    onClose();
  };
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
        <Box display="flex">
          <TextField
            autoFocus
            margin="dense"
            label="url"
            type="text"
            fullWidth
            variant="outlined"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{ flexGrow: 1, marginRight: 1 }}
          />
          <Button onClick={createImage}>add photos</Button>
        </Box>
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
        ) : data && data.images && data.images.length > 0 ? (
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {data.images.map((item) => (
              <ImageListItem key={item.url} sx={{ cursor: "pointer" }}>
                <img
                  onClick={() => openImageHandler(item.url)}
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      onClick={() => deleteImageMutate(item.id)}
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box>
            <Typography align="center" variant="h6">
              No images available in this album.
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
};
