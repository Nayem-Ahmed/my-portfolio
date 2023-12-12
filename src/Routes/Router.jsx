import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Homepage/Home";
import Contact from "../Pages/Contact";
import Errorpage from "../Pages/Errorpage";
import Services from "../Pages/Homepage/Services";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            
                {
                    path:'/',
                    element:<Home></Home>,
                },
                {
                    path:'/contact',
                    element:<Contact></Contact>,
                },
                {
                    path:'/services',
                    element:<Services></Services>,
                },

            
        ]
         
    },

 ])
 export default router;