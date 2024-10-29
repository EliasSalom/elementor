import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { Album } from "../../api/type.ts";
import { useGetAlbum } from "../../api/album/getRequest.ts";

interface Props {
  album: Album;
  onClick: MouseEventHandler<HTMLDivElement>;
}
export const AlbumCard: FC<Props> = ({ album, onClick }) => {
  const { data } = useGetAlbum(album.id as string);

  return (
    <ImageListItem>
      {data?.images ? (
        <img
          onClick={onClick}
          src={data.images[0]?.url}
          alt={album.title}
          loading="lazy"
        />
      ) : (
        <Skeleton />
      )}
      <ImageListItemBar
        title={album.title}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${album.title}`}
          >
            {/*<InfoIcon />*/}
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
