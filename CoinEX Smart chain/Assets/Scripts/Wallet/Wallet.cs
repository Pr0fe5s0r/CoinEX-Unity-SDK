using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Nethereum.Web3;
using System.Threading.Tasks;
using System;

namespace CoinEX
{
    public class Wallet
    {
        public static string url = "https://testnet-rpc.coinex.net/";
        public static string weburl = "http://localhost:80";
        async public static Task<string> GetAccountBalanceFromWei(string account)
        {
            var web3 = new Web3(url);
            var balance = await web3.Eth.GetBalance.SendRequestAsync(account);
            var etherAmount = Web3.Convert.FromWei(balance.Value);
            return etherAmount.ToString();
        }

        async public static Task<string> GetAccountBalanceInWei(string account)
        {
            var web3 = new Web3(url);
            var balance = await web3.Eth.GetBalance.SendRequestAsync(account);
            return balance.ToString();
        }

        async public static Task<string> ConnectWallet()
        {
            Application.OpenURL(weburl + "/connect");
            GUIUtility.systemCopyBuffer = "";

            string clipBoard = "";

            while (clipBoard == "")
            {
                clipBoard = GUIUtility.systemCopyBuffer;
                await Task.Delay(100);
            }
            // check if clipboard response is valid
            if (clipBoard.StartsWith("0x") && clipBoard.Length >= 42)
            {
                return clipBoard;
            }
            else
            {
                throw new Exception("There is a error");
            }
        }

        async public static Task<string> SignMessage(string message)
        {
            Application.OpenURL(weburl + "/signMessage?msg="+message);
            GUIUtility.systemCopyBuffer = "";

            string clip = "";

            while (clip == "")
            {
                clip = GUIUtility.systemCopyBuffer;
                await Task.Delay(100); 
            }

            if (clip.StartsWith("0x") && clip.Length == 132)
            {
                return clip;
            }
            else
            {
                throw new Exception("There is a error");
            }
        }
    }
}
