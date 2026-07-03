import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Custom hooks for using the Redux store with TypeScript
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = () => useDispatch<AppDispatch>();