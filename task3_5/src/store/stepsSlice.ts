import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepsState {
  currentStep: number;
  completedSteps: number[];
}

const initialState: StepsState = {
  currentStep: 1,
  completedSteps: [],
};

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    completeStep: (state, action: PayloadAction<number>) => {
      if (!state.completedSteps.includes(action.payload)) {
        state.completedSteps.push(action.payload);
      }
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetSteps: () => initialState,
  },
});

export const { completeStep, setCurrentStep, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
