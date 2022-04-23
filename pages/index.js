import {
  Heading,
  GridItem,
  Text,
  Button,
  Image,
  Box,
  Link,
} from '@chakra-ui/react';
import { Grid } from '../components/Grid';

export default function Home() {
  return (
    <Grid textAlign="center" fontSize="md">
      <GridItem colSpan={12}>
        <Heading mt="50px" fontWeight="semibold" fontSize="lg" as="h1">
          Kinetic Spectrums
        </Heading>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 10, lg: 8, xl: 6 }}
        colStart={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        <Image my="30px" src="/spectrum.svg" alt="Kinetic Sepctrum" />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 8, lg: 4, xl: 4 }}
        colStart={{ base: 1, md: 3, lg: 5, xl: 5 }}
      >
        <Text>A collection of 1,111 Spectrums. 100% on-chain NFTs</Text>
        <Button
          mt="16px"
          height="32px"
          px="16px"
          lineHeight={1}
          fontSize="sm"
          borderRadius="lg"
          colorScheme="black"
        >
          Mint Now
        </Button>

        <Box mt={40} mb={8}>
          <Image
            src="/spectrum.svg"
            alt="Kinetic Spectrum"
            width="80px"
            height="80px"
            mx="auto"
          />
          <Text mt={8}>
            Each spectrum is made by combining between 3 to 6 layers of color
            that are randomly assigned on mint.
          </Text>
        </Box>
        <Box my={8}>
          <Image
            src="/spectrum.svg"
            alt="Kinetic Spectrum"
            width="80px"
            height="80px"
            mx="auto"
          />
          <Text mt={8}>
            These layers then multiply with each other to create new colors as
            the layers rotate and offset each other.
          </Text>
        </Box>
        <Box my={8}>
          <Image
            src="/spectrum.svg"
            alt="Kinetic Spectrum"
            width="80px"
            height="80px"
            mx="auto"
          />
          <Text mt={8}>
            Each layer rotates at a different speed meaning your NFT is
            constantly changing and evolving the longer you watch.
          </Text>
        </Box>
        <Box my={8}>
          <Image
            src="/spectrum.svg"
            alt="Kinetic Spectrum"
            width="80px"
            height="80px"
            mx="auto"
          />
          <Text mt={8}>
            All spectrums are 100% on-chain. This means they’re stored directly
            on the Ethereum blockchain. Spectrums will live as long as the
            Ethereum blockchain exists.
          </Text>
        </Box>
        <Box my={8}>
          <Image
            src="/spectrum.svg"
            alt="Kinetic Spectrum"
            width="80px"
            height="80px"
            mx="auto"
          />
          <Text mt={8}>
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
          <Text>
            View the Kinetic Spectrums{' '}
            <Link href="https://etherscan.io/" isExternal>
              contract
            </Link>
          </Text>
        </Box>
        <Box mb={12} mt={8}>
          Opensea - Looksrare - Zora
        </Box>
      </GridItem>
    </Grid>
  );
}
