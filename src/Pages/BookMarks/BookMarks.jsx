import { useEffect, useState } from "react";
import { getBlogs } from "../../Utils/storage";
import BlogCard from "../../Components/BlogCard/BlogCard";


    const BookMarks = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    },[])
    return (
        <div className="p-6">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog => <BlogCard deletable={true} blog={blog} key={blog.id}/> )
            }
		</div>
        </div>
    );
};

export default BookMarks;