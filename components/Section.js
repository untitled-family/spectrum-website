import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Section = ({ children }) => (
  <Box
    as="section"
    minH="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    px={6}
  >
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
