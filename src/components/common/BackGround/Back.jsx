import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const Back = ({title}) => {
    const location =useLocation()
    return (
        <>
            <section className="back">
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
            <div className="margin"></div>
        </>
    );
};
Back.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Back;