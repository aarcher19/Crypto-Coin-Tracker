function USDTData({ usdtData, formatCurrency }) {
  if (!usdtData) {
    return null;
  }

  const usdtPrice = formatCurrency(usdtData?.PRICE);
  const usdtDirectVol = formatCurrency(usdtData?.VOLUME24HOURTO);
  const usdtTotalVol = formatCurrency(usdtData?.TOTALVOLUME24HTO);
  const usdtTopTierVol = formatCurrency(usdtData?.TOTALTOPTIERVOLUME24HTO);
  const usdtMarketCap = formatCurrency(usdtData?.CIRCULATINGSUPPLYMKTCAP);
  const baseUrl = "https://cryptocompare.com";
  const logo = baseUrl + usdtData?.IMAGEURL;

  return (
    <div className="dataContainer">
      <div className="coinInfo">
        <img src={logo} alt="Tether logo" className="logo" />
        <div>
          <p>Tether</p>
          <p className="code">USDT</p>
        </div>
      </div>
      <div className="price">
        <p>{usdtPrice}</p>
      </div>
      <div className="directVol">
        <p>{usdtDirectVol}</p>
      </div>
      <div className="totalVol">
        <p>{usdtTotalVol}</p>
      </div>
      <div className="topTierVol">
        <p>{usdtTopTierVol}</p>
      </div>
      <div className="marketCap">
        <p>{usdtMarketCap}</p>
      </div>
    </div>
  );
}

export default USDTData;
