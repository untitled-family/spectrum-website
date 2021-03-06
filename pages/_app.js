import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider, chain, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import ReactGA from 'react-ga4';
import { theme } from '../utils/theme';
import { config } from '../utils/config';
import '../styles/globals.css';
import { Footer } from '../components/Footer';

const { infuraId } = config;

// Chains for connectors to support
const chains = defaultChains;

ReactGA.initialize('G-HRW21WE8M6');
ReactGA.send('pageview');

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: 'Kinetic Spectrums',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

export default function App({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
