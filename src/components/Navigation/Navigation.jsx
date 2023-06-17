import { Button, Flex, Icon } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiContactsBook2Line } from 'react-icons/ri';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex as="nav" direction={['column', 'row', 'row']}>
      <Link to="/">
        <Button
          leftIcon={<Icon as={BiHomeAlt2} />}
          colorScheme="teal"
          color={theme => theme.colors.darkText}
          size="md"
          variant="ghost"
        >
          Home
        </Button>
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <Button
            leftIcon={<Icon as={RiContactsBook2Line} />}
            colorScheme="teal"
            color={theme => theme.colors.darkText}
            size="md"
            variant="ghost"
          >
            Contacts
          </Button>
        </Link>
      )}
    </Flex>
  );
};
