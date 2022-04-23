import {
  Heading,
  GridItem,
  Text,
  Button,
  Image,
  Box,
  Link,
} from '@chakra-ui/react';
import { DraggableSpectrum } from '../components/DraggableSpectrum';
import { Grid } from '../components/Grid';
import { Modal } from '../components/Modal';

export default function Home() {
  return (
    <Grid textAlign="center" fontSize="md">
      <GridItem colSpan={12}>
        <Heading mt={12} fontWeight="semibold" fontSize="lg" as="h1">
          Kinetic Spectrums
        </Heading>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 10, lg: 8, xl: 6 }}
        colStart={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        <Image my={8} src="/spectrum.svg" alt="Kinetic Sepctrum" />
      </GridItem>
      <GridItem
        colSpan={{ base: 12, sm: 8, md: 6, lg: 4, xl: 4 }}
        colStart={{ base: 1, sm: 3, md: 4, lg: 5, xl: 5 }}
      >
        <Text>
          A collection of 1,111 Spectrums. 100% generated on-chain NFTs
        </Text>
        <Modal />

        <DraggableSpectrum mt={20} image="/spectrum.svg">
          Each spectrum is made by combining between 3 to 6 layers of color that
          are randomly assigned on mint.
        </DraggableSpectrum>
        <DraggableSpectrum image="/spectrum.svg">
          These layers then multiply with each other to create new colors as the
          layers rotate and offset each other.
        </DraggableSpectrum>
        <DraggableSpectrum image="/spectrum.svg">
          Each layer rotates at a different speed meaning your NFT is constantly
          changing and evolving the longer you watch.
        </DraggableSpectrum>
        <DraggableSpectrum image="/spectrum.svg">
          All spectrums are 100% on-chain. This means they're stored directly on
          the Ethereum blockchain. Spectrums will live as long as the Ethereum
          blockchain exists.
        </DraggableSpectrum>
        <DraggableSpectrum image="/spectrum.svg">
          <>
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
          </>
        </DraggableSpectrum>

        <Box mb={12} mt={8}>
          Opensea - Looksrare - Zora
        </Box>
      </GridItem>
    </Grid>
  );
}
