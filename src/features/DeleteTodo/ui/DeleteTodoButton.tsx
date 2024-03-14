import { Button } from "@mui/material"
import { useContext } from "react"
import { TodosContext } from "@/entities/todo"
import { useNavigate } from "react-router-dom"

export function DeleteTodoButton({ todoId }: { todoId: number }) {
  const { setTodos } = useContext(TodosContext)
  const navigate = useNavigate()

  const handleDelete = () => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
    navigate("/")
  }

  return (
    <Button size="medium" variant="outlined" color="error" onClick={handleDelete}>
      Delete
    </Button>
  )
}
