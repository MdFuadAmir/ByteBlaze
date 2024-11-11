import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-12">
            <Navber/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Root;