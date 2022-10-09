using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

public class WEB : MonoBehaviour
{
    public string url = "https://testnet-rpc.coinex.net/";
    public string weburl = "http://localhost:80";

    public async Task<string> WebRequest(string json, string endpoint)
    {
        using var www = UnityWebRequest.Get(weburl+ "/"+endpoint);

        www.SetRequestHeader("Content-Type", "application/json");
        www.uploadHandler = new UploadHandlerRaw(Encoding.UTF8.GetBytes(json));
        var op = www.SendWebRequest();

        while (!op.isDone)
            await Task.Yield();

        if(www.result == UnityWebRequest.Result.Success)
        {
            return (www.downloadHandler.text);
        }

        return "";
    }
}
