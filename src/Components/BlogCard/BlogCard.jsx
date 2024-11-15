import { Link } from 'react-router-dom';
import placeholderimage from"../../assets/404.jpg"
const BlogCard = ({blog}) => {
    const {cover_image,description,title,published_at,id} = blog;
    return (
        
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline  transition border-2 border-pink-600 border-opacity-30 hover:scale-105 hover:border-pink-600 rounded-lg duration-300">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{ new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
    );
};

export default BlogCard;