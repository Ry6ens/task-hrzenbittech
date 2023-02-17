import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchForm } from 'api/fetchForm';

export const sendForm = createAsyncThunk(
  'form/send',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await fetchForm(userData);
      console.log('data_answer', data);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);
