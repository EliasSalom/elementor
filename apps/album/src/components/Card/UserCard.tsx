import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  ImageList,
  Typography,
} from "@mui/material";
import { AlbumCard } from "./AlbumCard.tsx";
import { User } from "../../api/type.ts";
import { AlbumDialog } from "../Modal/AlbumModal.tsx";
import { ImageModal } from "../Modal/ImageModal.tsx";
import { useDeleteUser } from "../../api/users/deleteRequest.ts";

interface Props {
  user: User;
}
export const UserCard: FC<Props> = ({ user }) => {
  const { albums, id, name } = user;
  const { mutate, isPending } = useDeleteUser();
  const [albumId, setAlbumId] = useState<string>();
  const [state, setState] = useState({
    isExpanded: false,
    isDialogOpen: false,
    isOpen: false,
  });
  useEffect(() => {}, [albumId, isPending]);
  const toggleImageDialog = () =>
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  const toggleExpand = () =>
    setState((prevState) => ({
      ...prevState,
      isExpanded: !prevState.isExpanded,
    }));

  const toggleAlbumDialog = () =>
    setState((prevState) => ({
      ...prevState,
      isDialogOpen: !prevState.isDialogOpen,
    }));
  return (
    <Card
      sx={{
        padding: 2,
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginRight: 3 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Albums: {albums?.length || 0}
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ marginRight: 5 }}
            variant="contained"
            onClick={toggleExpand}
          >
            {state.isExpanded ? "Hide Albums" : "Show Albums"}
          </Button>
          <Button variant="outlined" onClick={toggleAlbumDialog}>
            New Album
          </Button>
          <Button
            onClick={() => mutate(id)}
            color={"error"}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete User"}
          </Button>
        </Box>
      </Box>
      <Collapse in={state.isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{ display: "flex", margin: 4, justifyContent: "space-between" }}
        >
          {user.albums.length > 0 ? (
            <ImageList cols={4} gap={3}>
              {user.albums.map((album) => (
                <AlbumCard
                  onClick={() => {
                    setAlbumId(album.id as string);
                    toggleImageDialog();
                  }}
                  key={album.id}
                  album={album}
                />
              ))}
            </ImageList>
          ) : (
            <Typography color="error" align="center" variant="h6">
              this album is Empty
            </Typography>
          )}
        </CardContent>
      </Collapse>
      {albumId && (
        <ImageModal
          albumId={albumId}
          open={state.isOpen}
          onClose={toggleImageDialog}
        />
      )}
      <AlbumDialog
        open={state.isDialogOpen}
        onClose={toggleAlbumDialog}
        userId={id}
      />
    </Card>
  );
};
