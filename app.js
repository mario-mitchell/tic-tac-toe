let boxes = document.querySelectorAll(".row > div");
let player = "X";
let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

boxes.forEach(function(box){
    box.addEventListener("click", clickedBox);
});

newGame();

function newGame(){
    document.querySelector("restartGame").style.display = "none"
    
}

function clickedBox(e){
    if(e.target.textContent !== ""){
        return;
    }
    e.target.textContent = player;
    switchPlayer();
}



function switchPlayer(){
     
    if(player === "X"){
        player = "O";
    }else{
         player = "X";
    }
}

console.log(boxes);

