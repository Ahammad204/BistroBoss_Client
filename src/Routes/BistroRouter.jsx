import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Error from "../Pages/ErrorPage/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },{

          path:'menu',
          element:<Menu></Menu>

        },{
          path:'order/:category',
          element:<Order></Order>
        },{
          path:'login',
          element:<Login></Login>
        },{
          path:'signup',
          element:<SignUp></SignUp>

        }
      ]
    },
  ]);