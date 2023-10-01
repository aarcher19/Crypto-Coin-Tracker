function BTCData({ btcData, formatCurrency, apiUrl }) {
  if (!btcData) {
    return null;
  }

  const btcPrice = formatCurrency(btcData?.PRICE);
  const btcDirectVol = formatCurrency(btcData?.VOLUME24HOURTO);
  const btcTotalVol = formatCurrency(btcData?.TOTALVOLUME24HTO);
  const btcTopTierVol = formatCurrency(btcData?.TOTALTOPTIERVOLUME24HTO);
  const btcMarketCap = formatCurrency(btcData?.CIRCULATINGSUPPLYMKTCAP);
  const baseUrl = "https://cryptocompare.com";
  const logo = baseUrl + btcData?.IMAGEURL;

  return (
    <div className="dataContainer">
      <div className="coinInfo">
        <img src={logo} alt="Bitcoin logo" className="logo" />
        <div>
          <p>Bitcoin</p>
          <p className="code">BTC</p>
        </div>
      </div>
      <div className="price">
        <p>{btcPrice}</p>
      </div>
      <div className="directVol">
        <p>{btcDirectVol}</p>
      </div>
      <div className="totalVol">
        <p>{btcTotalVol}</p>
      </div>
      <div className="topTierVol">
        <p>{btcTopTierVol}</p>
      </div>
      <div className="marketCap">
        <p>{btcMarketCap}</p>
      </div>
    </div>
  );
}

export default BTCData;
