import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import TextRaleway from "../../../../components/TextRaleway";
import LogoIcon from "../../../../assets/logo.png";

type Props = {
  onPressReset: (value: number) => void;
};

const ResetPassword: React.FC<Props> = ({ onPressReset }) => {
  const [code, setCode] = useState<string>("");

  const handleResetPassword = (): void => {
    // todo send email
    onPressReset(5);
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
        Restaurar senha
      </TextRaleway>

      <TextRaleway
        color={"custom.gray100"}
        alignSelf={"flex-start"}
        fontSize={"medium"}
        fontWeight={"regular"}
        mt={"1vh"}
        w={"70%"}
      >
        Insira o código recebido no e-mail abaixo para que possamos alterar a
        sua senha.
      </TextRaleway>

      <Flex
        flexDir={"column"}
        w={"70%"}
        mb={"2vh"}
        mt={"2vh"}
        alignSelf={"flex-start"}
      >
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Código
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="seu código"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          maxLength={4}
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
        onClick={() => handleResetPassword()}
      >
        <TextRaleway color="white">Enviar</TextRaleway>
      </Button>
    </Flex>
  );
};

export default ResetPassword;
