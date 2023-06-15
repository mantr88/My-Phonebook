import { Box, Heading, Text } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <>
      <Box
        bg="#c4dfe6"
        m="12"
        borderRadius="3xl"
        h="70vh"
        opacity="0.5"
        pt="20"
      >
        <Heading color="#003b46">
          🏠This is home page of our application🏠
        </Heading>
        <Text fontSize="3xl" fontWeight="large" mt="50px">
          Please, register or login to enjoy using your personal phone book
        </Text>
      </Box>
    </>
  );
};
