
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

**Example Progrma Using Axios:**

``` javascript 
async function UploadJsonData(){
    axios({
        method: 'post', //you can set what request you want to be
        url: 'https://<your address>/upload/uploadJson',
        data: {
            name:"CLOUDIPFS",
            data:{
                name:"First NFT to IPFS",
                Description:"This is a first ipfs cloud test"
            },
            pin: true
        },
          headers: {
              publickey: 'DEFAULT',
              privatekey: 'DEFAULT123'
          }
        }).then(suc=>{
            console.log(suc);
        })
    }
```
<br>
<br>

**Upload File:**

API Call: **``` /upload/uploadFile ```**

Header: ``` publickey: <'your publick key'>, privatekey:<'your privatekey'>```

API response: ```{
    "ipfshash":<'file hash'>,
    "url":"<'url of IPFS'>",
    "pin":true or false
}```

**Example Progrma Using Axios:**

``` javascript 
async function UploadFile(){
    const image = fs.createReadStream("yourfile.png")
    async function UploadData(){
        let datas = new FormData();
        datas.append('file', image);
        console.log(datas);
        let re = axios.post("https://<your address>/upload/uploadFile", datas,
        {
            headers: {
                publickey: 'DEFAULT',
                privatekey: 'DEFAULT123'
            },data:{
              pin: true
            }
        },).then(suc=>{
            console.log(suc)
        })
    }
```

<br>
<br>
<br>

**Get JSON Data:**

API Call: **``` /get/getJson ```**

Header: ``` publickey: <'your publick key'>, privatekey:<'your privatekey'>```

Body: ``` {
  hash: "your ipfs hash"
}```

API response: ```{
    "data":<'ipfs json data'>
}```

**Example Progrma Using Axios:**

``` javascript 
async function GetJsonData(){
    axios({
        method: 'get', //you can set what request you want to be
        url: 'https://<Your Address>/get/getJson',
        data: {
            hash:"Your IPFS hash"
        },
        headers: {
            publickey: 'DEFAULT',
            privatekey: 'DEFAULT123'
        }
    }).then(suc=>{
        console.log(suc);
    })
}
```
