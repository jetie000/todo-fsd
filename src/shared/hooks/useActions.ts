import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { todosActions } from "../api/store/slices/todosSlice";
import { optionsActions } from "../api/store/slices/optionsSlice";
import { snackbarActions } from "../api/store/slices/snackbarSlice";

const rootActions = {
  ...todosActions,
  ...snackbarActions,
  ...optionsActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
