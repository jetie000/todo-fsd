import { Box, Card, Typography } from "@mui/material"
import { TodosContext } from "@/entities/todo"
import { useContext } from "react"

function TodoList() {
  const { todos } = useContext(TodosContext)
  return (
    <Box display={"flex"}>
      {todos.length > 0 ? (
        todos.map(todo => <Card title={todo.title}></Card>)
      ) : (
        <Typography variant="h4" margin="auto">
          There are no todos yet
        </Typography>
      )}
    </Box>
  )
}

export default TodoList
