import { useQuery } from "@tanstack/react-query";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoinData, fetchPriceData } from "../api";
import Chart from "./Chart";
import { Container, Header, Title, LoadingText } from "./Coins";
import Price from "./Price";

interface Coinprops {
  coinId: string;
}
interface RouteProps {
  name: string;
}
interface CoinInfoProps {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface CoinPriceProps {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Overview = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background-color: #00000081;
  height: 100px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  height: 80%;
  span:first-child {
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const Discription = styled.p``;

const Taps = styled.div`
  display: flex;
  justify-content: center;
`;
const Tap = styled.div<{ isActive: boolean }>`
  display: flex;
  padding: 15px;
  border-radius: 15px;
  align-items: center;
  margin: 25px auto;
  height: 50px;
  width: 40%;
  background-color: #00000081;
  a {
    padding: 15px;
    display: block;
    text-align: center;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Coin() {
  const { coinId } = useParams<Coinprops>();
  const { state } = useLocation<RouteProps>();

  const { data: coinInfoData, isLoading: infoLoading } =
    useQuery<CoinInfoProps>(["coinInfoData", coinId], () =>
      fetchCoinData(coinId)
    );
  const { data: coinPriceData, isLoading: priceLoading } =
    useQuery<CoinPriceProps>(["coinPriceData", coinId], () =>
      fetchPriceData(coinId)
    );

  const priceMatch = useRouteMatch(`/${coinId}/price`);
  const chartMatch = useRouteMatch(`/${coinId}/chart`);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name
            ? state.name
            : infoLoading
            ? "Loading..."
            : coinInfoData?.name}
        </Title>
      </Header>
      {priceLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{coinInfoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>SYMBOL</span>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coinInfoData?.symbol.toLowerCase()}`}
              />
            </OverviewItem>
            <OverviewItem>
              <span>OPENSOURCE</span>
              <span>{coinInfoData?.open_source ? "YES" : "NO"}</span>
            </OverviewItem>
          </Overview>
          <Discription>{coinInfoData?.description}</Discription>
          <Overview>
            <OverviewItem>
              <span>TOTAL SUPLY</span>
              <span>{coinPriceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem></OverviewItem>
            <OverviewItem>
              <span>MAX SUPLY</span>
              <span>{coinPriceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Taps>
            <Tap isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tap>
            <Tap isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tap>
          </Taps>

          <Switch>
            <Route
              path={`/${coinInfoData?.id ? coinInfoData.id : coinId}/price`}
            >
              <Price />
            </Route>
            <Route
              path={`/${coinInfoData?.id ? coinInfoData.id : coinId}/chart`}
            >
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;
