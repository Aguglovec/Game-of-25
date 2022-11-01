export function listSelector(state) {
    return state.list;
}

export function maxTileSelector(state) {
    return state.maxTile;
}

export function searchingForSelector(state) {
    return state.searchingFor;
}

export function isWinSelector(state) {
    return state.win;
}

export function isStartSelector(state) {
    return state.start;
}

export function highscoreSelector(state) {
    return state.highscoreList;
}

export function difficultySelector(state) {
    return state.difficulty;
}

export function startTimeSelector(state) {
    return state.startTime;
}

export function endTimeSelector(state) {
    return state.endTime;
}