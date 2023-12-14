import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../components/TextRaleway";

const Password: React.FC = () => {
  return (
    <Flex flexDir={"column"} w={"100%"}>
      <TextRaleway
        fontWeight={"bold"}
        color={"custom.gray100"}
        fontSize={"18"}
        alignSelf={"flex-start"}
        mb={"2vh"}
        mt={"2vh"}
      >
        Crie uma senha
      </TextRaleway>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Senha
        </TextRaleway>
        <Input h={"5vh"} placeholder="sua senha" type="password" />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Confirme a senha
        </TextRaleway>
        <Input h={"5vh"} placeholder="confirme a senha" type="password" />
      </Flex>

      <Flex justifyContent={"space-between"} width={"70%"} mt={"5vh"}>
        <Button
          bg="custom.blue100"
          height={"5vh"}
          w={"100%"}
          _hover={{
            bg: "custom.blue200",
          }}
        >
          <TextRaleway color="white">Criar conta</TextRaleway>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Password;
