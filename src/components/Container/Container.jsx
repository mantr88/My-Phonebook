import { Box } from '@chakra-ui/react';

export const Container = ({ children }) => {
  return (
    <Box
      bg="hsla(192, 40%, 84%, 0.6)"
      m="12"
      borderRadius="3xl"
      h="70vh"
      pt="20"
    >
      {children}
    </Box>
  );
};
