import { Container } from '@chakra-ui/react';

export const MainContainer = ({ children }) => {
  return (
    <Container
      maxWidth={['sm', 'md', 'lg', 'xl', '2xl']}
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      transform="translate(-50%, -50%)"
      paddingTop={'40px'}
      paddingBottom={'40px'}
      sx={{
        backgroundColor: 'hsla(192, 40%, 84%, 0.6)',
        backdropFilter: 'blur(6px)',
        border: '2px solid white',
        borderRadius: '1rem',
      }}
    >
      {children}
    </Container>
  );
};
