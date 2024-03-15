import { OptionsContext } from "@/shared/api"
import { languages } from "@/shared/config"
import { Button } from "@mui/material"
import { useContext } from "react"

interface EditTodoButtonProps {
  handleOpen: () => void
}
export function EditTodoButton({ handleOpen }: EditTodoButtonProps) {
  const { language } = useContext(OptionsContext)
  return (
    <Button size="medium" variant="outlined" onClick={handleOpen}>
      {languages[language].EDIT}
    </Button>
  )
}
