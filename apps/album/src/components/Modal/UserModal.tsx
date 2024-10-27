// UserDialog.js
import { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { usePostUser } from "../../api/users/postRequest.ts";

interface Props {
  open: boolean;
  onClose: () => void;
}
export const UserModal: FC<Props> = ({ open, onClose }) => {
  const { mutate } = usePostUser();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSave = () => {
    if (userName && userEmail) {
      mutate({ name: userName, email: userEmail });
      resetFields();
      onClose();
    }
  };

  const resetFields = () => {
    setUserName("");
    setUserEmail("");
  };

  const handleClose = () => {
    resetFields();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="User Name"
          type="text"
          fullWidth
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="User Email"
          type="email"
          fullWidth
          variant="outlined"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
