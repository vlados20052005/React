import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  text: string;
  timestamp: string;
  isOwnMessage: boolean;
}

interface ChatState {
  player1Messages: Message[];
  player2Messages: Message[];
}

const initialState: ChatState = {
  player1Messages: [],
  player2Messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{ player: 'Player1' | 'Player2'; message: Message }>) => {
      const { player, message } = action.payload;

      // Determine if the message is from Player 1 or Player 2
      if (player === 'Player1') {
        state.player1Messages.push({ ...message, isOwnMessage: true });
        state.player2Messages.push({ ...message, isOwnMessage: false });
      } else {
        state.player1Messages.push({ ...message, isOwnMessage: false });
        state.player2Messages.push({ ...message, isOwnMessage: true });
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
