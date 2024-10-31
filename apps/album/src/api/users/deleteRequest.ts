import { User } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const deleteUser = async (id: string): Promise<User> => {
  return (await backendInstance.delete(`/user/${id}`)).data;
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      toast.success("user deleted successfully!");
    },
    onError: (error) => {
      toast.error(`Error while create user: ${error.message}`);
    },
  });
};
