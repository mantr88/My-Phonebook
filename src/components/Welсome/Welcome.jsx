import { Box, Heading, Text } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <Box p="20">
      <Heading>🏠This is home page of our application🏠</Heading>
      <Text fontSize="3xl" fontWeight="large" mt="50px">
        Please, register or login to enjoy using your personal phone
        book
      </Text>
    </Box>
  );
};
