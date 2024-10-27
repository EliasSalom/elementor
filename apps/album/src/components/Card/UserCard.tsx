import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Skeleton,
  Typography,
} from "@mui/material";
import { AlbumCard } from "./AlbumCard.tsx";
import { User } from "../../api/type.ts";
import { AlbumDialog } from "../Modal/AlbumModal.tsx";
import { useGetAllAlbum } from "../../api/album/getRequest.ts";

interface Props {
  user: User;
  setAlbumId?: Dispatch<SetStateAction<string>>;
}
export const UserCard: FC<Props> = ({ user }) => {
  const { albums, id, name } = user;
  const { data, isLoading } = useGetAllAlbum(user.id);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleAlbumDialog = () => setIsDialogOpen((prev) => !prev);
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
          <Button variant="contained" onClick={toggleExpand}>
            {isExpanded ? "Hide Albums" : "Show Albums"}
          </Button>
          <Button variant="outlined" onClick={toggleAlbumDialog}>
            Add New Album
          </Button>
        </Box>
      </Box>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{ display: "flex", margin: 4, justifyContent: "space-between" }}
        >
          {!isLoading && data ? (
            data.map((album) => (
              <AlbumCard
                onClick={() => {
                  console.log(album.id);
                }}
                key={album.id}
                album={album}
              />
            ))
          ) : (
            <Skeleton />
          )}
        </CardContent>
      </Collapse>
      <AlbumDialog
        open={isDialogOpen}
        onClose={toggleAlbumDialog}
        userId={id}
      />
    </Card>
  );
};
