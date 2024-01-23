/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { APIResponse } from "../models/Request";
import { AxiosError } from "axios";
import { authRepository } from "../repositories/auth.repository";
import { getUser } from "../services/User";
import { User } from "../models/User";

type AuthProps = {
  getUserData: () => Promise<void>;
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = authRepository.getLoggedUser();

  const [userData, setUserData] = useState<User>({} as User);

  const getUserData = async (): Promise<void> => {
    if (!user) {
      return;
    }
    try {
      const response = await getUser(user.id);
      setUserData(response.data);
      authRepository.setLoggedUser({
        ...response.data,
        access_token: user.access_token,
      });
      console.log(response.data);
    } catch (err) {
      console.log("err update User", err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        getUserData,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthProps {
  const context = useContext(AuthContext);

  return context;
}
