var questioncontainer = document.getElementById("questions")
var answers = document.getElementById("answers")
var startbutton = document.getElementById("startbutton")
var quiztimercontainer = document.querySelector("#quiztimer")
var timertick = 60
var time
var questionNumber = 0
var qtitle = document.getElementById("qTitle")
var quizquestions = [
    {
        titlequestion: "What does CSS stand for?",
        choices: ["1. choice stand short", "2. cat short sit", "3. cascading style sheets"],
        answer: "3. cascading style sheets"

    },

    {
        titlequestion: "What is an Array?",
        choices: ["1. a type of flower", "2. a collection of items stored at contiguous memory locations", "3. data structure that contains a set of ordered pairs"],
        answer: "2. a collection of items stored at contiguous memory locations"

    },

    {
        titlequestion: " What does html stand for?",
        choices: ["1. Hyper test Markup language", "2. High text markup line", "3. Hyper Text Media Language"],
        answer: "1. Hyper test Markup language"
    },

    {
        titlequestion: " Which programming language is commonly used for web development?",
        choices: ["1.MySql", "2. JavaScript", "3. C++"],
        answer: "2. JavaScript"
    },

    {
        titlequestion: " Which command is used to initialize a new Git repository?",
        choices: ["1. git add", "2. git clone", "3. git init"],
        answer: "3. git init"
    },

    {
        titlequestion: " What is the purpose of a for loop in programming?",
        choices: ["1. to loop around a word", "2. To define a function", "3.  To perform a task repeatedly"],
        answer: "3.  To perform a task repeatedly"
    },

    {
        titlequestion: " Which of the following is not a programming paradigm?",
        choices: ["1.  Sequential Programming", "2. Procedural Programming", "3.  Object-Oriented Programming"],
        answer: "1.  Sequential Programming"
    },

    {
        titlequestion: " Which of the following is not a data type in JavaScript?",
        choices: ["1. Number", "2. Boolean", "3. Integer"],
        answer: "3.  Integer"
    },

    {
        titlequestion: " What does the acronym API stand for? ",
        choices: ["1. Application Programming Interface", "2. Advanced Programming Interface", "3. Advanced Protocol Interface"],
        answer: "1. Application Programming Interface"
    },

    {
        titlequestion: " Which of the following is not prgramming language? ",
        choices: ["1. Java", "2. CSS", "3. Python"],
        answer: "2. CSS"
    },
]

// begin function to start quiz 
function beginQuiz() {
    startTimer()
    putquestion()
}
// begin function for timer
function startTimer() {
    time = setInterval(function () {
        timertick--
        quiztimercontainer.textContent = timertick
        if (timertick === 0) {
            clearInterval(time)
            //start losing function

        }
    }, 1000)
}
//start function to grab questions 
function putquestion() {
    var currentQuestion = quizquestions[questionNumber]
    qtitle.textContent = currentQuestion.titlequestion
    answers.innerHTML = ""

    // begin loop to grab choices 
    currentQuestion.choices.forEach(function (choice, i) {
        var buttonchoice = document.createElement("button")
        buttonchoice.setAttribute("value", choice)
        buttonchoice.textContent = choice


        buttonchoice.addEventListener("click", function (event) {
            event.preventDefault()
            console.log(event.target.innerHTML)
            if (event.target.innerHTML === currentQuestion.answer) {
                alert("correct answer")
                questionNumber = questionNumber + 1
                putquestion()
            } else {
                alert("incorrect answer")
                questionNumber = questionNumber + 1
                putquestion()
            }
        })
        answers.appendChild(buttonchoice)
    })
}


startbutton.addEventListener("click", beginQuiz)
