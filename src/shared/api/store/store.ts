import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer as userReducer } from "./slices/todosSlice"
import { reducer as toastReducer } from "./slices/snackbarSlice"
import { reducer as optionsReducer } from "./slices/optionsSlice"

const reducers = combineReducers({
  user: userReducer,
  toast: toastReducer,
  options: optionsReducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootStateStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
