//Quiz Question, options, and answer object
const questionObject = [
  {
    qObject: "What is a function?",
    choices: [
      "A statement that performs a task",
      "A progrmming language",
      "An array",
    ],
    answer: "a",
  },
  {
    qObject: "What is an array?",
    choices: [
      "A statement that performs a task",
      "A progrmming language",
      "A list of stored values and elements",
    ],
    answer: "c",
  },
  {
    qObject: "What is a class?",
    choices: [
      "A statement that performs a task",
      "A template for creating objects",
      "An array",
    ],
    answer: "b",
  },
];

/*Variables 
Time and clock variable  index variable to start question loop at first question and answer set*/
let timeRemaining = questionObject.length * 5;
let index = 0;
let clockId = 0;
let allQuestions = questionObject.length;
let correctAnswers = 0;
let attempts = 0;
// const stopQuiz = $("#counterDiv")

//Function that starts the quiz with start quiz button, calls the createQuizQuestions function and starts the timer
$("#submitStartBtn").on("click", runQuestions);
function runQuestions() {
  createQuizQuestions();
  clockId = setInterval(startTimer, 1000);
}

//Function that starts timer for quiz
function startTimer() {
  $(".counter").html(timeRemaining--);
  if (timeRemaining === -1) {
    clearInterval(clockId);
    quizComplete();
  }
}

//Calling current question out of the createQuizQuestions function
let currentQuestion = {};

//Function that hides questions div until ready
$("#hiddenQuestions").hide();

/*Function that is attached to the first html element buttton. Once clicked .show() items are revealed
question object written to html and for loop to loop through questions
*/
function createQuizQuestions() {
  $("#questions").html(questionObject[index].qObject);
  $("#listOptionsId").empty();
  for (let i = 0; i < questionObject[index].choices.length; i++) {
    /*What am I doing you ask? I took this li class with the input and label and brought it into the javascript to be revealed once the start button function is clicked*/
    $("#listOptionsId").append(` 
        <li class="list-group-item text-bg-warning">
        <input class="options" type="checkbox" name="options" value="A" id="a">
        <label class="form-check-labela" for="a" id="text_Option_a">${questionObject[index].choices[i]}</label>
        </li>`);
  }
  $(".options").on("click", function () {
    index++;
    createQuizQuestions();
  });
  $("#listOptionsId").show();
  $("#hiddenQuestions").show();
}


//function to stop quiz and display new information
quizComplete();
function quizComplete() {
    $("#submitOptionBtn").on("click", function () {
    clearInterval(clockId);
    $(".counter").empty();
    $("#questions").empty();
    $("#listOptionsId").empty();
    $("#playerLocal").append(`<div class="clearfix">
      <div class="card">
      <h2>Your Name</h2>
      <form method="POST">
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Username" aria-label="Username">
      <span id="userName" class="input-group-text"></span>
      <input type="text" class="form-control" placeholder="Score" aria-label="Server">
      <span id="score" class="input-group-text"></span>
      </div>
      <div id="displayPastScores"></div>
      <button id="addBtn" type="button" class="btn btn-warning">Submit Score</button>
      </div>
      </div>`);
    });
}

let name = $("#userName").value;
let score = $("#score").value;
showUserHistory();

//Local Storage
$("#playerLocal").on("click", "#addBtn", function (e) {
  e.preventDefault();
  console.log("clicked");
  
  if (name === "" || score === "") {
    loggedStorage("error", "Please add your name and score");
  } else {
    loggedStorage("success", "Great Work");
    
    $("#userName").text = name;
    $("#score").text = score;
  }
  
  localStorage.setItem("name", name);
  localStorage.setItem("score", score);
  showUserHistory();
  loggedStorage();
})

function loggedStorage(type, message) {
  $("displayPastScores").append(name);
  $("displayPastScores").textContent = message;
  $("displayPastScores").attr("id", type);
}

function showUserHistory() {
  let name = localStorage.getItem("name");
  let score = localStorage.getItem("score");
}


$(document).ready(function () {
  console.info("ready");
});
