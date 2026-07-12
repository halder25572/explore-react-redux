import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Medium" | "Low";
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (task: DraftTask): ITask => {
    return {
        id: nanoid(), isCompleted: false, ...task
    };
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
        },
        {
            id: '2',
            title: "Git Task 2",
            description: "This is task 2",
            dueDate: "2027-01-01",
            isCompleted: false,
            priority: "medium",
        }
    ],
    filter: "all",
}

// Create a slice for tasks using createSlice from Redux Toolkit.
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData  = (action.payload);
            state.tasks.unshift(createTask(taskData));
        }
    }
});

export const { addTask } = taskSlice.actions;

// Selector to get tasks from the state
export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

// Selector to get the filter from the state
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;