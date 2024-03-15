import { HomePage } from "@/pages/home"
import { TodoPage } from "@/pages/todo"
import { Layout } from "@/shared/ui"
import { MySnackbar } from "@/widgets/Snackbar"
import { Outlet, createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
        <MySnackbar />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />
      }
    ]
  }
])
