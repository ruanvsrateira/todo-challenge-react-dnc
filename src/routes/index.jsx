import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../views/Home/Home";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};
