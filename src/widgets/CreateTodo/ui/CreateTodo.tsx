import { CreateTodoButton, CreateTodoModal } from "@/features/CreateTodo";
import { Box } from "@mui/material";
import { useState } from "react";

export function CreateTodo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box position="absolute" top="calc(100vh - 80px)" right="80px">
        <CreateTodoButton handleOpen={handleOpen} />
      </Box>
      <CreateTodoModal handleClose={handleClose} open={open} />
    </>
  );
}
