import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../Utils/storage";
import BlogCard from "../../Components/BlogCard/BlogCard";
import EmptyState from "../../Components/EmptyState/EmptyState";




    const BookMarks = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    },[])
    const handleDelete = id =>{
		deleteBlog(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
	}
    if(blogs.length<1) return <EmptyState massage={'No Bookmark Available'}/>
    return (
        <div className="p-6">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}/> )
            }
		</div>
        </div>
    );
};

export default BookMarks;