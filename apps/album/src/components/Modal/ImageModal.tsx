import { Box, Modal } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { FC } from "react";
import { useGetAlbum } from "../../api/album/getRequest.ts";

interface Props {
  albumId: string;
  open: boolean;
  onClose: () => void;
}

export const ImageModal: FC<Props> = ({ albumId, open, onClose }) => {
  const { data } = useGetAlbum(albumId);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "80%",
          maxWidth: "600px",
          margin: "100px auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        {
          <Carousel>
            {data &&
              data.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt={`Slide ${index + 1}`} />
                </div>
              ))}
          </Carousel>
        }
      </Box>
    </Modal>
  );
};
