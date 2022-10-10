const express = require("express")
const app = express()
const { ethers, BigNumber } = require("ethers");
const axios = require("axios");

app.use(express.json())

async function ERC20Func(account, tocontract, func)
{
    var contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenSaleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isTokenTransferable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toggle","type":"bool"}],"name":"toggleTransferable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"emergencyERC20Drain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenTotalAmount","type":"uint256"},{"name":"_adminAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.coinex.net/");
    const contract = new ethers.Contract(tocontract, contractABI, provider);
    if(func == "balanceOf")
    {
        const balance = await contract.balanceOf(account);
        return (balance);
    }else if(func == "decimals")
    {
        const decimals = await contract.decimals();
        return (decimals);
    }else if(func == "name")
    {
        const name = await contract.name();
        return (name);
    }else if(func == "totalSupply")
    {
        const totsup = await contract.totalSupply();
        return totsup;
    }else if(func == "symbol")
    {
        const symbol = await contract.symbol();
        return symbol;
    }else{
        return "";
    }
}

async function ERC721Func(tokenid,conAbi, account, tocontract, func)
{
    var contractABI = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    console.log(conAbi);
    var finalData = conAbi.replace(/\\/g, "");
    console.log(JSON.parse(finalData));
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.coinex.net/");
    if(conAbi != "")
    {
        const contract = new ethers.Contract(tocontract, JSON.parse(finalData), provider);
        if(func == "balanceOf")
        {
            const balance = await contract.balanceOf(account);
            return (balance);
        }else if(func == "decimals")
        {
            const decimals = await contract.decimals();
            return (decimals);
        }else if(func == "name")
        {
            const name = await contract.name();
            return (name);
        }else if(func == "totalSupply")
        {
            const totsup = await contract.totalSupply();
            return totsup;
        }else if(func == "symbol")
        {
            const symbol = await contract.symbol();
            return symbol;
        }else if(func == "ownerof")
        {
            const ownerof = await contract.ownerOf(tokenid);
            return ownerof;
        }else if(func == "uri")
        {
            const uri = await contract.tokenURI(tokenid);
            return uri;
        }else if(func == "alltokenbal")
        {
            const totsup = await contract.totalSupply();

            let tot = parseInt(totsup._hex);
            let all = [];
            let j =0;
            for(let i=0; i<tot; i++)
            {
                const ownerof = await contract.ownerOf(i);
                if(ownerof == account)
                {
                    all[j] = i;
                    j++;
                }
            }
            return all;
        }
        else{
            return "";
        }
    }else{
        const contract = new ethers.Contract(tocontract, contractABI, provider);
        if(func == "balanceOf")
        {
            const balance = await contract.balanceOf(account);
            return (balance);
        }else if(func == "decimals")
        {
            const decimals = await contract.decimals();
            return (decimals);
        }else if(func == "name")
        {
            const name = await contract.name();
            return (name);
        }else if(func == "totalSupply")
        {
            const totsup = await contract.totalSupply();
            return totsup;
        }else if(func == "symbol")
        {
            const symbol = await contract.symbol();
            return symbol;
        }else if(func == "ownerof")
        {
            const ownerof = await contract.ownerOf(tokenid);
            return ownerof;
        }else if(func == "uri")
        {
            const uri = await contract.tokenURI(tokenid);
            return uri;
        }else if(func == "alltokenbal")
        {
            const totsup = await contract.totalSupply();

            let tot = parseInt(totsup._hex);
            let all = [];
            let j =0;
            for(let i=0; i<tot; i++)
            {
                const ownerof = await contract.ownerOf(i);
                if(ownerof == account)
                {
                    all[j] = i;
                    j++;
                }
            }
            return all;
        }
        else{
            return "";
        }
    }
}

app.use('/', express.static(__dirname+"/script.js"))

//----------------------------------------------------Wallet Connect-----------------------------------------------------
app.get("/connect",(req,res,next)=>{
    res.sendFile(__dirname + "/htmls/walletconnect.html");
})

app.get("/signMessage",(req,res,next)=>{
    res.sendFile(__dirname + "/htmls/signmessage.html");
})

//----------------------------------------------------ERC20 function-----------------------------------------------------

app.get("/sendERC20",(req,res,next)=>{
    res.sendFile(__dirname + "/htmls/erc20/senderc20.html");
})

app.get("/sendCET",(req,res,next)=>{
    res.sendFile(__dirname + "/htmls/sendcet.html");
})

app.get("/getERC20Balance", async (req,res,next)=>{
    let balance = await ERC20Func(req.body.account, req.body.contract, "balanceOf");
    res.send({values: BigNumber.from(balance._hex).toString()});
    next();
})

app.get("/getERC20Decimal", async (req,res,next)=>{
    let decimals = await ERC20Func(req.body.account, req.body.contract, "decimals");
    res.send(decimals.toString());
    next();
})

app.get("/getERC20Name", async (req,res,next)=>{
    let name = await ERC20Func(req.body.account, req.body.contract, "name");
    res.send(name.toString());
    next();
})

app.get("/getERC20Symbol", async (req,res,next)=>{
    let symbol = await ERC20Func(req.body.account, req.body.contract, "symbol");
    console.log(symbol);
    res.send(symbol.toString());
    next();
})

//----------------------------------------------------ERC721 function-----------------------------------------------------

app.get("/sendERC721",(req,res,next)=>{
    res.sendFile(__dirname + "/htmls/erc721/senderc721.html");
})

app.get("/getERC721Name", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi, req.body.account, req.body.contract, "name");
    res.send(name.toString());
    next();
})

app.get("/getERC721Symbol", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi,req.body.account, req.body.contract, "symbol");
    res.send(name.toString());
    next();
})

app.get("/getERC721OwnerOf", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi,req.body.account, req.body.contract, "ownerof");
    res.send(name.toString());
    next();
})

app.get("/getERC721TotalSupply", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi,req.body.account, req.body.contract, "totalSupply");
    res.send(name.toString());
    next();
})

app.get("/getERC721URI", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi,req.body.account, req.body.contract, "uri");
    res.send(name.toString());
    next();
})

app.get("/getERC721BalanceOf", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi, req.body.account, req.body.contract, "balanceOf");
    res.send(name.toString());
    next();
})

app.get("/getERC721MyTokenID", async (req,res,next)=>{
    let name = await ERC721Func(req.body.tokenid,req.body.abi, req.body.account, req.body.contract, "alltokenbal");
    console.log(name);
    res.send(name);
    next();
})

app.get("/getIPFSJSON", async (req,res,next)=>{
    let values = await axios.get("https://ipfs.io/ipfs/"+req.body.hash);
    res.send(JSON.stringify(values.data));
    next();
})


app.listen(80, ()=>{
    console.log("Server started at 80")
})