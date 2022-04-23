import {
  Button,
  Text,
  Box,
  Stack,
  useRadioGroup,
  Link,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';

export const MintedModalContent = () => {
  const [{ data: accountData }] = useAccount();
  return (
    <>
      <Text mb={8}>
        <strong>Congratulations!</strong> You're now a Spectrum owner
      </Text>
      <Text color="blackAlpha.700">
        <Link
          fontWeight="normal"
          href={`https://opensea.io/${accountData.address}`}
        >
          View on Opensea
        </Link>
      </Text>
    </>
  );
};
