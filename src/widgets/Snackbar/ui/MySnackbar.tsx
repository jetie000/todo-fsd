import { IconButton, Snackbar, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootStateStore } from "@/shared/api";
import { useActions } from "@/shared/hooks";
import { SyntheticEvent } from "react";

const style: SxProps = {
  backgroundColor: "white",
  color: "black"
};

export function MySnackbar() {
  const { isOpen, text } = useSelector((state: RootStateStore) => state.snackbar);
  const { closeSnackbar } = useActions();

  const handleClose = (_event: Event | SyntheticEvent<any, Event>, reason?: string) => {
    closeSnackbar(reason);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      message={text}
      ContentProps={{ sx: style }}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
