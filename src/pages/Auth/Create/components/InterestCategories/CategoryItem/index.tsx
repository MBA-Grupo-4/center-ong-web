import { Box } from "@chakra-ui/react";
import React from "react";
import TextRaleway from "../../../../../../components/TextRaleway";
import { Category } from "../../../../../../models/Auth";
import styles from "../../../../styles.module.css";
type Props = {
  data: Category;
  onClick: (data: Category) => void;
  isSelected: boolean;
};

const CategoryItem: React.FC<Props> = ({ data, onClick, isSelected }) => {
  return (
    <Box onClick={() => onClick(data)}>
      <TextRaleway
      className={styles.escolherLogin}
        color={isSelected ? "white !important" : "custom.purple100"}
        box-shadow={isSelected ? "0px 1px 19px -6px #fab005 !important" : "-6px 5px 25px -3px #0000001f"} 
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
        {data.title}
      </TextRaleway>
    </Box>
  );
};

export default CategoryItem;
