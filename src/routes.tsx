import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/layout";
import { MainPage } from "./pages/mainPage/main-page";
import { Orders } from "./pages/Orders/orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/pedidos", element: <Orders /> },
    ],
  },
]);
