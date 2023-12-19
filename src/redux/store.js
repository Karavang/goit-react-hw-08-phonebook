import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './operations/regs';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchSlice, filtrator } from './operations/thunks';
const authPersistConfig = {
  key: 'regs',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: fetchSlice.reducer,
    filter: filtrator.reducer,
    regs: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
