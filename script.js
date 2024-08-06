const questions = [
{
    question: "Who is the prettiest ?",
    answer: [
        {text:"Razane",correct: true},
        {text:"me",correct: false},
        {text:"ur mum",correct: false},
        {text:"NOONE!!",correct: false}
    ]
},
{
    question: "Who is the dumbest ?",
    answer: [
        {text:"Razane",correct: false},
        {text:"me",correct: true},
        {text:"ur mum",correct: false},
        {text:"NOone!!",correct: false}
    ]
},
{
    question: "Who is the smartest?",
    answer: [
        {text:"Razane",correct: true},
        {text:"me",correct: false},
        {text:"ur mum",correct: false},
        {text:"NOone!!",correct: false}
    ]
},
{
    question: "Who is the TALLEST?",
    answer: [
        {text:"Razane",correct: false},
        {text:"me",correct: true},
        {text:"ur mum",correct: false},
        {text:"NOone!!",correct: false}
    ]
}
];
let qfield = document.getElementById("q");
let ans = document.getElementById("btns");
let next = document.getElementById("n");
currentindex = 0;
score = 0;  

function ini(){
    currentindex = 0;
    score = 0;  
    next.innerHTML = "Next";
    showquestions();
}
ini();
function showquestions(){
    reset();
    let currentq= questions[currentindex];
    let n = currentindex + 1;
    qfield.innerHTML = n + ". " + currentq.question; 
    currentq.answer.forEach(answer => {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        ans.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",checkCorrect);
    });
   
   
}
function reset(){
    n.style.display = "none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
}
function handlenextevent(){
    currentindex++;
    if(currentindex <= questions.length){
        showquestions();
    }else{
        showscore();
    }
}
function showscore(){
    reset();
    qfield.innerHTML = `your score is ${score}`;
    next.innerHTML = "Try again";
    next.style.display = "block";
    next.addEventListener("click",() =>{
        ini();
    });
}

function checkCorrect(btn){
   const targett = btn.target;
   const isCorrect = targett.dataset.correct === "true";
   if(isCorrect){
    targett.classList.add("correct");
    score++;
   }else{
    targett.classList.add("incorrect");
   }
   Array.from(ans.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = "true";
    n.style.display = "block";
   })
   n.addEventListener("click",() =>{
    if(currentindex <= questions.length){
        handlenextevent();
    }else{
      //ini();
    }
   })
}
