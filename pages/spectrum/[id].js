import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Heading,
  Text,
  Box,
  Spinner,
  GridItem,
  Flex,
  Button,
} from '@chakra-ui/react';
import Head from 'next/head';
import useSwr from 'swr';
import { useContractRead } from 'wagmi';
import { Grid } from '../../components/Grid';
import { Detail } from '../../components/Detail';
import { SpectrumSvg } from '../../components/SpectrumSvg';
import { getDetail, getLayers } from '../../utils/spectrum';
import { SpectrumExportModal } from '../../components/SpectrumExportModal';
import { config } from '../../utils/config';
import contractABI from '../../utils/contractABI.json';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Spectrum = () => {
  const router = useRouter();
  const { id } = router.query;
  const tokenId = parseInt(id, 10);
  const { data, error } = useSwr(id ? `/api/spectrum/${id}` : null, fetcher);
  const [{ data: totalSupply }] = useContractRead(
    {
      addressOrName: config.contractAddress,
      contractInterface: contractABI,
    },
    'totalSupply'
  );

  const goToPrev = () => {
    if (!totalSupply._hex) return;

    const total = totalSupply.toNumber();

    if (tokenId === 0) {
      router.push(`/spectrum/${total - 1}`);
    } else {
      router.push(`/spectrum/${tokenId - 1}`);
    }
  };

  const goToNext = () => {
    if (!totalSupply._hex) return;

    const total = totalSupply.toNumber();

    if (tokenId >= total - 1) {
      router.push(`/spectrum/0`);
    } else {
      router.push(`/spectrum/${tokenId + 1}`);
    }
  };

  return (
    <Box textAlign="center" fontSize="md">
      <Head>
        <title>Kinetic Spectrums</title>
      </Head>
      <Box alignItems="center" px={6}>
        <Flex
          alignItems="center"
          justifyContent={totalSupply ? 'space-between' : 'center'}
        >
          {totalSupply && (
            <Button
              height="32px"
              px={4}
              lineHeight={1}
              fontSize="sm"
              borderRadius="lg"
              colorScheme="black"
              border="1px solid rgba(255,255,255,0.2)"
              _hover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              background="transparent"
              minW="80px"
              onClick={goToPrev}
            >
              Previous
            </Button>
          )}

          <Link href="/">
            <a>
              <Heading
                my={12}
                fontWeight="semibold"
                fontSize="lg"
                as="h1"
                color="white"
              >
                Kinetic Spectrums #{id}
              </Heading>
            </a>
          </Link>
          {totalSupply && (
            <Button
              minW="80px"
              height="32px"
              px={4}
              lineHeight={1}
              fontSize="sm"
              borderRadius="lg"
              colorScheme="black"
              border="1px solid rgba(255,255,255,0.2)"
              _hover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              background="transparent"
              onClick={goToNext}
            >
              Next
            </Button>
          )}
        </Flex>

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
