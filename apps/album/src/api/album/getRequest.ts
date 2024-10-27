import { Image } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

const getAlbumById = async (id: string): Promise<Array<Image>> => {
  return (await backendInstance.get(`/album/${id}`)).data;
};

export const useGetAlbum = (id: string) => {
  return useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
  });
};
