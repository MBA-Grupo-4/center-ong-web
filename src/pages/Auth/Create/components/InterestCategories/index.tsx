import { Button, Flex, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextRaleway from "../../../../../components/TextRaleway";
import CategoryItem from "./CategoryItem";
import { categories } from "../../../../../config/category";
import { Category } from "../../../../../models/Auth";

type Props = {
  onPressStep: (type: "next" | "previous") => void;
  onPressNext: (categories: Category[]) => void;
};

const InterestCategories: React.FC<Props> = ({ onPressStep, onPressNext }) => {
  const toast = useToast();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const handleCategories = (data: Category): void => {
    const findCategory = selectedCategories.find(
      (category) => category.id === data.id
    );

    if (!findCategory) {
      setSelectedCategories((prev) => [...prev, data]);
    } else {
      const updatedCategories = selectedCategories.filter(
        (category) => category.id !== data.id
      );
      setSelectedCategories(updatedCategories);
    }
  };

  const handleNextPress = (): void => {
    if (selectedCategories.length < 1) {
      toast({
        title: "Nenhuma categoria selecionada",
        description:
          "Selecione uma das categorias acima para receber informações relacionadas a categoria selecionada.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onPressStep("next");
    onPressNext(selectedCategories);
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
        Categorias de interesse
      </TextRaleway>

      <Flex wrap={"wrap"}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            data={category}
            onClick={handleCategories}
            isSelected={selectedCategories.some(
              (item) => item.id === category.id
            )}
          />
        ))}
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
          onClick={() => handleNextPress()}
        >
          <TextRaleway color="white">Próximo</TextRaleway>
        </Button>
      </Flex>
    </Flex>
  );
};

export default InterestCategories;
