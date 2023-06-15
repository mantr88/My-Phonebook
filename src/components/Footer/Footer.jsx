import { Box, Text } from '@chakra-ui/react';
export const Footer = () => {
  return (
    <Box
      as="footer"
      p="10px"
      sx={{
        backgroundColor: 'hsla(192, 40%, 84%, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '2px solid',
        borderColor: '#003b46',
        borderRadius: '10px',
      }}
    >
      <Text>This is a foooter!</Text>
    </Box>
  );
};
