# ERC721 Token Ethereum Solidity Royalties

Ethereum solidity ERC721 token sample
## prerequisites

Install dependencies

  - npm i

Truffle compiler:

  - npm i -g truffle

Openzeppelin smart contracts lib: node_modules\@openzeppelin\contracts

  - download openzeppelin contracts https://docs.openzeppelin.com/contracts/4.x/

Rarible protocol contracts: @rarible/royalties/contracts (update local if new version)

  - https://github.com/rarible/protocol-contracts

## Compile smart contracts

- truffle compile

# Build and test

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
  -

