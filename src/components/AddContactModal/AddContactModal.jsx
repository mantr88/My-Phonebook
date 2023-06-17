import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const AddContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading as="h3" mb="3">
        Your contacts
      </Heading>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        mb="4"
        maxW="160"
      >
        <SmallAddIcon mr="2" color="white" boxSize={7} />
        Add contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={theme => theme.colors.light}
          borderRadius="3xl"
        >
          <ModalHeader textAlign="center">
            Add contact
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>
          <ModalFooter>
            {/* <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant="ghost">
              Secondary Action
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
