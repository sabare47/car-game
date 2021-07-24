const startscreen = document.querySelector(".startscreen");//declaration for startscreen
const gamescreen  = document.querySelector(".gamescreen");//decleration for gamescreen
const score = document.querySelector(".score");//decleration for score area
const gamearea = document.querySelector(".gamearea");//decleration for gamearea
startscreen.addEventListener("click",run_game);//adding eventlistener for startscreen

document.addEventListener("keydown",movement);//adding function to monitor keypressing
let direction = {
    ArrowLeft:"moveleft",
    ArrowRight:"moveright",
    ArrowUp:"moveup",
    ArrowDown:"movedown"
}
function run_game() {
    startscreen.classList.add("hide");//hide the startscreen
    gamescreen.classList.remove("hide");//show gamescreen
}

function movement(e){
    let keys = direction[e.key];
    console.log(keys);
}