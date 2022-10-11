
<h1 align="center">
  <br>
  <br>
  Coin-EX Unity SDK
  <br>
</h1>

<h4 align="center">A Unity SDK for Interacting with CoinEX Smart chain in unit.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-install">How To Install</a> •
  <a href="#how-to-use-the-functions">How To Use the Functions</a> •
        <a href="#erc20-functions">ERC20 Functions</a> •
        <a href="#erc721-functions">ERC721 Functions</a> •
        <a href="#wallet-functions">Wallet Functions</a> •
        <a href="#nft-functions">NFT Functions</a> •
        <a href="#what-is-next">What is Next</a> •
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Key Features

* Easy to Use:
  - CoinEx unity SDK provides a developer friendly function which will be easier to intreact with blockchain inside unity.
* Easy and Effective intreaction with Smart chain:
  - This tool uses node js for intreacting with wallets and getting data from blockchain making it more flexible for intreacting with blockchain.
* No Need of Full Knoweleadge of Blockchain:
  - Just Basic's of blockchain is More enough for using This tool.
* Metamask Wallet intreaction:
  - It provides metamask wallet intreaction much more easier and we can send data sign data do whatever we needed in metamask using this tool.

## How To Install

To run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

First run node js server. Because for now we not currently having any link for API server connection for now Localhost is better to go:

WINDOWS:
```bash
# Clone this repository
$ git clone https://github.com/Pr0fe5s0r/CoinEX-Unity-SDK

# Go into the API-IPFS-NODE repository
$ cd CoinEX-Unity-SDK

# Go into the windows/main
$ cd NodeJS-CoinEX

# Generate API Keys
$ npm i

# Start the server
$ node node.js
```

<br>
<br>
<br>



## How To Use the Functions

To use this you need to install unity and import the SDK inside you game project. Make sure you have a backup of your project.

<br>


## ERC20 Functions

- **await CoinEX.ERC20.GetERC20BalanceOf(string account, string contractaddress)**
        - By using this function we can get balance of a person who owns that ERC20.

- **await CoinEX.ERC20.GetERC20Decimals(string contractaddress)**
        - By using this function we can get decimals of the contract address.

- **await CoinEX.ERC20.GetERC20Name(string contractaddress)**
        - By using this function we can get name of the contract address.

- **await CoinEX.ERC20.GetERC20Symbol(string account, string contractaddress)**
        - By using this function we can get symbol of the contract address.

- **await CoinEX.ERC20.SendERC20To(string account, string contractaddress)**
        - By using this function we can do ERC20 transaction by Metamask.

- **await CoinEX.ERC20.CreateERC20(string name, string amount, string symbol, string decimals)**
        - By using this function create our own ERC20 inside the game.

## ERC721 Functions

- **await CoinEX.ERC721.GetERC721BalanceOf(string account, string contractaddress)**
        - By using this function we can get balance of a person who owns that ERC721.

- **await CoinEX.ERC721.GetERC721BalanceOf(string account, string contractaddress, string abi)**
        - By using this function we can get balance of a person who owns that ERC20 but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721Name(string contractaddress)**
        - By using this function we can get name of the contract address.

- **await CoinEX.ERC721.GetERC721Name(string contractaddress)**
        - By using this function we can get name of the contract address but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721Symbol(string contractaddress)**
        - By using this function we can get symbol of the contract address.

- **await CoinEX.ERC721.GetERC721Symbol(string contractaddress, string abi)**
        - By using this function we can get symbol of the contract address but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721OwnerOf(string contractAddress, string tokenID)**
        - By using this function Get the owner of the particular token ID.

- **await CoinEX.ERC721.GetERC721OwnerOf(string contractAddress, string tokenID, string abi)**
        - By using this function Get the owner of the particular token ID but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721URI(string tokenid, string contractaddress)**
        - By using this function we can get the token uri.

- **await CoinEX.ERC721.GetERC721URI(string tokenid, string contractaddress, string abi)**
        - By using this function we can get the token uri but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721TotalSupply(string contractaddress)**
        - By using this function we can get totalsupply of the token.

- **await CoinEX.ERC721.GetERC721TotalSupply(string contractaddress, string abi)**
        - By using this function we can get totalsupply of the token but by providing custom ABI.

- **await CoinEX.ERC721.GetERC721MyTokens(string account, string contractaddress)**
        - By using this function we can get all the erc721 tokenid of the user.

- **await CoinEX.ERC721.GetERC721MyTokens(string account, string contractaddress, string abi)**
        - By using this function we can get all the erc721 tokenid of the user but by providing custom ABI.

- **await CoinEX.ERC721.SendERC721To(string to, string contractaddress, string tokenid)**
        - By using this function we send erc721 token's from one person to another person.

## NFT Functions

- **await CoinEX.NFT.GetNFTTextureToPanel(string url, Renderer panel)**
        - By using this function we can get NFT image from ipfs hash or any url and render the material to 3d object.

- **await CoinEX.NFT.GetNFTJson(string ipfshash)**
        - By using this function we can get JSON data from the IPFS hash.

## Wallet Functions

- **await CoinEX.Wallet.GetAccountBalanceFromWei(string account)**
        - By using this function we can get CET Balance from wei.

- **await CoinEX.Wallet.GetAccountBalanceInWei(string account)**
        - By using this function we can get CET Balance in wei.

- **await CoinEX.Wallet.ConnectWallet()**
        - By using this function it return connected wallet.

- **await CoinEX.Wallet.SignMessage(string message)**
        - By using this function it will return signed message.

- **await CoinEX.Wallet.SendCET(string to, string amount)**
        - By using this function we can send CET token's to respective address.

- **CoinEX.Wallet.FromWei(string amount)**
        - By using this function we convert WEI to number.

- **CoinEX.Wallet.ToWei(string amount)**
        - By using this function we convert number to WEI.


# What is Next:

**1) We need to publish the node js server for public usage.**

**2) More amount of work is needed on Debugging and code optimization is needed.**

**3) New token standards are needed. For now, there are only two token standards have been deployed in game. Soon we will add other token standards to.**
