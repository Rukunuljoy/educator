import { price } from "../../dummydata";
import './Price.css'

const PriceCard = () => {
    return (
        <>
         {
            price.map((val)=>(
                <div key={val} className="items shadow">
                    <h4>{val.name}</h4>
                    <h1>
                        <span>$</span>
                        {val.price}
                    </h1>
                    <p>{val.desc}</p>
                    <button className="outline-btn">Get Started</button>
                </div>
            ))
         }   
        </>
    );
};

export default PriceCard;