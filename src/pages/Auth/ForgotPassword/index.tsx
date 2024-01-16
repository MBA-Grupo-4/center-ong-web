import { Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import TextRaleway from "../../../components/TextRaleway";
import DefaultContainer from "../../../components/DefaultContainer";

import LogoIcon from "../../../assets/logo.png";
import LoginImage from "../../../assets/login-image.png";

import { postForgotPassword } from "../../../services/User";

const ForgotPassword: React.FC = () => {
  const toast = useToast();
  const [email, setEmail] = useState<string>("");

  const handleForgotPassword = async (): Promise<void> => {
    try {
      await postForgotPassword(email);
      toast({
        title: "Cheque o e-mail cadastrado!",
        description: "Verifique o e-mail para fazer a alteração da sua senha",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (err: any) {
      toast({
        title: "Verifique os dados.",
        description: err.response.data.message,
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
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
          Recuperar senha
        </TextRaleway>

        <TextRaleway
          color={"custom.gray100"}
          alignSelf={"flex-start"}
          fontSize={"medium"}
          fontWeight={"regular"}
          mt={"1vh"}
          w={"70%"}
        >
          Preencha o campo abaixo com o e-mail cadastrado em nossa plataforma
          para iniciar o processo de recuperação de senha.
        </TextRaleway>

        <Flex
          flexDir={"column"}
          w={"70%"}
          mb={"2vh"}
          mt={"2vh"}
          alignSelf={"flex-start"}
        >
          <TextRaleway color={"custom.blue200"} mb={"1vh"}>
            E-mail
          </TextRaleway>
          <Input
            h={"5vh"}
            placeholder="seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Flex>

        <Button
          bg="custom.blue100"
          height={"5vh"}
          w={"70%"}
          mt={"2vh"}
          alignSelf={"flex-start"}
          _hover={{
            bg: "custom.blue200",
          }}
          onClick={() => handleForgotPassword()}
        >
          <TextRaleway color="white">Enviar</TextRaleway>
        </Button>
      </Flex>
    </DefaultContainer>
  );
};

export default ForgotPassword;
