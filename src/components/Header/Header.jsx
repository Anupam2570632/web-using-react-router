import { NavLink } from "react-router-dom";
import './header.css';
import { useEffect, useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleTheme = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme("light");
        }
    }
    console.log(theme);


    return (
        <div className="bg-black mx-auto flex items-center justify-center">
            <div className="flex w-4/5 mx-auto bg-black fixed top-0 items-center m-2 justify-between">
                <ul className="text-white flex-1 flex">
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/'}>Home</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/countries'}>Countries</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/photos'}>Photos</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/contact'}>Contact Us</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/about'}>About Us</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/blog'}>Blogs</NavLink>
                </ul>
                <h2 className="text-white text-4xl font-bold px-10">
                    AR
                </h2>
                <label className="cursor-pointer grid place-items-center p-4">
                    <input type="checkbox" onChange={handleTheme} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;