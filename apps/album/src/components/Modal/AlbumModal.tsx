import { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { usePostAlbum } from "../../api/album/postRequest.ts";

interface Props {
  open: boolean;
  userId: string;
  onClose: () => void;
}
export const AlbumDialog: FC<Props> = ({ open, userId, onClose }) => {
  const [album, setAlbum] = useState({
    title: "",
    url: "",
  });
  const { mutate } = usePostAlbum();

  const handleSave = () => {
    const data = {
      id: userId,
      title: album.title,
      url: album.url,
    };
    console.log(data);
    mutate(data);
    setAlbum({ title: "", url: "" });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Album</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Album Name"
          type="text"
          fullWidth
          variant="outlined"
          value={album.title}
          onChange={(e) => setAlbum({ ...album, title: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Album URL"
          type="text"
          fullWidth
          variant="outlined"
          value={album.url}
          onChange={(e) => setAlbum({ ...album, url: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
