import { createSlice } from "@reduxjs/toolkit"

export interface snackbarState {
  text: string,
  isOpen: boolean
}

const initialState: snackbarState = {
  text: "",
  isOpen: false
}

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, {payload: _msg}) => {
      state.text = _msg
      state.isOpen = true
    },
    handleClose: (state, { payload: { _event, _reason } }) => {
      _event.preventDefault()
      if (_reason === "clickaway") {
        return
      }
      state.isOpen = false
    }
  }
})

export const { actions, reducer } = snackbarSlice
