import { CreateAlbum } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const createNewAlbum = async (album: CreateAlbum) => {
  const { id, url, title } = album;
  return await backendInstance.post(`/album/${id}`, { title, url });
};
interface CreateImage {
  url: string;
  albumId: string;
}
const createImage = async ({ url, albumId }: CreateImage) => {
  return await backendInstance.post(`/album/image/${albumId}`, { url });
};

export const usePostAlbum = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (album: CreateAlbum) => createNewAlbum(album),
    onSuccess: () => {
      toast.success("user create successfully!");
    },
    onError: (error) => {
      toast.error(`Error while create image: ${error.message}`);
    },
  });
};

export const useCreateImage = () => {
  return useMutation({
    mutationKey: ["image"],
    mutationFn: (album: CreateImage) => createImage(album),
    onSuccess: () => {
      toast.success("image create successfully!");
    },
    onError: (error) => {
      toast.error(`Error while create image: ${error.message}`);
    },
  });
};
