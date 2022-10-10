
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
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#related">Related</a> •
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



## How To Use and Functions

To use this you need to instal unity and import the SDK inside you game project. Make sure you have a backup of your project.

<br>
<br>
<br>


**ERC20 Function's:**

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

**ERC721 Function's:**

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

**NFT Function's:**

- **await CoinEX.NFT.GetNFTTextureToPanel(string url, Renderer panel)**
        - By using this function we can get NFT image from ipfs hash or any url and render the material to 3d object.

- **await CoinEX.NFT.GetNFTJson(string ipfshash)**
        - By using this function we can get JSON data from the IPFS hash.

**Wallet Function's:**

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


# What is Next:

**1) Not Yet ready for public usage. If we got any funding or respective company accept's this project it will be able to seen in public**

**2) Need to add more contract standards like ERC1155 and many more. Also Custom Contract inteaction will be added**

**3) Debuging of the SDK will be held. And a new version of Bug free SDK will be provided**
