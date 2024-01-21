import React from "react";

import { Box } from "@chakra-ui/react";
import TextRaleway from "../../../../../components/TextRaleway";

const EmptyPosts: React.FC = () => {
  return (
    <Box alignItems={"center"} textAlign={"center"}>
      <TextRaleway fontWeight={"bold"}>Ops, Feed vazio!</TextRaleway>
      <TextRaleway>
        Você não tem nenhum post para ser exibido, siga algumas ONG's para
        movimentar seu feed!
      </TextRaleway>
    </Box>
  );
};

export default EmptyPosts;
