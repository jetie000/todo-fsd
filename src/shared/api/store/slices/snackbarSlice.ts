import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface snackbarState {
  text: string;
  isOpen: boolean;
}

const initialState: snackbarState = {
  text: "",
  isOpen: false
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, { payload: _msg }: PayloadAction<string>) => {
      state.text = _msg;
      state.isOpen = true;
    },
    closeSnackbar: (state, { payload: reason }: PayloadAction<string | undefined>) => {
      if (reason === "clickaway") {
        return;
      }
      state.isOpen = false;
    }
  }
});

export const { actions: snackbarActions, reducer: snackbarReducer } = snackbarSlice;
