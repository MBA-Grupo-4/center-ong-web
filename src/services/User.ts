import { post } from "./api";
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

export const postLogin = (
  data: LoginPayload
): Promise<APIResponse<LoginResponse>> =>
  post({ data: data, url: "/auth/login" });

export const postForgotPassword = (email: string): Promise<APIResponse<void>> =>
  post({ url: "/forgot-password", data: { email } });

export const postResetPassword = (
  data: ResetPasswordPayload
): Promise<APIResponse<void>> => post({ url: "/reset-password", data });

export const postCreateUser = (
  data: SignupPayload
): Promise<APIResponse<BaseUser>> => post({ data, url: "/users" });

// export const postResetPassword = (
//   data: Reset
// ): Promise<AxiosResponse<void>> =>
//   post({
//     data: data,
//     url: "/passwords/customers/reset",
//   });
