import { del, get, post } from "./api";
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
import {
  BasePost,
  PostComentPayload,
  PostONGFollowPayload,
  SharePostPayload,
} from "../models/Feed";

export const getSharedPosts = (
  userId: number
): Promise<APIResponse<BasePost[]>> => get({ url: `/share/${userId}` });

export const postShare = (
  data: SharePostPayload
): Promise<APIResponse<BasePost>> => post({ url: "/share/share", data });
