import {Box, Modal} from "@mui/material";
import {Carousel} from "react-responsive-carousel";
import {FC} from "react";
import {Album} from "../../api/type.ts";
interface Props{
    album:Album;
    open:boolean;
    onClose:()=>void;
}

export const ImageModal:FC<Props> = ({ album, open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ width: '80%', maxWidth: '600px', margin: '100px auto', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                {album && (
                    <Carousel>
                        {album.images.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                )}
            </Box>
        </Modal>
    );
};