import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Heading,
  Text,
  Image as ChakraImage,
  Box,
  Spinner,
  GridItem,
} from '@chakra-ui/react';
import Head from 'next/head';
import useSwr from 'swr';
import { Grid } from '../../components/Grid';
import { Detail } from '../../components/Detail';
import { SpectrumSvg } from '../../components/SpectrumSvg';
import { getDetail, getLayers } from '../../utils/spectrum';
import { SpectrumExportModal } from '../../components/SpectrumExportModal';

const details = [
  'common',
  'rare',
  'epic',
  'legendary',
  'impossible',
  'perfect',
  'founder',
];

const fetcher = (url) => fetch(url).then((res) => res.json());

const Spectrum = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSwr(
    router.query.id ? `/api/spectrum/${router.query.id}` : null,
    fetcher
  );

  return (
    <Box textAlign="center" fontSize="md">
      <Head>
        <title>Kinetic Spectrums</title>
      </Head>
      <Box alignItems="center" px={6}>
        <Link href="/">
          <a>
            <Heading
              my={12}
              fontWeight="semibold"
              fontSize="lg"
              as="h1"
              color="white"
            >
              Kinetic Spectrums - #{id}
            </Heading>
          </a>
        </Link>

        {data && data?.spectrum?.metadata?.image && (
          <>
            <SpectrumSvg
              layers={getLayers(data.spectrum.metadata.attributes)}
              detail={getDetail(data.spectrum.metadata.attributes)}
            />
            <Box mt={10}>
              <Detail
                hasImage={false}
                detail={getDetail(data.spectrum.metadata.attributes).type}
              />
              <SpectrumExportModal
                layers={getLayers(data.spectrum.metadata.attributes)}
                detail={getDetail(data.spectrum.metadata.attributes)}
              />
            </Box>

            <Grid py={8} maxW="600px" mx="auto">
              {data.spectrum.metadata.attributes.map((attribute, index) => (
                <GridItem key={index} colSpan={{ base: 6, md: 4 }}>
                  <Box
                    borderRadius="2xl"
                    border="1px solid rgba(255,255,255,0.2)"
                    p={2}
                  >
                    <Text
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      {attribute.trait_type}
                    </Text>
                    <Text>{attribute.value}</Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </>
        )}
        {!data && !error && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            h="50vh"
          >
            <Spinner />
            <Text>Fetching metadata...</Text>
          </Box>
        )}
        {error && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            h="50vh"
          >
            <Text>Something went wrong.</Text>
          </Box>
        )}
        {data && data?.spectrum.error && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            h="50vh"
          >
            <Text>{data.spectrum.error}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Spectrum;
