const AssetERC721 = artifacts.require('AssetERC721')

contract ("ERC721 with Royalties", accounts => {

    const [deployerAddress, tokenAddr1] = accounts;

    it ("is possible to mint tokens", async () => {
        let token = await AssetERC721.deployed();
        await token.mint(tokenAddr1);
    });

    it ("is possible to set royalties", async () => {
        let token = await AssetERC721.deployed();
        await token.setRoyalties(0, deployerAddress, 1000);
        let royalties = await token.getRaribleV2Royalties(0);
        assert.equal(royalties[0].value,'1000');
        assert.equal(royalties[0].account,deployerAddress);
    });

    it ("works with ERC2981 Royalties", async () => {
        let token = await AssetERC721.deployed();
        let royalties = await token.royaltyInfo(0,100000);
        assert.equal(royalties.royaltyAmount.toString(),'10000');
        assert.equal(royalties.receiver, deployerAddress);
    });

    it ("returns URI", async() => { 
        let token = await AssetERC721.deployed();
        await token.mint(tokenAddr1);
        // assert.equal(token.tokenURI(0),'https://mfy.es')
    });

    

   

})