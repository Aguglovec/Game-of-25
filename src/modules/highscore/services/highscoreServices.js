import api from '../../../api'


export function getHighscores(difficulty) {
    return api.get(difficulty).then((resp) => resp.data);
}

export function putHighscore(difficulty, user) {
    return api.put(difficulty + "/" + Number(user.id), user).then((resp) => resp.data);
}