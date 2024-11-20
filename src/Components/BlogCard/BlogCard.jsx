import { Link } from 'react-router-dom';
import placeholderimage from"../../assets/404.jpg"
import { MdDelete } from "react-icons/md";
import { deleteBlog } from '../../Utils/storage';

const BlogCard = ({blog,deletable,handleDelete}) => {
    const {cover_image,description,title,published_at,id} = blog;
	
    return (
            <div className='flex relative'>
			<Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline  transition border-2 border-pink-600 border-opacity-30 hover:scale-105 hover:border-pink-600 rounded-lg duration-300">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{ new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
			{deletable && <div onClick={() => handleDelete(id)} className='absolute rounded-full group hover:scale-105 bg-blue-400 hover:bg-pink-600 p-1 -top-4 -right-4'><MdDelete className='text-pink-600 group-hover:text-blue-400' size={30}/></div>}

			</div>
    );
};

export default BlogCard;