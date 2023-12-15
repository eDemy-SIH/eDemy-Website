const ques = [
    {
        question : "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case : ",
        answers : [
            {text : "A. 7", correct : false},
            {text : "B. 4", correct : true},
            {text : "C. 9", correct : false},
            {text : "D. 13", correct : false},
        ]
    },
    {
        question : "Which of the following fraction is the largest ?",
        answers : [
            {text : "A. 7/8", correct : true},
            {text : "B. 13/16", correct : false},
            {text : "C. 31/40", correct : false},
            {text : "D. 63/80", correct : false},
        ]
    },
    {
        question : "The least perfect square, which is divisible by each of 21, 36 and 66 is :",
        answers : [
            {text : "A. 213444", correct : true},
            {text : "B. 214344", correct : false},
            {text : "C. 214434", correct : false},
            {text : "D. 231444", correct : false},
        ]
    },
    {
        question : "If 20% of a = b, then b% of 20 is the same as : ",
        answers : [
            {text : "A. 4% of a", correct : true},
            {text : "B. 5% of a", correct : false},
            {text : "C. 20% of a", correct : false},
            {text : "D. None Of The Above", correct : false},
        ]
    },
    {
        question : "If A = x% of y and B = y% of x, then which of the following is true ?",
        answers : [
            {text : "A. A is smaller than B.", correct : false},
            {text : "B. Relationship of A & B can't be defined.", correct : false},
            {text : "C. B is smaller than A", correct : false},
            {text : "D. None Of The Above", correct : true},
        ]
    },
    {
        question : "3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day ? ",
        answers : [
            {text : "A. 9", correct : false},
            {text : "B. 10", correct : false},
            {text : "C. 11", correct : false},
            {text : "D. 12", correct : true},
        ]
    },
    {
        question : "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in :",
        answers : [
            {text : "A. 69 mins", correct : false},
            {text : "B. 108 mins", correct : false},
            {text : "C. 118 mins", correct : true},
            {text : "D. 192 mins", correct : false},
        ]
    },
    {
        question : "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is :",
        answers : [
            {text : "A. 4", correct : false},
            {text : "B. 5", correct : true},
            {text : "C. 6", correct : false},
            {text : "D. 10", correct : false},
        ]
    },
    {
        question : "A man took loan from a bank at the rate of 12% p.a. simple interest. After 3 years he had to pay Rs. 5400 interest only for the period. The principal amount borrowed by him was :",
        answers : [
            {text : "A. 2000", correct : false},
            {text : "B. 10000", correct : false},
            {text : "C. 15000", correct : true},
            {text : "D. 20000", correct : false},
        ]
    },
    {
        question : "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges ?",
        answers : [
            {text : "A. 20", correct : false},
            {text : "B. 24", correct : false},
            {text : "C. 30", correct : true},
            {text : "D. 33", correct : false},
        ]
    },
    {
        question : "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
        answers : [
            {text : "A. 2700", correct : true},
            {text : "B. 2900", correct : false},
            {text : "C. 3000", correct : false},
            {text : "D. 3100", correct : false},
        ]
    },

    {
        question : "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
        answers : [
            {text : "A. 5%", correct : true},
            {text : "B. 8%", correct : false},
            {text : "C. 10%", correct : false},
            {text : "D. No profit, no loss", correct : false},
        ]
    },

    {
        question : "An industrial loom weaves 0.128 metres of cloth every second. Approximately, how many seconds will it take for the loom to weave 25 metres of cloth?",
        answers : [
            {text : "A. 178", correct : false},
            {text : "B. 195", correct : true},
            {text : "C. 204", correct : false},
            {text : "D. 488", correct : false},
        ]
    },

    {
        question : "A takes twice as much time as B or thrice as much time as C to finish a piece of work. Working together, they can finish the work in 2 days. B can do the work alone in:",
        answers : [
            {text : "A. 4 days", correct : false},
            {text : "B. 6 days", correct : true},
            {text : "C. 8 days", correct : false},
            {text : "D. 12 days", correct : false},
        ]
    },

    {
        question : "If log 27 = 1.431, then the value of log 9 is:",
        answers : [
            {text : "A. 0.653", correct : false},
            {text : "B. 0.954", correct : true},
            {text : "C. 0.698", correct : false},
            {text : "D. 0.931", correct : false},
        ]
    },
    {
        question : "In which year of First World War Germany declared war on Russia and France?",
        answers : [
            {text : "A. 1914", correct : true},
            {text : "B. 1915", correct : false},
            {text : "C. 1916", correct : false},
            {text : "D. 1917", correct : false},
        ]
    },
    {
        question : "ICAO stands for",
        answers : [
            {text : "A. International Civil Aviation Organization", correct : true},
            {text : "B. Indian Corporation of Agriculture Organization", correct : false},
            {text : "C. Institute of Company of Accounts Organization", correct : false},
            {text : "D. None Of These", correct : false},
        ]
    },
    {
        question : "India's first Technicolor film ____ in the early 1950s was produced by ____",
        answers : [
            {text : "A. 'Jhansi Ki Rani', Sir Syed Ahmed", correct : false},
            {text : "B. 'Jhansi Ki Rani', Sohrab Modi", correct : true},
            {text : "C. 'Mirza Ghalib', Sohrab Modi", correct : false},
            {text : "D. 'Mirza Ghalib', Munshi Premchand", correct : false},
        ]
    },
    {
        question : "India has largest deposits of ____ in the world.",
        answers : [
            {text : "A. Gold", correct : false},
            {text : "B. Copper", correct : false},
            {text : "C. Mica", correct : true},
            {text : "D. Zinc", correct : false},
        ]
    },
    {
        question : "How many Lok Sabha seats belong to Rajasthan ?",
        answers : [
            {text : "A. 32", correct : false},
            {text : "B. 25", correct : true},
            {text : "C. 30", correct : false},
            {text : "D. 33", correct : false},
        ]
    },
    {
        question : "The industrial organization of Atomic Minerals Division, Heavy Water Board (HWB) is located at",
        answers : [
            {text : "A. Mumbai", correct : true},
            {text : "B. Kolkata", correct : false},
            {text : "C. Hydrabad", correct : false},
            {text : "D. Jadugude", correct : false},
        ]
    },
    {
        question : "The Indian Air Force celebrated its Golden Jubilee in -",
        answers : [
            {text : "A. 1962", correct : false},
            {text : "B. 1976", correct : false},
            {text : "C. 1982", correct : true},
            {text : "D. 1977", correct : false},
        ]
    },
    {
        question : "The chief constituent of gobar gas is -",
        answers : [
            {text : "A. ethane", correct : false},
            {text : "B. methane", correct : true},
            {text : "C. hydrogen", correct : false},
            {text : "D. carbon di oxide", correct : false},
        ]
    },
    {
        question : "The Enron project is a -",
        answers : [
            {text : "A. hydro-electric project", correct : false},
            {text : "B. thermal power project", correct : false},
            {text : "C. atomic power project", correct : false},
            {text : "D. gas-fired power project", correct : true},
        ]
    },
    {
        question : "The chief purpose of crop rotation is to check the loss of top soil -",
        answers : [
            {text : "A. by water erosion", correct : false},
            {text : "B. by wind erosion", correct : false},
            {text : "C. by weathering", correct : false},
            {text : "D. of its mineral content", correct : true},
        ]
    },
    {
        question : "When light passes from air into glass it experiences change of -",
        answers : [
            {text : "A. frequency and wavelength", correct : false},
            {text : "B. frequency and speed", correct : false},
            {text : "C. wavelength and speed", correct : true},
            {text : "D. frequency, wavelength and speed", correct : false},
        ]
    },
    {
        question : "When is the World's Diabetes Day ?",
        answers : [
            {text : "A. 14th November", correct : true},
            {text : "B. 11th December", correct : false},
            {text : "C. 15th October", correct : false},
            {text : "D. 1st July", correct : false},
        ]
    },
    {
        question : "Who Painted 'The Monalisa' -",
        answers : [
            {text : "A. Leonardo Di Caprio", correct : false},
            {text : "B. Leonardo Da Vinci", correct : true},
            {text : "C. Picasso", correct : false},
            {text : "D. Van Gough", correct : false},
        ]
    },
    {
        question : "When is the International Workers' Day ? ",
        answers : [
            {text : "A. 26th Jnauary", correct : false},
            {text : "B. 1st May", correct : true},
            {text : "C. 3rd July", correct : false},
            {text : "D. 5th December", correct : false},
        ]
    },
    {
        question : "Where is the Judicature of Orissa ?",
        answers : [
            {text : "A. Cuttack", correct : true},
            {text : "B. Bhubaneswar", correct : false},
            {text : "C. Both", correct : false},
            {text : "D. None Of These", correct : false},
        ]
    },
    {
        question : "A, P, R, X, S and Z are sitting in a row. S and Z are in the centre. A and P are at the ends. R is sitting to the left of A. Who is to the right of P ?",
        answers : [
            {text : "A. A", correct : false},
            {text : "B. X", correct : true},
            {text : "C. S", correct : false},
            {text : "D. Z", correct : false},
        ]
    },

    {
        question : "A, B, C, D and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. A and C are sitting together. In which position A is sitting ?",
        answers : [
            {text : "A. Between B and D", correct : false},
            {text : "B. Between B and C", correct : true},
            {text : "C. Between E and D", correct : false},
            {text : "D. Between C and E", correct : false},
        ]
    },

    {
        question : "Choose the correct alternative that will continue the same pattern and replace the question mark in the given series: 120, 99, 80, 63, 48, ?",
        answers : [
            {text : "A. 35", correct : true},
            {text : "B. 38", correct : false},
            {text : "C. 39", correct : false},
            {text : "D. 40", correct : false},
        ]
    },

    {
        question : "Choose the correct alternative that will continue the same pattern and replace the question mark in the given series: 589654237, 89654237, 8965423, 965423, ?",
        answers : [
            {text : "A. 58965", correct : false},
            {text : "B. 65423", correct : false},
            {text : "C. 89654", correct : false},
            {text : "D. 96542", correct : true},
        ]
    },

    {
        question : "Choose the correct alternative that will continue the same pattern and replace the question mark in the given series: 3, 10, 101,?",
        answers : [
            {text : "A. 10101", correct : false},
            {text : "B. 10201", correct : false},
            {text : "C. 10202", correct : true},
            {text : "D. 11012", correct : false},
        ]
    },
    
    {
        question : "One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
        answers : [
            {text : "A. East", correct : false},
            {text : "B. West", correct : false},
            {text : "C. North", correct : true},
            {text : "D. South", correct : false},
        ]
    },

    {
        question : "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
        answers : [
            {text : "A. North", correct : false},
            {text : "B. South", correct : false},
            {text : "C. South-East", correct : false},
            {text : "D. None of these", correct : true},
        ]
    },

    {
        question : "If South-East becomes North, North-East becomes West and so on. What will West become?",
        answers : [
            {text : "A. North-East", correct : false},
            {text : "B. North-West", correct : false},
            {text : "C. South-East", correct : true},
            {text : "D. South-West", correct : false},
        ]
    },

    {
        question : "Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M. ?",
        answers : [
            {text : "A. South-East", correct : false},
            {text : "B. West", correct : true},
            {text : "C. North", correct : false},
            {text : "D. South", correct : false},
        ]
    },

    {
        question : "A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
        answers : [
            {text : "A. North-East", correct : false},
            {text : "B. West", correct : false},
            {text : "C. South-West", correct : true},
            {text : "D. South", correct : false},
        ]
    },

    {
        question : "Find out the alternative which will replace the question mark: CUP : LIP :: BIRD : ?",
        answers : [
            {text : "A. BUSH", correct : false},
            {text : "B. GRASS", correct : false},
            {text : "C. BEAK", correct : true},
            {text : "D. FOREST", correct : false},
        ]
    },

    {
        question : "Find out the alternative which will replace the question mark: Flow : River :: Stagnant : ?",
        answers : [
            {text : "A. Rain", correct : false},
            {text : "B. Stream", correct : false},
            {text : "C. Pool", correct : true},
            {text : "D. Canal", correct : false},
        ]
    },

    {
        question : "Find out the alternative which will replace the question mark: Paw : Cat :: Hoof : ?",
        answers : [
            {text : "A. Lamb", correct : false},
            {text : "B. Elephant", correct : false},
            {text : "C. Lion", correct : false},
            {text : "D. Horse", correct : true},
        ]
    },

    {
        question : "Find out the alternative which will replace the question mark: Ornithologist : Bird :: Archaeologist : ?",
        answers : [
            {text : "A. Islands", correct : false},
            {text : "B. Mediators", correct : false},
            {text : "C. Archaeology", correct : true},
            {text : "D. Aquatic", correct : false},
        ]
    },

    {
        question : "Find out the alternative which will replace the question mark: Peacock : India :: Bear : ?",
        answers : [
            {text : "A. Australia", correct : false},
            {text : "B. America", correct : false},
            {text : "C. Russia", correct : true},
            {text : "D. England", correct : false},
        ]
    },
];
console.log(ques.length);
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
    nextbt.innerHTML = "Return To Home";
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
        window.location = "index.html";
    }
});

teststart();