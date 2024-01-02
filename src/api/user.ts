import { IUser } from "@/types/interfaces/user";
import api from "./baseApi";

const getMe = (id: string) => {
  return api.get(`/user/${id}`);
};

const updateUser = (id: string, data: IUser) => {
  return api.patch(`/user/${id}`, data);
};

export { getMe, updateUser };
