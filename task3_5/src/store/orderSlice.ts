import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
  orderNumber: number;
}

const initialState: OrderState = {
  orderNumber: Number(localStorage.getItem('orderNumber')) || 1,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    incrementOrderNumber: (state) => {
      state.orderNumber += 1;
      localStorage.setItem('orderNumber', state.orderNumber.toString());
    },
    resetOrderNumber: (state) => {
      state.orderNumber = 1;
      localStorage.setItem('orderNumber', '1');
    },
  },
});

export const { incrementOrderNumber, resetOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;
