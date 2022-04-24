/* eslint-disable react/destructuring-assignment */
import { Box, useRadio } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Radio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      zIndex={props.zIndex}
    >
      <Box position="relative" width="1px" height="86px" mb={4}>
        <Box
          cursor="pointer"
          position="absolute"
          top={0}
          left="50%"
          ml="-43px"
          width="86px"
          height="86px"
          bg="#F8F8F8"
          borderWidth={props.isActive ? 0 : 1}
          borderColor={props.isActive ? 'transparent' : 'blackAlpha.100'}
          borderRadius="full"
          backgroundImage={props.isActive ? 'url(/spectrum.svg)' : ''}
          backgroundSize="cover"
          _hover={{
            borderColor: props.isActive ? 'transparent' : 'blackAlpha.300',
          }}
        />
      </Box>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="xl"
        borderColor="blackAlpha.200"
        bg="white"
        _checked={{
          bg: 'black.500',
          color: 'white',
          borderColor: 'black.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        _hover={{
          borderColor: 'blackAlpha.400',
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
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
};
