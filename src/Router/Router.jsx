import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BookMarks from "../Pages/BookMarks/BookMarks";
import Blog from "../Pages/Blog/Blog";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";

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
                element:<Blogs/>,
                loader:() => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path:"/blog/:id",
                element:<Blog/>,
                loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                children:[
                    {
                        index: true,
                        element:<Content/>,
                        loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path:"author",
                        element:<Author/>,
                        loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]
            },
            {
                path:"/bookmarks",
                element:<BookMarks/>
            },
        ]
        
    }
])

export default router