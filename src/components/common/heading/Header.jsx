import { Link } from "react-router-dom";
import Head from "../Head/Head";
import './Header.css'
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaBars } from "react-icons/fa";


const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <div>
           <Head/>
           <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=>setClick(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>All courses</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/journal'>Journal</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">Get Started</div>
                    </div>
                    <button className="toggle" onClick={()=>setClick(!click)}>
                        {click ? <BiTimeFive/> : <FaBars/>}
                    </button>
                </nav>
            </header> 
        </div>
    );
};

export default Header;