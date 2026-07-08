import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "@/components/ui/button"


function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  // Handle increment action
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  // Handle decrement action
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1>Counter With Redux</h1>
        <Button className="cursor-pointer bg-amber-500 text-white" onClick={() => handleIncrement(1)}>Increment</Button>
        <h1>Counter: {count}</h1>
        <Button className="cursor-pointer bg-amber-500 text-white" onClick={() => handleDecrement(1)}>Decrement</Button>
      </div>
      <Button className="cursor-pointer bg-amber-500 text-white">Click</Button>
    </>
  )
}

export default App
