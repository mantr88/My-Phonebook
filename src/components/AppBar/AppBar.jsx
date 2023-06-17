import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Stack } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Stack
      as="header"
      direction={['column', 'row', 'row']}
      alignItems="center"
      justify="space-between"
      p="10px"
      sx={{
        backgroundColor: 'hsla(183, 86%, 19%, 0.9)',
        backdropFilter: 'blur(8px)',
        border: '2px solid',
        borderColor: '#003b46',
        borderRadius: '10px',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Stack>
  );
};
