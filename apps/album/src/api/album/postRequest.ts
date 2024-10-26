import { CreateAlbum } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const createNewAlbum = async (album: CreateAlbum) => {
  const { id, url, title } = album;
  return await backendInstance.post(`/album/${id}`, { title, url });
};

export const usePostAlbum = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (album: CreateAlbum) => createNewAlbum(album),
    onSuccess: () => {
      toast.success("blog create successfully!");
    },
    onError: (error) => {
      toast.error(`Error while create business: ${error.message}`);
    },
  });
};
