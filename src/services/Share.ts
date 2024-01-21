import { get, post } from "./api";

import { APIResponse } from "../models/Request";

import { BasePost, SharePostPayload } from "../models/Feed";
import { SharedPost } from "../models/Share";

export const getSharedPosts = (
  userId: number
): Promise<APIResponse<SharedPost[]>> => get({ url: `/share/${userId}` });

export const postShare = (
  data: SharePostPayload
): Promise<APIResponse<BasePost>> => post({ url: "/share/share", data });
