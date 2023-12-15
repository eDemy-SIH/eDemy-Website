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
];

const quesele = document.getElementById("ques");
const answerbtn = document.getElementById("ansopt");
const nextbt = document.getElementById("next");

let quesno = 0;
let corrans = 0;

function teststart(){
    quesno = 0;
    corrans = 0;
    nextbt.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    dontshowbefore()
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

function dontshowbefore(){
    nextbt.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectans(nt){
    const selectbtn = nt.target;
    const itscorrect = selectbtn.dataset.correct === "true";
    if(itscorrect){
        selectbtn.classList.add("correct1");
        corrans++;
    }
    else {
        selectbtn.classList.add("incorrect1");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct1");
        }
        button.disabled = true;
    });
    nextbt.style.display = "block";
}

function showMarks() {
    dontshowbefore();
    quesele.innerHTML = `Your Score Was ${corrans} Out Of ${ques.length} !`; 
    nextbt.innerHTML = "Continue";
    nextbt.style.display = "block";   
}

function nextBtnWorks(){
    quesno++;
    if (quesno < ques.length){
        showQuestions();
    }
    else {
        showMarks();
    }
}

nextbt.addEventListener("click",()=>{
    if(quesno < ques.length){
        nextBtnWorks();
    }
    else {
        Window.location = "index.html";
    }
});

teststart();