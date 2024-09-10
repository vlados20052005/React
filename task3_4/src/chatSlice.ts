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
    addMessagePlayer1: (state, action: PayloadAction<Message>) => {
      state.player1Messages.push(action.payload);
    },
    addMessagePlayer2: (state, action: PayloadAction<Message>) => {
      state.player2Messages.push(action.payload);
    },
  },
});

export const { addMessagePlayer1, addMessagePlayer2 } = chatSlice.actions;

export default chatSlice.reducer;
