
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetgame");
let divmsg = document.querySelector(".msg-container");
let winmsg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
    turnO = true;
    enableBoxes();
    divmsg.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`
    divmsg.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
            box.innerText = "O";
            box.style.color = "rgb(6, 236, 236)";
            turnO = false;
        } else{ box.innerText = "X";
        box.style.color = "rgb(199, 6, 199)";
        turnO = true;
        }
        
        checkWinner();
        divmsg.classList.remove("msg-container");
    });
});


const checkWinner = () => {
    for(let pattern of winPatterns){

          let pos1 = boxes[pattern[0]].innerText;
          let pos2 = boxes[pattern[1]].innerText;
          let pos3 = boxes[pattern[2]].innerText;

          if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
          }
    }
}

resetBtn.addEventListener("click", reset);
