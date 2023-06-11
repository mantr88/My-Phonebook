import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Utils/Theme';
import { Layout } from '../Layout/Layout';
// import { GlobalStyle } from '../Utils/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <GlobalStyle /> */}
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default SharedLayout;
