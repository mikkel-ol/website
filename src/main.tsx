import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { NotFound } from "./components/not-found.tsx";
import "./index.scss";
import { Projects } from "./routes/projects.tsx";
import { FunModeProvider } from "./contexts/fun-mode-provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FunModeProvider>
      <RouterProvider router={router} />
    </FunModeProvider>
  </React.StrictMode>
);
