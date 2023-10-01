function ETHData({ ethData, formatCurrency }) {
  if (!ethData) {
    return null;
  }

  const ethPrice = formatCurrency(ethData?.PRICE);
  const ethDirectVol = formatCurrency(ethData?.VOLUME24HOURTO);
  const ethTotalVol = formatCurrency(ethData?.TOTALVOLUME24HTO);
  const ethTopTierVol = formatCurrency(ethData?.TOTALTOPTIERVOLUME24HTO);
  const ethMarketCap = formatCurrency(ethData?.CIRCULATINGSUPPLYMKTCAP);
  const baseUrl = "https://cryptocompare.com";
  const logo = baseUrl + ethData?.IMAGEURL;

  return (
    <div className="dataContainer">
      <div className="coinInfo">
        <img src={logo} alt="Ethereum log" className="logo" />
        <div>
          <p>Ethereum</p>
          <p className="code">ETH</p>
        </div>
      </div>
      <div className="price">
        <p>{ethPrice}</p>
      </div>
      <div className="directVol">
        <p>{ethDirectVol}</p>
      </div>
      <div className="totalVol">
        <p>{ethTotalVol}</p>
      </div>
      <div className="topTierVol">
        <p>{ethTopTierVol}</p>
      </div>
      <div className="marketCap">
        <p>{ethMarketCap}</p>
      </div>
    </div>
  );
}

export default ETHData;
