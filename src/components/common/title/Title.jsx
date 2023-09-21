import PropTypes from 'prop-types';


const Title = ({subtitle,title}) => {
    return (
        <div>
            <div id="heading">
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>
        </div>
    );
};
Title.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Title;