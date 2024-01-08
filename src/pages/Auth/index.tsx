import React, { useState } from "react";

import DefaultContainer from "../../components/DefaultContainer";

import LoginImage from "../../assets/login-image.png";

import { Image } from "@chakra-ui/react";
import Login from "./components/Login";
import Create from "./components/Create";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ChangePassword from "./components/ChangePassword";

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
      {renderState === 3 && (
        <ForgotPassword onPressForgot={handleRenderState} />
      )}
      {renderState === 4 && <ResetPassword onPressReset={handleRenderState} />}
      {renderState === 5 && (
        <ChangePassword onPressChangePassword={handleRenderState} />
      )}
    </DefaultContainer>
  );
};

export default Auth;
