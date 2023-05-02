//Quiz Question, options, and answer object
const questionObject = [
  {
    qObject: "What is a function?",
    choices: [
      "A statement that performs a task",
      "A progrmming language",
      "An array",
    ],
    answer: "A",
  },
  {
    qObject: "What is an array?",
    choices: [
      "A statement that performs a task",
      "A progrmming language",
      "A list of stored values and elements",
    ],
    answer: "C",
  },
  {
    qObject: "What is a class?",
    choices: [
      "A statement that performs a task",
      "A template for creating objects",
      "An array",
    ],
    answer: "B",
  },
];

/*Variables 
Time and clock variable  index variable to start question loop at first question and answer set*/
let timeRemaining = questionObject.length * 40;
let index = 0;
let clockId = 0;
let allQuestions = questionObject.length;
let correctAnswers = 3;
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
  const letterChoice = ["A", "B", "C"]
  for (let i = 0; i < questionObject[index].choices.length; i++) {
    console.log(index);
    $("#listOptionsId").append(` 
        <li class="list-group-item text-bg-warning">
        <input class="options" type="checkbox" name="options" value="${letterChoice[i]}" id="${letterChoice[i].toLowerCase()}">
        <label class="form-check-labela" for="${letterChoice[i].toLowerCase()}" id="text_Option_a">${questionObject[index].choices[i]}</label>
        </li>`);
  }
  $("#listOptionsId").show();
  $("#hiddenQuestions").show();
}
$(document).on("click", "input", function (event) {
  const userChoice = event.target.value

  console.log(userChoice)
  console.log(event.target)
  if (index < questionObject.length) {
    
    if (userChoice == questionObject[index].answer) {
      console.log("correct!");
      $(".tally").html("Correct!");
      iterateQuestion()
    } else {
      correctAnswers--;
      console.log("incorrect");
      $(".tally").html("Wrong");
      timeRemaining -= 20
      iterateQuestion()
    }
  }
  
  
})
function iterateQuestion() {
  index++;
  if (index < questionObject.length) { 
    createQuizQuestions();
  } else {
    quizComplete();
  }
}


//function to stop quiz and display new information
// quizComplete();
function quizComplete() {
  // $("#submitOptionBtn").on("click", function () {
  clearInterval(clockId);
  $(".counter").empty();
  $("#questions").empty();
  $("#listOptionsId").empty();
  $("#playerLocal").append(`<div class="clearfix">
      <div class="card">
      <h2>Your Name</h2>
      <form method="POST">
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" id="userName">
      
      <input type="text" class="form-control" placeholder="Score" aria-label="Server"  id="score">
      <span id="score" class="input-group-text"></span>
      </div>
      <div id="displayPastScores">
      <ul class"savedScore" id="savedScore">
      </ul>
      </div>
      <button id="addBtn" type="button" class="btn btn-warning">Submit Score</button>
      </div>
      </div>`);
  index = 0;
  timeRemaining = questionObject.length * 40;
  let highScore = JSON.parse(localStorage.getItem("#score")) || [];
  for (i = 0; i < highScore.length; i++){
    $("#savedScore").append(`<div id="displayPastScores">
      <li>${highScore[i]} </li>
      </div>`);
  }
}

let highScore = JSON.parse(localStorage.getItem("#score")) || [];
let name = [];

//Local Storage
$(document).on("click", "#addBtn", function (e) {
  e.preventDefault();
  console.log("clicked");
  highScore.push($("#score").val() + "-" + $("#userName").val());
  localStorage.setItem("#score", JSON.stringify(highScore));
  // userName.push($("#userName").val() + "-" );
  // localStorage.setItem("#userName", JSON.stringify($("#userName")));
  showUserHistory();
  loggedStorage();
})

function loggedStorage(type, message) {
  $("#displayPastScores").append("#userName");
  $("#displayPastScores").textContent = message;
  $("#displayPastScores").attr("id", type);
}

function showUserHistory() {
  let highScore = JSON.parse(localStorage.getItem("#score")) || [];
  for (i = 0; i < highScore.length; i++) {
    $("#savedScore").append(`<div id="displayPastScores">
      <li>${highScore[i]} </li>
      </div>`);
  }
}

$(document).ready(function () {
  console.info("ready");
});

