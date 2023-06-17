import { useDispatch, useSelector } from 'react-redux';
// import { Avatar, Logout, Name } from './UserMenu.styled';
// import avatar from './avatar-profile-icon.png';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <Box>
      <Flex
        alignItems="center"
        gap="15px"
        direction={['column', 'row', 'row']}
      >
        <Icon
          as={BiUserCircle}
          boxSize={8}
          color={theme => theme.colors.darkText}
        />
        <Text
          fontSize={17}
          fontWeight="bold"
          color={theme => theme.colors.darkText}
        >
          Welcome {name}!
        </Text>
        <Button
          type="button"
          onClick={() => dispatch(logout())}
          colorScheme="black"
          variant="outline"
          rightIcon={<Icon as={LuLogOut} boxSize={5} />}
          color={theme => theme.colors.darkText}
          borderWidth="2px"
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
};
