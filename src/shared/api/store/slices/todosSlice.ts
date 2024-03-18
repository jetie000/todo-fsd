import { ITodoDetail } from "@/entities/todo"
import { configLocalstorage } from "@/shared/config"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface todosState {
  todos: ITodoDetail[]
}

const initialState: todosState = {
  todos: JSON.parse(localStorage.getItem(configLocalstorage.TODOS) ?? "[]") as ITodoDetail[]
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, { payload: todos }: PayloadAction<ITodoDetail[]>) => {
      state.todos = todos;
      localStorage.setItem(configLocalstorage.TODOS, JSON.stringify(todos))
    }
  }
})

export const { actions, reducer } = todosSlice
