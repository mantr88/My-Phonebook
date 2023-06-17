import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Container } from 'components/Container/Container';
import { AddContactModal } from 'components/AddContactModal/AddContactModal';
import { useDisclosure } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <AddContactModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <ContactForm onClose={onClose} />
        </AddContactModal>
        <Filter />
        {isLoading && !error && <div>LOADING...</div>}
        <ContactList />
      </Container>
    </div>
  );
};

export default Contacts;
