import { Typography } from "@mui/material"
import { intlFormatDistance } from "date-fns"
import { ITodoDetail } from "../model/todo-detail"

export function CardInfo({ todo }: { todo: ITodoDetail }) {
  return (
    <>
      <Typography variant="h6" component="h6">
        {todo.title}
      </Typography>
      <Typography gutterBottom variant="body1">
        {"Created: " +
          intlFormatDistance(todo.createdAt, Date.now(), {
            locale: "en"
          })}
      </Typography>
      <Typography gutterBottom variant="body1">
        {"Edited: " +
          intlFormatDistance(todo.editedAt, Date.now(), {
            locale: "en"
          })}
      </Typography>
      {todo.description && <Typography>{todo.description}</Typography>}
    </>
  )
}
