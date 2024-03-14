import { Button } from "@mui/material"

interface EditTodoButtonProps {
  handleOpen: () => void
}
export function EditTodoButton({ handleOpen }: EditTodoButtonProps) {
  return (
    <Button size="medium" variant="outlined" onClick={handleOpen}>
      Edit
    </Button>
  )
}
