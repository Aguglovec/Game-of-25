"use strict";

const TILE_CLASS = 'tile';
const START_BTN_CLASS = 'startBtn';
const HIDDEN_CLASS = 'hidden';
const WRONG_CLASS = 'wrong';

const TILE_TEMPLATE = document.querySelector('#tileTemplate').innerHTML;
const WIN_TEMPLATE = document.querySelector('#winTemplate').innerHTML;
const startEasy = document.querySelector('#startEasy');
const startNornal = document.querySelector('#startNornal');
const startHard = document.querySelector('#startHard');
const board = document.querySelector('#board');

const MEMORIZE_TIME = 5000;
const DELAY_ON_WRONG = 500;
const TILES = 25;
const tilesArr = [];
let tileCounter = 1;
let hardMode = false;
let startTime = 0;

startEasy.addEventListener('click', onEasyStartClick);
startNornal.addEventListener('click', onNormalStartClick);
startHard.addEventListener('click', onHardStartClick);


function onEasyStartClick () {
    startSequense();
    board.addEventListener('click', onTileClick);
    startTimer();
}

function onNormalStartClick () {
    startSequense();
    setTimeout(hideBoard, MEMORIZE_TIME);
    setTimeout(() => board.addEventListener('click', onTileClick), MEMORIZE_TIME);
    setTimeout(startTimer, MEMORIZE_TIME);    
}

function onHardStartClick () {
    onNormalStartClick();
    hardMode = true; 
}

function onTileClick (e) {
    if (e.target.classList.contains(TILE_CLASS)) {
        checkTile(e.target);
    }
}


function checkTile(tileClicked) {
    if (+tileClicked.id === tileCounter) {
        tileClicked.classList.toggle(HIDDEN_CLASS);
        tileCounter ++;
    }
    if (+tileClicked.id > tileCounter) {
        tileIsWrong(tileClicked);
        if (hardMode) {
            tileCounter = 1;
            setTimeout(hideBoard, DELAY_ON_WRONG); 
        }
    }
    if (tileCounter === TILES + 1) {
        win();
    }
}

function tileIsWrong (tileClicked) {
    tileClicked.classList.toggle(HIDDEN_CLASS);
    tileClicked.classList.toggle(WRONG_CLASS);
    setTimeout(()=> tileClicked.classList.toggle(HIDDEN_CLASS), DELAY_ON_WRONG);
    setTimeout(()=> tileClicked.classList.toggle(WRONG_CLASS), DELAY_ON_WRONG);
}


function startSequense () {
    hardMode = false;
    removeTileListeners();
    shuffleBord();
    renderBoard();
}

function removeTileListeners () {
    board.removeEventListener('click', onTileClick);
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


function renderBoard () {
    board.innerHTML = tilesArr.map(generateTileHtml).join('\n');
}

function generateTileHtml (tile) {
    return interpolate(TILE_TEMPLATE, `{{index}}`, tile);
}

function interpolate (template,marker,obj) {
    template = template.replaceAll(marker, obj);
    return template;
}

function hideBoard () {
//    board.innerHTML = board.innerHTML.replaceAll(`${TILE_CLASS}`,`${TILE_CLASS + ' ' + HIDDEN_CLASS}`);
board.querySelectorAll('.'+TILE_CLASS). forEach((el) => el.classList.add(HIDDEN_CLASS));
}

function win () {
    board.innerHTML = interpolate(WIN_TEMPLATE,'{{time}}', stopTimer());
    removeTileListeners();
    }


function startTimer () {
    startTime =  Date.now();
}

function stopTimer() {
let time = Date.now() - startTime;
let ms = time % 1000;
let s = Math.floor(time/1000) % 60;
let m = Math.floor(time/60000);
if (m===0) {
    return `${s}.${ms} sec`

}
return `${m} min ${s}.${ms} sec`
}