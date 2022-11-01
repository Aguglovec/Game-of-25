import { Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import GamePage from '../../game/pages/GamePage';
import HighscorePage from '../../highscore/pages/HighscorePage';
import MenuPage from '../../menu/pages/MenuPage';
import { DIFF_EASY, DIFF_REGULAR, DIFF_HARD } from '../../../config';
import Description from '../../description/components/Description';



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/menu" />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path={DIFF_EASY} element={<GamePage difficulty={DIFF_EASY} maxTiles="25"/>} />
                <Route path={DIFF_REGULAR} element={<GamePage difficulty={DIFF_REGULAR} maxTiles="25"/>} />
                <Route path={DIFF_HARD} element={<GamePage difficulty={DIFF_HARD} maxTiles="25"/>} />
                <Route path="highscore" element={<HighscorePage />} />
                <Route path="about" element={<Description />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
