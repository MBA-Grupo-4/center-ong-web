import { Category } from "./Auth";
import { BasePost } from "./Feed";

export type User = {
  aboutme: string;
  username: string;
  name: string;
  email: string;
  password: string;
  isOng: boolean;
  birthdate: string;
  telephone: string;
  gender: string;
  keyPix: string;
  categories: Category[];
  dateUpdated: string | null;
  dateDeleted: string | null;
  id: number;
  category?: Category;
  dateInclude: string;
  following?: User[];
  posts?: BasePost[];
  profilepic?: string;
};

export type BaseUser = User & {
  access_token: string;
};

export type UserEditPayload = {
  id: number;
  name?: string;
  aboutme?: string;
  profilepic?: string;
};
