import "./Win.css"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetWinState } from '../../../../store/actions/game25Actions';
import { timeMsToMin } from '../../../utils/utils';
import HighscoreForm from "../HighscoreForm/HighscoreForm";
import useUserTime from "../../hooks/useUserTime";
import { highscoreSelector } from "../../../../store/selectors/selectors";

function Win() {
    const dispatch = useDispatch();
    const time = useUserTime();
    const highscoreList = useSelector(highscoreSelector);

    
function highscorePlace() {
    if ( highscoreList.find((user)=> time < user.time )) {
        return highscoreList.find((user)=> time < user.time ).position
}
}

function winClick(e) {
dispatch(resetWinState());
}

  return (
    <div className='big screenCenter' onClick={winClick}>
        <h1>Congratulation!</h1>
        <h3>You win with time:<br />{timeMsToMin(time)}</h3>
        {(highscorePlace()) ? 
          <>
          <h3>Your place : {highscorePlace()} </h3>
          <HighscoreForm />
          </>
          :null}
    </div>
  )
}

export default Win