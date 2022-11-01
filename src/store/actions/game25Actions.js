import { DIFF_EASY, START_DELAY } from "../../config";
import { getHighscores, putHighscore } from "../../modules/highscore/services/highscoreServices";
import { createAction } from "../../modules/utils/utils";

export const RESET_STATE = 'RESET_STATE';
export const resetGameState = createAction(RESET_STATE);

export const GAME_START = 'GAME_START';
export const initGame = createAction(GAME_START);

export const SET_TILES_LIST = 'SET_TILES_LIST';
export const setTilesList = createAction(SET_TILES_LIST);

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const setDifficulty = createAction(SET_DIFFICULTY);

export const SET_START_TIME = 'SET_START_TIME';
export const setStartTime = createAction(SET_START_TIME);

export const SET_END_TIME = 'SET_END_TIME';
export const setEndTime = createAction(SET_END_TIME);

export const SET_START = 'SET_START';
export const setStart = createAction(SET_START);

export const SET_WIN = 'SET_WIN';
export const winSequence = createAction(SET_WIN);

export const RESET_WIN = 'RESET_WIN';
export const resetWinState = createAction(RESET_WIN);

export const TILE_CLICKED = 'TILE_CLICKED';
export const clickOnTile = createAction(TILE_CLICKED);

export const RESET_TILE_ERROR = 'RESET_TILE_ERROR';
export const resetErrorState = createAction(RESET_TILE_ERROR);

export const HIGHSCORE_SET_LIST = 'HIGHSCORE_SET_LIST';
export const setHighscoreList = createAction(HIGHSCORE_SET_LIST);



export const initBoard = (difficulty, maxTiles) => (dispatch) => {
    dispatch(resetGameState());
    dispatch(setBoard(maxTiles));
    dispatch(setDifficulty(difficulty));

    if (difficulty === DIFF_EASY) {
        dispatch(setStart());
    } else {
        setTimeout(() => {
            dispatch(setStart());
        }, START_DELAY); 
    }
}

export const setBoard = (maxTile) => (dispatch) => {
    const tilesList = randomArr(maxTile).reduce((acc, value) => {
        return [...acc, {id:value, done:false, error:false, hidden:false, }]
    },[]);
    dispatch(setTilesList(tilesList));
}

function randomArr (max) {
    const tilesArr = [];
    while (tilesArr.length < max) {
        let randomNumber = Math.ceil(Math.random() * max);
        if (!tilesArr.includes(randomNumber)) {
            tilesArr.push(randomNumber);
        }
    }
    return tilesArr
}

export const fetchList = (diff) => (dispatch) => {
    getHighscores(diff)
        .then((data) => dispatch(setHighscoreList(data)))
        .catch(() => {
            throw new Error("Something went wrong during highscore fetch.")
        })
};

export const submitHighscore = (diff, highscore, highscoreList) => (dispatch) => {
    const updatedHighscores = [];
    const newHighscoreList = highscoreList.map((user) => {
        if (highscore.time > user.time) {
            return user
        } else {
            const newUser = {...user, ...highscore};
            updatedHighscores.push(newUser);
            highscore = {userName:user.userName, time:user.time};
            return newUser
        }
        })
    
    dispatch(setHighscoreList(newHighscoreList));

    function f(i = 0) {
        if (i < updatedHighscores.length ){
        putHighscore(diff, updatedHighscores[i])
        .then(() => {f(++i)})
        .catch(() => {
            dispatch(setHighscoreList(highscoreList));
            throw new Error("Something went wrong during highscore submit.")
        })  }
    }
    f(); 
};

