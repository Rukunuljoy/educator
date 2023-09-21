import Title from '../../common/title/Title';
import './Hero.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='welcome to academic' title='Best online Education'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, inventore earum? Voluptatibus ab alias mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex dolore perferendis vitae impedit labore.</p>
                        <div className="button">
                            <button className='primary-btn'>
                                Get Started Now<AiOutlineArrowRight className='Icon'/>
                            </button>
                            <button className='primary-btn'>
                                View Course<AiOutlineArrowRight className='Icon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin">

            </div>
        </>
    );
};

export default Hero;