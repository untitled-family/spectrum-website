import {
  Button,
  Heading,
  Text,
  Image,
  Box,
  Link,
  Flex,
} from '@chakra-ui/react';
import { Modal } from '../components/Modal';
import { Section } from '../components/Section';

export default function Home() {
  return (
    <Box textAlign="center" fontSize="md">
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        px={6}
      >
        <Heading
          mt={12}
          fontWeight="semibold"
          fontSize="lg"
          as="h1"
          color="white"
        >
          Kinetic Spectrums
        </Heading>

        <Image
          flex="1"
          maxH="70vh"
          maxW="70vw"
          mx="auto"
          src="/spectrum.svg"
          alt="Kinetic Sepctrum"
          borderRadius="full"
        />

        <Box mb={12}>
          <Text>1,111 Spectrums. 100% on-chain NFTs.</Text>
          <Modal />
        </Box>
      </Box>
      <Box maxWidth="390px" mx="auto">
        <Section>
          <Text fontWeight="semibold">
            Kinetic Spectrums is a collection of dynamic, ever changing artworks
            stored on the Ethereum Network.
          </Text>
          <Text mt={6} mb={8}>
            Each Spectrum is made by combining 2 to 5 layers of color. These
            layers multiply with each other and slowly rotate at a different
            speeds meaning your NFT is constantly changing color and evolving
            the longer you watch it.
          </Text>
          <Flex width="full" alignItems="center" justifyContent="space-between">
            <Image
              width="40px"
              height="40px"
              src="/2.svg"
              alt="combining colors"
              borderRadius="full"
            />
            <Image
              width="40px"
              height="40px"
              src="/3.svg"
              alt="combining colors"
              borderRadius="full"
            />
            <Image
              width="40px"
              height="40px"
              src="/4.svg"
              alt="combining colors"
              borderRadius="full"
            />
            <Image
              width="40px"
              height="40px"
              src="/5.svg"
              alt="combining colors"
              borderRadius="full"
            />
            <Image
              width="40px"
              height="40px"
              src="/6.svg"
              alt="combining colors"
              borderRadius="full"
            />
            <Image
              width="40px"
              height="40px"
              src="/7.svg"
              alt="combining colors"
              borderRadius="full"
            />
          </Flex>
        </Section>

        <Section>
          <Text>
            As well as their unique colors, each Spectrum has a layer of detail
            that adds another level of color variation to your Spectrum. There
            are 6 levels of detail rarity.
          </Text>
          <Flex
            mt={8}
            width="full"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image
                borderRadius="full"
                width="80px"
                height="80px"
                src="/8.svg"
                alt="Detail rarity"
                mb={3.5}
              />
              <Text
                px={3}
                py={0.5}
                bg="#304b82"
                color="#ABE6FF"
                fontSize="xs"
                fontWeight="semibold"
                borderRadius="12px"
              >
                RARE
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image
                borderRadius="full"
                width="80px"
                height="80px"
                src="/9.svg"
                alt="Detail rarity"
                mb={3.5}
              />
              <Text
                px={3}
                py={0.5}
                bg="#543280"
                color="#E5C5FF"
                fontSize="xs"
                fontWeight="semibold"
                borderRadius="12px"
              >
                EPIC
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image
                borderRadius="full"
                width="80px"
                height="80px"
                src="/10.svg"
                alt="Detail rarity"
                mb={3.5}
              />
              <Text
                px={3}
                py={0.5}
                bg="#4c3200"
                color="#FFC165"
                fontSize="xs"
                fontWeight="semibold"
                borderRadius="12px"
              >
                LEGENDARY
              </Text>
            </Box>
          </Flex>
        </Section>

        <Section>
          <Text>
            Each Spectrum is generated on mint to be unique. All Spectrums are
            100% on-chain. This means they’re stored directly on the Ethereum
            blockchain. Spectrums will live as long as the Ethereum blockchain
            exists.
          </Text>
          <Button
            mt={4}
            height="32px"
            px={4}
            lineHeight={1}
            fontSize="sm"
            borderRadius="lg"
            colorScheme="white"
            color="black"
          >
            Connect Wallet
          </Button>
        </Section>

        <Text mt={60}>
          Kinetic Spectrums was created by{' '}
          <Link
            fontWeight="semibold"
            href="https://twitter.com/pixel_arts"
            isExternal
          >
            himlate.eth
          </Link>{' '}
          and{' '}
          <Link
            fontWeight="semibold"
            href="https://twitter.com/biron_io"
            isExternal
          >
            biron.eth
          </Link>
          <br />
          All Spectrums are licensed under{' '}
          <Link
            href="https://creativecommons.org/share-your-work/public-domain/cc0/"
            isExternal
          >
            CC0
          </Link>
          <br />
          View the Kinetic Spectrums{' '}
          <Link href="https://etherscan.io/" isExternal>
            contract
          </Link>
        </Text>

        <Box mb={12} mt={8}>
          Opensea - Looksrare - Zora
        </Box>
      </Box>
    </Box>
  );
}
