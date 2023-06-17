import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto/400.css';
import '@fontsource/open-sans/700.css';
import { theme } from 'Utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </PersistGate>
    </ChakraProvider>
  </React.StrictMode>
);
