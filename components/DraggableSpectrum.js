import { Text, Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const DraggableSpectrum = ({ image, children, ...rest }) => (
  <Box my={8}>
    <Box
      as={motion.div}
      drag="y"
      width="80px"
      height="80px"
      mx="auto"
      cursor="grab"
      whileDrag={{ cursor: 'grabbing' }}
      {...rest}
    >
      <Image pointerEvents="none" src={image} alt="Kinetic Spectrum" />
    </Box>
    <Text mt={8}>{children}</Text>
  </Box>
);

DraggableSpectrum.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
