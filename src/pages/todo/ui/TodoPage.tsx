import { ReturnToMainButton } from "@/features/ReturnToMainButton/ui/ReturnToMainButton"
import { TodoCardDetail } from "@/widgets/TodoCardDetail"
import { Box } from "@mui/material"

export function TodoPage() {
  return (
    <Box display="flex" flexDirection="column" padding="2rem" width="100%">
      <Box justifyContent="flex-start">
        <ReturnToMainButton />
      </Box>
      <Box margin="auto">
        <TodoCardDetail />
      </Box>
    </Box>
  )
}
