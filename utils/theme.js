import { extendTheme } from '@chakra-ui/react';

import { foundations } from './foundation';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'spectrums',
};

export const theme = extendTheme({
  config,
  ...foundations,
  styles: {
    global: {
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
      html: {
        scrollBehavior: 'smooth',
        fontSize: 'md',
      },
      a: {
        fontWeight: 'semibold',
      },
    },
  },
});
