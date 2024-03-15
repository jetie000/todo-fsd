import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { useContext } from "react"
import { OptionsContext } from "@/shared/api"
import { languages } from "@/shared/config"

export function ReturnToMainButton() {
  const navigate = useNavigate()
  const { language } = useContext(OptionsContext)
  const handleNavigate = () => navigate("/")

  return (
    <Button variant="outlined" onClick={handleNavigate}>
      <ChevronLeftIcon /> {languages[language].TO_THE_MAIN}
    </Button>
  )
}
