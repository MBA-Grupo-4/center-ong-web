export type BaseUser = {
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
};
