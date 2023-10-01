import "./App.css";
import BTCData from "./btcData";
import ETHData from "./ETHData";
import USDTData from "./USDTData";
import USDCData from "./USDCData";
import XRPData from "./XRPData";
import React, { useState, useEffect } from "react";

function App() {
  const [btcData, setBtcData] = useState("");
  const [ethData, setEthData] = useState("");
  const [usdtData, setUsdtData] = useState("");
  const [usdcData, setUsdcData] = useState("");
  const [xrpData, setXrpData] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const [btnText, setBtnText] = useState("Run Demo");
  let className = btnColor ? "green" : "demoBtn";
  const apiUrl =
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDC,USDT,XRP&tsyms=USD&api_key=833fb1f19361e85c30d090664fb6f25f44916d90df6f3ccd3c01ac2143210782";

  async function fetchCoinData() {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setBtcData(data.RAW.BTC.USD);
      setEthData(data.RAW.ETH.USD);
      setUsdtData(data.RAW.USDT.USD);
      setUsdcData(data.RAW.USDC.USD);
      setXrpData(data.RAW.XRP.USD);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  function handleRun() {
    setBtnColor(true);
    setBtnText("Running");

    setTimeout(() => {
      setBtnColor(false);
      setBtnText("Run Demo");
    }, 30000);

    const interval = setInterval(fetchCoinData, 10000);

    setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  }

  function formatCurrency(number) {
    if (number === undefined || isNaN(number)) {
      return "$ 0.00";
    }
    if (number >= 1e9) {
      return "$ " + (number / 1e9).toFixed(2) + " B";
    }
    if (number >= 1e6) {
      return "$ " + (number / 1e6).toFixed(2) + " M";
    }
    return "$ " + number.toFixed(2);
  }

  useEffect(() => {
    fetchCoinData();
  }, []);

  return (
    <div className="App">
      <h1>Crypto Coin Tracker</h1>
      <div className="descr">
        <p>
          Click the Demo button to see a 60 second demo of the tracker in
          action.
        </p>
        <p>
          I used a demo button to preserve the amount of calls on this API due
          to there being a lifetime cap that i do not want to exceed. This API
          updates every 10 seconds.
        </p>
      </div>
      <div className="container">
        <div>
          <div className="dataContainer">
            <div>
              <h4 className="labelCenter">Coin</h4>
            </div>
            <div>
              <h4 className="labelCenter">Price</h4>
            </div>
            <div>
              <h4 className="directVol">Direct Vol</h4>
            </div>
            <div>
              <h4 className="totalVol">Total Vol</h4>
            </div>
            <div>
              <h4 className="topTierVol">Top Tier Vol</h4>
            </div>
            <div>
              <h4 className="marketCap">Market Cap</h4>
            </div>
          </div>
          {btcData && (
            <BTCData
              btcData={btcData}
              formatCurrency={formatCurrency}
              apiUrl={apiUrl}
            />
          )}
          {ethData && (
            <ETHData ethData={ethData} formatCurrency={formatCurrency} />
          )}
          {usdtData && (
            <USDTData usdtData={usdtData} formatCurrency={formatCurrency} />
          )}
          {usdcData && (
            <USDCData usdcData={usdcData} formatCurrency={formatCurrency} />
          )}
          {xrpData && (
            <XRPData xrpData={xrpData} formatCurrency={formatCurrency} />
          )}
        </div>
      </div>
      <button onClick={handleRun} className={className}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
