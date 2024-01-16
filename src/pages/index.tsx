import React, { useEffect } from "react";
import { authRepository } from "../repositories/auth.repository";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const user = authRepository.getLoggedUser();

  useEffect(() => {
    if (user) {
      navigate("/feed");
    } else {
      navigate("/login");
    }
  }, []);
  return <div></div>;
};

export default Index;
