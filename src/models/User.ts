export type User = {
  username: string;
  email: string;
  password: string;
  isOng: boolean;
  birthdate: string;
  telephone: string;
  gender: string;
  categories: string[];
  dateUpdated: string | null;
  dateDeleted: string | null;
  id: number;
  dateInclude: string;
  following?: User[];
};

export type BaseUser = User & {
  access_token: string;
};
