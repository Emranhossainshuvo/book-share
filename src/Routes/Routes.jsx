import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ShareABook from "../pages/ShareABook/ShareABook";
import AllBooks from "../pages/AllBooks/AllBooks";
import Favorites from "../pages/Favorites/Favorites";
import ErrorPage from "../components/ErroPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/", 
          element: <Home />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login", 
          element: <Login />
        },
        {
          path: "/sharebook",
          element:  <PrivateRoutes><ShareABook /></PrivateRoutes> 
        },
        {
          path: "/allBooks", 
          element: <AllBooks />
        }, 
        {
          path: "/favorites",
          element: <Favorites />
        }
      ]
    },
  ]);