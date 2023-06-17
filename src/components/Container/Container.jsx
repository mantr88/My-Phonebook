import { Box } from '@chakra-ui/react';

export const Container = ({ children }) => {
  return (
    <Box
      bg={theme => theme.colors.bg}
      m="4"
      borderRadius="10px"
      border="2px solid"
      borderColor={theme => theme.colors.main}
      h="80vh"
      pt="12"
    >
      {children}
    </Box>
  );
};
