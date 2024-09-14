import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShipmentState {
  address: string;
  apartment: string;
  city: string;
  country: string;
  state: string;
  zip: string;
}

const initialState: ShipmentState = {
  address: '',
  apartment: '',
  city: '',
  country: '',
  state: '',
  zip: '',
};

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    updateShipmentInfo: (state, action: PayloadAction<ShipmentState>) => {
      return { ...state, ...action.payload };
    },
    clearShipmentInfo: () => initialState,
  },
});

export const { updateShipmentInfo, clearShipmentInfo } = shipmentSlice.actions;
export default shipmentSlice.reducer;
