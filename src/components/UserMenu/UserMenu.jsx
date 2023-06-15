import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Logout, Name } from './UserMenu.styled';
import avatar from './avatar-profile-icon.png';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { BiUser } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <Box>
      <Flex alignItems="center" gap="15px">
        <Icon as={BiUser} boxSize={8} />
        <Name>Welcome {name}!</Name>
        <Button
          type="button"
          onClick={() => dispatch(logout())}
          colorScheme="black"
          variant="outline"
          rightIcon={<Icon as={LuLogOut} boxSize={5} />}
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
};
