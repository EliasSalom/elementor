import {backendInstance} from "../api.ts";
import {useQuery} from "@tanstack/react-query";
import {User} from "../type.ts";

const getAllUsers = async ():Promise<Array<User>> => {
    return (await backendInstance.get(`/user`)).data;
};
const getUserByID = async (id: string):Promise<User> => {
    return (await backendInstance.get(`/user/${id}`)).data;
};

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => getAllUsers(),
    });
};

export const useGetUserByID = (id: string) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserByID(id),
    });
};