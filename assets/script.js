const questionObject = [
  {
    qObject: "What is inheritance?",
    choices: [
      "A class deriving from a superclass and inheriting its methods",
      "A progrmming language",
      "An array",
    ],
    answer: "A",
  },
  {
    qObject: "BSF?",
    choices: [
      "A statement that performs a task",
      "A progrmming language",
      "Algorithym that goes through most common layer first",
    ],
    answer: "C",
  },
  {
    qObject: "What is bianry search?",
    choices: ["A statement that performs a task", "Algorythim ", "An array"],
    answer: "B",
  },
  {
    qObject: "DFS?",
    choices: [
      "A class deriving from a superclass and inheriting its methods",
      "A progrmming language",
      "An array",
    ],
    answer: "A",
  },
  // {
  //   qObject: "What is an array?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A progrmming language",
  //     "A list of stored values and elements",
  //   ],
  //   answer: "C",
  // },
  // {
  //   qObject: "What is a class?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A template for creating objects",
  //     "An array",
  //   ],
  //   answer: "B",
  // },
  // {
  //   qObject: "What is inheritance?",
  //   choices: [
  //     "A class deriving from a superclass and inheriting its methods",
  //     "A progrmming language",
  //     "An array",
  //   ],
  //   answer: "A",
  // },
  // {
  //   qObject: "What is an array?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A progrmming language",
  //     "A list of stored values and elements",
  //   ],
  //   answer: "C",
  // },
  // {
  //   qObject: "What is a class?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A template for creating objects",
  //     "An array",
  //   ],
  //   answer: "B",
  // },
  // {
  //   qObject: "What is inheritance?",
  //   choices: [
  //     "A class deriving from a superclass and inheriting its methods",
  //     "A progrmming language",
  //     "An array",
  //   ],
  //   answer: "A",
  // },
  // {
  //   qObject: "What is an array?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A progrmming language",
  //     "A list of stored values and elements",
  //   ],
  //   answer: "C",
  // },
  // {
  //   qObject: "What is a class?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A template for creating objects",
  //     "An array",
  //   ],
  //   answer: "B",
  // },
  // {
  //   qObject: "What is inheritance?",
  //   choices: [
  //     "A class deriving from a superclass and inheriting its methods",
  //     "A progrmming language",
  //     "An array",
  //   ],
  //   answer: "A",
  // },
  // {
  //   qObject: "What is an array?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A progrmming language",
  //     "A list of stored values and elements",
  //   ],
  //   answer: "C",
  // },
  // {
  //   qObject: "What is a class?",
  //   choices: [
  //     "A statement that performs a task",
  //     "A template for creating objects",
  //     "An array",
  //   ],
  //   answer: "B",
  // },
];

/*Variables 
Time and clock variable  index variable to start question loop at first question and answer set*/
let timeRemaining = questionObject.length * 40;
let index = 0;
let clockId = 0;
let allQuestions = questionObject.length;
let correctAnswers = 3;
let attempts = 0;

//Function that starts the quiz with start quiz button, calls the createQuizQuestions function and starts the timer
$("#submitStartBtn").on("click", runQuestions);
function runQuestions() {
  $("#submitStartBtn").hide();
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
$("#submitEndBtn").hide();
$("#userName").hide();
$("#score").hide();
$("#savedScore").hide();
$("#savedName").hide();

/*Function that is attached to the first html element buttton. Once clicked .show() items are revealed
question object written to html and for loop to loop through questions
*/
function createQuizQuestions() {
  $("#questions").html(questionObject[index].qObject);
  $("#listOptionsId").empty();
  const letterChoice = ["A", "B", "C"];
  for (let i = 0; i < questionObject[index].choices.length; i++) {
    console.log(index);
    $("#listOptionsId").append(` 
        <li class="list-group-item">
        <input class="options" type="checkbox" name="options" value="${
          letterChoice[i]
        }" id="${letterChoice[i].toLowerCase()}">
        <label class="form-check-labela" for="${letterChoice[
          i
        ].toLowerCase()}" id="text_Option_a">${
      questionObject[index].choices[i]
    }</label>
        </li>`);
  }
  $("#listOptionsId").show();
  $("#hiddenQuestions").show();
}

$(document).on("click", "input", function (event) {
  const userChoice = event.target.value;

  console.log(userChoice);
  console.log(event.target);
  if (index < questionObject.length) {
    if (userChoice == questionObject[index].answer) {
      console.log("correct!");
      $(".tally").html("Correct!");
      iterateQuestion();
    } else {
      correctAnswers--;
      console.log("incorrect");
      $(".tally").html("Wrong");
      timeRemaining -= 20;
      iterateQuestion();
    }
  }
});

function iterateQuestion() {
  index++;
  if (index < questionObject.length) {
    createQuizQuestions();
  } else {
    quizComplete();
  }
}

function quizComplete() {
  $("#playerLocal").append(`<div class="clearfix">
  
  `);

  //event target.value is getting the value of my button as true or false because the createQuizQuestions function is still running

  index = 0;
  timeRemaining = questionObject.length * 40;
  let highScore = JSON.parse(localStorage.getItem("#score")) || [];
  for (i = 0; i < highScore.length; i++) {
    $("#savedScore").append(`<div id="displayPastScores">
      <li>${highScore[i]} </li>
      </div>`);
  }
  $(".counter").empty().hide();
  $("#hideCard").empty().hide();
  $("#submitEndBtn").show();
  $("#userName").show();
  $("#score").show();
  $("#savedScore").show();
$("#savedName").show();
}

let highScore = JSON.parse(localStorage.getItem("#score").val()) || [];
let nameStorage = JSON.parse(localStorage.getItem("#userName").val()) || [];
let value = $("#userName").val();
let value2 = $("#score").val();

$("#submitEndBtn").on("click", function (event) {
  event.preventDefault();

  console.log("clicked");
  highScore.push($("#score").val() + "-" + $("#userName").val());
  localStorage.setItem("#score", JSON.stringify(highScore));
  showUserHistory();
  loggedStorage();

  // highScore.push($("#score").val());
  // nameStorage.push($("#userName").val());
  // localStorage.setItem("#score", JSON.stringify(highScore));
  // localStorage.setItem("#userName", JSON.stringify(nameStorage));
  // showUserHistory();
  // showUserName();
  // loggedStorage();
});

function loggedStorage(type, message) {
  $("#displayPastScores").append("#userName");
  $("#displayPastScores").textContent = message;
  $("#displayPastScores").attr("id", type);

  // $("#displayNames").append("#userName");
  // $("#displayNames").textContent = message;
  // $("#displayNames").attr("id", type);
  // $("#displayPastScores").append("#score");
  // $("#displayPastScores").textContent = message;
  // $("#displayPastScores").attr("id", type);
}

function showUserHistory() {
  let highScore = JSON.parse(localStorage.getItem("#score")) || [];
  for (i = 0; i < highScore.length; i++) {
    $("#savedScore").append(`<div id="displayPastScores">
      <li>${highScore[i]} </li>
      </div>`);
  }
}

function showUserName() {
  let highScore = JSON.parse(localStorage.getItem("#userName")) || [];
  for (i = 0; i < highScore.length; i++) {
    $("#savedName").append(`<div id="displayNames">
      <li></li>
      </div>`);
  }

  // let nameStorage = JSON.parse(localStorage.getItem("#userName")) || [];
  // for (i = 0; i < userName.length; i++) {
  //   $("#savedNameId").append(`<div id="displayNames">
  //     <li>${highScore[i]} </li>
  //     </div>`);
  // }
}

$(document).ready(function () {
  console.info("ready");
});
