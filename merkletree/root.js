const keccak256 = require('keccak256');
const { MerkleTree } = require('merkletreejs');

const friends = [
  '0xFF5FE6e0D3D48c90A66217dd4A7560a3ed8dACD2', // himlate.eth
  '0xFc5f56d9957789CB4c3FBFa855cDe02121035567', // biron.eth
  '0x974586BbE12Af51dA62803966462bAFC661d7Da7', // derolez.eth
  '0x9079a0a7e0eBEe7650C8c9Da2b6946e5a5B07C19', // dappboi.eth
  '0xBa50675f178F81E6f9e9d278Cb7cE04291e3CE13', // mrkylemac.eth
  '0x4F93264BF892aa3e8280b6AA4482D4B5b433BA39', // siimon.eth
  '0xA283F6fcAd792B15dd790CDD82537b777C5d3346', // maxspencer.eth
  '0x0412aAbdF8c84284b529bA44351Ca3895c5725B2', // bappy.eth
  '0x802120766fCAFbaCBebFc9438550e92389846afF', // adriendenat.eth
  '0x2aE5f36C77A736f76d61F3eEC06F12CAF2963fD6', // sammdec.eth
  '0x92286a809dD6B2Ce619cc484b63321bC0C6B4051', // paulnkim.eth
  '0xeF3e454d38A7b7A9eCBE49cfecAa4F30bB31B60a', // benjitaylor.eth
  '0x0F3E3883f14988E0bb11aE4bb6dde136e5eF5006', // @jordanoverbye
  '0x922efbFce5a3068759E5E7aa72250c18dfA9A5ff', // benjaminfritz.eth
  '0x3a41be3714c64ad0d094ee9b325d9def0dba966f', // yavor.eth
  '0x58de34b24f65587c0bb2a96e8eed719bcfe73073', // marylou.eth
  '0x784fa0c3c12aee8f571ef3c91408cb2219b431dc', // salief.eth
  '0xb188ee1daca51ce6b58ccf8a81ce4025a714bc73', // elpizo.eth
  '0x38cb027d65aaf2d3f401ff9bd0599afe86f1b627', // heyhaigh.eth
  '0x662127bf82b794a26b7ddb6b495f6a5a20b81738', // paulcowgill.eth
  '0x632C1F37E75c471F4002B259B94A818416a23154', // @wangsam44094415
  '0x0cebb82c003888bedb89b71f7a0bde5b0e99f2c5', // romancasper.eth
  '0xdbeF955729cFb47Bf210A32C1E3DC2e3942ca39e', // filippo
  '0x1592221ff5c0397a563d58D7F3E6c95dd444b2CD', // @oso_fps
  '0xE44B4921BBBEb537f19C1b6229aD903eb105B21D', // @HoDkt3
  '0xbcd56ca065147753e5e019a23cb259e000bcc261', // wonimaaidasao.eth
  '0x0A828953F4A30F097E6217bcfCB8fc4f7c9Aa110', // @tomomot420
  '0x5b48e85D4C2ca9D1FFbEf295973D755D935fE23E', // @oneli33
  '0x33E51e61FB3F83B4Ffb0ae0df2Ece8f52E24e990', // @jdothue
  '0xde13f752a3b12a8918ff84bc048a50b73f5240a6', // truthpurity.eth
  '0x29169AC28e447c50831d4968A7E8D7fe9471e18E', // trensodlz
  '0xB69e003622Aec81F7C30bE0dfcf69dAc6A040abc', // @cosmotresmil
  '0x7f25f8ce08edba7a18e6d9a7fa1bca4854c6a31d', // jahl.eth
  '0x3932f608f69eeb3e58ee067be0b03ca4d82da6fb', // loz.eth
  '0xb188ee1daca51ce6b58ccf8a81ce4025a714bc73', // elpizo.eth
  '0xfeef2e81211d485ea5698505883a36d64f72e60c', // ddadybayo.eth
  '0xCdFFFB8006113488c88B368E4D3001F47d373dc7', // @ethanattewell
  '0xE44B4921BBBEb537f19C1b6229aD903eb105B21D ', // @hodkt3
  '0x38cb027d65aaf2d3f401ff9bd0599afe86f1b627', // heyhaigh.eth
  '0x9857b416a7e84dee915444e03f389203e9ec3c5b', // callbot.eth
];

const leafNodes = friends.map((a) => keccak256(a));
const merkletree = new MerkleTree(leafNodes, keccak256, {
  sortPairs: true,
});
const rootHash = merkletree.getRoot().toString('hex');
console.log(rootHash);
