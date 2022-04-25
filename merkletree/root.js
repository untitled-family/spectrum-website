const keccak256 = require('keccak256');
const { MerkleTree } = require('merkletreejs');

const friends = [
  // '0xFF5FE6e0D3D48c90A66217dd4A7560a3ed8dACD2',
  '0x9cdd6e35ee8cd6d8f37c19b9cd59395efa330cf1',
  '0xFc5f56d9957789CB4c3FBFa855cDe02121035567',
];

const leafNodes = friends.map((a) => keccak256(a));
const merkletree = new MerkleTree(leafNodes, keccak256, {
  sortPairs: true,
});
const rootHash = merkletree.getRoot().toString('hex');
console.log(rootHash);
