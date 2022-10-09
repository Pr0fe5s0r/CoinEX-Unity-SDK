using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.Networking;

public class conex : MonoBehaviour
{
    public async void Start()
    {
        string bal = await CoinEX.ERC721.GetERC721MyTokens("0xD4E4cbd23a0D2a4B4E4a23bb5CbED205d72f67EC", "0xb206a8884Db3c847BD76168e6400aD5ab0Aa8E1B");
        Debug.Log(bal);
    }
}
