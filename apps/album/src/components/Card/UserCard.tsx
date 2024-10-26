import { FC, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import { AlbumCard } from "./AlbumCard.tsx";
import { User } from "../../api/type.ts";
import { AlbumDialog } from "../Modal/AlbumModal.tsx";

interface Props {
  user: User;
}
export const UserCard: FC<Props> = ({ user }) => {
  const { albums, id, name } = user;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);
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
          <Button variant="outlined" onClick={handleDialogOpen}>
            Add New Album
          </Button>
        </Box>
      </Box>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          {albums &&
            albums?.map((album) => <AlbumCard key={album.id} album={album} />)}
        </CardContent>
      </Collapse>
      <AlbumDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        userId={id}
      />
    </Card>
  );
};
