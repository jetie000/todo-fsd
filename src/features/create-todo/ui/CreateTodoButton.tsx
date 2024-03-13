import { IconButton, SxProps } from "@mui/material"
import { MouseEvent } from "react"
import AddIcon from "@mui/icons-material/Add"

const style: SxProps = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  borderRadius: "30px"
}

interface CreateTodoButtonProps {
  handleOpen: (e: MouseEvent) => void
}

function CreateTodoButton({ handleOpen }: CreateTodoButtonProps) {
  return (
    <IconButton size="large" color="info" sx={style} onClick={handleOpen}>
      <AddIcon fontSize="large" color="primary" />
    </IconButton>
  )
}

export default CreateTodoButton
