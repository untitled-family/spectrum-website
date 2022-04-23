import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectModalContent } from './ConnectModalContent';
import { MintModalContent } from './MintModalContent';
import { MintedModalContent } from './MintedModalContent';

export const Modal = () => {
  const [isMinted, setMinted] = useState(false);
  const [{ data: accountData }] = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <ModalContent
          borderRadius="2xl"
          py={10}
          px={8}
          textAlign="center"
          alignSelf="center"
          my={0}
        >
          {isMinted ? (
            <MintedModalContent />
          ) : (
            <>
              {accountData ? (
                <MintModalContent onMinted={() => setMinted(true)} />
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
