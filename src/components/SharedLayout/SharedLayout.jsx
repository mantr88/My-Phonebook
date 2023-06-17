import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box, Spinner } from '@chakra-ui/react';
import bgImage from '../../image/pexels-roberto-lee-cortes-11402369.jpg';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <Box
      bgImage={bgImage}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        maxW="1080px"
        my="0px"
        mx="auto"
        py="0px"
        px="4"
        textAlign="center"
        color={theme => theme.colors.main}
      >
        <AppBar />
        <Suspense fallback={<Spinner size="xl" />}>
          <Outlet />
        </Suspense>
        <Footer />
      </Box>
    </Box>
  );
};

export default SharedLayout;
