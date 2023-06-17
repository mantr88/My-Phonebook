import { Box, Heading, Text } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <>
      <Box
        bg="hsla(192, 40%, 84%, 0.6)"
        m="12"
        borderRadius="3xl"
        h="70vh"
        pt="20"
      >
        <Heading>🏠This is home page of our application🏠</Heading>
        <Text fontSize="3xl" fontWeight="large" mt="50px">
          Please, register or login to enjoy using your personal phone book
        </Text>
      </Box>
    </>
  );
};
