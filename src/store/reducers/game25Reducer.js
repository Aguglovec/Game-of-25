import { DIFF_EASY, DIFF_HARD, DIFF_REGULAR } from '../../config';
import { SET_TILES_LIST, TILE_CLICKED, SET_WIN, SET_DIFFICULTY, HIGHSCORE_SET_LIST, RESET_STATE, SET_START_TIME, SET_END_TIME, RESET_WIN, SET_START, RESET_TILE_ERROR, GAME_START } from '../actions/game25Actions';

const INITIAL_VALUE = {
    list: [],
    highscoreList: [],
    difficulty: DIFF_EASY,
    maxTile: 25,
    start: false,
    win: false,
    searchingFor: 1,
    startTime: null,
    endTime: null

};

function init (payload) {


    
}

function resetErrorState(state, payload) {
    if (state.difficulty === DIFF_EASY) {
        return { ...state, list: state.list.map((item) => item.id !== payload.id ? item : {...item, error:false} ) };

    } else if (state.difficulty === DIFF_REGULAR) {
        return { ...state, list: state.list.map((item) => item.id !== payload.id ? item : {...item, error:false, hidden:true} ) };

    } else if (state.difficulty === DIFF_HARD) {
        return { ...state, searchingFor: 1, list: state.list.map((item) => ({...item, error:false, hidden:true}) ) };
    }
}

function whenTileClicked(state, tile) {
    if (tile.id === state.searchingFor && tile.id === state.maxTile) {
        return {
            ...state, 
            win:true, 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, done:true, hidden:false})
        };

    } else if (tile.id === state.searchingFor) {
        return { 
            ...state, 
            searchingFor: state.searchingFor + 1 , 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, done:true, hidden:false})
        };

    } else if (tile.id > state.searchingFor) {
        return { 
            ...state, 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, error:true, hidden:false}) 
        };

    } else {
        return state
    }
}

function hideAllTiles(state) {
    if (state.difficulty === DIFF_EASY) {
            return state.list
    } else {
        return state.list.map((tile)=> ({...tile, hidden:true}))
    }
}


export default function game25Reducer(state = INITIAL_VALUE, { type, payload },) {
    switch (type) {
        case RESET_STATE:
            return { ...INITIAL_VALUE};        
        case GAME_START:
            return  init(payload);
        case SET_TILES_LIST:
            return { ...state, list: payload };        
        case SET_DIFFICULTY:
            return { ...state, difficulty: payload };        
        case SET_START_TIME:
            return { ...state, startTime: payload };        
        case SET_END_TIME:
            return { ...state, endTime: payload };        
        case TILE_CLICKED:
            return  whenTileClicked(state, payload);
        case RESET_TILE_ERROR:
            return resetErrorState(state, payload);
        case SET_START:
            return { ...state, start:true, startTime: Date.now() , list:hideAllTiles(state)};
        case SET_WIN:
            return { ...state, win:true, start:false};
        case RESET_WIN:
            return { ...state, win:false};
        case HIGHSCORE_SET_LIST:
            return { ...state, highscoreList: payload };        
                
        default:
            return state;
    }
}
