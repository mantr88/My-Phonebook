import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

export const theme = extendTheme({
  colors: {
    main: '#003b46',
    midle: '#07575b',
    light: '#66a5ad',
    extraLight: '#c4dfe6',
    error: '#FF0000',
    text: '#fff',
    darkText: 'black',
    bg: 'hsla(192, 40%, 84%, 0.6)',
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});
