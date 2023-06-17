import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/auth-operations';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Flex,
} from '@chakra-ui/react';
import { Container } from 'components/Container/Container';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
        toast('You succesfully logined!', {
          style: { backgroundColor: '#0b980b', color: '#212121' },
        });
      })
      .catch(() => toast.error('Error of login!'));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Heading color={theme => theme.colors.main}>Login</Heading>
      <Box display="flex" justifyContent="center">
        <form onSubmit={handleSubmit} l autoComplete="off">
          <FormControl mx="2">
            <FormLabel>
              Email
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                _placeholder={{
                  opacity: 0.6,
                  color: 'black',
                }}
              />
            </FormLabel>
          </FormControl>
          <FormControl mx="2">
            <FormLabel>
              Password
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
                _placeholder={{
                  opacity: 0.6,
                  color: 'black',
                }}
              />
            </FormLabel>
          </FormControl>
          <Flex direction="column">
            <Link mb="3" color="#00008B">
              <LinkRoute to="/register">Go to Sign Up</LinkRoute>
            </Link>
            <Button
              colorScheme="teal"
              type="submit"
              mb="10"
              mx={[['10', '50px', '50px']]}
              size="lg"
            >
              Log in
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
