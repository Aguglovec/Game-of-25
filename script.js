"use strict";

const TILE_CLASS = 'tile';
const START_BTN_CLASS = 'startBtn';
const HIDDEN_CLASS = 'hidden';
const WRONG_CLASS = 'wrong';
const TILE_TEMPLATE = document.getElementById('tileTemplate').innerHTML;
const WIN_TEMPLATE = document.querySelector('#winTemplate');
const startEasy = document.getElementById('startEasy');
const startNornal = document.getElementById('startNornal');
const startHard = document.getElementById('startHard');
const board = document.getElementById('board');

const TILES = 25;
const DELAY = 1000;
const tilesArr = [];
let tileCounter = 1;


startEasy.addEventListener('click', onEasyStartClick);
startNornal.addEventListener('click', onNormalStartClick);
startHard.addEventListener('click', onHardStartClick);


function onEasyStartClick() {
    removeListeners();
    shuffleBord();
    renderBoard();
    board.addEventListener('click', onTileClick);

}

function onNormalStartClick() {
    removeListeners();
    shuffleBord();
    renderBoard();
    timeToMemorize();
    setTimeout(() =>
    board.addEventListener('click', onTileClick),DELAY);    
}

function onHardStartClick() {
    removeListeners();
    shuffleBord();
    renderBoard();
    timeToMemorize();
    setTimeout(() =>
    board.addEventListener('click', onHardTileClick),DELAY);    
  
}


function onTileClick (e) {
    if (e.target.classList.contains(TILE_CLASS)) {
        const tileClicked = e.target;
        if (+tileClicked.id === tileCounter) {
            tileClicked.classList.toggle(HIDDEN_CLASS);
            tileCounter ++;
        }
        if (+tileClicked.id > tileCounter) {
            tileClicked.classList.toggle(WRONG_CLASS);
            setTimeout(()=> tileClicked.classList.toggle(WRONG_CLASS), 500);
        }
        if (tileCounter === TILES + 1) {
            win();
        }
    }
}

function onHardTileClick (e) {
    if (e.target.classList.contains(TILE_CLASS)) {
        const tileClicked = e.target;
        if (+tileClicked.id === tileCounter) {
            tileClicked.classList.toggle(HIDDEN_CLASS);
            tileCounter++;
        }
        if (+tileClicked.id > tileCounter) {
            tileClicked.classList.toggle(HIDDEN_CLASS);
            tileCounter = 1;
            setTimeout(hideBoard,500);
        }
        
        if (tileCounter === TILES + 1) {
            win();
        }
    }
}


function shuffleBord() {
    tileCounter = 1;
    randomArr (TILES);
}

// Работает
function randomArr (max) {
    tilesArr.length = 0;
    while (tilesArr.length < max) {
        let randomNumber = Math.ceil(Math.random() * max);
        if (!tilesArr.includes(randomNumber)) {
            tilesArr.push(randomNumber);
        }

    }
}

// Тоже рабочий рандомизатор
// function randomArr () {
//     tilesArr.length = 0;
// let defaultArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// while (tilesArr.length < 25) {
//     let randomIndex = Math.floor(Math.random() * defaultArr.length);
//     tilesArr.push(defaultArr[randomIndex]);
//     defaultArr.splice(randomIndex,1);
//     }
// }


function renderBoard() {
    board.innerHTML = tilesArr.map(generateTileHtml).join('\n');
}

function generateTileHtml (tile) {
    return interpolate(TILE_TEMPLATE, tile);
}

function interpolate(template, obj) {
    template = template.replaceAll(`{{index}}`, obj);
    return template;
}

function timeToMemorize() {
    setTimeout(hideBoard, DELAY);
    }

function hideBoard () {
//    board.innerHTML = board.innerHTML.replaceAll(`${TILE_CLASS}`,`${TILE_CLASS + ' ' + HIDDEN_CLASS}`);
board.querySelectorAll('.'+TILE_CLASS). forEach((el) => el.classList.add(HIDDEN_CLASS));
}

function win() {
    board.innerHTML = WIN_TEMPLATE.innerHTML;
    removeListeners();
}

function removeListeners() {
    board.removeEventListener('click', onTileClick);
    board.removeEventListener('click', onHardTileClick);
}
