import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profile from "./pages/App/Profile";
import Ong from "./pages/App/Ong";
import Home from "./pages/App/Home";
import Login from "./pages/Auth/Login";
import Create from "./pages/Auth/Create";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import Index from "./pages";

function App() {
  const customTheme = extendTheme({
    colors: {
      custom: {
        blue100: "#3B5BDB",
        blue200: "#364FC7",
        orange100: "#E67700",
        gray100: "#626262",
        purple100: "#862E9C",
        purple200: "#711c86",
        yellow100: "#FAB005",
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: "/feed",
      element: <Home />,
    },
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Create />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ChangePassword />,
    },
    {
      path: "/ong/:ongId",
      element: <Ong />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
