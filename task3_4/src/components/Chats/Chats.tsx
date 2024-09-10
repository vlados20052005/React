import React from 'react';
import { Chat } from '../Chat/Chat';
import styles from './styles.module.scss';

import circleImg from '../../assets/circle.png';
import crossImg from '../../assets/cross.png';

export const Chats: React.FC = () => {
  return (
    <div className={styles.chatsContainer}>
      <Chat playerName="Player 1" playerSymbol={crossImg} isPlayer1={true} />
      <Chat playerName="Player 2" playerSymbol={circleImg} isPlayer1={false} />
    </div>
  );
};
