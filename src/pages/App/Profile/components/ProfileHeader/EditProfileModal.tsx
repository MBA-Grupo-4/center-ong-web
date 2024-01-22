import styles from "./styles.module.css";
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Image,
  useDisclosure,
} from '@chakra-ui/react';

const EditProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, setNewName] = useState('');
  const [newAboutMe, setNewAboutMe] = useState('');
  const [newProfileImage, setNewProfileImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setNewProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    // Adicione a lógica para salvar as alterações no perfil aqui
    // Exemplo: dispatch(saveProfileChanges(newName, newAboutMe, selectedFile));
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} className={styles.editarPerfilButton}>
        Editar Perfil
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent className={styles.modalContent}>
          <ModalHeader className={styles.modalHeader}>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody className={styles.modalBody}>
            <Input
              placeholder="Novo Nome"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.inputNovoNome}
            />
            <Textarea
              placeholder="Sobre Mim"
              value={newAboutMe}
              onChange={(e) => setNewAboutMe(e.target.value)}
              mt={2}
              className={styles.textareaSobreMim}
            />
            <Input
              type="file"
              onChange={handleFileChange}
              mt={2}
              className={styles.inputFile}
            />
            {newProfileImage && (
              <Image
                src={newProfileImage}
                alt="Nova Foto do Perfil"
                mt={2}
                className={styles.novaFotoPerfil}
              />
            )}
          </ModalBody>

          <ModalFooter className={styles.modalFooter}>
            <Button colorScheme="blue" mr={3} onClick={onClose} className={styles.fecharButton}>
              Fechar
            </Button>
            <Button variant="ghost" onClick={handleSaveChanges} className={styles.salvarAlteracoesButton}>
              Salvar Alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
