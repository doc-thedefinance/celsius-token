var CelsiusToken = artifacts.require("celsius-token");

module.exports = function(deployer) {
  deployer.deploy(CelsiusToken);
};
