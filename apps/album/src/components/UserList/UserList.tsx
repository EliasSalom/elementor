// src/components/UserList.js
import {FC, useState} from 'react';
import {Box, Typography, Card, CardContent, Grid2, CircularProgress, Grid} from '@mui/material';
import {AlbumCard} from "../Card/AlbumCard.tsx";
import {ImageModal} from "../Modal/ImageModal.tsx";
import {useGetAllUsers} from "../../api/users/getRequest.ts";
import { Album } from '../../api/type.ts';

export const UserList: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {isLoading, data} = useGetAllUsers()

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{padding: 4}}>
            <Typography variant="h4" gutterBottom>
                Users and Albums
            </Typography>
            {!isLoading && data &&
                <Grid2 container spacing={4}>
                    {data.map(user => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{user.name}</Typography>
                                    <Typography variant="subtitle1">
                                        {user.album.length} Albums
                                    </Typography>
                                    <Box mt={2}>
                                        {user.album.map((album: Album) => (
                                            <AlbumCard key={album.id} album={album} onClick={onOpen} />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid2>}
            {/*<ImageModal album={} open={open} onClose={onClose} />*/}
        </Box>
    );
};