import { online } from '../../dummydata';
import Title from '../common/title/Title'
import './Courses.css'
import '../about/About.css'

const OnlineCourses = () => {
    return (
        <>
            <section className="online">
                <div className="container">
                    <Title subtitle="COURSES" title="Browse Our Online Courses"/>
                    <div className="content grid3">
                        {
                            online.map((val)=>(
                                <div key={val.id} className="box">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        <img src={val.hoverCover} alt="" className='show'/>
                                    </div>
                                    <h1>{val.courseName}</h1>
                                    <span>{val.course}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                </section>   
        </>
    );
};

export default OnlineCourses;