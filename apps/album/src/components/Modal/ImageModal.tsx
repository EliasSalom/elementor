import {
  Box,
  Button,
  CircularProgress,
  ImageList,
  ImageListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useGetAlbum } from "../../api/album/getRequest.ts";
import { useCreateImage } from "../../api/album/postRequest.ts";

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
  console.log(data);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { mutate } = useCreateImage();
  const createImage = () => {
    mutate({ albumId, url: imageUrl });
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
        <Button>add photos</Button>
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
              <ImageListItem key={item.url}>
                <img
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box>
            <Typography align="center" variant="h6">
              No images available in this album.
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              label="url"
              type="text"
              fullWidth
              variant="outlined"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button onClick={createImage}>save</Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};
