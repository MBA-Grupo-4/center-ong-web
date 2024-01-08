import { post } from "./api";
import { Login, ResetPasswordPayload, SignupPayload } from "../models/auth";
import { APIResponse } from "../models/Request";
// import { CustomerUser } from '../models/customer';
import { AxiosResponse } from "axios";
import { BaseUser } from "../models/User";

export const postLogin = (data: Login): Promise<APIResponse<BaseUser>> =>
  post({ data, url: "/user/customer" });

export const postCreateUser = (
  data: SignupPayload
): Promise<APIResponse<BaseUser>> => post({ data, url: "/users" });

export const postForgotPassword = (
  email: string
): Promise<AxiosResponse<void>> =>
  post({
    data: { email },
    url: "/passwords/customers/forgot",
  });

export const postResetPassword = (
  data: ResetPasswordPayload
): Promise<AxiosResponse<void>> =>
  post({
    data: data,
    url: "/passwords/customers/reset",
  });
