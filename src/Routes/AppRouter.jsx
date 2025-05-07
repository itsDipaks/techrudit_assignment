import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminLogin from "../Pages/AdminLogin";
import AdminRegistration from "../Pages/AdminRegistration";
import { VerifiyEmail } from "../Pages/VerifiyEmail";
import CustomerRegistration from "../Pages/CustomerRegistration";
import Homepage from "../Pages/AdminDAsh";
import UserDash from "../Pages/UserDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/user",
    element: <UserDash />,
  },
  {
    path: "/registeradmin",
    element: <AdminRegistration />,
  },
  {
    path: "/registercustomer",
    element: <CustomerRegistration ion />,
  },
  {
    path: "/verifiyemail",
    element: <VerifiyEmail />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
