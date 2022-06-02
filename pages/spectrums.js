import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import client from '../apollo-client';
import { config } from '../utils/config';
import { SpectrumThumbnail } from '../components/SpectrumThumbnail';

const PAGE_LIMIT = 24;

const getMintedSpectrums = (cursor = '') =>
  client.query({
    query: gql`
      query MintedSpectrums {
        mints(
          where: {
            collectionAddresses: "${config.contractAddress}"
          },
          pagination: {
            limit: ${PAGE_LIMIT},
            after: "${cursor}"
          }
        ) {
          nodes {
            token {
              tokenId
              image {
                mediaEncoding {
                  ... on ImageEncodingTypes {
                    original
                  }
                }
              }
              owner
            }
          }
          pageInfo {
            hasNextPage
            limit
            endCursor
          }
        }
      }
    `,
  });

export async function getServerSideProps() {
  const {
    data: {
      mints: { nodes, pageInfo },
    },
  } = await getMintedSpectrums();

  return {
    props: {
      mints: nodes,
      pageInfo,
    },
  };
}

export default function Spectrums({ mints, pageInfo }) {
  const [cursor, setCursor] = useState(pageInfo.endCursor);
  const [hasNextPage, setHasNextPage] = useState(pageInfo.hasNextPage);
  const [spectrums, setSpectrums] = useState(mints);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setCursor(pageInfo.endCursor);
  }, [pageInfo.endCursor]);

  const handleLoadMore = async () => {
    setLoading(true);
    const { data } = await getMintedSpectrums(cursor);

    setSpectrums([...spectrums, ...data.mints.nodes]);
    setCursor(data.mints.pageInfo.endCursor);
    setHasNextPage(data.mints.pageInfo.hasNextPage);
    setLoading(false);
  };

  return (
    <Box textAlign="center" fontSize="md">
      <SimpleGrid maxWidth={1600} mx="auto" columns={[1, 1, 2, 2, 3, 3]}>
        {spectrums.map(({ token }) => (
          <SpectrumThumbnail token={token} key={token.tokenId} />
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          mt={4}
          height="32px"
          px={4}
          lineHeight={1}
          fontSize="sm"
          borderRadius="lg"
          colorScheme="white"
          color="black"
          isLoading={isLoading}
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      )}
    </Box>
  );
}

Spectrums.propTypes = {
  mints: PropTypes.array.isRequired,
  pageInfo: PropTypes.shape({
    endCursor: PropTypes.string.isRequired,
    hasNextPage: PropTypes.bool,
    limit: PropTypes.number,
  }),
};
