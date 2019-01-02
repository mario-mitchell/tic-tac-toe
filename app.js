let boxes = document.querySelectorAll(".row > div");
let player = "X";

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

