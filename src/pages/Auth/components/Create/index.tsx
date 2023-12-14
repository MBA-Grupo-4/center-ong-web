import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../../../../assets/logo.png";
import TextRaleway from "../../../../components/TextRaleway";
import Username from "./components/Username";
import PersonalData from "./components/PersonalData";
import InterestCategories from "./components/InterestCategories";
import Password from "./components/Password";

const Create: React.FC = () => {
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
        Criar conta
      </TextRaleway>

      {/* <Username /> */}
      {/* <PersonalData /> */}
      {/* <InterestCategories /> */}
      <Password />
    </Flex>
  );
};

export default Create;
