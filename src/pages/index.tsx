import React, { useEffect } from "react";
import { authRepository } from "../repositories/auth.repository";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/User";
import { useAuth } from "../hooks/auth";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const user = authRepository.getLoggedUser();
  const { setUserData } = useAuth();

  const loadUserData = async (): Promise<void> => {
    try {
      const response = await getUser(user.id);
      setUserData(response.data);
    } catch (err) {
      console.log("err loaduser data", err);
    }
  };

  useEffect(() => {
    if (user) {
      loadUserData();
      navigate("/feed");
    } else {
      navigate("/login");
    }
  }, []);
  return <div></div>;
};

export default Index;
