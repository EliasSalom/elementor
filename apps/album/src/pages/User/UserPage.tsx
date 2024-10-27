import { FC, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useGetAllUsers } from "../../api/users/getRequest.ts";
import { UserCard } from "../../components/Card/UserCard.tsx";
import { ImageModal } from "../../components/Modal/ImageModal.tsx";

export const UserPage: FC = () => {
  const { data, isLoading } = useGetAllUsers();
  const [isOpen, setIsOpen] = useState(false);
  const [album, setAlbum] = useState<string>("");
  console.log(album);
  const toggleImageDialog = () => setIsOpen((prev) => !prev);
  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          Users and Albums
        </Typography>
        <Box>
          <Button>create user</Button>
        </Box>
      </Box>
      {!isLoading &&
        data?.map((user, index) => (
          <UserCard key={index} user={user} setAlbumId={setAlbum} />
        ))}
      <ImageModal open={isOpen} onClose={toggleImageDialog} albumId={album} />
    </Container>
  );
};
