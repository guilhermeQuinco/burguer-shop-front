import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/layout";
import { MainPage } from "./pages/mainPage/main-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <MainPage /> }],
  },
]);
