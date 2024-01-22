import { Button, Flex, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextRaleway from "../../../../../components/TextRaleway";
import CategoryItem from "./CategoryItem";

import { Category, SignupPayload } from "../../../../../models/Auth";
import { getCategories } from "../../../../../services/Category";

type Props = {
  onPressStep: (type: "next" | "previous") => void;
  onPressNext: (categories: Category[], ongCategory: Category) => void;
  userPayload: SignupPayload;
};

const InterestCategories: React.FC<Props> = ({
  onPressStep,
  onPressNext,
  userPayload,
}) => {
  const toast = useToast();

  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [ongCategory, setOngCategory] = useState<Category>({} as Category);

  const loadCategories = async (): Promise<void> => {
    try {
      const response = await getCategories();

      setCategories(response.data);
    } catch (err) {
      console.log("err load categories", err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleCategories = (data: Category): void => {
    const findCategory = selectedCategories.find(
      (category) => category.id === data.id
    );

    if (!findCategory) {
      setSelectedCategories((prev) => [...prev, { ...data }]);
    } else {
      const updatedCategories = selectedCategories.filter(
        (category) => category.id !== data.id
      );
      setSelectedCategories(updatedCategories);
    }
  };

  const handleOngCategory = (data: Category): void => {
    setOngCategory(data);
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

    if (userPayload.isOng && !ongCategory) {
      toast({
        title: "Nenhuma categoria selecionada",
        description: "Selecione a categoria de atuação da sua ong",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    onPressStep("next");
    onPressNext(selectedCategories, ongCategory);
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
        Categorias
      </TextRaleway>

      {userPayload.isOng ? (
        <>
          <TextRaleway
            fontWeight={"regular"}
            color={"custom.gray100"}
            fontSize={"18"}
            alignSelf={"flex-start"}
            mb={"6vh"}
            mt={"2vh"}
          >
            Selecione abaixo a categoria que sua ONG se encaixa.
          </TextRaleway>

          <Flex wrap={"wrap"} maxW={"80%"}>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                data={category}
                onClick={handleOngCategory}
                isSelected={ongCategory.id === category.id}
              />
            ))}
          </Flex>
        </>
      ) : (
        <></>
      )}

      <TextRaleway
        fontWeight={"regular"}
        color={"custom.gray100"}
        fontSize={"18"}
        alignSelf={"flex-start"}
        mb={"6vh"}
        mt={"2vh"}
      >
        Selecione abaixo as categorias que você se interessa para contribuir.
      </TextRaleway>

      <Flex wrap={"wrap"} maxW={"80%"}>
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
