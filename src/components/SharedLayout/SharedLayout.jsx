import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Utils/Theme';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from '../Utils/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.style';
import { UserMenu } from '../UserMenu/UserMenu';

const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Registration</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
          <UserMenu />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default SharedLayout;
