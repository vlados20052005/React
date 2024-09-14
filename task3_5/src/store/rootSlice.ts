import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

const initialState: RootState = {
  cart: {
    items: [],
  },
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  shipment: {
    address: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    zip: '',
  },
  steps: {
    currentStep: 1,
    completedSteps: [],
  },
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export const { resetState } = rootSlice.actions;
export default rootSlice.reducer;
