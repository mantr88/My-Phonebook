import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Box } from '@chakra-ui/react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Box
        as="ul"
        paddingX="16px"
        paddingY="0"
        maxW="480px"
        maxH={['360px', '340px', '340px']}
        mx="auto"
        overflow="scroll"
      >
        {visibleContacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </Box>
    </>
  );
};
