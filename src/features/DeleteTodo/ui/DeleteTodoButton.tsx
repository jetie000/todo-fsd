import { Button } from "@mui/material"
import { useContext } from "react"
import { TodosContext } from "@/entities/todo"
import { useNavigate } from "react-router-dom"
import { OptionsContext, SnackbarContext } from "@/shared/api"
import { languages } from "@/shared/config"

export function DeleteTodoButton({ todoId }: { todoId: number }) {
  const { setTodos } = useContext(TodosContext)
  const { language } = useContext(OptionsContext)
  const { showSnackbar } = useContext(SnackbarContext)
  const navigate = useNavigate()

  const handleDelete = () => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
    showSnackbar(languages[language].TODO_DELETED)
    navigate("/")
  }

  return (
    <Button size="medium" variant="outlined" color="error" onClick={handleDelete}>
      {languages[language].DELETE}
    </Button>
  )
}
