/* eslint-disable react/destructuring-assignment */
import { Box, useRadio } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Radio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="xl"
        borderBg="blackAlpha.200"
        bg="white"
        _checked={{
          bg: 'black.500',
          color: 'white',
          borderColor: 'black.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        width="49px"
        height="31px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="sm"
      >
        {props.children}
      </Box>
    </Box>
  );
};

Radio.propTypes = {
  children: PropTypes.node.isRequired,
};
