import {
  Card,
  CardActionArea,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Album } from "../../api/type.ts";
import { useGetAlbum } from "../../api/album/getRequest.ts";

interface Props {
  album: Album;
  onClick?: () => void;
}
export const AlbumCard: FC<Props> = ({ album }) => {
  const { isLoading } = useGetAlbum(album.id as string);

  return (
    <Card sx={{ marginBottom: 2, width: 150, height: 100 }}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <CardActionArea>
          <Typography variant="subtitle1" sx={{ padding: 1 }}>
            {album.title}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={
              album.images
                ? album.images[0].url
                : "https://via.placeholder.com/150"
            }
            alt={album.title}
            sx={{ backgroundPosition: "relevant" }}
          />
        </CardActionArea>
      )}
    </Card>
  );
};
