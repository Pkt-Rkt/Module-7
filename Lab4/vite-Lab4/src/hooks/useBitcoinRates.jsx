// hooks/useBitcoinRates.js
import { useState, useEffect } from 'react';

const useBitcoinExchangeRate = (initialCurrency) => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});
  const [currency, setCurrency] = useState(initialCurrency);

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

  return { bitcoinPrices, currency, setCurrency };
};

export default useBitcoinExchangeRate;
