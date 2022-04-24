import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST': {
      const { address } = req.body;
      const whitelistAddresses = ['0xFF5FE6e0D3D48c90A66217dd4A7560a3ed8dACD2'];

      const leafNodes = whitelistAddresses.map((a) => keccak256(a));
      const merkletree = new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
      });
      const rootHash = merkletree.getRoot().toString('hex');

      const hashedAddress = keccak256(address);
      const proof = merkletree.getHexProof(hashedAddress);

      res.json({
        whitelisted: merkletree.verify(proof, hashedAddress, rootHash),
      });
      break;
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};

export default handler;
