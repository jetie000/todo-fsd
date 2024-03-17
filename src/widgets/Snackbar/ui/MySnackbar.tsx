import { SnackbarContext } from "@/shared/api";
import { IconButton, Snackbar, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";

const style: SxProps = {
  backgroundColor: "white",
  color: "black"
};

export function MySnackbar() {
  const { isOpen, closeSnackbar, text } = useContext(SnackbarContext);
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      message={text}
      ContentProps={{ sx: style }}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
