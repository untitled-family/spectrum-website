import { AspectRatio, Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { WalletAddress } from './WalletAddress';

export const SpectrumThumbnail = ({ token }) => (
  <Link href={`/spectrum/${token.tokenId}`}>
    <a>
      <Box p={[4, 4, 6, 8, 8, 12]}>
        <AspectRatio ratio={1 / 1}>
          <Image
            borderRadius="full"
            src={token.image.mediaEncoding.original}
            alt={`Spectrum ${token.tokenId}`}
            fallbackSrc="/placeholder.svg"
          />
        </AspectRatio>

        <Text mt={4}>Spectrum #{token.tokenId}</Text>
        <Text fontWeight="normal">
          <WalletAddress address={token.owner} />
        </Text>
      </Box>
    </a>
  </Link>
);

SpectrumThumbnail.propTypes = {
  token: PropTypes.shape({
    tokenId: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    owner: PropTypes.string.isRequired,
  }),
};
