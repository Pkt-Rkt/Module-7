// App.jsx
import React from 'react';
import BitcoinRates from './BitcoinRates';
import Emoji from './components/Emoji'; // Add import statement for Emoji
import { EmojiProvider } from './contexts/EmojiContext';
import useBitcoinExchangeRate from './hooks/useBitcoinRates';

const App = () => {
  const selectedCurrencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

  const { bitcoinPrices, currency, setCurrency } = useBitcoinExchangeRate(
    selectedCurrencies[0]
  );

  return (
    <EmojiProvider> {/* Wrap your entire application with EmojiProvider */}
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
        <Emoji /> {/* Render the Emoji component */}
        <BitcoinRates /> {/* Render the BitcoinRates component */}
      </div>
    </EmojiProvider>
  );
};

export default App;