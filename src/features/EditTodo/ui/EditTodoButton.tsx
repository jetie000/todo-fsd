import { RootStateStore } from "@/shared/api";
import { languages } from "@/shared/config";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

interface EditTodoButtonProps {
  handleOpen: () => void;
}
export function EditTodoButton({ handleOpen }: EditTodoButtonProps) {
  const { language } = useSelector((state: RootStateStore) => state.options);
  return (
    <Button size="medium" variant="outlined" onClick={handleOpen}>
      {languages[language].EDIT}
    </Button>
  );
}
