import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import contactReducer from './contactSlice';
import shipmentReducer from './shipmentSlice';
import stepsReducer from './stepsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    contact: contactReducer,
    shipment: shipmentReducer,
    steps: stepsReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
