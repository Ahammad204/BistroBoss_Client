import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Error from "../Pages/ErrorPage/Error";

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
        }
      ]
    },
  ]);