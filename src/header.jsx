import PropTypes from 'prop-types';

function Score(props) {
    return (
        <div id="scoreContainer">
            <p id="currScore">Score: {props.score}</p>
            <p id="highScore">High Score: {props.highScore}</p>
        </div>
    )

}

Score.propTypes = {
    score: PropTypes.number,
    highScore: PropTypes.number,
}

export default Score;