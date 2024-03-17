import { Grid, Typography } from "@mui/material"
import { TodoCard, TodosContext } from "@/entities/todo"
import { useContext, useMemo } from "react"
import { OptionsContext } from "@/shared/api"
import { languages } from "@/shared/config"

export function TodoList() {
  const { todos } = useContext(TodosContext)
  const { language } = useContext(OptionsContext)

  const todosSorted = useMemo(() => [...todos].sort((todo1, todo2) => todo2.id - todo1.id), [todos])
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
      {todosSorted.length > 0 ? (
        todosSorted.map(todo => (
          <Grid item key={todo.id} xs={12} sm={6} md={4} lg={3}>
            <TodoCard todo={todo} />
          </Grid>
        ))
      ) : (
        <Typography variant="h4" margin="auto" textAlign="center" marginTop="2rem">
          {languages[language].NO_TODOS}
        </Typography>
      )}
    </Grid>
  )
}
