import { CardInfo, TodosContext } from "@/entities/todo";
import { DeleteTodoButton } from "@/features/DeleteTodo";
import { EditTodoButton, EditTodoModal } from "@/features/EditTodo";
import { OptionsContext } from "@/shared/api";
import { languages } from "@/shared/config";
import { Card, CardActions, CardContent, SxProps, Typography } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export function TodoCardDetail() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { todoId } = useParams();
  const { todos } = useContext(TodosContext);
  const { language } = useContext(OptionsContext);

  const cardStyle: SxProps = {
    maxWidth: "300px"
  };

  const todo = useMemo(() => todos.find(t => t.id === Number(todoId)), [todos]);
  return todo ? (
    <Card sx={cardStyle}>
      <CardContent>
        <CardInfo todo={todo} />
      </CardContent>
      <CardActions>
        <EditTodoButton handleOpen={handleOpen} />
        <EditTodoModal handleClose={handleClose} open={open} todo={todo} />
        <DeleteTodoButton todoId={todo.id} />
      </CardActions>
    </Card>
  ) : (
    <Typography>{languages[language].TODO_NOT_FOUND}</Typography>
  );
}
