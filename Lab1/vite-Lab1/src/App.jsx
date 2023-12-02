import React, { useState, useEffect } from 'react';

const App = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});
  const selectedCurrencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];
  const [currency, setCurrency] = useState(selectedCurrencies[0]);

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';
        const params = new URLSearchParams({
          ids: 'bitcoin',
          vs_currencies: currency,
          include_market_cap: 'false',
          include_24hr_vol: 'false',
          include_24hr_change: 'false',
          include_last_updated_at: 'false',
          precision: '2',
        });

        const response = await fetch(`${apiUrl}?${params.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CoinGecko-API-Key': 'CG-dXkd1y4uEKkoVafD8cvkHzDw',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBitcoinPrices(data.bitcoin);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchBitcoinPrices();
  }, [currency]);

  return (
    <div>
      <h1>Bitcoin Exchange Rate</h1>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {selectedCurrencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <ul>
        <li>
          1 Bitcoin (BTC) = {bitcoinPrices[currency]} {currency.toUpperCase()}
        </li>
      </ul>
    </div>
  );
};

export default App;
