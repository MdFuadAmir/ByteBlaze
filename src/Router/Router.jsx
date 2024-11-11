import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BookMarks from "../Pages/BookMarks/BookMarks";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/blogs",
                element:<Blogs/>
            },
            {
                path:"/bookmarks",
                element:<BookMarks/>
            },
        ]
        
    }
])

export default router