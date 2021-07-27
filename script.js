const startscreen = document.querySelector(".startscreen");//declaration for startscreen
//const gamescreen  = document.querySelector(".gamescreen");//decleration for gamescreen
const score = document.querySelector(".score");//decleration for score area
const gamearea = document.querySelector(".gamearea");//decleration for gamearea
startscreen.addEventListener("click",run_game);//adding eventlistener for startscreen

document.addEventListener("keydown",presson);//adding function to monitor keypressing
document.addEventListener("keyup",pressoff);
let player = {speed:5}
let direction = {
    ArrowLeft:false,
    ArrowRight:false,
    ArrowUp:false,
    ArrowDown:false
}
function play_game() {
    let car = document.querySelector(".car");
    if (player.start) {
        if (direction.ArrowDown) {player.y += player.speed;}
        if (direction.ArrowUp) {player.y -= player.speed;}
        if (direction.ArrowLeft) {player.x -= player.speed;}
        if (direction.ArrowRight) {player.x += player.speed;}
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';

        window.requestAnimationFrame(play_game);
    }
}
function run_game() {
    startscreen.classList.add("hide");//hide the startscreen
    gamearea.classList.remove("hide");//show gamescreen
    player.start =  true;
    window.requestAnimationFrame(play_game);
    let car = document.createElement("div");
    car.innerText =  "car";
    car.setAttribute("class","car");
    gamearea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
}

function presson(e) {
    direction[e.key] = true;
}

function pressoff(e) {
    direction[e.key] = false;
}