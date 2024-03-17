import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { TodosProvider } from "../entities/todo/api/TodosContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { MuiThemeProvider } from "./theme";
import { OptionsProvider } from "@/shared/api/OptionsContext";
import { MySnackbar } from "@/widgets/Snackbar";
import { SnackbarProvider } from "@/shared/api";

const App = () => (
  <React.StrictMode>
    <MuiThemeProvider>
      <SnackbarProvider>
        <TodosProvider>
          <OptionsProvider>
            <RouterProvider router={router} />
            <MySnackbar />
          </OptionsProvider>
        </TodosProvider>
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
