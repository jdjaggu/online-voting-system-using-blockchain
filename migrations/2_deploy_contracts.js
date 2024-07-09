var Election = artifacts.require("./Election.sol");
// to peploy contract

module.exports = function(deployer) {
    deployer.deploy(Election);
};
