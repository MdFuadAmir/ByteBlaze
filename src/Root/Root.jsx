import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-12">
            <Navber/>
            </div>
            <div className="min-h-[calc(100vh-100px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;