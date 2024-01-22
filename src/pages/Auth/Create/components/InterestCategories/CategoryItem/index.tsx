import { Box } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../components/TextRaleway";
import { Category } from "../../../../../../models/Auth";

type Props = {
  data: Category;
  onClick: (data: Category) => void;
  isSelected: boolean;
};

const CategoryItem: React.FC<Props> = ({ data, onClick, isSelected }) => {
  return (
    <Box onClick={() => onClick(data)}>
      <TextRaleway
        color={isSelected ? "white" : "custom.purple100"}
        fontWeight={"medium"}
        fontSize={"14"}
        borderWidth={"1px"}
        borderColor={"#DDDDDD"}
        bgColor={isSelected ? "custom.yellow100" : "transparent"}
        pt={"1vh"}
        pb={"1vh"}
        pl={"2vw"}
        pr={"2vw"}
        borderRadius={"5vw"}
        mb={"1vh"}
        ml={"1vw"}
        transition={!isSelected && "border-color 0.3s ease-in-out"}
        _hover={{ borderColor: !isSelected && "custom.yellow100" }}
        cursor={"pointer"}
      >
        {data.name}
      </TextRaleway>
    </Box>
  );
};

export default CategoryItem;
