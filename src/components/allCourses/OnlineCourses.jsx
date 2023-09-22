import { online } from '../../dummydata';
import Title from '../common/title/Title'

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

                                    </div>
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