function USDCData({ usdcData, formatCurrency }) {
  if (!usdcData) {
    return null;
  }

  const usdcPrice = formatCurrency(usdcData?.PRICE);
  const usdcDirectVol = formatCurrency(usdcData?.VOLUME24HOURTO);
  const usdcTotalVol = formatCurrency(usdcData?.TOTALVOLUME24HTO);
  const usdcTopTierVol = formatCurrency(usdcData?.TOTALTOPTIERVOLUME24HTO);
  const usdcMarketCap = formatCurrency(usdcData?.CIRCULATINGSUPPLYMKTCAP);
  const baseUrl = "https://cryptocompare.com";
  const logo = baseUrl + usdcData?.IMAGEURL;

  return (
    <div className="dataContainer">
      <div className="coinInfo">
        <img src={logo} alt="USD Coin logo" className="logo" />
        <div>
          <p>USD Coin</p>
          <p className="code">USDC</p>
        </div>
      </div>
      <div className="price">
        <p>{usdcPrice}</p>
      </div>
      <div className="directVol">
        <p>{usdcDirectVol}</p>
      </div>
      <div className="totalVol">
        <p>{usdcTotalVol}</p>
      </div>
      <div className="topTierVol">
        <p>{usdcTopTierVol}</p>
      </div>
      <div className="marketCap">
        <p>{usdcMarketCap}</p>
      </div>
    </div>
  );
}

export default USDCData;
