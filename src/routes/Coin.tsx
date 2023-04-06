import { useParams } from "react-router-dom";

interface Coinprops {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<Coinprops>();
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
