import React from "react"
import ReactDOM from "react-dom/client"

import "./global.css"
import { TodosProvider } from "../entities/todo/api/TodosContext"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { MuiThemeProvider } from "./theme"

const App = () => (
  <React.StrictMode>
    <MuiThemeProvider>
      <TodosProvider>
        <RouterProvider router={router} />
      </TodosProvider>
    </MuiThemeProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
