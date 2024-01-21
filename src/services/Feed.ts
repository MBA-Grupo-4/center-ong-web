import { del, get, post } from "./api";

import { APIResponse } from "../models/Request";

import { authRepository } from "../repositories/auth.repository";
import {
  BasePost,
  PostComentPayload,
  PostONGFollowPayload,
} from "../models/Feed";

export const isUnauthorized = (error: any) => {
  return error.message === "Unauthorized";
};

export const getLoggedUser = () => {
  return authRepository.getLoggedUser();
};

export const logoutUser = () => {
  return authRepository.removeLoggedUser();
};

export const getFeed = (userId: number): Promise<APIResponse<BasePost[]>> =>
  get({ url: "/feed", params: { userId } });

export const postComment = (
  postId: number,
  data: PostComentPayload
): Promise<APIResponse<void>> => post({ url: `/feed/${postId}/comment`, data });

export const postFollowOng = (
  data: PostONGFollowPayload
): Promise<APIResponse<void>> => post({ url: "users/follow", data });

export const delUnfollowOng = (
  data: PostONGFollowPayload
): Promise<APIResponse<void>> => del({ url: "users/unfollow", data });
