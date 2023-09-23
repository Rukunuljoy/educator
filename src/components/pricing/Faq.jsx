import { useState } from "react";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";


const Faq = () => {
    const [click, setClick] = useState(false)

    const toggle =(index) =>{
        if(click === index){
            return setClick(null)
        }
        setClick(index)
    }
    return (
        <div>
            <Title subtitle="Faqs" title="Frequently Ask Questions"/>
            <section className="faq">
                <div className="container">
                    {
                        faq.map((val,index)=>(
                            <div key={val} className="box">
                                <button className="according" onClick={()=>toggle(index)} key={index}>
                                    <h2>{val.title}</h2>
                                    <span>{click===index?<FaChevronDown/>:<FaChevronRight/>}</span>
                                </button>
                                {click===index? (
                                    <div className="text">
                                    <p>{val.desc}</p>
                                </div>
                                ):null}
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Faq;