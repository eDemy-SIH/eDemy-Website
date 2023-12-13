const ques = [
    {
        question : "I like to build things - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I like to take care of animals - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},                      
        ]
    },
    {
        question : "I like putting things together or assembling things - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},        
        ]
    },  
    {
        question : "I like to cook - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I am a practical person - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I like working outdoors - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    // {
    //     question : "I like to do puzzles - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },
    {
        question : "I like to do experiments - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I enjoy science - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    // {
    //     question : "I enjoy trying to figure out how things work - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false}, 
    //     ]
    // },
    {
        question : "I like to analyze things (problems / situations) - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I like working with numbers or charts - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    {
        question : "I am good at maths - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },
    // {
    //     question : "I am good at working independently - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },
    {
        question : "I like to read about art and music - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I enjoy creative writing - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I am a creative person - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I like to play instruments or sing - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // // DUMMY QUESTION FOR QUESNUM FIX  -- COPY DOWN -> parseInt(ques.length/2) and make the upper one dummy and lower one 
    // as the real question .... for any amout of question.
    {
        question : "",
        answers : [
            {text : "", correct : null},
            {text : "", correct : null},
        ]
    },    
    // // 
    {
        question : "I like acting in plays - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like to draw - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like to work in teams - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like to teach or train people - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like trying to help people solve their problems - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I am interested in healing people - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I enjoy learning about other cultures - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I like to get into discussions about issues - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like helping people - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I am an ambitious person and I set goals for myself - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },      
    // {
    //     question : "I like to try to influence or persuade people - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I like selling things - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I am quick to take on new responsibilities - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I would like to start my own business - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like to lead - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I like to give speeches - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I like to organize things (files, desks, offices) - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I like to have clear instructions to follow - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    {
        question : "I would'nt mind working 8 hours per day in an office - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I pay attention to details - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I like to do filing or typing - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
    // {
    //     question : "I am good at keeping records of my work - ",
    //     answers : [
    //         {text : "A. YES", correct : true},
    //         {text : "B. NO", correct : false},
    //     ]
    // },    
    {
        question : "I would like to work in an office - ",
        answers : [
            {text : "A. YES", correct : true},
            {text : "B. NO", correct : false},
        ]
    },    
];

var quesele = document.getElementById("ques");
var answerbtn = document.getElementById("ansopt");
var nextbt = document.getElementById("next");
var optn = document.getElementById("optn");
var optnC = document.getElementById("head3");

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

var midq = (parseInt((ques.length) / 2) - 1);

function popupques(){
    window.scrollTo(0,0);
    nextbt.style.display = "block";
    nextbt.innerHTML = "CONTINUE";
    quesele.innerHTML = "You Are Doing Great ! Just A Few More Questions !";
    optnC.innerHTML = "";    
    return;
}

var flag = 0;
var quesnum = 0;

function showQuestions() {
    dontshowbefore();
    optnC.innerHTML = "Options (click one accordingly) :-"
    let nowques = ques[quesno];
    quesnum = quesno + 1;
    if (quesno != midq){
        quesnum = quesno + 1;
        if (quesnum == midq + 2 && flag == 0){
            flag = 1;
        }
        console.log(flag);
        nextbt.innerHTML = "Next";
        if(quesno >= midq + 1)
        quesele.innerHTML = (quesnum - 1) + " .  " + nowques.question;
        else
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
    else {
        popupques();
        return;
    }
}

var count = 0;
function chco(){
    count++;
    return count;
}

var myarr = []

function selectans(nt){
    const selectbtn = nt.target;
    const itscorrect = selectbtn.dataset.correct === "true";
    if(itscorrect){
        selectbtn.classList.add("correct");
        corrans++;
        chco();
        myarr.push(1);
    }
    else {
        selectbtn.classList.add("incorrect");
        myarr.push(0);
    }
    Array.from(answerbtn.children).forEach(button => {
        button.disabled = true;
    });
    nextbt.style.display = "block";
}

function gotolink() {
    window.location = "RIASEC.html";
}

function predict(r) {

    const mystr = r;
    var binaryString = mystr;

    $.ajax({
        url: "https://model-server-mxrg.onrender.com/" + binaryString,
        type: "GET",
        success: function(response) {
            console.log(response.prediction);
            localStorage.setItem("finalO",response.prediction);
        },
        error: function(error) {
            console.error("Error:", error);
        }
    });
}

function showMarks() {
    dontshowbefore();
    optn.style.display = "none";
    quesele.innerHTML = "Your Choice Test's Over ! Now It's Time To Choose Your Interests.";
    quesele.style.fontSize = "x-large";
    nextbt.innerHTML = "SUBMIT TEST";
    nextbt.style.display = "block";    
    localStorage.setItem("shit",count);
    console.log(myarr);
    let text = myarr.toString();
    var rESULT = text.replaceAll(",", "");
    console.log(rESULT);
    predict(rESULT);
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

function work() {
    if(quesno < ques.length){
        nextBtnWorks();
    }
    else {
        gotolink();
    }   
}

work();

teststart();