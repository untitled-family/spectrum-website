import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { withSentry } from '@sentry/nextjs';

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST': {
      const { address } = req.body;
      const whitelistAddresses = [
        '0xFF5FE6e0D3D48c90A66217dd4A7560a3ed8dACD2',
        '0x9cdd6e35ee8cd6d8f37c19b9cd59395efa330cf1',
        '0xFc5f56d9957789CB4c3FBFa855cDe02121035567',
      ];

      const leafNodes = whitelistAddresses.map((a) => keccak256(a));
      const merkletree = new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
      });
      const rootHash = merkletree.getRoot().toString('hex');

      const hashedAddress = keccak256(address);
      const proof = merkletree.getHexProof(hashedAddress);

      res.json({
        whitelisted: merkletree.verify(proof, hashedAddress, rootHash),
        rootHash,
        proof,
        hashedAddress,
      });
      break;
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};

export default withSentry(handler);
