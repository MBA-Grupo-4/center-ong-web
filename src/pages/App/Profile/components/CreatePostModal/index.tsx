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
  useToast,
} from "@chakra-ui/react";
import TextRaleway from "../../../../../components/TextRaleway";
import { authRepository } from "../../../../../repositories/auth.repository";
import { UserEditPayload } from "../../../../../models/User";
import { patchUpdateUser } from "../../../../../services/User";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../firebase";
import { CreatePostPayload } from "../../../../../models/Feed";
import { postCreatePost } from "../../../../../services/Feed";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreatePostModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const user = authRepository.getLoggedUser();
  const toast = useToast();

  const [content, setContent] = useState("");
  const [postPicture, setPostPicture] = useState<File>();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event?.target?.files[0];
      setPostPicture(file);
    }
  };

  const handleCreatePost = async (): Promise<void> => {
    if (!user || content.length < 1) {
      return;
    }
    const data: CreatePostPayload = {
      userId: user.id,
      content,
      image: null,
    };
    setLoading(true);

    if (content.length < 1) {
      return;
    }

    try {
      if (postPicture) {
        const storageRef = ref(storage, `images/${postPicture.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, postPicture);
        await getDownloadURL(uploadTask.ref).then((imageUrl) => {
          data.image = imageUrl;
        });
      }
      await postCreatePost(data);

      setLoading(false);
      location.reload();
    } catch (err) {
      console.log("err create psot", err);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay onClick={onClose} />
        <ModalContent>
          <ModalHeader fontWeight={"bold"}>Criar Publicação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} w={"100%"} mb={"2vh"} mt={"2vh"}>
              <TextRaleway color={"custom.blue200"} mb={"1vh"}>
                Nome
              </TextRaleway>
              <Textarea
                h={"5vh"}
                placeholder="Conteúdo da publicação"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Flex>

            <Flex flexDir={"column"} w={"100%"} mb={"2vh"} mt={"2vh"}>
              <TextRaleway color={"custom.blue200"} mb={"1vh"}>
                Foto da publicação
              </TextRaleway>
              <Input
                h={"5vh"}
                placeholder="sua senha"
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
              bg="custom.purple100"
              _hover={{
                bg: "custom.purple200",
              }}
              onClick={handleCreatePost}
              isLoading={loading}
            >
              <TextRaleway color="white">Criar Publicação</TextRaleway>
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

export default CreatePostModal;
