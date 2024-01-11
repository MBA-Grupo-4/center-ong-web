import { BaseUser } from "./User";

export type PersonalDataPayload = {
  email: string;
  birthdate: string;
  phone: string;
  gender: string;
};

export type Category = {
  title: string;
  id: string;
};

export type SignupPayload = {
  username: string;
  email: string;
  birthdate: string;
  phone: string;
  gender: string;
  password: string;
  isOng: boolean;
  categories?: Category[];
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: BaseUser;
  access_token: string;
};
