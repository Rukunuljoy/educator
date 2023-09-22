import {
    createBrowserRouter,
  } from "react-router-dom";
import Route from "../Layout/Route";
import Home from "../components/Home/Home/Home";
import About from "../components/about/About";
import CoursesHome from "../components/allCourses/CoursesHome";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Route/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/courses',
            element:<CoursesHome/>
        },
      ]
    },
  ]);