import { Flex, Image, useToast } from "@chakra-ui/react";
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
import { postCreateUser } from "../../../../services/User";

type Props = {
  onPressReturn: (value: number) => void;
};

const Create: React.FC<Props> = ({ onPressReturn }) => {
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

  const handleName = (username: string, isOng: boolean): void => {
    handleAccountStep("next");
    const data: SignupPayload = { ...signupData, username, isOng };
    setSignupData(data);
  };

  const handlePersonalData = (data: PersonalDataPayload): void => {
    const updatedData: SignupPayload = { ...signupData, ...data };
    setSignupData(updatedData);
  };

  const handleBackPress = (): void => {
    onPressReturn(1);
  };

  const handlePasswordData = async (password: string): Promise<void> => {
    setLoading(true);
    const updatedData: SignupPayload = { ...signupData, password };

    setSignupData(updatedData);
    console.log(updatedData);

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
    } catch (err) {
      console.log(err);
      toast({
        title: "Erro ao criar conta!",
        description: "Verifique as senhas e tente novamente!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleCategoriesData = (data: Category[]): void => {
    const updatedData: SignupPayload = { ...signupData, categories: data };

    setSignupData(updatedData);
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
      {actualStep === 4 && (
        <Password onPressFinish={handlePasswordData} isLoading={loading} />
      )}
    </Flex>
  );
};

export default Create;
