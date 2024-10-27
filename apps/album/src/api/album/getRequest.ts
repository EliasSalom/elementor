import { Album } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

const getAlbumById = async (id: string): Promise<Album> => {
  return (await backendInstance.get(`/album/${id}`)).data;
};

const getAllAlbums = async (id: string): Promise<Array<Album>> => {
  return (await backendInstance.get(`/album/all/${id}`)).data;
};

export const useGetAlbum = (id: string) => {
  return useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
  });
};

export const useGetAllAlbum = (id: string) => {
  return useQuery({
    queryKey: ["album", id],
    queryFn: () => getAllAlbums(id),
  });
};
