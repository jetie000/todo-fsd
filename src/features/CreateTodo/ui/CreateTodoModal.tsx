import { ITodoAddEditDto } from "@/entities/todo";
import { RootStateStore } from "@/shared/api";
import { languages } from "@/shared/config";
import { useActions } from "@/shared/hooks";
import { Box, Button, Fade, Modal, SxProps, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

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
};

const styleForm: SxProps = {
  display: "flex",
  gap: "20px",
  flexDirection: "column"
};

interface CreateTodoModalProps {
  open: boolean;
  handleClose: () => void;
}

export function CreateTodoModal({ open, handleClose }: CreateTodoModalProps) {
  const { setTodos, showSnackbar } = useActions();
  const [isError, setIsError] = useState(false);
  const [todoInfo, setTodoInfo] = useState<ITodoAddEditDto>({ title: "", description: "" });
  const { language } = useSelector((state: RootStateStore) => state.options);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      ]);
      setTodoInfo({
        description: "",
        title: ""
      });
      setIsError(false);
      showSnackbar(languages[language].TODO_ADDED);
    } else {
      setIsError(true);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={styleBox}>
          <Typography id="add-modal-title" variant="h5" component="h5" marginBottom="15px">
            {languages[language].ADD_TODO}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={styleForm}>
              <TextField
                error={isError}
                id="add-todo-title"
                label={languages[language].TITLE}
                variant="outlined"
                required
                value={todoInfo?.title}
                onChange={e => setTodoInfo({ ...todoInfo, title: e.target.value })}
              />
              <TextField
                id="add-todo-description"
                label={languages[language].DESCRIPTION}
                variant="outlined"
                minRows={3}
                multiline
                value={todoInfo?.description}
                onChange={e => setTodoInfo({ ...todoInfo, description: e.target.value })}
              />
              <Button variant="contained" type="submit">
                {languages[language].ADD}
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
