// src/components/Chats/Chats.tsx

import React from 'react';
import { Chat } from '../Chat/Chat';
import styles from './styles.module.scss';

export const Chats: React.FC = () => {
  const player1Messages = [
    { text: 'Hey, want to play a quick game of Tic Tac Toe?', timestamp: '18:12', isOwnMessage: false },
    { text: 'Sounds good. Let\'s start. I\'ll go first.', timestamp: '18:17', isOwnMessage: false },
  ];

  const player2Messages = [
    { text: 'Sure, I love this game!', timestamp: '18:16', isOwnMessage: true },
    { text: 'Nice move.', timestamp: '18:18', isOwnMessage: true },
  ];

  return (
    <div className={styles.chatsContainer}>
      <Chat playerName="Player 1" playerSymbol="🔵" initialMessages={player1Messages} />
      <Chat playerName="Player 2" playerSymbol="❌" initialMessages={player2Messages} />
    </div>
  );
};
