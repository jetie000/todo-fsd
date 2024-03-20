import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RootStateStore } from "@/shared/api";
import { languages } from "@/shared/config";
import { useSelector } from "react-redux";
import { useActions } from "@/shared/hooks";

export function DeleteTodoButton({ todoId }: { todoId: number }) {
  const { setTodos, showSnackbar } = useActions();
  const { language } = useSelector((state: RootStateStore) => state.options);
  const navigate = useNavigate();

  const handleDelete = () => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
    showSnackbar(languages[language].TODO_DELETED);
    navigate("/");
  };

  return (
    <Button size="medium" variant="outlined" color="error" onClick={handleDelete}>
      {languages[language].DELETE}
    </Button>
  );
}
