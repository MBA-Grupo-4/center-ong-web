import { Box } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../../components/TextRaleway";

const CategoryItem: React.FC = () => {
  return (
    <Box>
      <TextRaleway
        color={"custom.purple100"}
        fontWeight={"medium"}
        fontSize={"14"}
        borderWidth={"1px"}
        borderColor={"#DDDDDD"}
        pt={"1vh"}
        pb={"1vh"}
        pl={"2vw"}
        pr={"2vw"}
        borderRadius={"5vw"}
        mb={"1vh"}
        ml={"1vw"}
      >
        Categoria
      </TextRaleway>
    </Box>
  );
};

export default CategoryItem;
