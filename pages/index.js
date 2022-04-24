import { Heading, Text, Image, Box, Link } from '@chakra-ui/react';
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
        px={4}
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
        />

        <Box mb={12}>
          <Text>
            A collection of 1,111 Spectrums. 100% generated on-chain NFTs
          </Text>
          <Modal />
        </Box>
      </Box>
      <Box maxWidth="390px" mx="auto">
        <Section>
          <Text fontWeight="semibold">
            Kinetic Spectrums is a collection of dynamic, ever changing artworks
            stored on the Ethereum Network.
          </Text>
          <Text mt={6}>
            Each Spectrum is made by combining 2 to 5 layers of color. These
            layers multiply with each other and slowly rotate at a different
            speeds meaning your NFT is constantly changing color and evolving
            the longer you watch it.
          </Text>
          <Image mx="auto" mt={8} src="/layers.png" alt="combining colors" />
        </Section>

        <Section>
          <Text>
            As well as their unique colors, each Spectrum has a layer of detail
            that adds another level of color variation to your Spectrum. There
            are 6 levels of detail rarity.
          </Text>
        </Section>

        <Section>
          <Text>
            All spectrums are 100% on-chain. This means they're stored directly
            on the Ethereum blockchain. Spectrums will live as long as the
            Ethereum blockchain exists.
          </Text>
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
