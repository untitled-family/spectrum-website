import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Section = ({ children, ...rest }) => (
  <Box
    as="section"
    minH="70vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    px={6}
    {...rest}
  >
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
