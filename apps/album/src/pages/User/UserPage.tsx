import { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useGetAllUsers } from "../../api/users/getRequest.ts";
import { UserCard } from "../../components/Card/UserCard.tsx";

export const UserPage: FC = () => {
  const { data, isLoading } = useGetAllUsers();

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
        data?.map((user, index) => <UserCard key={index} user={user} />)}
    </Container>
  );
};
