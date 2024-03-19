import { useLoaderData } from "react-router-dom";

const Details = () => {
    const [country] = useLoaderData()
    console.log(country)
    return (
        <div className="flex items-center justify-center">
            <div className="w-[60vw] h-fit bg-gray-500">
                <h1>Name : {country.name.common}</h1>
                <h2>Official Name : {country.name.official}</h2>
                <h2>Capital : {country.capital}</h2>
                {
                    country.independent ? <p className="text-blue-400 font-bold">Independent</p> : <p className="text-red-400 font-bold">Not Independent</p>
                }
                <div className="w-full">
                    <h2>National Flag : </h2>
                    <img className="w-[70%] mx-auto" src={country.flags.png} alt="" />
                </div>
                <div className="w-full">
                    <h2>Coat of Arms : </h2>
                    <img className="w-[70%] mx-auto" src={country.coatOfArms.png} alt="" />
                </div>
                <h2>
                    Borders: {
                        country.borders.map((border, idx) => <p key={idx}>{idx + 1}:{border}</p>)
                    }
                </h2>
                <h2>Area : {country.area} KM <sup>2</sup></h2>
                <h2>Population : {country.population}</h2>
                <h1>Region : {country.region}</h1>
                <h1>Time Zone : {country.timezones}</h1>


                <p>Start of week : {country.startOfWeek}</p>
            </div>
        </div>
    );
};

export default Details;