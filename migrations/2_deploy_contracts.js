var CelsiusToken = artifacts.require("CelsiusToken");

module.exports = function(deployer, network, accounts) {
  const userAddress = accounts[0];
  // console.log("account 0 => " + userAddress);
  // deployer.deploy(CelsiusToken, 450000, {from: userAddress});
  deployer.deploy(CelsiusToken, 4500000, {from: '0xF8587eEa0573eDbb9b96f431E48dc1b331e0B9a0'});
};
