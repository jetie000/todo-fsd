import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todosSlice";
import { snackbarReducer } from "./slices/snackbarSlice";
import { optionsReducer } from "./slices/optionsSlice";

const reducers = combineReducers({
  todos: todosReducer,
  snackbar: snackbarReducer,
  options: optionsReducer
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootStateStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
