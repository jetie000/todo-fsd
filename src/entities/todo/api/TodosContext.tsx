import { configLocalstorage } from "@/shared/config"
import React, { SetStateAction, createContext, useEffect, useMemo, useState } from "react"
import { ITodoDetail } from "../model/todo-detail"

export const TodosContext = createContext({
  todos: JSON.parse(localStorage.getItem(configLocalstorage.TODOS) ?? "[]") as ITodoDetail[],
  setTodos: (_callback: SetStateAction<ITodoDetail[]>) => {}
})

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodoDetail[]>(
    JSON.parse(localStorage.getItem(configLocalstorage.TODOS) ?? "[]") as ITodoDetail[]
  )

  const contextValue = useMemo(
    () => ({
      todos,
      setTodos
    }),
    [todos]
  )

  useEffect(() => {
    if (todos) {
      localStorage.setItem(configLocalstorage.TODOS, JSON.stringify(todos))
    }
  }, [todos])

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
}
