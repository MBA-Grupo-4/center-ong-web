import { Button, Flex, Input, Select, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import TextRaleway from "../../../../../components/TextRaleway";
import { phoneMask } from "../../../../../utils/masks";
import { PersonalDataPayload } from "../../../../../models/Auth";

type Props = {
  onPressStep: (type: "next" | "previous") => void;
  handleData: (data: PersonalDataPayload) => void;
};

const PersonalData: React.FC<Props> = ({ onPressStep, handleData }) => {
  const toast = useToast();

  const [email, setEmail] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const convertDate = (value: string): void => {
    setBirthdate(value);
  };

  const handleSendData = (): void => {
    const data = { birthdate, email, gender, phone };
    const checkEmptyString = Object.values(data).some(function (string) {
      return string === "";
    });

    if (checkEmptyString) {
      toast({
        title: "Dados incorretos",
        description: "Preencha os dados acima corretamente!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onPressStep("next");
    handleData(data);
  };

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
        <Input
          h={"5vh"}
          placeholder="seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Data de Nascimento
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="data"
          type="date"
          onChange={(e) => convertDate(e.target.value)}
        />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Telefone
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="(__) _________-____"
          onChange={(e) => {
            const phone = phoneMask(e.target.value);
            setPhone(phone);
          }}
          value={phone}
          maxLength={15}
        />
      </Flex>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Gênero
        </TextRaleway>
        <Select
          placeholder="Selecione uma das opções"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Prefiro não responder</option>
        </Select>
      </Flex>

      <Flex justifyContent={"space-between"} width={"70%"} mt={"5vh"}>
        <Button
          bg="transparent"
          height={"5vh"}
          w={"45%"}
          borderWidth={"1px"}
          borderColor={"custom.blue200"}
          onClick={() => onPressStep("previous")}
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
          onClick={() => handleSendData()}
        >
          <TextRaleway color="white">Próximo</TextRaleway>
        </Button>
      </Flex>
    </Flex>
  );
};

export default PersonalData;
