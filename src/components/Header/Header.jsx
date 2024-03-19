import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-black">
            <div className="flex w-4/5 mx-auto items-center m-2 justify-between">
                <ul className="text-white flex-1 flex">
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/'}>Home</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/countries'}>Countries</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'posts'}>Posts</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/contact'}>Contact Us</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/about'}>About Us</NavLink>
                    <NavLink className={'hover:bg-gray-700 p-4 text-center w-[8vw] duration-300 border-b-2 border-transparent hover:border-b-red-400'} to={'/blog'}>Blogs</NavLink>
                </ul>
                <h2 className="text-white text-4xl font-bold px-10">
                    AR
                </h2>
            </div>
        </div>
    );
};

export default Header;