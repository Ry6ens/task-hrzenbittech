import { createSlice } from '@reduxjs/toolkit';

import { sendForm } from './form-operations';

const initialState = {
  message: '',
  loading: false,
  error: null,
};

const form = createSlice({
  name: 'contact-form',
  initialState,
  reducers: {
    clearMessage: state => {
      state.message = '';
    },
  },
  extraReducers: builder => {
    // Form
    builder
      .addCase(sendForm.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendForm.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload;
      })
      .addCase(sendForm.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default form.reducer;
