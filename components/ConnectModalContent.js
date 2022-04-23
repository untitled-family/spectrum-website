import { Box, Button, Link, Text } from '@chakra-ui/react';
import { useConnect } from 'wagmi';

export const ConnectModalContent = () => {
  const [{ data, error }, connect] = useConnect();
  return (
    <>
      <Text mb={8} fontWeight="semibold">
        Connect your wallet
      </Text>
      <Box mb={8}>
        {data.connectors.map((connector) => {
          if (!connector.ready) return false;
          return (
            <Button
              my={1}
              width="full"
              height="47px"
              borderRadius="xl"
              colorScheme="black"
              fontWeight="normal"
              key={connector.id}
              onClick={() => connect(connector)}
            >
              {connector.name}
            </Button>
          );
        })}
      </Box>
      <Link
        href="https://rainbow.me/"
        isExternal
        fontWeight="normal"
        color="blackAlpha.700"
      >
        I don't have a wallet
      </Link>
    </>
  );
};
