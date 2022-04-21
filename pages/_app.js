import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../utils/theme';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
