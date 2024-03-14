import { CreateTodoButton, CreateTodoModal } from "@/features/CreateTodo"
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
