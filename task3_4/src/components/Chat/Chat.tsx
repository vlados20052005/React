import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Message {
  text: string;
  timestamp: string;
  isOwnMessage: boolean;
}

interface ChatProps {
  playerName: string;
  playerSymbol: string;
  initialMessages: Message[];
}

export const Chat: React.FC<ChatProps> = ({ playerName, playerSymbol, initialMessages }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwnMessage: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <span className={styles.symbol}>{playerSymbol}</span>
        <span className={styles.name}>{playerName}</span>
      </div>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.isOwnMessage ? styles.ownMessage : styles.receivedMessage}`}
          >
            {msg.text}
            <span className={styles.timestamp}>{msg.timestamp}</span>
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
