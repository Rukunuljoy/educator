import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import './Head.css'
const Head = () => {
  return (
    <>
      <div className="head">
        <div className="container flexSB">
          <div className="logo">
           <h1>Academic Education</h1>
           <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="social">
            <BsFacebook className="icon"/>
            <BsInstagram className="icon"/>
            <BsTwitter className="icon"/>
            <BsYoutube className="icon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
