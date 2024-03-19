import { NavLink, useLoaderData } from "react-router-dom";

const Details = () => {
    const [country] = useLoaderData()
    console.log(country)
    return (
        <div className="flex items-center justify-center">
            <div className="w-[80vw] h-fit space-y-4 text-center">
                <h1 className="text-3xl font-bold">Name : {country.name.common}</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Official Name : {country.name.official}</h2>
                <h2 className="text-2xl font-semibold text-gray-800">Capital : {country.capital}</h2>
                {
                    country.independent ? <p className="text-blue-800 font-bold">Independent</p> : <p className="text-red-400 font-bold">Not Independent</p>
                }
                <div className="flex items-center justify-center">
                    <div className="flex-1">
                        <h2 className="text-xl my-2">National Flag : </h2>
                        <img className="w-[40%] mx-auto" src={country.flags.png} alt="" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl my-2">Coat of Arms : </h2>
                        <img className="w-[30%] mx-auto" src={country.coatOfArms.png} alt="" />
                    </div>
                </div>
                {country.borders?.length > 0 && <h2 className="text-2xl font-bold">
                    Borders with country : {
                        country.borders.map((border, idx) => <p className="text-gray-500 font-medium text-xl" key={idx}>{idx + 1}:{border}</p>)
                    }
                </h2>
                }
                <h2 className="text-2xl font-bold">Area : {country.area} KM <sup>2</sup></h2>
                <h2 className="text-2xl font-bold">Population : {country.population}</h2>
                <h1 className="text-2xl font-bold">Region : {country.region}</h1>
                <h1 className="text-2xl font-bold">Time Zone : {country.timezones}</h1>


                <p className="text-2xl font-bold">Start of week : {country.startOfWeek}</p>
                <NavLink to={'/countries'}><button className="px-6 text-white font-bold py-2 my-4 bg-cyan-700">Go back</button></NavLink>
            </div>
        </div>
    );
};

export default Details;