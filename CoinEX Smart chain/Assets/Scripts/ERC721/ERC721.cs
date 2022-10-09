using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;

namespace CoinEX
{
    public class ERC721
    {
        public static string url = "https://testnet-rpc.coinex.net/";
        public static string weburl = "http://localhost:80";

        public class ERC721C
        {
            public string account;
            public string contract;
            public string tokenid;
        }

        public async static Task<string> GetERC721BalanceOf(string acc, string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = acc,
                contract = con,
                tokenid = ""
            });

            string balance = await e.WebRequest(jsonBody, "getERC721BalanceOf");
            return balance;
        }

        public async static Task<string> GetERC721Name(string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = "",
                contract = con
            });

            string name = await e.WebRequest(jsonBody, "getERC721Name");
            return name;
        }

        public async static Task<string> GetERC721Symbol(string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = "",
                contract = con
            });

            string symbol = await e.WebRequest(jsonBody, "getERC721Symbol");
            return symbol;
        }

        public async static Task<string> GetERC721OwnerOf(string con, string tokenid)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = "",
                contract = con,
                tokenid = tokenid
            });

            string owner = await e.WebRequest(jsonBody, "getERC721OwnerOf");
            return owner;
        }

        public async static Task<string> GetERC721URI(string con, string tokenid)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = "",
                contract = con,
                tokenid = tokenid
            });

            string uri = await e.WebRequest(jsonBody, "getERC721URI");
            return uri;
        }

        public async static Task<string> GetERC721TotalSupply()
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = "",
                contract = "",
                tokenid = ""
            });

            string uri = await e.WebRequest(jsonBody, "getERC721TotalSupply");
            return uri;
        }

        public async static Task<string> GetERC721MyTokens(string account, string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC721C()
            {
                account = account,
                contract = con,
                tokenid = ""
            });

            string uri = await e.WebRequest(jsonBody, "getERC721MyTokenID");
            return uri;
        }
    }
}
