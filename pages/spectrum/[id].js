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

  const getDetail = (attributes) => {
    const _d = attributes.find((a) => a.trait_type === 'Detail').value;
    const detail = details.find((d) => _d.toLocaleLowerCase().includes(d));

    return detail.toLocaleLowerCase();
  };

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
            <ChakraImage
              flex="1"
              maxH="70vh"
              maxW="85vw"
              mx="auto"
              src={data.spectrum.metadata.image}
              alt="Kinetic Sepctrum"
              borderRadius="full"
            />
            <Grid py={10} maxW="600px" mx="auto">
              <GridItem colSpan={12}>
                <Detail
                  hasImage={false}
                  detail={getDetail(data.spectrum.metadata.attributes)}
                />
              </GridItem>
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
