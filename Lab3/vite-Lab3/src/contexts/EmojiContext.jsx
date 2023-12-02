// contexts/EmojiContext.js
import { createContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [currentEmoji, setCurrentEmoji] = useState('😊');

  const changeEmoji = (newEmoji) => {
    setCurrentEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export default EmojiContext;