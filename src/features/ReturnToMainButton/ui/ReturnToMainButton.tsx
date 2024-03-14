import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

export function ReturnToMainButton() {
  const navigate = useNavigate()
  const handleNavigate = () => navigate("/")
  return (
    <Button variant="outlined" onClick={handleNavigate}>
      <ChevronLeftIcon /> To the main page
    </Button>
  )
}
