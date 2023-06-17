import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Card } from './ContactCard.styled';
import { deleteContact } from '../../redux/operations';
import { Button, Flex, Text } from '@chakra-ui/react';

export const ContactCard = ({
  contact: { name, number, id },
}) => {
  const dispatch = useDispatch();
  return (
    <Flex as="li" flexDirection="row" alignItems="center">
      <Text>{name}</Text> :
      <Text ml="3" mb="2">
        {number}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        colorScheme="teal"
        ml="auto"
        mr="4"
        mb="2"
        p="2"
      >
        Delete
      </Button>
    </Flex>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
