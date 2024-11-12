import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navberData = <>
    <NavLink to={"/"} className={({isActive})=> isActive? 'font-bold text-blue-600': ""}>Home</NavLink>
    <NavLink to={"/blogs"} className={({isActive})=> isActive? 'font-bold text-blue-600': ""}>Blogs</NavLink>
    <NavLink to={"/bookmarks"} className={({isActive})=> isActive? 'font-bold text-blue-600': ""}>BookMarks</NavLink>
</>
const Navber = () => {
    const [theme,setTheme] = useState("light");
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-Theme',localTheme)

    },[theme])
    const handleToogle = (e) =>{
        if(e.target.checked){
            setTheme('synthwave');
        }
        else{
            setTheme('light')
        }
    } 

    return (
        <>
        <div className="w-full shadow-lg bg-base-100 z-10 fixed">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        {/* logo */}
                <div>
                    <h1 className="text-2xl font-bold text-blue-600"><span className=" text-pink-600">Byte</span>Blaze</h1>
                </div>
                {/* desktop navber */}
                <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6 font-semibold">
                    {navberData}
                </div>     
                <input
                onChange={handleToogle}
                type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" 
                />
                </div>
            </div>
        </div>
        </>
    );
};

export default Navber;