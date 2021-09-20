const MinimalERC721 = artifacts.require('AssetERC721')

contract ("ERC721 with Royalties", accounts => {

    const [deployerAddress, tokenAddr1] = accounts;

    it ("is possible to mint tokens", async () => {
        let token = await MinimalERC721.deployed();
        await token.mint(tokenAddr1);
    })

})