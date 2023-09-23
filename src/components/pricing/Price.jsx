import Back from "../common/BackGround/Back";
import Faq from "./Faq";
import PriceCard from "./PriceCard";


const Price = () => {
    return (
        <>
            <Back title="choose the right plan"/>
            <section className="price padding">
                <div className="container grid">
                    <PriceCard/>
                </div>
            </section>
            <Faq/>
        </>
    );
};

export default Price;