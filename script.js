var quizData = [
    {
        question : "Which language runs in a web browser",
        a : "Java",
        b : "C",
        c : "Python",
        d : "Js",
        correct : "d",
    },
    {
        question : "What does css stand for?",
        a : "Central Style Sheet",
        b : "Cascading Style Sheet",
        c : "Cascading Simple Sheets",
        d : "Cars SUVs Sailboats",
        correct : "b",
    },
    {
        question : "What does Html stand for?",
        a : "HyperText Markup language",
        b : "HyperText Markdown language",
        c: "Hyperloop Machine language",
        d: "Helicopters Terminals Motorboats Lamborgies",
        correct : "a",
    },
];

var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

 function loadQuiz(){
    deselectanswer()

     var currentQuizData = quizData[currentQuiz]
     questionEl.innerText = currentQuizData.question
     a_text.innerText = currentQuizData.a
     b_text.innerText = currentQuizData.b
     c_text.innerText = currentQuizData.c
     d_text.innerText = currentQuizData.d
 }

 function deselectanswer(){
     answerEls.forEach(answerEls => answerEls.checked = false)
 }

 function getselected(){
     let answer

     answerEls.forEach(answerEls => {
         if(answerEls.checked){
             answer = answerEls.id
         }
     })
 
     return answer
 }

 submitBtn.addEventListener('click', () => {
     var answer = getselected()
     
     if(answer){
         if(answer === quizData[currentQuiz].correct){
            score++
         }

         currentQuiz++

         if(currentQuiz < quizData.length){
             loadQuiz()
         }else{
             quiz.innerHTML = `
             <h2>Your answer is corrent at ${score}/ ${quizData.length} question</h2>
            <button onclick="location.reload()"> Reload</button>
             `
         }
     }
 })