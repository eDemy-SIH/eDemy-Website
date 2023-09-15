const ques = [
    {
        question : " A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is : ",
        answers : [
            {text : "A. 121", correct : false},
            {text : "B. 122", correct : true},
            {text : "C. 123", correct : false},
            {text : "D. 124", correct : false},
        ]
    },
    {
        question : " The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is : ",
        answers : [
            {text : "A. 625", correct : true},
            {text : "B. 630", correct : false},
            {text : "C. 640", correct : false},
            {text : "D. 659", correct : false},
        ]
    },
    {
        question : " There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate ?",
        answers : [
            {text : "A. 2160", correct : false},
            {text : "B. 3120", correct : false},
            {text : "C. 3972", correct : true},
            {text : "D. 6240", correct : false},
        ]
    },  
    {
        question : " What is the difference between the compound interests on Rs. 5000 for 1 years at 4% per annum compounded yearly and half-yearly ?",
        answers : [
            {text : "A. Rs. 2.04", correct : true},
            {text : "B. Rs. 3.06", correct : false},
            {text : "C. Rs. 4.80", correct : false},
            {text : "D. Rs. 8.30", correct : false},
        ]
    },
    {
        question : " The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is :",
        answers : [
            {text : "A. 2", correct : true},
            {text : "B. 2.5", correct : false},
            {text : "C. 3", correct : false},
            {text : "D. 4", correct : false},
        ]
    },
    {
        question : " Which of the following words is an antonym (opposite) of ' Eloquent '?",
        answers : [
            {text : "A. Inarticulate", correct : true},
            {text : "B. Fluent", correct : false},
            {text : "C. Voluble", correct : false},
            {text : "D. Loquacious", correct : false},
        ]
    },
    {
        question : "  Fill in the blank : If I were you, I _____ consider the job offer seriously. ",
        answers : [
            {text : "A. Ought", correct : false},
            {text : "B. Can", correct : false},
            {text : "C. Would", correct : true},
            {text : "D. Must", correct : false},
        ]
    },
    {
        question : " Choose the synonym for the word 'Ardent' :",
        answers : [
            {text : "A. Lukewarm", correct : false},
            {text : "B. Enthusiastic", correct : true},
            {text : "C. Apathetic", correct : false},
            {text : "D. Indifferent", correct : false},
        ]
    },
    {
        question : " Complete the analogy: 'Ocean is to water as forest is to ______.' :",
        answers : [
            {text : "A. Trees", correct : true},
            {text : "B. Leaves", correct : false},
            {text : "C. Soil", correct : false},
            {text : "D. Mountain", correct : false},
        ]
    },
    {
        question : " Identify the grammatically incorrect sentence :",
        answers : [
            {text : "A. She sings beautifully.", correct : false},
            {text : "B. They was late for the meeting.", correct : true},
            {text : "C. He reads books every evening.", correct : false},
            {text : "D. We have already eaten dinner.", correct : false},
        ]
    },
    {
        question : " Choose the word that best fits in the blank : His actions spoke ______ than his words.",
        answers : [
            {text : "A. Lighter", correct : false},
            {text : "B. Less", correct : true},
            {text : "C. Louder", correct : false},
            {text : "D. Lesser", correct : false},
        ]
    },
    {
        question : " Which of the following is NOT a renewable source of energy ?",
        answers : [
            {text : "A. Solar power", correct : false},
            {text : "B. Wind power", correct : false},
            {text : "C. Natural gas", correct : true},
            {text : "D. Hydroelectric power", correct : false},
        ]
    },
    {
        question : " What is the chemical symbol for the element oxygen ?",
        answers : [
            {text : "A. O", correct : true},
            {text : "B. Ox", correct : false},
            {text : "C. Om", correct : false},
            {text : "D. Oz", correct : false},
        ]
    },
    {
        question : " Who painted the famous artwork - Mona Lisa ?",
        answers : [
            {text : "A. Vincent van Gogh", correct : false},
            {text : "B. Pablo Picasso", correct : false},
            {text : "C. Leonardo da Vinci", correct : true},
            {text : "D. Leonardo Di Caprio", correct : false},
        ]
    },
    {
        question : " Which artistic movement is known for its use of bright colors, bold shapes, and abstraction of reality ?",
        answers : [
            {text : "A. Impressionism", correct : true},
            {text : "B. Cubism", correct : false},
            {text : "C. Surrealism", correct : false},
            {text : "D.  Abstract Expressionism", correct : false},
        ]
    },
    
];

var quesele = document.getElementById("ques");
var answerbtn = document.getElementById("ansopt");
var nextbt = document.getElementById("next");
var optn = document.getElementById("optn");



var quesno = 0;
let corrans = 0;

function teststart(){
    quesno = 0;
    corrans = 0;
    nextbt.innerHTML = "Next";
    showQuestions();
}

function dontshowbefore(){
    nextbt.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function showQuestions() {
    dontshowbefore();
    let nowques = ques[quesno];
    let quesnum = quesno + 1;
    quesele.innerHTML = quesnum + " .  " + nowques.question;
    
    nowques.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectans);
    });
}



function selectans(nt){
    const selectbtn = nt.target;
    const itscorrect = selectbtn.dataset.correct === "true";
    if(itscorrect){
        selectbtn.classList.add("correct");
        corrans++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbt.style.display = "block";
}

function gotolink() {
    window.location = "about.html";
}


function showMarks() {
    dontshowbefore();
    optn.style.display = "none";
    quesele.innerHTML = "Your Test's Over Proceed To Next Page And Do The Required To See Results."
    // quesele.innerHTML = `${corrans}`;
    nextbt.innerHTML = "SUBMIT TEST";
    nextbt.style.display = "block";
    
}


function nextBtnWorks(){
    quesno++;
    if (quesno < ques.length){
        showQuestions();
    }
    else {
        window.scrollTo(0,0);
        showMarks();
    }
}

function gotolink2() {
    window.location = "testimonials.html";
}

function getOption(){
    gotolink2();
}

function work() {
    if(quesno < ques.length){
        nextBtnWorks();
    }
    else {
        gotolink();
    }   
}


// var chooseH = document.getElementById("chooseH");
// var scoreard = document.getElementById("scoreard");

// function changetext() {
//     scoreard.innerHTML = `${ques.length}    ${corrans}`;
// }

// changetext();

work();

teststart();