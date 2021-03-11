require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain puppy hunt casino swift style'; 
let testAccounts = [
"0x3832561b02f0f3433d9a4c6727639c1594b3dca94390bfd135fd4931c6eca9c4",
"0x2565348513c2a446842a42225b6f830475ab8f896a0b88cb912f441c1044308e",
"0xe27d74da895678f9c09dffab2ecfe4c0fdef9483bbfb439669342cdb507b6fb8",
"0x5deae8ea42d65c413f178403d4ba83a8a1407759a651044b9ac71b4516796bd4",
"0xe47d6af6d52c0755e17f35a65794e4bf22007d8397110054d780295f285671dd",
"0x2dd44e14e11c49a3db84412be07b7f2c90b03a2e8338e0acb1efaa7a9e7c227e",
"0xc000685f211e2276388988896c0eda194da6b32bbc30252db8724abd1861cd47",
"0x0ed371e027331e8c84880b8ce26da3c6503d7a6fc31d5d0af9315060c758743e",
"0x616dcaca055e79936b8b6cfc0357ab63a86d9ec48ec5dbdb62033aa202c52b55",
"0xd4f5cc44e9676d06a75faf7a11c341c23b73fc007255032ea5d616dc799b490d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
