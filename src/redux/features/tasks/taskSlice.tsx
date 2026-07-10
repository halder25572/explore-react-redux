import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Medium" | "Low";
};

const initialState: InitialState = {
    tasks: [
        {
            id: '1',
            title: "Task 1",
            description: "This is task 1",
            dueDate: "2027-01-01",
            isCompleted: false,
            priority: "high",
        }
    ],
    filter: "all",
}

// Create a slice for tasks using createSlice from Redux Toolkit.
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
});

// Selector to get tasks from the state
export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

// Selector to get the filter from the state
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;