import { AspectRatio, Box, Button, Image, SimpleGrid } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import client from '../apollo-client';
import { config } from '../utils/config';

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

  console.log('mints', mints);
  console.log('pageInfo', pageInfo);
  console.log('cursor', cursor);

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
          <Link href={`/spectrum/${token.tokenId}`}>
            <a>
              <Box p={[6, 8, 8, 8, 12]}>
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={token.image.mediaEncoding.original}
                    alt={`Spectrum ${token.tokenId}`}
                  />
                </AspectRatio>

                {token.tokenId}
                <Box>Owner: {token.owner}</Box>
              </Box>
            </a>
          </Link>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button isLoading={isLoading} onClick={handleLoadMore}>
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
