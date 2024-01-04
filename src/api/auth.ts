import { IUser } from '@/types/interfaces/user';
import { ILoginForm, IRegisterForm } from "@/types/interfaces/auth";
import api from "./baseApi";

const login = (data: ILoginForm) => {
  return api.post("/auth/login", data);
};

const register = (data: IRegisterForm) => {
  return api.post("/auth/register", data);
};

export { login, register };
