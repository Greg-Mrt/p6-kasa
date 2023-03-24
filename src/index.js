import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import AProposPage from './pages/a_propos';
import '@fortawesome/fontawesome-free/css/all.min.css';


const router = createBrowserRouter([
  {
    path: "/a_propos",
    element: <AProposPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

