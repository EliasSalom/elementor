import { backendInstance } from "../api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const deleteAlbum = async (id: string) => {
  return (await backendInstance.delete(`/album/${id}`)).data;
};

const deleteImage = async (id: string) => {
  return (await backendInstance.delete(`/album/image/${id}`)).data;
};

export const useDeleteAlbum = () => {
  return useMutation({
    mutationKey: ["album"],
    mutationFn: (id: string) => deleteAlbum(id),
    onSuccess: () => {
      toast.success("album deleted successfully!");
    },
    onError: (error) => {
      toast.error(`Error while delete album: ${error.message}`);
    },
  });
};

export const useDeleteImage = () => {
  return useMutation({
    mutationKey: ["album"],
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      toast.success("image deleted successfully!");
    },
    onError: (error) => {
      toast.error(`Error while delete image: ${error.message}`);
    },
  });
};
