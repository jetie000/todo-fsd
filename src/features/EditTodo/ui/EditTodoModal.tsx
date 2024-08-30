import { ITodoAddEditDto, ITodoDetail, TodosContext } from "@/entities/todo"
import { OptionsContext, SnackbarContext } from "@/shared/api"
import { languages } from "@/shared/config"
import { Box, Button, Fade, Modal, SxProps, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useState } from "react"

const styleBox: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
}

const styleForm: SxProps = {
  display: "flex",
  gap: "20px",
  flexDirection: "column"
}

interface EditTodoModalProps {
  open: boolean
  handleClose: () => void
  todo: ITodoDetail
}
export function EditTodoModal({ open, handleClose, todo }: EditTodoModalProps) {
  const { setTodos } = useContext(TodosContext)
  const { language } = useContext(OptionsContext)
  const { showSnackbar } = useContext(SnackbarContext)
  const [isError, setIsError] = useState(false)
  const [todoInfo, setTodoInfo] = useState<ITodoAddEditDto>({
    title: todo.title,
    description: todo.description
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoInfo.title !== "") {
      setTodos(todos =>
        todos.map(t =>
          t.id === todo.id
            ? {
                ...todo,
                title: todoInfo.title,
                description: todoInfo.description,
                editedAt: new Date()
              }
            : t
        )
      )
      setIsError(false)
      handleClose()
      showSnackbar(languages[language].TODO_EDITED)
    } else setIsError(true)
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={styleBox}>
          <Typography id="edit-modal-title" variant="h5" component="h5" marginBottom={"15px"}>
            {languages[language].EDIT_TODO}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={styleForm}>
              <TextField
                error={isError}
                id="edit-todo-title"
                label={languages[language].TITLE}
                variant="outlined"
                required
                value={todoInfo?.title}
                onChange={e => setTodoInfo({ ...todoInfo, title: e.target.value })}
              />
              <TextField
                id="edit-todo-description"
                label={languages[language].DESCRIPTION}
                variant="outlined"
                minRows={3}
                multiline
                value={todoInfo?.description}
                onChange={e => setTodoInfo({ ...todoInfo, description: e.target.value })}
              />
              <Button variant="contained" type="submit">
                {languages[language].EDIT}
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  )
}
