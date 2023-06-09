import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AProposPage from "./pages/a_propos";
import ErrorPage from "./pages/error";
import LogementPage from "./pages/fiche_logement";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/a_propos",
    element: <AProposPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/fiche_logement/:id",
    element: <LogementPage />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
