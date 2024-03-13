import { ITodoAddEditDto, TodosContext } from "@/entities/todo"
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

interface CreateTodoModalProps {
  open: boolean
  handleClose: (_arg: boolean) => void
}

export function CreateTodoModal({ open, handleClose }: CreateTodoModalProps) {
  const { setTodos } = useContext(TodosContext)
  const [isError, setIsError] = useState(false)
  const [todoInfo, setTodoInfo] = useState<ITodoAddEditDto>({ title: "", description: "" })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoInfo.title !== "") {
      setTodos(todos => [
        {
          id: todos[0]?.id + 1 || 1,
          title: todoInfo.title,
          description: todoInfo.description,
          createdAt: new Date(),
          editedAt: new Date()
        },
        ...todos
      ])
      setTodoInfo({
        description: "",
        title: ""
      })
      setIsError(false)
    } else setIsError(true)
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={styleBox}>
          <Typography id="modal-modal-title" variant="h5" component="h5" marginBottom={"15px"}>
            Add todo
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={styleForm}>
              <TextField
                error={isError}
                id="todo-title"
                label="Title"
                variant="outlined"
                required
                value={todoInfo?.title}
                onChange={e => setTodoInfo({ ...todoInfo, title: e.target.value })}
              />
              <TextField
                id="todo-description"
                label="Description"
                variant="outlined"
                minRows={3}
                multiline
                value={todoInfo?.description}
                onChange={e => setTodoInfo({ ...todoInfo, description: e.target.value })}
              />
              <Button variant="contained" type="submit">
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  )
}
