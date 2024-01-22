import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Image,
} from "@chakra-ui/react";
import TextRaleway from "../../../../../components/TextRaleway";

import ongLogo from "../../../../../assets/ong-cover.jpg";
import pixImage from "../../../../../assets/pix-code.png";
import { User } from "../../../../../models/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  ongData: User;
};

const DonateModal: React.FC<Props> = ({ isOpen, onClose, ongData }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay onClick={onClose} />
        <ModalContent>
          <ModalHeader fontWeight={"bold"}>Doação</ModalHeader>
          <ModalCloseButton />
          <ModalBody pl={"2vw"} pr={"2vw"}>
            <Image src={ongLogo} w={"100%"} borderRadius={"1vw"} h={"10.5vh"} />

            <TextRaleway
              color={"custom.blue100"}
              fontWeight={"bold"}
              textAlign={"center"}
              mt={"2vh"}
            >
              {`Para fazer uma doação para a Ong ${ongData.name} usando o pix, \n
              basta acessar sua conta e inserir a chave abaixo, ou ler o QR Code`}
            </TextRaleway>

            <Flex marginTop={"2vh"}>
              <Image src={pixImage} />
              <Flex
                flexDir={"column"}
                justifyContent={"space-around"}
                ml={"0.5vw"}
              >
                <TextRaleway color={"custom.gray100"} fontSize={14}>
                  1. Abra o app do seu banco.
                </TextRaleway>
                <TextRaleway color={"custom.gray100"} fontSize={14}>
                  2. Encontre a área PIX dentro do app do seu banco.
                </TextRaleway>
                <TextRaleway color={"custom.gray100"} fontSize={14}>
                  3. Selecione pagar QR Code ou algo do tipo e escaneie a
                  imagem.
                </TextRaleway>
                <TextRaleway color={"custom.gray100"} fontSize={14}>
                  4. Digite o valor que quer doar e confirme a operação conforme
                  instruções na tela.
                </TextRaleway>
              </Flex>
            </Flex>

            <TextRaleway
              color={"custom.gray100"}
              fontSize={16}
              fontWeight={"bold"}
              textAlign={"center"}
              mt={"2vh"}
            >
              ou se preferir, você também pode digitar a chave de e-mail
            </TextRaleway>

            <TextRaleway
              color={"custom.blue100"}
              fontSize={14}
              fontWeight={"bold"}
              textAlign={"center"}
              mt={"2vh"}
            >
              {ongData.keyPix}
            </TextRaleway>

            <TextRaleway
              color={"custom.purple100"}
              fontSize={18}
              fontWeight={"bold"}
              textAlign={"center"}
              mt={"3vh"}
              pb={"2vh"}
            >
              Obrigado por sua doação!
            </TextRaleway>
          </ModalBody>

          {/* <ModalFooter>
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
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DonateModal;
