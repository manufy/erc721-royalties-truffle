const AssetERC721 = artifacts.require("AssetERC721");

module.exports = function (deployer) {
  deployer.deploy(AssetERC721);
};
