import { Text, Link } from '@chakra-ui/react';
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
          href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}${accountData.address}`}
        >
          View on Opensea
        </Link>
      </Text>
    </>
  );
};
