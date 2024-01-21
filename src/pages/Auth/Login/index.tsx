import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import TextRaleway from "../../../components/TextRaleway";
import LogoIcon from "../../../assets/logo.png";
import { getUser, postLogin } from "../../../services/User";
import { BaseUser } from "../../../models/User";
import { authRepository } from "../../../repositories/auth.repository";
import DefaultContainer from "../../../components/DefaultContainer";

import LoginImage from "../../../assets/login-image.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const signIn = async (): Promise<void> => {
    if (email === "" || password === "") {
      toast({
        title: "Dados incorretos.",
        description:
          "Preencha os dados corretamente para acessar a plataforma.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
    setLoading(true);
    try {
      const response = await postLogin({ email, password });

      const data: BaseUser = {
        ...response.data.user,
        access_token: response.data.access_token,
      };
      authRepository.setLoggedUser(data);

      const userData = await getUser(response.data.user.id);

      data.following = userData.data.following;

      authRepository.setLoggedUser(data);

      navigate("/feed");
      toast({
        title: "Acesso permitido!",
        description: "Seja bem vindo(a) ao Central das Ongs.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
    } catch (err: any) {
      if (err.response.status === 401) {
        toast({
          title: "Erro de acesso!",
          description: "Usuário ou senha inválidos!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      setLoading(false);
    }
  };

  const handleSignupClick = (): void => {
    navigate("/register");
  };

  const handleForgotPassword = (): void => {
    navigate("/forgot-password");
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

        <Flex flexDir={"column"} w={"70%"} mb={"2vh"}>
          <TextRaleway color={"custom.blue200"}>E-mail</TextRaleway>
          <Input
            h={"5vh"}
            placeholder="seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Flex>

        <Flex flexDir={"column"} w={"70%"}>
          <TextRaleway color={"custom.blue200"}>Senha</TextRaleway>
          <InputGroup>
            <Input
              h={"5vh"}
              placeholder="sua senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </Flex>

        <TextRaleway
          onClick={() => handleForgotPassword()}
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
          onClick={signIn}
          isLoading={loading}
        >
          <TextRaleway color="white">Entrar</TextRaleway>
        </Button>

        <Flex mt={"5vh"}>
          <TextRaleway fontSize={"large"}>Não tem conta?</TextRaleway>
          <TextRaleway
            onClick={() => handleSignupClick()}
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
    </DefaultContainer>
  );
};

export default Login;
