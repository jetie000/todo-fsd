import TodoList from "@/widgets/TodoList/ui/TodoList"
import { Box } from "@mui/material"

export function HomePage() {
  return (
    <Box paddingTop={"20px"}>
      <TodoList />
    </Box>
  )
}
