import PropTypes from 'prop-types';
import './Card.css';

function Card({ imageSrc, imageName, changeClick }) {
    const onCardClick = () => {
        console.log('clicked');
        changeClick();
        console.log('done');
    }
    

    return (
        <div onClick={onCardClick} className="card">
            <img className="cardImage" src={imageSrc} alt={imageName} style={{ width: '200px', height: 'auto' }} />
            <p className="cardName">{imageName}</p>
        </div>
    )
}

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    isClicked: PropTypes.bool,
    changeClick: PropTypes.func.isRequired,
}

export default Card