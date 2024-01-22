import { get } from "./api";

import { APIResponse } from "../models/Request";

import { Category } from "../models/Auth";

export const getCategories = (): Promise<APIResponse<Category[]>> =>
  get({ url: "/categories" });
