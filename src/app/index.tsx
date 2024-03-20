import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { MuiThemeProvider } from "./theme";
import { MySnackbar } from "@/widgets/Snackbar";
import { Provider } from "react-redux";
import { store } from "@/shared/api";

const App = () => (
  <React.StrictMode>
    <MuiThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <MySnackbar />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
