import { Flex, Image, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import LogoIcon from "../../../assets/logo.png";
import LoginImage from "../../../assets/login-image.png";

import TextRaleway from "../../../components/TextRaleway";
import Username from "./components/Username";
import PersonalData from "./components/PersonalData";
import InterestCategories from "./components/InterestCategories";
import Password from "./components/Password";
import Stepper from "./components/Stepper";

import {
  Category,
  PersonalDataPayload,
  SignupPayload,
} from "../../../models/Auth";

import { postCreateUser } from "../../../services/User";

import DefaultContainer from "../../../components/DefaultContainer";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
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

  const handleName = (username: string, name: string, isOng: boolean): void => {
    handleAccountStep("next");
    const data: SignupPayload = { ...signupData, username, isOng, name };
    setSignupData(data);
  };

  const handlePersonalData = (data: PersonalDataPayload): void => {
    const updatedData: SignupPayload = { ...signupData, ...data };
    setSignupData(updatedData);
  };

  const handleBackPress = (): void => {
    navigate("/login");
  };

  const handlePasswordData = async (password: string): Promise<void> => {
    setLoading(true);
    const updatedData: SignupPayload = {
      ...signupData,
      password,
      aboutme: "Edite as informações do seu perfil.",
    };

    setSignupData(updatedData);

    try {
      await postCreateUser(updatedData);
      toast({
        title: "Conta criada com sucesso!",
        description:
          "Sua conta foi criada! faça o login para acessar nossa plataforma e conferir algumas das ONGS na nossa plataforma.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);

      handleBackPress();
    } catch (err: any) {
      toast({
        title: "Erro ao criar conta!",
        description: err.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleCategoriesData = (
    data: Category[],
    ongCategory: Category
  ): void => {
    const updatedData: SignupPayload = {
      ...signupData,
      categories: data,
      category: signupData.isOng ? ongCategory : null,
    };

    setSignupData(updatedData);
  };

  return (
    <DefaultContainer flexDir={"row"} alignItems={"center"} height={"100vh"}>
      <Image src={LoginImage} />
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
            userPayload={signupData}
          />
        )}
        {actualStep === 3 && (
          <InterestCategories
            onPressStep={(type: "next" | "previous") => handleAccountStep(type)}
            onPressNext={handleCategoriesData}
            userPayload={signupData}
          />
        )}
        {actualStep === 4 && (
          <Password onPressFinish={handlePasswordData} isLoading={loading} />
        )}
      </Flex>
    </DefaultContainer>
  );
};

export default Create;
