using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

namespace CoinEX
{
    public class ERC20
    {
        public static string url = "https://testnet-rpc.coinex.net/";
        public static string weburl = "http://localhost:80";

        public class ERC20C
        {
            public string account;
            public string contract;
        }
        public async static Task<string> GetERC20BalanceOf(string acc, string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC20C()
            {
                account = acc,
                contract = con
            });

            string balance = await e.WebRequest(jsonBody, "getERC20Balance");
            return balance;
        }

        public async static Task<string> GetERC20Decimals(string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC20C()
            {
                account = "",
                contract = con
            });

            string decimals = await e.WebRequest(jsonBody, "getERC20Decimal");
            return decimals;
        }

        public async static Task<string> GetERC20Name(string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC20C()
            {
                account = "",
                contract = con
            });

            string name = await e.WebRequest(jsonBody, "getERC20Name");
            return name;
        }

        public async static Task<string> GetERC20Symbol(string con)
        {
            WEB e = new WEB();

            string jsonBody = JsonUtility.ToJson(new ERC20C()
            {
                account = "",
                contract = con
            });

            string name = await e.WebRequest(jsonBody, "getERC20Symbol");
            return name;
        }

        public async static Task<string> SendERC20To(string to, string contract, string amount)
        {
            Application.OpenURL(weburl + "/sendERC20"+"?contract="+contract+"&to="+to+"&amount="+amount);

            GUIUtility.systemCopyBuffer = "";
            string clipBoard = "";

            while (clipBoard == "")
            {
                clipBoard = GUIUtility.systemCopyBuffer;
                await Task.Delay(100);
            }
            // check if clipboard response is valid
            if (clipBoard.StartsWith("0x") && clipBoard.Length == 66)
            {
                return clipBoard;
            }
            else
            {
                throw new Exception("There is a error");
            }
        }
    }
}
