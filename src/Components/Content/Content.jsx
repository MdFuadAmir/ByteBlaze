import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const {cover_image,title,tags,body_html} = blog;
    return (
        <div>
            <div className="mx-auto group hover:no-underline focus:no-underline border-2 border-gray-500 border-opacity-30  rounded-lg duration-300 p-2">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimage} />
				<div className="space-y-2">
                <div className="flex flex-wrap py-6 gap-2">
                    {
                        tags.map((tag,index) => <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>)
                    }
                </div>
				<h3 className="text-2xl font-semibold  group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={rehypeRaw}>
                {body_html}
                </Markdown>
				</div>
			</div>
        </div>
    );
};

export default Content;