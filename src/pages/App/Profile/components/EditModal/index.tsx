import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import TextRaleway from "../../../../../components/TextRaleway";
import { authRepository } from "../../../../../repositories/auth.repository";
import { UserEditPayload } from "../../../../../models/User";
import { patchUpdateUser } from "../../../../../services/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const EditModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const user = authRepository.getLoggedUser();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAboutme(user.aboutme);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event?.target?.files[0];
      //   setSelectedFile(file);

      // Aqui você pode acessar o caminho relativo do arquivo (representação segura)
      console.log("Caminho do arquivo:", file.webkitRelativePath);

      // Aqui você pode adicionar lógica adicional, se necessário}
    }
  };

  const handleEditProfile = async (): Promise<void> => {
    setLoading(true);
    const data: UserEditPayload = {};

    if (name) {
      data.name = name;
    }

    if (aboutme) {
      data.aboutme = aboutme;
    }

    try {
      await patchUpdateUser(data);

      setLoading(false);
      location.reload();
    } catch (err) {
      console.log("err edit profile", err);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay onClick={onClose} />
        <ModalContent>
          <ModalHeader fontWeight={"bold"}>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} w={"100%"} mb={"2vh"} mt={"2vh"}>
              <TextRaleway color={"custom.blue200"} mb={"1vh"}>
                Nome
              </TextRaleway>
              <Input
                h={"5vh"}
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Flex>
            <Flex flexDir={"column"} w={"100%"} mb={"2vh"} mt={"2vh"}>
              <TextRaleway color={"custom.blue200"} mb={"1vh"}>
                Sobre mim
              </TextRaleway>
              <Textarea
                h={"5vh"}
                placeholder="Sobre você"
                value={aboutme}
                onChange={(e) => setAboutme(e.target.value)}
              />
            </Flex>
            <Flex flexDir={"column"} w={"100%"} mb={"2vh"} mt={"2vh"}>
              <TextRaleway color={"custom.blue200"} mb={"1vh"}>
                Foto de perfil(implementar)
              </TextRaleway>
              <Input
                h={"5vh"}
                placeholder="sua senha"
                value={profilePicture}
                type="file"
                size={"lg"}
                pt={"2"}
                pl={"0"}
                onChange={(e) => handleFileChange(e)}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="custom.blue100"
              _hover={{
                bg: "custom.blue200",
              }}
              onClick={handleEditProfile}
              isLoading={loading}
            >
              <TextRaleway color="white">Editar Perfil</TextRaleway>
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
