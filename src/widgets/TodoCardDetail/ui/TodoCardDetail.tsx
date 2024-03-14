import { CardInfo, TodosContext } from "@/entities/todo"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useContext, useMemo } from "react"
import { useParams } from "react-router-dom"

export function TodoCardDetail() {
  const { todoId } = useParams()
  const { todos } = useContext(TodosContext)

  const todo = useMemo(() => todos.find(t => t.id === Number(todoId)), [todos])
  return todo ? (
    <Card>
      <CardContent>
        <CardInfo todo={todo} />
      </CardContent>
      <CardActions>
        <Button size="large" variant="outlined">
          Edit
        </Button>
        <Button size="large" variant="outlined" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Typography>Todo not found</Typography>
  )
}
