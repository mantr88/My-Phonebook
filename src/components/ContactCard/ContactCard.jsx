import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Card } from './ContactCard.styled';
import { deleteContact } from '../../redux/operations';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FaUserTimes } from 'react-icons/fa';

export const ContactCard = ({
  contact: { name, number, id },
}) => {
  const dispatch = useDispatch();
  return (
    <Flex
      as="li"
      flexDirection="row"
      alignItems="center"
      fontSize={['l', 'l', 'xl']}
    >
      <Flex direction={['column', 'column', 'row']}>
        <Text>{name}:</Text>
        <Text ml="3" mb="2">
          {number}
        </Text>
      </Flex>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        colorScheme="teal"
        ml="auto"
        mr="4"
        mb="2"
        p="2"
      >
        <Icon as={FaUserTimes} />
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
