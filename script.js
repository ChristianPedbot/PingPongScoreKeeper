let select = document.getElementById("select");
function endgame() {
    let option = parseInt(select.value);
    if (count1 === option) {
        score1.style.color = "green";
        score2.style.color = "red";
        btn1.disabled = true;
        btn2.disabled = true;
    } 
    else if (count2 === option) {
        score2.style.color = "green";
        score1.style.color = "red";
        btn1.disabled = true;
        btn2.disabled = true;
    }
}

let count1 = 0;
let btn1 = document.getElementById("btn1");
let score1 = document.getElementById("score1");
btn1.onclick = function () {
    count1++;
    score1.innerHTML = count1;
    endgame();
}

let count2 = 0;
let btn2 = document.getElementById("btn2");
let score2 = document.getElementById("score2");
btn2.onclick = function () {
    count2++;
    score2.innerHTML = count2;
    endgame();
}

let reset = document.getElementById("reset");
reset.onclick = function () {
    count1 = 0;
    count2 = 0;
    score1.innerHTML = count1;
    score2.innerHTML = count2;
    score1.style.color = "black";
    score2.style.color = "black";
    btn1.disabled = false;
    btn2.disabled = false;
}