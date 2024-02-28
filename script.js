const select = document.getElementById("select");
const btnOne = document.getElementById("btnOne");
const scoreOne = document.getElementById("scoreOne");
const btnTwo = document.getElementById("btnTwo");
const scoreTwo = document.getElementById("scoreTwo");
const reset = document.getElementById("reset");
const winner = document.getElementById("winner");

function endGame() {
    const option = parseInt(select.value);
    if (countOne === option) {
        scoreOne.style.color = "green";
        scoreTwo.style.color = "red";
        disable();
        const playerOne = "Player 1 WINNER";
        winner.innerText = playerOne;
    } 
    else if (countTwo === option) {
        scoreTwo.style.color = "green";
        scoreOne.style.color = "red";
        disable();
        const playerTwo = "Player 2 WINNER";
        winner.innerText = playerTwo;
    }
}

function enable(){
    btnOne.disabled = false;
    btnTwo.disabled = false;
}

function disable(){
    btnOne.disabled = true;
    btnTwo.disabled = true;
}

let countOne = 0;
btnOne.onclick = function () {
    countOne++;
    scoreOne.innerHTML = countOne;
    select.disabled = true;
    endGame();
}

let countTwo = 0;
btnTwo.onclick = function () {
    countTwo++;
    scoreTwo.innerHTML = countTwo;
    select.disabled = true;
    endGame();
}


reset.onclick = function () {
    countOne = 0;
    countTwo = 0;
    scoreOne.innerHTML = countOne;
    scoreTwo.innerHTML = countTwo;
    scoreOne.style.color = "black";
    scoreTwo.style.color = "black";
    enable()
    select.disabled = false;
    winner.innerText = "";
}