import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addMessage } from '../../features/chatSlice';
import styles from './styles.module.scss';

interface Message {
  text: string;
  timestamp: string;
  isOwnMessage: boolean;
}

interface ChatProps {
  playerName: string;
  playerSymbol: string;
  isPlayer1: boolean;
}

export const Chat: React.FC<ChatProps> = ({ playerName, playerSymbol, isPlayer1 }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => 
    isPlayer1 ? state.chat.player1Messages : state.chat.player2Messages
  );
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwnMessage: true,
    };

    dispatch(addMessage({ player: isPlayer1 ? 'Player1' : 'Player2', message }));
    setNewMessage('');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <span className={styles.symbol}><img src={playerSymbol} alt="" width={15}/></span>
        <span className={styles.name}>{playerName}</span>
      </div>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.isOwnMessage ? styles.ownMessage : styles.receivedMessage}`}
          >
            <div className={styles.messageContent}>
              {msg.text}
              <span className={styles.timestamp}>{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          &#9658;
        </button>
      </div>
    </div>
  );
};
