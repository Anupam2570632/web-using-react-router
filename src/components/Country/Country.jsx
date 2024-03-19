import { NavLink, useLoaderData } from "react-router-dom";

const Country = () => {

    const countries = useLoaderData();
    console.log(countries)
    return (
        <div className="grid grid-cols-1 p-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {
                countries.map((country, idx) => <div className="text-center space-y-4 border border-blue-500" key={idx}>
                    <h2 className="text-2xl font-bold mt-4">{country.name.common}</h2>
                    <h3 className="text-[20px] font-semibold">Capital : {country.capital}</h3>
                    <div className="h-[220px] p-4 flex items-center justify-center">
                        <img className="h-[200px] w-auto" src={country.flags.png} alt="" />
                    </div>
                    <NavLink to={`/country/${country.capital}`}><button className="px-5 py-2 bg-cyan-500 my-4 rounded-md text-white font-bold">Show Details</button></NavLink>
                </div>)
            }
        </div>
    );
};

export default Country;