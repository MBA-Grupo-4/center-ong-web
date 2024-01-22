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

type AuthProps = {
  getUserData: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = authRepository.getLoggedUser();

  const getUserData = async (): Promise<void> => {
    console.log("oie xD");
    if (!user) {
      return;
    }
    try {
      const response = await getUser(user.id);
      authRepository.setLoggedUser({
        ...response.data,
        access_token: user.access_token,
      });
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
