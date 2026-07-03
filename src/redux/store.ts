import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

// Define the store using configureStore from Redux Toolkit.
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;