import {
  Button,
  Text,
  Box,
  Stack,
  useRadioGroup,
  Link,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useContractWrite } from 'wagmi';
import PropTypes from 'prop-types';
import { Radio } from './Radio';
import { config } from '../utils/config';
import contractABI from '../utils/contractABI.json';

export const MintModalContent = ({ onMinted }) => {
  const [tx, setTx] = useState(null);
  const [mintNumber, setMintNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const options = ['1', '2', '3', '4', '5'];
  const [{ data }, callContractMint] = useContractWrite(
    {
      addressOrName: config.contractAddress,
      contractInterface: contractABI,
    },
    'mint'
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mintCount',
    defaultValue: '1',
    onChange: setMintNumber,
  });

  const group = getRootProps();

  const mintNFT = async () => {
    setLoading(true);
    await callContractMint({ args: [parseInt(mintNumber)] });
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
        onClick={mintNFT}
        isLoading={isLoading}
      >
        Mint Now{' '}
        <Box as="strong" ml={1}>
          {(parseFloat(mintNumber) * 0.025).toFixed(3)} ETH
        </Box>
      </Button>
      {tx && (
        <Box mb={4}>
          <Text color="blackAlpha.700">
            Waiting for blockchain confirmation.
          </Text>
          <Text>
            <Link isExternal href={`https://rinkeby.etherscan.io/tx/${tx}`}>
              See transaction
            </Link>{' '}
            on Etherscan
          </Text>
        </Box>
      )}
      <Text color="blackAlpha.700">
        Each of your spectrums will be random on mint. We use ERC-721A to keep
        gas as low as possible.
      </Text>
    </>
  );
};

MintModalContent.propTypes = {
  onMinted: PropTypes.func.isRequired,
};
