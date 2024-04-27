import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Add from "../components/Add";
import Home from "../components/Home";
import About from "../components/About";
import Detail from "../components/Detail";
import Emil from "../components/Emil";
function Route(props) {
  return useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "emil",
          element: <Emil></Emil>,
        },
      ],
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/edit/:id",
      element: <Add />,
    },
    {
      path: "/",
      element: <Navigate replace to="/home"></Navigate>,
    },
  ]);
}

export default Route;
