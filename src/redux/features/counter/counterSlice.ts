import {createSlice} from '@reduxjs/toolkit';

// Define the initial state of the counter slice.
const initialState = {
    count: 0,
};

// Create a slice for the counter feature using createSlice from Redux Toolkit.
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;