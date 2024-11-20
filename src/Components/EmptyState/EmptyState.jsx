import { Link } from "react-router-dom";


const EmptyState = ({massage,address,label}) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)] gap-5 pb-16">
            <p className="text-xl font-bold font-serif">{massage}</p>
            <Link to={address} className="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-600 transition-colors duration-300 ease-out border-2 border-blue-600 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
        <span className="relative">{label}</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
        </div>
    );
};

export default EmptyState;