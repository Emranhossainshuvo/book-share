import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ShareABook from "../pages/ShareABook/ShareABook";
import AllBooks from "../pages/AllBooks/AllBooks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
          element: <ShareABook />
        },
        {
          path: "/allBooks", 
          element: <AllBooks />
        }
      ]
    },
  ]);