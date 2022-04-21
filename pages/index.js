import { Heading, GridItem } from '@chakra-ui/react';
import { Grid } from '../components/Grid';

export default function Home() {
  return (
    <Grid textAlign="center">
      <GridItem colSpan={12}>
        <Heading my="50px" fontWeight="semibold" fontSize="15px" as="h1">
          Kinetic Spectrums
        </Heading>
      </GridItem>
    </Grid>
  );
}
