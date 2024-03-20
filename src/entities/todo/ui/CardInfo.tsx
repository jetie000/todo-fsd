import { Typography } from "@mui/material";
import { intlFormatDistance } from "date-fns";
import { ITodoDetail } from "../model/todo-detail";
import { RootStateStore } from "@/shared/api";
import { languages } from "@/shared/config";
import { useSelector } from "react-redux";

export function CardInfo({ todo }: { todo: ITodoDetail }) {
  const { language } = useSelector((state: RootStateStore) => state.options);
  return (
    <>
      <Typography variant="h6" component="h6">
        {todo.title}
      </Typography>
      <Typography gutterBottom variant="body1">
        {languages[language].CREATED +
          ": " +
          intlFormatDistance(todo.createdAt, Date.now(), { locale: language })}
      </Typography>
      <Typography gutterBottom variant="body1">
        {languages[language].EDITED +
          ": " +
          intlFormatDistance(todo.editedAt, Date.now(), {
            locale: language
          })}
      </Typography>
      {todo.description && <Typography>{todo.description}</Typography>}
    </>
  );
}
