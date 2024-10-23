import { useState } from "react";

function Card() {
    const [isClicked, changeClick] = useState(false);

    const onCardClick = () => {
        changeClick(prevState => !prevState);
    }

    return (
        <div onClick={onCardClick}>
            <p>Card is {isClicked ? 'Clicked' : 'Not Clicked'} </p>
        </div>
    )
}

export default Card