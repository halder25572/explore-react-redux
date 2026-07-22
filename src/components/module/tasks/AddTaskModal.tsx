import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useCreateTaskMutation } from "@/redux/api/baseApi"




type TaskFormState = {
    title: string
    description: string
    dueDate: string
    priority: "low" | "medium" | "high"
}

const initialFormState: TaskFormState = {
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
}

const AddTaskModal = () => {
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const form = useForm<TaskFormState>({
        defaultValues: initialFormState,
    });

    const [createTask, { data, isLoading, isError }] = useCreateTaskMutation();
    console.log(data, isLoading, isError);

    const { register, handleSubmit, reset } = form

    const onSubmit = (data: TaskFormState) => {
        if (!data.title.trim() || !data.dueDate) {
            setErrorMessage("Title and due date are required.")
            return
        }

        setErrorMessage("")
        const taskData = {
            ...data,
            isCompleted: false,
        };
        createTask(taskData)

        console.log(taskData)
        setOpen(false)
        reset(initialFormState)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Enter the details for your new task and save it to the list.
                    </DialogDescription>
                </DialogHeader>

                {errorMessage ? (
                    <div
                        role="alert"
                        className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                    >
                        {errorMessage}
                    </div>
                ) : null}

                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            placeholder="Write a task title"
                            required
                            {...register("title")}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Add a short description"
                            {...register("description")}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="dueDate">Due Date</Label>
                        <Input
                            id="dueDate"
                            type="date"
                            required
                            {...register("dueDate")}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Priority</Label>
                        <Select {...register("priority")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit">Add Task</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskModal;

