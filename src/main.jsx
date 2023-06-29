import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home";
import Login from "./Components/login/Login";
import Breeds from "./Components/Breeds/Breeds";
import AuthProvider from "./Provider/AuthProvider";
import Dog_details from "./Components/Dog-details/Dog_details";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "breeds",
        element: <Breeds></Breeds>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "Dog_details",
        element: <Dog_details></Dog_details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="w-[90%] mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
