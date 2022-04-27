import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { config } from '../../../utils/config';

const handler = async (req, res) => {
  const { id } = req.query;
  const web3 = createAlchemyWeb3(process.env.ALCHEMY);
  const response = await web3.alchemy.getNftMetadata({
    contractAddress: config.contractAddress,
    tokenId: id.toString(),
  });

  res.status(200).json({ id, spectrum: response });
};

export default handler;
