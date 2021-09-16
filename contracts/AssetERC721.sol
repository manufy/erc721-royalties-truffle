// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/erc721.sol";

contract AssetERC721 is ERC721 {

    constructor() ERC721("Minimal","MIN") {}

}