import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './operations/regs';

import { fetchSlice, filtrator } from './operations/thunks';

export const store = configureStore({
  reducer: {
    contacts: fetchSlice.reducer,
    filter: filtrator.reducer,
    regs: authSlice.reducer,
  },
});
