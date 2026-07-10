import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    console.log(filter);
    return (
        <div>
            
        </div>
    );
};

export default Tasks;