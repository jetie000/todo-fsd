import { Box } from "@mui/material"
import { useParams } from "react-router-dom"

export function TodoPage() {
  const { todoId } = useParams()
  
  return <Box>{todoId}</Box>
}
