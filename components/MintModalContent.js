import {
  Button,
  Text,
  Box,
  Stack,
  useRadioGroup,
  Link,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useContractWrite } from 'wagmi';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/nextjs';
import { Radio } from './Radio';
import { config } from '../utils/config';
import contractABI from '../utils/contractABI.json';

export const MintModalContent = ({ onMinted, isWhitelisted }) => {
  const [err, setError] = useState(null);
  const [tx, setTx] = useState(null);
  const [mintNumber, setMintNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const options = ['1', '2', '3', '4', '5'];
  const [{ data, error }, callContractMint] = useContractWrite(
    {
      addressOrName: config.contractAddress,
      contractInterface: contractABI,
    },
    isWhitelisted ? 'friendsMint' : 'mint'
  );
  const basePrice = isWhitelisted ? config.friendPrice : config.price;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mintCount',
    defaultValue: '1',
    onChange: setMintNumber,
  });

  const group = getRootProps();

  const mintNFT = async () => {
    setLoading(true);
    setError(false);
    await callContractMint({
      args: isWhitelisted
        ? [parseInt(mintNumber), 'prooof']
        : [parseInt(mintNumber)],
      overrides: {
        value: ethers.utils.parseEther(
          (parseInt(mintNumber) * basePrice).toString()
        ),
      },
    });
  };

  const waitForConfirmation = useCallback(async () => {
    if (data) {
      setTx(data.hash);
      await data.wait(1);
      setLoading(false);
      onMinted();
    }
  }, [data, onMinted]);

  useEffect(() => {
    waitForConfirmation();
  }, [data, waitForConfirmation]);

  useEffect(() => {
    if (error) {
      setLoading(false);
      setError(true);
      Sentry.captureException(error);
    }
  }, [error]);

  return (
    <Box position="relative">
      {isWhitelisted && (
        <Box
          bg="#1CE886"
          position="absolute"
          top="-45px"
          left="50%"
          transform="translateX(-50%)"
          fontWeight="semibold"
          borderRadius="20px"
          width="200px"
          py={1}
          px={2}
        >
          🌈 You're on the friends list
        </Box>
      )}

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
              image={`/selectors/${value}.svg`}
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
        onClick={mintNFT}
        isLoading={isLoading}
        w="full"
      >
        Mint Now{' '}
        <Box as="strong" ml={3}>
          {(parseFloat(mintNumber) * basePrice).toFixed(3)} ETH
        </Box>
        {isWhitelisted && (
          <Box pl={3} as="span" textDecoration="line-through">
            {(parseFloat(mintNumber) * config.price).toFixed(3)} ETH
          </Box>
        )}
      </Button>
      {tx && (
        <Box mb={4}>
          <Text color="blackAlpha.700">
            Waiting for blockchain confirmation.
          </Text>
          <Text>
            <Link
              isExternal
              href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}tx/${tx}`}
            >
              See transaction
            </Link>{' '}
            on Etherscan
          </Text>
        </Box>
      )}
      {err && (
        <Box mb={4}>
          <Text>Something went wrong</Text>
        </Box>
      )}
      <Text color="blackAlpha.700">
        Each of your spectrums will be random on mint. We use ERC-721A to keep
        gas as low as possible.
      </Text>
    </Box>
  );
};

MintModalContent.propTypes = {
  onMinted: PropTypes.func.isRequired,
  isWhitelisted: PropTypes.bool,
};
