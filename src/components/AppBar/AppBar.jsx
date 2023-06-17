import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Box, Flex } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      as="header"
      p="10px"
      sx={{
        backgroundColor: 'hsla(192, 40%, 84%, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '2px solid',
        borderColor: '#003b46',
        borderRadius: '10px',
      }}
    >
      <Flex
        alignItems="center"
        justify="space-between"
        direction={['column', 'row', 'row']}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
