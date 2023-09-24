import AboutCard from "../../about/AboutCard";
import Hero from "../Hero/Hero";
import Testimonial from "../testimonial/Testimonial";
import HAbout from "./HAbout";
import HBlog from "./HBlog";
import Hprice from "./Hprice";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutCard/>
            <HAbout/>
            <Testimonial/>
            <HBlog/>
            <Hprice/>
        </>
    );
};

export default Home;