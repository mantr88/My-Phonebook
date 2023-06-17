import { Box, Flex, Link, Text } from '@chakra-ui/react';
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
      color={t => t.colors.darkText}
    >
      <Flex alignItems="center" justify="center">
        <Text fontSize={['l', 'xl', 'xl']}>
          Created by
          <Link
            ml="3"
            target="blanc"
            href="https://github.com/mantr88"
            color="#00008B"
          >
            &copy; Anton Petrenko
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
