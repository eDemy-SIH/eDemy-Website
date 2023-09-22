function gotolink2() {
    window.location = "result.html";
}

function getOption(){
    passval();
    passvall();
    gotolink2();
}

var chooseH = document.getElementById("chooseH");
var primint = document.getElementById("primint");
var scoreM = document.getElementById("scoreard");
var pf = document.getElementById("pf");

function passval(){
    var selecttext = document.getElementById("primint").value;
    localStorage.setItem("sexy",selecttext);
    return true;
}

function passvall(){
    var selecttext = document.getElementById("secint").value;
    localStorage.setItem("sexyB",selecttext);
    return true;
}

if (localStorage.getItem("shit") >= parseInt(ques.length)/2){
    scoreM.innerHTML = `Congrats! You answered ${localStorage.getItem("shit")} questions correctly.<br>Your score is: ${localStorage.getItem("shit")} / ${ques.length}`;
}

else if (localStorage.getItem("shit") < parseInt(ques.length)/2){
    scoreM.innerHTML = `You answered ${localStorage.getItem("shit")} questions correctly.<br>Your score is:  ${localStorage.getItem("shit")} / ${ques.length}`;
}

var stfu = document.getElementById("stfu");
var inter = document.getElementById("inter");
var btn69 = document.getElementById("btn69");


function primary(){
    var primj = localStorage.getItem("sexy").split(" ").join("").toLowerCase();
    window.location = `${primj}.html`;
}

function secondary(){
    var secj = localStorage.getItem("sexyB").split(" ").join("").toLowerCase();
    window.location = `${secj}.html`;
}


if (localStorage.getItem("shit") >= parseInt(ques.length)/2){
    inter.innerHTML = "Your Personalized Career Roadmap";
    stfu.innerHTML = "Considering your performance and responses, we suggest you some distinctive career options tailored to your strength. You can find them here.";
    btn69.addEventListener('click',()=>{
        primary();
    })
}

else if (localStorage.getItem("shit") < parseInt(ques.length)/2){
    inter.innerHTML = "Your Personalized Career Roadmap";
    stfu.innerHTML = "Considering your performance and responses, we suggest you some distinctive career options tailored to your strength. You can find them here.";
    btn69.addEventListener('click',()=>{
        secondary();
    })
}