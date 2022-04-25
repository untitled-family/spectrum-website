import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Box,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import axios from 'axios';
import * as Sentry from '@sentry/nextjs';
import { ConnectModalContent } from './ConnectModalContent';
import { MintModalContent } from './MintModalContent';
import { MintedModalContent } from './MintedModalContent';

export const Modal = () => {
  const [isMinted, setMinted] = useState(false);
  const [isWhitelisted, setWhitelisted] = useState(undefined);
  const [{ data: accountData }] = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const verifyForWhitelist = useCallback(() => {
    axios
      .post('/api/verify', {
        address: accountData.address,
      })
      .then(function (response) {
        const { data } = response;

        setWhitelisted(data.whitelisted);
      })
      .catch(function (error) {
        Sentry.captureException(error);
      });
  }, [accountData?.address]);

  useEffect(() => {
    if (accountData && accountData.address) {
      verifyForWhitelist();
    }
  }, [accountData, verifyForWhitelist]);

  return (
    <>
      <Button
        mt={4}
        height="32px"
        px={4}
        lineHeight={1}
        fontSize="sm"
        borderRadius="lg"
        colorScheme="white"
        color="black"
        onClick={onOpen}
      >
        Connect Wallet
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="2xl"
          py={10}
          px={8}
          textAlign="center"
          alignSelf="center"
          my={0}
          color="black.500"
        >
          {isMinted ? (
            <MintedModalContent />
          ) : (
            <>
              {accountData ? (
                <>
                  {isWhitelisted === undefined ? (
                    <Box py={8}>
                      <Spinner size="sm" />
                      <Text mt={4}>Verifiying you're whitelisted</Text>
                    </Box>
                  ) : (
                    <MintModalContent
                      isWhitelisted={isWhitelisted}
                      onMinted={() => setMinted(true)}
                    />
                  )}
                </>
              ) : (
                <ConnectModalContent />
              )}
            </>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  );
};
