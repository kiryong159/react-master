import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, LoadingText } from "./Coins";

interface Coinprops {
  coinId: string;
}

interface RouteProps {
  name: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<Coinprops>();
  const { state } = useLocation<RouteProps>();
  const [coinInfoData, setCoinInfoData] = useState({});
  const [coinPriceData, setCoinPriceData] = useState({});
  useEffect(() => {
    (async () => {
      const coinData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setCoinInfoData(coinData);
      setCoinPriceData(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <LoadingText>Loading...</LoadingText> : null}
    </Container>
  );
}

export default Coin;
