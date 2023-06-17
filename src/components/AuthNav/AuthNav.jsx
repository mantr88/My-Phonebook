import { Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LuFileSignature, LuLogIn } from 'react-icons/lu';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">
        <Button
          colorScheme="black"
          variant="outline"
          rightIcon={<Icon as={LuFileSignature} boxSize={5} />}
          mr={4}
          color={theme => theme.colors.darkText}
          borderWidth="2px"
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
        >
          LogIn
        </Button>
      </Link>
    </div>
  );
};
