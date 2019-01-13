let board;
let boxes = document.querySelectorAll(".row > div");
let gameOver = false;
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



//restartGame();

//function restartGame(){
//    document.querySelector(".gameover").style.display = "none"
//    board = Array.from(Array(9).keys());
//    for (var i = 0; i < boxes.length; i++){
//        boxes[i].innerText = "";
//        boxes[i].style.removeProperty("background-color");
//        boxes[i].addEventListener("click", turnClick, false);
//    }
//}

//function turnClick(square){
//    console.log(square.target.id)
//}

//function turn(squareId, token){
//    gameBoard[squareId] = player;
//    document.getElementById(squareId).innerText = player;
//    let gameWon = winnerWinner(gameBoard, player)
//    if (gameWon) gameOver(gameWon)
//}

//function winnerWinner(board, player){
//    let plays = board.reduce((a, e, i) =>
//    (e === player)) ? a.concat(i) : a,[])
//}