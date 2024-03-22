import { useLoaderData } from "react-router-dom";

const Photos = () => {
    const meal = useLoaderData();
    const { meals: [{ strMeal, strMealThumb }] } = meal;
    return (
        <div className="w-4/5 mx-auto my-20 p-4 border-blue-500 border-2">
            <h2>{strMeal}</h2>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Photos;