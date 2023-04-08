import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  list-style-type: none;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  a {
    padding: 20px;

    transition: color 0.3s ease-in-out;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const LoadingText = styled.span`
  font-size: 50px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(response.slice(0, 50));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coins Price </Title>
      </Header>
      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <CoinList>
          {coins.map((item) => (
            <Coin key={item.id}>
              <Link
                to={{
                  pathname: `/${item.id}`,
                  state: { name: item.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                />
                {item.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}
export default Coins;
