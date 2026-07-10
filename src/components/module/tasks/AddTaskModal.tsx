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
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddTaskModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Enter the details for your new task.
                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                    </Field>
                    <Field>
                        <Label htmlFor="description-1">Description</Label>
                        <Input id="description-1" name="description" defaultValue="Task description" />
                    </Field>
                    <Field>
                        <Label htmlFor="dueDate-1">Due Date</Label>
                        <Input id="dueDate-1" name="dueDate" type="date" />
                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Add Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskModal;