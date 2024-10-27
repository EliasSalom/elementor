import { User } from "../type.ts";
import { backendInstance } from "../api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const createUser = async (data: Partial<User>): Promise<User> => {
  console.log(data);
  return await backendInstance.post("/user", data);
};

export const usePostUser = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: Partial<User>) => createUser(data),
    onSuccess: () => {
      toast.success("user create successfully!");
    },
    onError: (error) => {
      toast.error(`Error while create user: ${error.message}`);
    },
  });
};
