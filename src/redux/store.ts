import { configureStore } from '@reduxjs/toolkit'

// Define the store using configureStore from Redux Toolkit.
export const store = configureStore({
  reducer: {

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;