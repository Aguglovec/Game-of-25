import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector, highscoreSelector } from '../../../../store/selectors/selectors';
import { resetWinState, submitHighscore } from '../../../../store/actions/game25Actions';
import ErrorMsg from '../../../common/components/ErrorMsg/ErrorMsg';
import useUserTime from '../../hooks/useUserTime';

function HighscoreForm() {
    const [userName, setUserName] = useState("")
    const [error, setError] = useState('');
    const time = useUserTime();
    const highscoreList = useSelector(highscoreSelector);
    const diff = useSelector(difficultySelector);


    const dispatch = useDispatch();

    function oninputChange (e) {
        setError('');
        setUserName(e.target.value);
    }

    function onHighscoreSubmit(e) {
        e.preventDefault();
        if (!isValid(userName)) {
            setError('Please enter your name.');
            return null
        };
        const highscore = {userName,time};
        setError('');
        dispatch(submitHighscore(diff, highscore, highscoreList));
        resetForm();
        dispatch(resetWinState());
    }

    function resetForm() {
        setUserName("");
    }

return (
    <>
    <ErrorMsg error={error} />
    <form onClick={(e) => e.stopPropagation()} onSubmit={onHighscoreSubmit}>
    <input type="text" placeholder="Enter your name" value={userName} onChange={(e) => oninputChange(e)} />
    <button>Submit</button>
    </form>
    </>
    )
}

export default HighscoreForm


function isValid (string) {
    if (string.length < 1) {
        return false;
    } 
    return true;
}