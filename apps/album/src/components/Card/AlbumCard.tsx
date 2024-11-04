import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { Album } from "../../api/type.ts";
import { useGetAlbum } from "../../api/album/getRequest.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteAlbum } from "../../api/album/deleteRequest.ts";

interface Props {
  album: Album;
  onClick: MouseEventHandler<HTMLDivElement>;
}
export const AlbumCard: FC<Props> = ({ album, onClick }) => {
  const { data } = useGetAlbum(album.id as string);
  const { mutate } = useDeleteAlbum();

  return (
    <ImageListItem>
      {data?.images ? (
        <img
          onClick={onClick}
          src={data.images[0]?.url || "/album.png"}
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
            onClick={() => mutate(album.id as string)}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
