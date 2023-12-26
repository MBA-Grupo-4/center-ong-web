import { Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import LogoIcon from "../../../../assets/logo.png";
import TextRaleway from "../../../../components/TextRaleway";
import Username from "./components/Username";
import PersonalData from "./components/PersonalData";
import InterestCategories from "./components/InterestCategories";
import Password from "./components/Password";
import Stepper from "./components/Stepper";
import { PersonalDataPayload, SignupPayload } from "../../../../models/Auth";

const Create: React.FC = () => {
  const [actualStep, setActualStep] = useState(1);

  const [signupData, setSignupData] = useState<SignupPayload>(
    {} as SignupPayload
  );

  const handleAccountStep = (type: "next" | "previous"): void => {
    if (type === "next") {
      setActualStep((prev) => prev + 1);
    } else {
      setActualStep((prev) => prev - 1);
    }
  };

  const handleName = (name: string): void => {
    handleAccountStep("next");
    const data: SignupPayload = { ...signupData, name: name };
    setSignupData(data);
  };

  const handlePersonalData = (data: PersonalDataPayload): void => {
    const updatedData: SignupPayload = { ...signupData, ...data };
    setSignupData(updatedData);
  };

  const handlePasswordData = (password: string): void => {
    const updatedData: SignupPayload = { ...signupData, password };
    setSignupData(updatedData);
  };

  const handleBackPress = (): void => {
    console.log("press back");
  };

  return (
    <Flex
      flexDir={"column"}
      width={"50%"}
      marginLeft={"5vw"}
      alignItems={"center"}
    >
      <Image src={LogoIcon} alignSelf={"center"} />

      <TextRaleway
        color={"custom.blue200"}
        alignSelf={"flex-start"}
        fontSize={"x-large"}
        fontWeight={"bold"}
      >
        Criar conta
      </TextRaleway>

      <Stepper activeStep={actualStep} />

      {actualStep === 1 && (
        <Username onPressBack={handleBackPress} onSendData={handleName} />
      )}
      {actualStep === 2 && (
        <PersonalData
          onPressStep={(type: "next" | "previous") => handleAccountStep(type)}
          handleData={(data: PersonalDataPayload) => handlePersonalData(data)}
        />
      )}
      {actualStep === 3 && (
        <InterestCategories
          onPressStep={(type: "next" | "previous") => handleAccountStep(type)}
        />
      )}
      {actualStep === 4 && <Password onPressFinish={handlePasswordData} />}
    </Flex>
  );
};

export default Create;
