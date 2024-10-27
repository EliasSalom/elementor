import { FC, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useGetAllUsers } from "../../api/users/getRequest.ts";
import { UserCard } from "../../components/Card/UserCard.tsx";
import { UserModal } from "../../components/Modal/UserModal.tsx";

export const UserPage: FC = () => {
  const { data, isLoading } = useGetAllUsers();
  const [isOpen, setIsOpen] = useState(false);
  const toggleImageDialog = () => setIsOpen((prev) => !prev);
  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          Users and Albums
        </Typography>
        <Box>
          <Button onClick={toggleImageDialog}>create user</Button>
        </Box>
      </Box>
      {!isLoading &&
        data?.map((user, index) => <UserCard key={index} user={user} />)}

      <UserModal onClose={toggleImageDialog} open={isOpen} />
    </Container>
  );
};
