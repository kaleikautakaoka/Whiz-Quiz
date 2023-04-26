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
  const letterChoice = ["A", "B", "C"]
  for (let i = 0; i < questionObject[index].choices.length; i++) {
    /*What am I doing you ask? I took this li class with the input and label and brought it into the javascript to be revealed once the start button function is clicked*/
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
      <span id="userName" class="input-group-text"></span>
      <input type="text" class="form-control" placeholder="Score" aria-label="Server"  id="score">
      <span id="score" class="input-group-text"></span>
      </div>
      <div id="displayPastScores"></div>
      <button id="addBtn" type="button" class="btn btn-warning">Submit Score</button>
      </div>
      </div>`);
  // });
}

//make sure my input is going into correct textbox tag
let highScore = [];
let userName = [];

//Local Storage
$(document).on("click", "#addBtn", function (e) {
  e.preventDefault();
  console.log("clicked");
    highScore.push($("#userName").val() + "-" + timeRemaining);
    localStorage.setItem("score", JSON.stringify(highScore));
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

