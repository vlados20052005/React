import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const initialState: ContactState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateContactInfo: (state, action: PayloadAction<ContactState>) => {
      return { ...state, ...action.payload };
    },
    clearContactInfo: () => initialState,
  },
});

export const { updateContactInfo, clearContactInfo } = contactSlice.actions;
export default contactSlice.reducer;
