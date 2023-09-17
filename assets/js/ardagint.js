function gotolink2() {
    window.location = "testimonials.html";
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


scoreM.innerHTML = `${localStorage.getItem("shit")} / ${ques.length}`;

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
    pf.innerHTML = "YES";
    chooseH.innerHTML = localStorage.getItem("sexy");
}

else if (localStorage.getItem("shit") < parseInt(ques.length)/2){
    pf.innerHTML = "NO";
    chooseH.innerHTML = localStorage.getItem("sexyB");
}


if (localStorage.getItem("shit") >= parseInt(ques.length)/2){
    btn69.addEventListener('click',()=>{
        primary();
    })
}

else if (localStorage.getItem("shit") < parseInt(ques.length)/2){
    btn69.addEventListener('click',()=>{
        secondary();
    })
}