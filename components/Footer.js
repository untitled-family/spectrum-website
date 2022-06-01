import { Text, Box, Link } from '@chakra-ui/react';

export const Footer = () => (
  <Box as="footer" textAlign="center" fontSize="md" mt={60}>
    <Text>
      Created by{' '}
      <Link
        fontWeight="semibold"
        href="https://twitter.com/pixel_arts"
        isExternal
      >
        himlate.eth
      </Link>{' '}
      and{' '}
      <Link
        fontWeight="semibold"
        href="https://twitter.com/biron_io"
        isExternal
      >
        biron.eth
      </Link>
    </Text>
    <Text>
      All Spectrums are licensed under{' '}
      <Link
        href="https://creativecommons.org/share-your-work/public-domain/cc0/"
        isExternal
      >
        CC0
      </Link>
    </Text>
    <Text>
      View the Kinetic Spectrums{' '}
      <Link
        href="https://etherscan.io/address/0x2ac9795ca8fc6d09a5748cb9e8b9d67f4b09df07"
        isExternal
      >
        contract
      </Link>
    </Text>
    <Box mb={12} mt={8}>
      <Link
        mx={1}
        href="https://opensea.io/collection/kinetic-spectrums"
        isExternal
      >
        Opensea
      </Link>{' '}
      •{' '}
      <Link
        mx={1}
        href="https://looksrare.org/collections/0x2Ac9795Ca8fc6d09a5748CB9E8B9D67f4B09df07"
        isExternal
      >
        Looksrare
      </Link>
    </Box>
  </Box>
);
