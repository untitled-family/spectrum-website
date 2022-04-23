import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useAccount, useConnect } from 'wagmi';
import { ConnectModalContent } from './ConnectModalContent';
import { MintModalContent } from './MintModalContent';

export const Modal = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log('accountData', accountData);

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
          {accountData ? <MintModalContent /> : <ConnectModalContent />}
        </ModalContent>
      </ChakraModal>
    </>
  );
};
