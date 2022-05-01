"use strict";

const TILE_CLASS = 'tile';
const START_BTN_CLASS = 'startBtn';
const HIDDEN_CLASS = '.hidden';
const TILE_TEMPLATE = document.getElementById('tileTemplate').innerHTML;
const startBtn = document.getElementById('startBtn');
const board = document.getElementById('board');
const tilesArr = [];
let counter = 1;

startBtn.addEventListener('click', onStartClick);
board.addEventListener('click', onTileClick);




function onStartClick() {
    gameStart();
}

function onTileClick (e) {
    if (e.target.classList.contains(TILE_CLASS)) {
        console.log(e.target.classlist);
        if (+e.target.id === counter) {
            counter ++;
            e.target.classlist.add(HIDDEN_CLASS);
            console.log('tile hidden');
        }
    }
}

function gameStart () {
    randomiseBord();
    renderBoard();

}



function randomiseBord() {
    counter = 1;
    randomArr (25);
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