const select = document.getElementById("select");
const btnOne = document.getElementById("btnOne");
const scoreOne = document.getElementById("scoreOne");
const btnTwo = document.getElementById("btnTwo");
const scoreTwo = document.getElementById("scoreTwo");
const reset = document.getElementById("reset");
const winner = document.getElementById("winner");
const newOptionInput = document.getElementById("customPointLimit");
const newOption = document.createElement("option");
const btnOption = document.getElementById("addOption");
const error = document.getElementById("error");
const errors = document.getElementById("errors");
const btnError = document.getElementById("btnError");

const errorVal = "We do not accept this value, enter another one!";
const errorLimit = "Enter a valid value for the new limit point.";

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

function enableCustom(){
    btnOption.disabled = false;
    newOptionInput.disabled = false;
}

function disableCustom(){
    btnOption.disabled = true;
    newOptionInput.disabled = true;
}

function showError() {
    document.querySelector('.containerError').style.display = "block";
}

let countOne = 0;
btnOne.onclick = function () {
    countOne++;
    scoreOne.innerHTML = countOne;
    select.disabled = true;
    disableCustom();
    endGame();
}

let countTwo = 0;
btnTwo.onclick = function () {
    countTwo++;
    scoreTwo.innerHTML = countTwo;
    select.disabled = true;
    disableCustom();
    endGame();
}

reset.onclick = function () {
    countOne = 0;
    countTwo = 0;
    scoreOne.innerHTML = countOne;
    scoreTwo.innerHTML = countTwo;
    scoreOne.style.color = "black";
    scoreTwo.style.color = "black";
    enable();
    select.disabled = false;
    winner.innerText = "";
    enableCustom();
}

btnOption.onclick = function () {
    const newOptionValue = newOptionInput.value;
    if (newOptionValue !== "") {
        if (newOptionValue.length <= 4 && newOptionValue >= 0){
            newOption.value = newOptionValue;
            newOption.textContent = newOptionValue;
            select.appendChild(newOption);
            newOptionInput.value = "";
            return;
        } 
        error.innerText = errorVal;
        reset.disabled = true;
        disable();
        disableCustom();
        showError();
        return;
    } 
    error.innerText = errorLimit;
    showError();
    reset.disabled = true;
    disable();
    disableCustom();
}

btnError.onclick = function () {
    document.querySelector('.containerError').style.display = "none";
    enable();
    enableCustom();
    reset.disabled = false;
}
