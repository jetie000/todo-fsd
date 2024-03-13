import { HomePage } from "@/pages/home"
import { TodoPage } from "@/pages/todo"
import { Layout } from "@/shared/ui"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: "/todos/:todoId",
    element: (
      <Layout>
        <TodoPage />
      </Layout>
    )
  }
])
