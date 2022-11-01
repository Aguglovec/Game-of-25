import "./menu.css"

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { resetGameState } from "../../../store/actions/game25Actions";
import { DIFF_EASY, DIFF_HARD, DIFF_REGULAR } from "../../../config";

function MenuComponent() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(resetGameState());

}, [dispatch])


  return (
    <>

    <div className="menu-center">
    <h1>Game 25</h1>
    <div>Choose your difficulty:</div>
    <Link to={"/" + DIFF_EASY}>Easy Game</Link><br />
    <Link to={"/" + DIFF_REGULAR}>Regular Game</Link><br />
    <Link to={"/" + DIFF_HARD}>Hard Game</Link><br />
    <br />
    <Link to="/highscore">HIGHSCORES</Link><br />
    <Link to="/about">Description</Link><br />
    </div>
    </>
    
  )
}

export default MenuComponent