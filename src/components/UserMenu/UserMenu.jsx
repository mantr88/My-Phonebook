import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Logout, Name } from './UserMenu.styled';
import avatar from './avatar-profile-icon.png';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <Box>
      <Avatar src={avatar} alt="avatar-profile" width="32" />
      <Name>Welcome {name}!</Name>
      <Logout type="button" onClick={() => dispatch(logout())}>
        LogOut
      </Logout>
    </Box>
  );
};
