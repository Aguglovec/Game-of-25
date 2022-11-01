import './HighscoreHeader.css'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector } from '../../../../store/selectors/selectors';
import { setDifficulty } from '../../../../store/actions/game25Actions';
import { DIFF_EASY, DIFF_HARD, DIFF_REGULAR } from '../../../../config';


function HighscoreHeader() {
    const dispatch = useDispatch();
    const difficulty = useSelector(difficultySelector);
    const difs = [DIFF_EASY, DIFF_REGULAR, DIFF_HARD];

    function onDifClick(e) {
        dispatch(setDifficulty(e.target.id));
    }


    function tileClasses (dif) {
        if (dif === difficulty) {
            return "diffTile red"
        }
        return "diffTile"
    }

    return (
        <>
        <div className="container">
        <h1>Highscores:</h1>
        {difs.map((item) => (<span className={tileClasses(item)} onClick={onDifClick} key={item} id={item}>{item.toUpperCase()}</span>))}
        </div>
        </>
    )
}
export default HighscoreHeader