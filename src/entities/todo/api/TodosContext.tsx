import { configLocalstorage } from "@/shared/config"
import React, { SetStateAction, createContext, useEffect, useState } from "react"
import { ITodoDetail } from "../model/todo-detail"

export const TodosContext = createContext({
  todos: JSON.parse(localStorage.getItem(configLocalstorage.TODOS) ?? "") as ITodoDetail[],
  setTodos: (_callback: SetStateAction<ITodoDetail[]>) => {}
})

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodoDetail[]>([])

  useEffect(() => {
    localStorage.setItem(configLocalstorage.TODOS, JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
