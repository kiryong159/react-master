import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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

const PriceBox = styled.div``;

const AthBox = styled.div`
  background-color: #00000081;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  span:last-child {
    font-weight: bold;
    font-size: 28px;
  }
`;

const PriceChangeBox = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const PriceChange = styled.div<{ colorValue: boolean }>`
  justify-content: center;
  align-items: center;
  background-color: #00000081;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  color: ${(props) => (props.colorValue ? "green" : "red")};
  div {
    display: flex;
    flex-direction: column;
    span {
      color: ${(props) => props.theme.textColor};
    }
    span:last-child {
      font-size: 25px;
      color: ${(props) => (props.colorValue ? "green" : "red")};
    }
  }
  span:last-child {
    font-size: 40px;
    margin-left: 15px;
  }
`;

function Price({ priceData }: { priceData?: CoinPriceProps }) {
  function dateChange(datestring: string) {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${year}년${month}월${day}일 ${hours}시${minutes}분 `;
    return formattedDate;
  }
  return (
    <>
      <PriceBox>
        <AthBox>
          <span>{dateChange(priceData?.quotes.USD.ath_date || "")}</span>
          <span>최고가 {priceData?.quotes.USD.ath_price.toFixed(2)} $</span>
        </AthBox>
        <PriceChangeBox>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_1h >= 0}
          >
            {priceData!.quotes.USD.percent_change_1h < 0 ? (
              <>
                <div>
                  <span>1시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_1h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>1시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_1h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_6h >= 0}
          >
            {priceData!.quotes.USD.percent_change_6h < 0 ? (
              <>
                <div>
                  <span>6시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_6h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>6시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_6h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_12h >= 0}
          >
            {priceData!.quotes.USD.percent_change_12h < 0 ? (
              <>
                <div>
                  <span>12시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_12h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>12시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_12h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_24h >= 0}
          >
            {priceData!.quotes.USD.percent_change_24h < 0 ? (
              <>
                <div>
                  <span>24시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_24h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>24시간 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_24h}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_7d >= 0}
          >
            {priceData!.quotes.USD.percent_change_7d < 0 ? (
              <>
                <div>
                  <span>7일 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_7d}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>7일 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_7d}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
          <PriceChange
            colorValue={priceData!.quotes.USD.percent_change_1y >= 0}
          >
            {priceData!.quotes.USD.percent_change_1y < 0 ? (
              <>
                <div>
                  <span>1년 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_1y}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendDown} />
                </span>
              </>
            ) : (
              <>
                <div>
                  <span>1년 전보다</span>
                  <span>{priceData?.quotes.USD.percent_change_1y}%</span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </>
            )}
          </PriceChange>
        </PriceChangeBox>
      </PriceBox>
    </>
  );
}
export default Price;
