import {
  Heading,
  Text,
  Image as ChakraImage,
  Box,
  Link,
  Flex,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { Detail } from '../components/Detail';
import { Modal } from '../components/Modal';
import { Section } from '../components/Section';
import { Grid } from '../components/Grid';

export default function Home() {
  const preloadSelectorSVGs = () => {
    const images = [
      '/selectors/1.svg',
      '/selectors/2.svg',
      '/selectors/3.svg',
      '/selectors/4.svg',
      '/selectors/5.svg',
    ];
    images.forEach((pic) => {
      const img = new Image();
      img.src = pic.fileName;
    });
  };

  useEffect(() => {
    preloadSelectorSVGs();
  }, []);

  return (
    <Box textAlign="center" fontSize="md">
      <Head>
        <title>Kinetic Spectrums</title>
      </Head>
      <Box
        minH={{ base: 'calc(100vh - 80px)', md: '100vh' }}
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

        <ChakraImage
          flex="1"
          maxH="70vh"
          maxW="85vw"
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

      <Section maxWidth="390px" mx="auto">
        <Box>
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
        </Box>
        <Flex width="full" alignItems="center" justifyContent="space-between">
          <ChakraImage
            width="40px"
            height="40px"
            src="/2.svg"
            alt="combining colors"
            borderRadius="full"
          />
          <ChakraImage
            width="40px"
            height="40px"
            src="/3.svg"
            alt="combining colors"
            borderRadius="full"
          />
          <ChakraImage
            width="40px"
            height="40px"
            src="/4.svg"
            alt="combining colors"
            borderRadius="full"
          />
          <ChakraImage
            width="40px"
            height="40px"
            src="/5.svg"
            alt="combining colors"
            borderRadius="full"
          />
          <ChakraImage
            width="40px"
            height="40px"
            src="/6.svg"
            alt="combining colors"
            borderRadius="full"
          />
        </Flex>
      </Section>

      <Section>
        <Text maxWidth="390px" mx="auto">
          As well as their unique colors, each Spectrum has a layer of detail
          which defines its rarity. There are 6 levels of detail which are
          assigned randomly on mint.
        </Text>

        <Grid mt={8} maxW="720px" mx="auto">
          <Detail detail="common" />
          <Detail detail="rare" />
          <Detail detail="epic" />
          <Detail detail="legendary" />
          <Detail detail="impossible" />
          <Detail detail="perfect" />
        </Grid>
      </Section>

      <Section maxWidth="390px" mx="auto">
        <Text>
          Each Spectrum is generated on mint to be unique. All Spectrums are
          100% on-chain. This means they’re stored directly on the Ethereum
          blockchain. Spectrums will live as long as the Ethereum blockchain
          exists.
        </Text>
        <Modal />
      </Section>

      <Box as="footer" mt={60}>
        <Text>
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
        </Text>
        <Text>
          All Spectrums are licensed under{' '}
          <Link
            href="https://creativecommons.org/share-your-work/public-domain/cc0/"
            isExternal
          >
            CC0
          </Link>
        </Text>
        {/* <Text>
          View the Kinetic Spectrums{' '}
          <Link href="https://etherscan.io/" isExternal>
            contract
          </Link>
        </Text> */}
      </Box>

      <Box mb={12} mt={8}>
        {/* <Link
          mx={1}
          href="https://creativecommons.org/share-your-work/public-domain/cc0/"
          isExternal
        >
          Opensea
        </Link>{' '}
        •{' '}
        <Link
          mx={1}
          href="https://creativecommons.org/share-your-work/public-domain/cc0/"
          isExternal
        >
          Looksrare
        </Link>{' '}
        •{' '}
        <Link
          mx={1}
          href="https://creativecommons.org/share-your-work/public-domain/cc0/"
          isExternal
        >
          Zora
        </Link> */}
      </Box>
    </Box>
  );
}
