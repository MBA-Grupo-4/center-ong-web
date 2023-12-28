import { Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import LogoIcon from "../../../../assets/logo.png";
import TextRaleway from "../../../../components/TextRaleway";
import Username from "./components/Username";
import PersonalData from "./components/PersonalData";
import InterestCategories from "./components/InterestCategories";
import Password from "./components/Password";
import Stepper from "./components/Stepper";
import {
  Category,
  PersonalDataPayload,
  SignupPayload,
} from "../../../../models/Auth";

type Props = {
  onPressReturn: (value: number) => void;
};

const Create: React.FC<Props> = ({ onPressReturn }) => {
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

  const handleCategoriesData = (data: Category[]): void => {
    const updatedData: SignupPayload = { ...signupData, categories: data };

    setSignupData(updatedData);
  };

  const handleBackPress = (): void => {
    onPressReturn(1);
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
          onPressNext={handleCategoriesData}
        />
      )}
      {actualStep === 4 && <Password onPressFinish={handlePasswordData} />}
    </Flex>
  );
};

export default Create;
