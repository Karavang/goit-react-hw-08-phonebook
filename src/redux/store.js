import { configureStore } from '@reduxjs/toolkit';

import { fetchSlice, filtrator } from './operations/thunks';

export const store = configureStore({
  reducer: { contacts: fetchSlice.reducer, filter: filtrator.reducer },
});
