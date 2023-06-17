import { Button, Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LuFileSignature, LuLogIn } from 'react-icons/lu';

export const AuthNav = () => {
  return (
    <Flex
      direction={['column', 'row', 'row']}
      alignItems="center"
      justify="center"
    >
      <Link to="/register">
        <Button
          colorScheme="black"
          variant="outline"
          rightIcon={<Icon as={LuFileSignature} boxSize={5} />}
          mr={['0', '4', '4']}
          color={theme => theme.colors.darkText}
          borderWidth="2px"
          mb={['3', '0', '0']}
          _hover={{ bg: '#66a5ad' }}
          _active={{
            bg: '#07575b',
            transform: 'scale(0.98)',
            borderColor: '#07575b',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(198, 224, 231, 0.6), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          Registration
        </Button>
      </Link>
      <Link to="/login">
        <Button
          colorScheme="black"
          variant="outline"
          rightIcon={<Icon as={LuLogIn} boxSize={5} />}
          color={theme => theme.colors.darkText}
          borderWidth="2px"
          _hover={{ bg: '#66a5ad' }}
          _active={{
            bg: '#07575b',
            transform: 'scale(0.98)',
            borderColor: '#07575b',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(198, 224, 231, 0.6), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          LogIn
        </Button>
      </Link>
    </Flex>
  );
};
