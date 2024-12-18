import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero -mt-16">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>
      <p className="py-6">
      ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
      </p>
      <div className="flex justify-center items-center gap-6">
        <Link to='/blogs' className="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-600 transition-colors duration-300 ease-out border-2 border-blue-600 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
        <span className="relative">Read Blogs</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
        <Link to='/bookmarks' className="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-600 transition-colors duration-300 ease-out border-2 border-blue-600 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
        <span className="relative">Bookmarks</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default Hero;