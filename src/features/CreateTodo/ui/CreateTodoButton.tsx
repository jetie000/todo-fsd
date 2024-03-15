import { IconButton, SxProps } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const style: SxProps = {
  position: "fixed",
  borderRadius: "30px"
}

interface CreateTodoButtonProps {
  handleOpen: () => void
}

export function CreateTodoButton({ handleOpen }: CreateTodoButtonProps) {
  return (
    <IconButton size="large" color="info" sx={style} onClick={handleOpen}>
      <AddIcon fontSize="large" color="primary" />
    </IconButton>
  )
}
