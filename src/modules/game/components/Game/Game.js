import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isStartSelector, isWinSelector } from '../../../../store/selectors/selectors';
import { initBoard, setEndTime } from '../../../../store/actions/game25Actions';
import Board from '../Board/Board';
import Timer from '../Timer/Timer';
import Countdown from '../Countdown/Countdown';
import { START_DELAY } from '../../../../config';

function Game({difficulty, maxTiles}) {
  const dispatch = useDispatch();
  const win = useSelector(isWinSelector);
  const start = useSelector(isStartSelector);
  const navigate = useNavigate();

  useEffect (() => {
    dispatch(initBoard(difficulty, maxTiles));
  }, [dispatch, difficulty, maxTiles]);

  useEffect (() => {
    if (win) {
      dispatch(setEndTime(Date.now()));
      navigate ("/highscore")
    }
}, [win, navigate, dispatch]);

  return (
    <>
    {(start) ? <Timer /> : <Countdown mSeconds={START_DELAY}/> }
    <Board />
    </>
  )
}

export default Game