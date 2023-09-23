import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div key={val.id} className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i><BsFacebook className="icon" /></i>
              <BsInstagram className="icon" />
              <BsTwitter className="icon" />
              <BsYoutube className="icon" />
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
