import Back from "../common/BackGround/Back";
import TeamCard from "./TeamCard";
import './Team.css'

const Team = () => {
    return (
        <div>
            <Back title="Team"/>
            <section className="team padding">
                <div className="container grid">
                    <TeamCard/>
                </div>
            </section>
        </div>
    );
};

export default Team;