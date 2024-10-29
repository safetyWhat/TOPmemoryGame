import { useState } from "react";
import PropTypes from 'prop-types';
import './Card.css';

function Card({ imageSrc, imageName, addScore}) {
    const [isClicked, changeClick] = useState(false);

    const onCardClick = () => {
        if (!isClicked) {
            changeClick(prevState => !prevState);
            addScore();
        } else {
            alert('You already clicked that one!');
            changeClick(prevState => !prevState);
        }
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
    addScore: PropTypes.func,
}

export default Card