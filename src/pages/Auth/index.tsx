import React, { useState } from "react";

import DefaultContainer from "../../components/DefaultContainer";

import LoginImage from "../../assets/login-image.png";

import { Image } from "@chakra-ui/react";
import Login from "./components/Login";
import Create from "./components/Create";

const Auth: React.FC = () => {
  const [renderState, setRenderState] = useState(1);

  const handleRenderState = (value: number): void => {
    setRenderState(value);
  };

  return (
    <DefaultContainer flexDir={"row"} alignItems={"center"} height={"100vh"}>
      <Image src={LoginImage} />
      {renderState === 1 && <Login onPressSignup={handleRenderState} />}
      {renderState === 2 && <Create onPressReturn={handleRenderState} />}
    </DefaultContainer>
  );
};

export default Auth;
