// BitcoinRates.jsx
import React, { useContext } from 'react';
import useBitcoinExchangeRate from './hooks/useBitcoinRates';
import EmojiContext from './contexts/EmojiContext';

const BitcoinRates = () => {
  const { bitcoinPrices, currency, setCurrency } = useBitcoinExchangeRate('usd');
  const { currentEmoji, changeEmoji } = useContext(EmojiContext);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const handleChangeMood = () => {
    // Change the emoji/mood when the button is clicked
    const randomEmojis = ['😊', '😎', '😢', '😂', '🤔'];
    const newEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
    changeEmoji(newEmoji);
  };

  return (
    <div>
      <button onClick={() => handleChangeMood()}>Change Mood</button>
    </div>
  );
};

export default BitcoinRates;
