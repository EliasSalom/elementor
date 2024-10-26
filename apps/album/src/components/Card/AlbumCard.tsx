import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Album } from "../../api/type.ts";

interface Props {
  album: Album;
  onClick?: () => void;
}
export const AlbumCard: FC<Props> = ({ album, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ marginBottom: 2 }}>
      <CardActionArea>
        {album.images && (
          <CardMedia
            component="img"
            height="140"
            image={album?.images[0].url || "https://via.placeholder.com/150"}
            alt={album.title}
          />
        )}
        <Typography variant="subtitle1" sx={{ padding: 1 }}>
          {album.title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
