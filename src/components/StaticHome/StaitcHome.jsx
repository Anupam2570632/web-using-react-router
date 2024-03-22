import { NavLink } from "react-router-dom";

const StaitcHome = () => {
    return (
        <div className="w-4/5 mx-auto my-20 p-4">
            <div className="text-center shadow-xl space-y-4 border border-blue-500">
                <h2 className="text-2xl font-bold mt-4">Bangladesh</h2>
                <h3 className="text-[20px] font-semibold">Capital : Dhaka</h3>
                <div className="h-[220px] p-4 flex items-center justify-center">
                    <img className="h-[200px] w-auto" src="https://flagcdn.com/w320/bd.png" alt="" />
                </div>
                <NavLink to={'/countries'}><button className="px-5 py-2 bg-cyan-500 my-4 rounded-md text-white font-bold">Show More Country</button></NavLink>
            </div>
        </div>
    );
};

export default StaitcHome;