import {
    createBrowserRouter,
  } from "react-router-dom";
import Route from "../Layout/Route";
import Home from "../components/Home/Home/Home";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Route/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);