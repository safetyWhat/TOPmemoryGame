import { useState } from "react";
import PropTypes from 'prop-types';

function Card({ imageSrc, imageName }) {
    const [isClicked, changeClick] = useState(false);

    const onCardClick = () => {
        if (!isClicked){
            changeClick(prevState => !prevState);
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
}

export default Card