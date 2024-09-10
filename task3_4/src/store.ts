// src/store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type Player = 'X' | 'O' | null;
type Winner = { player: Player; line: number[] } | null;

interface GameState {
  board: Player[];
  isXNext: boolean;
  winner: Winner;
  score: { X: number; O: number };
  resetCount: number;
}

const initialState: GameState = {
  board: Array(9).fill(null),
  isXNext: true,
  winner: null,
  score: { X: 0, O: 0 },
  resetCount: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playMove(state, action: PayloadAction<{ index: number; player: Player }>) {
      const { index, player } = action.payload;
      if (state.board[index] || state.winner) return;

      state.board[index] = player;
      state.isXNext = !state.isXNext;

      const winner = calculateWinner(state.board);
      if (winner) {
        state.winner = winner;
        state.score[winner.player as 'X' | 'O']++;
      }
    },
    resetGame(state) {
      state.board = Array(9).fill(null);
      state.isXNext = true;
      state.winner = null;
      state.resetCount += 1;
    },
    resetScores(state) {
      state.score = { X: 0, O: 0 }; // Reset the score
    },
  },
});

export const { playMove, resetGame, resetScores } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

function calculateWinner(board: Player[]): Winner {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line };
    }
  }
  return null;
}
