import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch,
  useToast,
} from "@chakra-ui/react";
import TextRaleway from "../../../../../components/TextRaleway";

type Props = {
  onPressBack: () => void;
  onSendData: (username: string, isOng: boolean) => void;
};

const Username: React.FC<Props> = ({ onPressBack, onSendData }) => {
  const toast = useToast();
  const [username, setUsername] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleData = (): void => {
    if (username.length < 3) {
      toast({
        title: "Nome incompleto",
        description: "Preencha o nome corretamente!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onSendData(username, isChecked);
  };

  return (
    <Flex flexDir={"column"} w={"100%"}>
      <TextRaleway
        fontWeight={"bold"}
        color={"custom.orange100"}
        fontSize={"18"}
        alignSelf={"flex-start"}
        mb={"2vh"}
        mt={"2vh"}
      >
        Qual é seu nome?
      </TextRaleway>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
        <TextRaleway color={"custom.blue200"} mb={"1vh"}>
          Nome completo
        </TextRaleway>
        <Input
          h={"5vh"}
          placeholder="seu nome"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Flex>

      <FormControl display="flex" alignItems="center">
        <FormLabel
          fontWeight={"bold"}
          color={"custom.blue200"}
          fontSize={"18"}
          mt={"1.5"}
        >
          SOU ONG
        </FormLabel>
        <Switch onChange={handleChange} isChecked={isChecked} />
      </FormControl>

      <Flex justifyContent={"space-between"} width={"70%"} mt={"5vh"}>
        <Button
          bg="transparent"
          height={"5vh"}
          w={"45%"}
          borderWidth={"1px"}
          borderColor={"custom.blue200"}
          onClick={() => onPressBack()}
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
          onClick={() => handleData()}
        >
          <TextRaleway color="white">Próximo</TextRaleway>
        </Button>
      </Flex>

      <Flex mt={"5vh"}>
        <TextRaleway fontSize={"large"}>Já tem conta?</TextRaleway>
        <TextRaleway
          onClick={() => onPressBack()}
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
          Entrar
        </TextRaleway>
      </Flex>
    </Flex>
  );
};

export default Username;