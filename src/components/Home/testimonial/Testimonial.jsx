import { FaQuoteLeft } from "react-icons/fa";
import { testimonal } from "../../../dummydata";
import Title from "../../common/title/Title";
import './Testimonia.css'


const Testimonial = () => {
    return (
        <div>
            <section className="testimonial padding">
                <div className="container">
                    <Title subtitle="testimonial" title="our successful students"/>
                    <div className="content grid2">
                        {
                            testimonal.map((val)=>(
                                <div key={val.id} className="items shadow">
                                    <div className="box flex">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                            <i ><FaQuoteLeft /></i>
                                        </div>
                                        <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                        </div>
                                       
                                    </div>
                                    <p>{val.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;