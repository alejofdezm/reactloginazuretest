import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import LayoutPrivado from "../layout/LayoutPrivado";
import { loaderPost } from "../loader/loaderPost";
import { loaderBlogs } from "../loader/LoaderBlogs";
import NotFound from "../notfound";
import Home from "../Paginas/Home";
import About from "../Paginas/About";
import Post from "../Paginas/Post";
import UserLoginView from "../user/UserLoginView";

const UserMenuList = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: loaderBlogs,
          },
          {
            path: "/login",
            element: <UserLoginView />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LayoutPrivado />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/post/:id",
            element: <Post />,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);

export default UserMenuList;
