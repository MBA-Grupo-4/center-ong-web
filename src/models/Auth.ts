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
