import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import TextRaleway from "../../../../../components/TextRaleway";
import styles from "../../../styles.module.css";
type Props = {
  onPressFinish: (data: string) => void;
  isLoading: boolean;
};

const Password: React.FC<Props> = ({ onPressFinish, isLoading }) => {
  const toast = useToast();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswords = (): void => {
    if (password !== confirmPassword) {
      toast({
        title: "As senhas não são iguais",
        description: "Verifique as senhas e tente novamente!",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    onPressFinish(password);
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
        Crie uma senha
      </TextRaleway>

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
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

      <Flex flexDir={"column"} w={"70%"} mb={"2vh"} mt={"2vh"}>
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

      <Flex justifyContent={"space-between"} width={"70%"} mt={"5vh"}>
        <Button
          bg="custom.blue100"
          height={"5vh"}
          w={"100%"}
          _hover={{
            bg: "custom.blue200",
          }}
          onClick={() => handlePasswords()}
          isLoading={isLoading}
        >
          <TextRaleway color="white">Criar conta</TextRaleway>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Password;
