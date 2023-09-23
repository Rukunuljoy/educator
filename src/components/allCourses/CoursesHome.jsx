import Back from "../common/BackGround/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";


const CoursesHome = () => {
    return (
        <div>
            <Back title="Explore Courses"/>
            <CoursesCard/>
            <OnlineCourses/>
        </div>
    );
};

export default CoursesHome;