function XRPData({ xrpData, formatCurrency }) {
  if (!xrpData) {
    return null;
  }

  const xrpPrice = formatCurrency(xrpData?.PRICE);
  const xrpDirectVol = formatCurrency(xrpData?.VOLUME24HOURTO);
  const xrpTotalVol = formatCurrency(xrpData?.TOTALVOLUME24HTO);
  const xrpTopTierVol = formatCurrency(xrpData?.TOTALTOPTIERVOLUME24HTO);
  const xrpMarketCap = formatCurrency(xrpData?.CIRCULATINGSUPPLYMKTCAP);
  const baseUrl = "https://cryptocompare.com";
  const logo = baseUrl + xrpData?.IMAGEURL;

  return (
    <div className="dataContainer">
      <div className="coinInfo">
        <img src={logo} alt="XRP logo" className="logo" />
        <div>
          <p>XRP</p>
          <p className="code">XRP</p>
        </div>
      </div>
      <div className="price">
        <p>{xrpPrice}</p>
      </div>
      <div className="directVol">
        <p>{xrpDirectVol}</p>
      </div>
      <div className="totalVol">
        <p>{xrpTotalVol}</p>
      </div>
      <div className="topTierVol">
        <p>{xrpTopTierVol}</p>
      </div>
      <div className="marketCap">
        <p>{xrpMarketCap}</p>
      </div>
    </div>
  );
}

export default XRPData;
