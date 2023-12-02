// components/Emoji.js
import React, { useContext } from 'react';
import EmojiContext from '../contexts/EmojiContext';

const Emoji = () => {
  const { currentEmoji } = useContext(EmojiContext);

  return (
    <div>
      <h2>Current Emoji: {currentEmoji}</h2>
    </div>
  );
};

export default Emoji;