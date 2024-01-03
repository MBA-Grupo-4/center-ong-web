import { Button, Flex, Image, Input, InputGroup } from "@chakra-ui/react";
import React from "react";

import TextRaleway from "../../../../components/TextRaleway";
import LogoIcon from "../../../../assets/logo.png";

type Props = {
  onPressSignup: (value: number) => void;
};

const Login: React.FC<Props> = ({ onPressSignup }) => {
  return (
    <Flex
      flexDir={"column"}
      width={"50%"}
      marginLeft={"5vw"}
      alignItems={"center"}
    >
      <Image src={LogoIcon} alignSelf={"center"} />

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"}>
        <TextRaleway color={"custom.blue200"}>E-mail</TextRaleway>
        <Input h={"5vh"} placeholder="seu e-mail" />
      </Flex>

      <Flex flexDir={"column"} w={"70%"}>
        <TextRaleway color={"custom.blue200"}>Senha</TextRaleway>
        <InputGroup>
          <Input h={"5vh"} placeholder="sua senha" type="password" />
        </InputGroup>
      </Flex>

      <TextRaleway
        onClick={() => onPressSignup(3)}
        w={"70%"}
        textAlign={"end"}
        marginTop={"15px"}
        mb={"15px"}
        color={"custom.orange100"}
        _hover={{
          color: "custom.yellow100",
        }}
        transition={"color 0.3s ease-in-out"}
        cursor={"pointer"}
      >
        Esqueci minha senha
      </TextRaleway>

      <Button
        w={"70%"}
        bg="custom.blue100"
        height={"5vh"}
        _hover={{
          bg: "custom.blue200",
        }}
      >
        <TextRaleway color="white">Entrar</TextRaleway>
      </Button>

      <TextRaleway mt={"2vh"} mb={"2vh"}>
        ou
      </TextRaleway>

      <Button
        w={"70%"}
        height={"5vh"}
        bg="transparent"
        mb={"2vh"}
        borderWidth={"1px"}
      >
        <TextRaleway color="custom.gray100">Continuar com Facebook</TextRaleway>
      </Button>

      <Button
        w={"70%"}
        bg="transparent"
        height={"5vh"}
        mb={"2vh"}
        borderWidth={"1px"}
      >
        <TextRaleway
          onClick={() => console.log("cliquei")}
          color="custom.gray100"
        >
          Continuar com Google
        </TextRaleway>
      </Button>

      <Flex mt={"5vh"}>
        <TextRaleway fontSize={"large"}>Não tem conta?</TextRaleway>
        <TextRaleway
          onClick={() => onPressSignup(2)}
          fontSize={"large"}
          ml={"0.4vw"}
          color={"custom.blue100"}
          fontWeight={"bold"}
          cursor={"pointer"}
          _hover={{
            color: "custom.blue200",
          }}
          transition={"color 0.3s ease-in-out"}
        >
          Criar agora
        </TextRaleway>
      </Flex>
    </Flex>
  );
};

export default Login;
