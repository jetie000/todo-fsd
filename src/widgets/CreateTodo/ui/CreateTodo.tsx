import CreateTodoButton from "@/features/create-todo/ui/CreateTodoButton"
import { CreateTodoModal } from "@/features/create-todo/ui/CreateTodoModal"
import { useState } from "react"

export function CreateTodo() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <CreateTodoButton handleOpen={handleOpen} />
      <CreateTodoModal handleClose={handleClose} open={open} />
    </>
  )
}
