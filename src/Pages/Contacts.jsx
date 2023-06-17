import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';

// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Container } from 'components/Container/Container';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter />
      {isLoading && !error && <div>LOADING...</div>}
      <ContactList /> */}
      </Container>
    </div>
  );
};

export default Contacts;
