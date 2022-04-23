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

export const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Button
        mt="16px"
        height="32px"
        px="16px"
        lineHeight={1}
        fontSize="sm"
        borderRadius="lg"
        colorScheme="black"
        onClick={onOpen}
      >
        Mint Now
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" py={10} px={8} textAlign="center">
          <Text mb={8}>
            How many <strong>Spectrums</strong> would you like to mint?
          </Text>

          <Stack direction="row" justifyContent="center" {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <Radio key={value} {...radio}>
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
            Each of your spectrums will be random on mint. We use ERC-721A to
            keep gas as low as possible.
          </Text>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
