import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { ITodoDetail } from "../model/todo-detail"
import { intlFormatDistance } from "date-fns"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { OptionsContext } from "@/shared/api"
import { languages } from "@/shared/config"

export function TodoCard({ todo }: { todo: ITodoDetail }) {
  const { language } = useContext(OptionsContext)
  const navigate = useNavigate()
  const handleClick = () => navigate(`/todo/${todo.id}`)
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h6">
          {todo.title}
        </Typography>
        <Typography gutterBottom variant="body1">
          {intlFormatDistance(todo.createdAt, Date.now(), {
            locale: language
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClick}>
          {languages[language].DETAILS}
        </Button>
      </CardActions>
    </Card>
  )
}
