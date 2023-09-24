import { Outlet } from "react-router";
import Header from "../components/common/heading/Header";
import Footer from "../components/common/Footer/Footer";


const Route = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <div className="footers">
            <Footer/>
            </div>
        </div>
    );
};

export default Route;