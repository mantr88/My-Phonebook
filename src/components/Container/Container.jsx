import { Box } from '@chakra-ui/react';

export const Container = ({ children }) => {
  return (
    <Box
      bg={theme => theme.colors.bg}
      m="4"
      borderRadius="3xl"
      // h="70vh"
      pt="12"
    >
      {children}
    </Box>
  );
};
