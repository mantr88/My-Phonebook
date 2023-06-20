import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

export const AddContactModal = ({
  children,
  onClose,
  isOpen,
  onOpen,
}) => {
  return (
    <>
      <Heading as="h3" mb="3" textAlign="center">
        Your contacts
      </Heading>
      <Flex justify={'center'}>
        <Button colorScheme="teal" onClick={onOpen} mb="4">
          <SmallAddIcon mr="2" color="white" boxSize={7} />
          Add contact
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={theme => theme.colors.light}
          borderRadius="3xl"
          p="8"
          mx="2"
          my="auto"
        >
          <ModalHeader textAlign="center">Add contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
