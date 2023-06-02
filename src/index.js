import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AmbulansForm from "./forms/AmbulansForm";
import AmbulansList from "./istekler/AmbulansList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ambulans",
    element: <AmbulansForm />,
    },
    {
    path: "/ambulanslist",
    element: <AmbulansList />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);