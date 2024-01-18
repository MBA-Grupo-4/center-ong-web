import { get, post } from "./api";
import {
  LoginPayload,
  LoginResponse,
  ResetPasswordPayload,
  SignupPayload,
} from "../models/Auth";
import { APIResponse } from "../models/Request";
// import { CustomerUser } from '../models/customer';
import { AxiosResponse } from "axios";
import { BaseUser } from "../models/User";

import { authRepository } from "../repositories/auth.repository";

export const isUnauthorized = (error: any) => {
  return error.message === "Unauthorized";
};

export const getLoggedUser = () => {
  return authRepository.getLoggedUser();
};

export const logoutUser = () => {
  return authRepository.removeLoggedUser();
};

export const getFeed = (userId: number): Promise<APIResponse<LoginResponse>> =>
  get({ url: "/feed", params: { userId } });
