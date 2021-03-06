require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = 'blah'

module.exports = {
  defaultNetwork: "BSCMainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    //BSCtestnet: {
      //url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      //chainId: 97,
      //gasPrice: 20000000000,
      //accounts: {mnemonic: mnemonic}
    //},
    BSCMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.0",
};
