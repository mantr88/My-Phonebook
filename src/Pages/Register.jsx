import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Container } from 'components/Container/Container';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from '@chakra-ui/react';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
        toast('You succesfully logined!', {
          style: { backgroundColor: '#0b980b', color: '#212121' },
        });
      })
      .catch(() => toast.error('Error of login!'));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Heading>Register</Heading>
      <Box display="flex" justifyContent="center">
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormControl mx="2">
            <FormLabel>
              Name
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
                _placeholder={{
                  opacity: 0.6,
                  color: 'black',
                }}
              />
            </FormLabel>
          </FormControl>
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
              <LinkRoute to="/login">Go to Log in</LinkRoute>
            </Link>
            <Button
              type="submit"
              colorScheme="teal"
              mb="10"
              mx={[['10', '50px', '50px']]}
              size="lg"
            >
              Sign Up
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
