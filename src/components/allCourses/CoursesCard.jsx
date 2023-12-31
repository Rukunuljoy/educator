import { coursesCard } from "../../dummydata";
import { AiFillStar } from "react-icons/ai";
import "./Courses.css";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => {
            return (
              <div key={val.id} className="items">
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{val.coursesName}</h1>
                    <div className="rate">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                      {val.courTeacher.map((details) => (
                        <>
                          <div key={details.id} className="box">
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                  <div className="price">
                    <h3>{val.priceAll} / {val.pricePer}</h3>
                  </div>
                  <button className="outline-btn">ENROLL NOW</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
