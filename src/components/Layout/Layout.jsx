import { Container } from './Layuot.styled';
// import { Suspense } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../Utils/Theme';
// import { GlobalStyle } from '../Utils/GlobalStyle';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
