// components/BitcoinRates.jsx
import React from 'react';
import useBitcoinExchangeRate from '../hooks/useBitcoinRates';

const BitcoinRates = () => {
    const selectedCurrencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];
  
    const { bitcoinPrices, currency, setCurrency } = useBitcoinExchangeRate(
      selectedCurrencies[0]
    );
  
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

export default BitcoinRates;