import { useState } from "react"

import { addTask } from "@/redux/features/tasks/taskSlice"
import { useAppDispatch } from "@/redux/hook"
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
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [formState, setFormState] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target

        setFormState((currentState) => ({
            ...currentState,
            [name]: value,
        }))
    }

    const handlePriorityChange = (value: "low" | "medium" | "high") => {
        setFormState((currentState) => ({
            ...currentState,
            priority: value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!formState.title.trim() || !formState.dueDate) {
            setErrorMessage("Title and due date are required.")
            return
        }

        setErrorMessage("")

        dispatch(
            addTask({
                title: formState.title.trim(),
                description: formState.description.trim(),
                dueDate: formState.dueDate,
                priority: formState.priority,
            })
        )

        setFormState(initialFormState)
        setOpen(false)
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

                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formState.title}
                            onChange={handleChange}
                            placeholder="Write a task title"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            placeholder="Add a short description"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="dueDate">Due Date</Label>
                        <Input
                            id="dueDate"
                            name="dueDate"
                            type="date"
                            value={formState.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Priority</Label>
                        <Select value={formState.priority} onValueChange={handlePriorityChange}>
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

