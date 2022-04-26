import { Box, Text, Image, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const colors = {
  common: {
    color: '#00FFA4',
    bg: 'rgba(35, 131, 96, 0.5)',
  },
  rare: {
    color: '#ABE6FF',
    bg: 'rgba(73, 157, 255, 0.5)',
  },
  epic: {
    color: '#E5C5FF',
    bg: 'rgba(168, 100, 255, 0.5)',
  },
  legendary: {
    color: '#FFC165',
    bg: 'rgba(255, 168, 0, 0.3)',
  },
  impossible: {
    color: '#FFA1EA',
    bg: 'rgba(210, 0, 164, 0.5)',
  },
  perfect: {
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid white ',
  },
  founder: {
    color: 'white',
    backgroundColor: 'black',
    border: '1px dotted white ',
  },
};

export const Detail = ({ detail, hasImage }) => (
  <GridItem colSpan={{ base: 4, md: 2 }}>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb={6}
    >
      {hasImage && (
        <Image
          borderRadius="full"
          width="80px"
          height="80px"
          src={`/${detail}.svg`}
          alt="Detail rarity"
          mb={3.5}
        />
      )}

      <Text
        px={3}
        py={0.5}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="semibold"
        borderRadius="12px"
        {...colors[detail]}
      >
        {detail}
      </Text>
    </Box>
  </GridItem>
);

Detail.propTypes = {
  detail: PropTypes.oneOf(Object.keys(colors)),
  hasImage: PropTypes.bool,
};

Detail.defaultProps = {
  hasImage: true,
};
