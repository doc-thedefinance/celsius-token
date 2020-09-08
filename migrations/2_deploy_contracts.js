var CelsiusToken = artifacts.require("CelsiusToken");

module.exports = function(deployer, network, accounts) {
  const userAddress = accounts[0];
  const amount_to_mint = 13370000; // 1337 CEL - 4 decimals
  deployer.deploy(CelsiusToken, amount_to_mint);
};
