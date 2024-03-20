import { IconButton, SxProps } from "@mui/material";
import { languages } from "@/shared/config";
import { useSelector } from "react-redux";
import { RootStateStore } from "@/shared/api";
import { useActions } from "@/shared/hooks";

const style: SxProps = {
  position: "fixed",
  borderRadius: "30px",
  width: "60px",
  height: "60px"
};

export function ChangeLanguageButton() {
  const { language } = useSelector((state: RootStateStore) => state.options);
  const { setLanguage } = useActions();

  const handleChangeLang = () => {
    const langs = Object.keys(languages) as (keyof typeof languages)[];
    const currLangIndex = langs.findIndex(l => l === language);
    if (currLangIndex !== langs.length - 1) {
      setLanguage(langs[currLangIndex + 1]);
    } else {
      setLanguage(langs[0]);
    }
  };

  return (
    <IconButton size="large" color="info" sx={style} onClick={handleChangeLang}>
      {language}
    </IconButton>
  );
}
