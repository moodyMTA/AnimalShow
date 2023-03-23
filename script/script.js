let imageOne = document.querySelector('#imageOne')
let imageTwo =document.querySelector('#imageTwo')
let imageThree = document.querySelector('#imageThree')
let imageFour =document.querySelector('#imageFour')

imageOne.addEventListener('click', active)
imageTwo.addEventListener('click', activeTwo)
imageThree.addEventListener('click', activeThree)
imageFour.addEventListener('click', activeFour)

function active() {
    let audio = new Audio();
    audio.src = 'cat.mp3'
    audio.autoplay = true;
}

function activeTwo() {
    let audio = new Audio();
    audio.src = 'dog.mp3'
    audio.autoplay = true;
}

function activeThree() {
    let audio = new Audio();
    audio.src = 'elephant.mp3'
    audio.autoplay = true;
}


function activeFour() {
    let audio = new Audio();
    audio.src = 'horse.mp3'
    audio.autoplay = true;
}
