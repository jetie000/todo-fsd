import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { RootStateStore } from "@/shared/api";
import { languages } from "@/shared/config";
import { useSelector } from "react-redux";

export function ReturnToMainButton() {
  const navigate = useNavigate();
  const { language } = useSelector((state: RootStateStore) => state.options);
  const handleNavigate = () => navigate("/");

  return (
    <Button variant="outlined" onClick={handleNavigate}>
      <ChevronLeftIcon /> {languages[language].TO_THE_MAIN}
    </Button>
  );
}
