import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import TextRaleway from "../../../../components/TextRaleway";
import LogoIcon from "../../../../assets/logo.png";

type Props = {
  onPressChangePassword: (value: number) => void;
};

const ChangePassword: React.FC<Props> = ({ onPressChangePassword }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswords = (): void => {
    if (password !== confirmPassword) {
      return;
    }

    onPressChangePassword(1);
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
        Alterar senha
      </TextRaleway>

      <TextRaleway
        color={"custom.gray100"}
        alignSelf={"flex-start"}
        fontSize={"medium"}
        fontWeight={"regular"}
        mt={"1vh"}
        w={"70%"}
      >
        Preencha os campos abaixo com a sua nova senha.
      </TextRaleway>

      <Flex
        flexDir={"column"}
        w={"70%"}
        mb={"2vh"}
        mt={"2vh"}
        alignSelf={"flex-start"}
      >
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Senha
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="sua senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Flex>

      <Flex
        flexDir={"column"}
        w={"70%"}
        mb={"2vh"}
        mt={"2vh"}
        alignSelf={"flex-start"}
      >
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Confirme a senha
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="confirme a senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        onClick={() => handlePasswords()}
      >
        <TextRaleway color="white">Alterar senha</TextRaleway>
      </Button>
    </Flex>
  );
};

export default ChangePassword;