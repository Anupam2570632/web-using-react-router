import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="my-16">
                <Outlet>

                </Outlet>
            </div>
        </div>
    );
};

export default Home;