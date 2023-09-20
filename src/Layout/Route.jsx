import { Outlet } from "react-router";
import Header from "../components/common/heading/Header";


const Route = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Route;