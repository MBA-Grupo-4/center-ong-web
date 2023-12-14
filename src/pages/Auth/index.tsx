import React from "react";

import DefaultContainer from "../../components/DefaultContainer";

import LoginImage from "../../assets/login-image.png";

import { Image } from "@chakra-ui/react";
import Login from "./components/Login";
import Create from "./components/Create";

const Auth: React.FC = () => {
  return (
    <DefaultContainer flexDir={"row"} alignItems={"center"} height={"100vh"}>
      <Image src={LoginImage} />
      {/* <Login />  */}
      <Create />
    </DefaultContainer>
  );
};

export default Auth;
