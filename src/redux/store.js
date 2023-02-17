import { configureStore } from '@reduxjs/toolkit';

import formSlice from 'redux/contactForm/form-slice';

export const store = configureStore({
  reducer: {
    contactForm: formSlice,
  },
});
