import {
    createBrowserRouter,
  } from "react-router-dom";
import Route from "../Layout/Route";
import Home from "../components/Home/Home/Home";
import About from "../components/about/About";
import CoursesHome from "../components/allCourses/CoursesHome";
import Team from "../components/team/Team";
import Price from "../components/pricing/Price";
import Blog from "../components/blog/Blog";
  
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
        {
            path:'/team',
            element:<Team/>
        },
        {
          path:'/pricing',
          element:<Price/>
      },
        {
          path:'/journal',
          element:<Blog/>
      },
      ]
    },
  ]);