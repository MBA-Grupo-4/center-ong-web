import { User } from "./User";

export type PersonalDataPayload = {
  email: string;
  birthdate: string;
  phone: string;
  gender: string;
  keyPix: string | null;
};

export type Category = {
  title: string;
  id: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  birthdate: string;
  phone: string;
  gender: string;
  password: string;
  categories: Category[];
  username: string;
  aboutme: string;
  isOng: boolean;
};

export type ResetPasswordPayload = {
  token: string;
  newPassword: string;
};

export type LoginResponse = {
  access_token: string;
  user: User;
};
