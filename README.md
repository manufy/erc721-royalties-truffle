# ERC721 Token Ethereum Solidity Royalties

Ethereum solidity ERC721 token sample
## prerequisites

Install dependencies

  - npm i

Truffle compiler:

  - npm i -g truffle

Openzeppelin smart contracts lib: node_modules\@openzeppelin\contracts
Download openzeppelin contracts https://docs.openzeppelin.com/contracts/4.x/

  - npm install @openzeppelin/contracts

Rarible protocol contracts: @rarible/royalties/contracts (update local if new version)

  - https://github.com/rarible/protocol-contracts

## Compile smart contracts

- truffle compile --reset 
- migrate 
- migrate --reset

# Build and test ERC721 Ownable token

- truffle develop -> to enter dev console
  - migrate -> to compile & deploy smart contracts
  - migrate --reset -> to recompile & deploy smart contracts
  - let token = await AssetERC721.deployed();
  - token. -> TAB -> to see autocompletion
  - token.address -> view deploy address
  - token.ownerOf -> my own address
  - token.owner -> owner address
  - accounts -> list accounts
  - token.mint(accounts[0]) -> mint token at address[0] 
  - (await token.balanceOf(accounts[0])).toNumber() -> check balance at address[0]

# Build and test ERC721 Rarible token

 - let token_royalties = await AssetERC721.deployed();
 - token_royalties.mint(accounts[0])
 - token_royalties.setRoyalties(0,accounts[0],1000); -> 10% royalties
 - token_royalties.getRaribleV2Royalties(0);
 - token_royalties.supportsInterface("0xcad96cca")

# NFT Royalties Standard

 https://eips.ethereum.org/EIPS/eip-2981

 - let token_royalties = await AssetERC721.deployed();
 - token_royalties.mint(accounts[0])
 - token_royalties.setRoyalties(0,accounts[0],1000); -> 10% royalties
 - token_royalties.getRaribleV2Royalties(0)
 - let result = await token_royalties.royaltyInfo(0, 1000000)
 - result
 - result[1].toString()


