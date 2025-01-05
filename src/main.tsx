import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./components/not-found.tsx";
import { FunModeProvider } from "./contexts/fun-mode-provider.tsx";
import "./index.scss";
import { Layout } from "./layout/Layout.tsx";
import { Home } from "./routes/Home.tsx";
import { Projects } from "./routes/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FunModeProvider>
      <RouterProvider router={router} />
    </FunModeProvider>
  </React.StrictMode>
);
