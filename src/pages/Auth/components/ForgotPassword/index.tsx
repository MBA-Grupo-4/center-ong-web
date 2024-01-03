import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import TextRaleway from "../../../../components/TextRaleway";
import LogoIcon from "../../../../assets/logo.png";

type Props = {
  onPressForgot: (value: number) => void;
};

const ForgotPassword: React.FC<Props> = ({ onPressForgot }) => {
  const [email, setEmail] = useState<string>("");

  const handleForgotPassword = (): void => {
    // todo send email
    onPressForgot(4);
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
        Preencha o campo abaixo com o e-mail cadastrado em nossa plataforma para
        iniciar o processo de recuperação de senha.
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
  );
};

export default ForgotPassword;
