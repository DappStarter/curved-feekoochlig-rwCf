require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rebel night pulp hunt kitchen sure subway'; 
let testAccounts = [
"0x5f489e095b8df2a631443c21e4a0b87bce77268306e73a3e0e6f2753954ebf26",
"0xb6a93ed58fdd41909a10af9a1b335d56d52cebdc6d6b5f0d21e5a36c8de54c66",
"0x1bbaa071899478bdd8fd1c6ed8f6ba9ef725c552242f6e232440921f8832098c",
"0xe786aa58333de608804cf222e0d09907d87726774696147617d73bc98ac66f2f",
"0x73e5e57021886202b2e93fb21c510790165beb1e34c477a01c807fe88fb3f1c6",
"0x38f785514ba1c7d71db3c0c267a09abbbc03842d4ddd8e976207c7ab900e99bc",
"0x64a4f52c0865b5ef72435047f0649203fad6f2fae75d4993268a573e2de0f1bc",
"0x219ce19c75a3c1a1b7b8309758f3a8f3a47aebbdb82dd67ac6d7bc70f4f6c483",
"0xd9841df31fac9dffca36adcfbe4324491e986e236feef38abc3faf8689193dae",
"0xa5b1d7f0062adbf3289455844a48d45b431838a157619f3ec5be94535c72e298"
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
            version: '^0.8.0'
        }
    }
};

