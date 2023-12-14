import { Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../components/TextRaleway";

const PersonalData: React.FC = () => {
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
        Dados pessoais
      </TextRaleway>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          E-mail
        </TextRaleway>
        <Input h={"5vh"} placeholder="seu e-mail" />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Data de Nascimento
        </TextRaleway>
        <Input h={"5vh"} placeholder="seu nome" />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Telefone
        </TextRaleway>
        <Input h={"5vh"} placeholder="(__) _________-____" />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Gênero
        </TextRaleway>
        <Select placeholder="Selecione uma das opções">
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="unanswered">Prefiro não responder</option>
        </Select>
      </Flex>

      <Flex justifyContent={"space-between"} width={"70%"} mt={"5vh"}>
        <Button
          bg="transparent"
          height={"5vh"}
          w={"45%"}
          borderWidth={"1px"}
          borderColor={"custom.blue200"}
        >
          <TextRaleway color="custom.blue200">Voltar</TextRaleway>
        </Button>
        <Button
          bg="custom.blue100"
          height={"5vh"}
          w={"45%"}
          _hover={{
            bg: "custom.blue200",
          }}
        >
          <TextRaleway color="white">Próximo</TextRaleway>
        </Button>
      </Flex>
    </Flex>
  );
};

export default PersonalData;
