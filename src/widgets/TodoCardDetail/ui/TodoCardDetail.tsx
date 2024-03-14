import { CardInfo, TodosContext } from "@/entities/todo"
import { DeleteTodoButton } from "@/features/DeleteTodo"
import { EditTodoButton, EditTodoModal } from "@/features/EditTodo"
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { useContext, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

export function TodoCardDetail() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { todoId } = useParams()
  const { todos } = useContext(TodosContext)

  const todo = useMemo(() => todos.find(t => t.id === Number(todoId)), [todos])
  return todo ? (
    <Card>
      <CardContent>
        <CardInfo todo={todo} />
      </CardContent>
      <CardActions>
        <EditTodoButton handleOpen={handleOpen} />
        <EditTodoModal handleClose={handleClose} open={open} todo={todo} />
        <DeleteTodoButton todoId={todo.id} />
      </CardActions>
    </Card>
  ) : (
    <Typography>Todo not found</Typography>
  )
}
