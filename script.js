"use strict";

const TILE_CLASS = 'tile';
const START_BTN_CLASS = 'startBtn';
const HIDDEN_CLASS = 'hidden';
const TILE_TEMPLATE = document.getElementById('tileTemplate').innerHTML;
const WIN_TEMPLATE = document.querySelector('#winTemplate');
const startEasy = document.getElementById('startEasy');
const startNornal = document.getElementById('startNornal');
const startHard = document.getElementById('startHard');

const board = document.getElementById('board');

const TILES = 25;
const tilesArr = [];
let tileCounter = 1;

board.addEventListener('click', onTileClick);

startEasy.addEventListener('click', onEasyStartClick);
startNornal.addEventListener('click', onNormalStartClick);
startHard.addEventListener('click', onHardStartClick);


function onEasyStartClick() {
    shuffleBord();
    renderBoard();
}

function onNormalStartClick() {
    onEasyStartClick();
    setTimeout(hideBoard, 1000);
  
}

function onHardStartClick() {
    onNormalStartClick();
    
  
}


function onTileClick (e) {
    if (e.target.classList.contains(TILE_CLASS)) {
        const tileClicked = e.target;
        if (+tileClicked.id === tileCounter) {
            tileClicked.classList.togglem;;(HIDDEN_CLASS);
            tileCounter ++;
        }
        if (tileCounter === TILES + 1) {
          board.innerHTML = WIN_TEMPLATE.innerHTML;
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

function hideBoard () {
 board.innerHTML = board.innerHTML.replaceAll(`${TILE_CLASS}`,`${TILE_CLASS + ' ' + HIDDEN_CLASS}`);
}

function generateTileHtml (tile) {
    return interpolate(TILE_TEMPLATE, tile);
}

function interpolate(template, obj) {
        template = template.replaceAll(`{{index}}`, obj);
    return template;
}
