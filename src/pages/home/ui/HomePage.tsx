import { ChangeLanguageButton } from "@/features/ChangeLanguage"
import { CreateTodo } from "@/widgets/CreateTodo"
import { TodoList } from "@/widgets/TodoList/ui/TodoList"
import { Box } from "@mui/material"

export function HomePage() {
  return (
    <Box
      position={"relative"}
      paddingTop={"20px"}
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <TodoList />
      <CreateTodo />
      <Box position="absolute" top="calc(100vh - 140px)" right="80px">
        <ChangeLanguageButton />
      </Box>
    </Box>
  )
}
