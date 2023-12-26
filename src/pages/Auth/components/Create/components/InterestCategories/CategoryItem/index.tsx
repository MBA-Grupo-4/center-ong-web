import { Box } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../../components/TextRaleway";
import { Category } from "../../../../../../../models/Auth";

type Props = {
  data: Category;
};

const CategoryItem: React.FC<Props> = ({ data }) => {
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
        {data.title}
      </TextRaleway>
    </Box>
  );
};

export default CategoryItem;
