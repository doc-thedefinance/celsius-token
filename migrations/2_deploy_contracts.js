var CelsiusToken = artifacts.require("CelsiusToken");

module.exports = function(deployer) {
  deployer.deploy(CelsiusToken(45000000000));
};
