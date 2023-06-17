import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box, Image, Spinner } from '@chakra-ui/react';
import bgImage from '../../image/pexels-roberto-lee-cortes-11402369.jpg';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <Box
      bgImage={bgImage}
      objectFit={'cover'}
      objectPosition={'center'}
    >
      <AppBar />
      <Box as="main" position="relative">
        <Image
          width={'100%'}
          height={'100vh'}
          src={bgImage}
          objectFit={'cover'}
          objectPosition={'center'}
        />
        <Suspense fallback={<Spinner size="xl" />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default SharedLayout;
