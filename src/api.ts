export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((respons) =>
    respons.json()
  );
}

export function fetchCoinData(coinId: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (response) => response.json()
  );
}

export function fetchPriceData(coinId: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
    (response) => response.json()
  );
}
