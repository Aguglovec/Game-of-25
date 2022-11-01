import React from 'react'
import Footer from '../../common/components/Footer/Footer'
import Header from '../../common/components/Header/Header'
import Game from '../components/Game/Game'

function GamePage({difficulty, maxTiles}) {
  return (
    <>
    <Header />
    <Game difficulty={difficulty} maxTiles={maxTiles}/>  
    <Footer />
    </>
    )
}

export default GamePage