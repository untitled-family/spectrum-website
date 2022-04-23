import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Text,
  Box,
  Stack,
  useRadioGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Radio } from './Radio';

export const MintModalContent = () => {
  const [mintNumber, setMintNumber] = useState(1);
  const options = ['1', '2', '3', '4', '5'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mintCount',
    defaultValue: '1',
    onChange: setMintNumber,
  });

  const group = getRootProps();
  return (
    <>
      <Text mb={8}>
        How many <strong>Spectrums</strong> would you like to mint?
      </Text>

      <Stack direction="row" justifyContent="center" {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          const isActive = mintNumber >= value;
          return (
            <Radio
              key={value}
              isActive={isActive}
              zIndex={5 - value}
              {...radio}
            >
              {value}
            </Radio>
          );
        })}
      </Stack>
      <Button
        my={8}
        height="47px"
        borderRadius="xl"
        colorScheme="black"
        fontWeight="normal"
      >
        Mint Now{' '}
        <Box as="strong" ml={1}>
          {(parseFloat(mintNumber) * 0.025).toFixed(3)} ETH
        </Box>
      </Button>
      <Text color="blackAlpha.700">
        Each of your spectrums will be random on mint. We use ERC-721A to keep
        gas as low as possible.
      </Text>
    </>
  );
};
