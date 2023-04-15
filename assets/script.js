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
let timeRemaining = questionObject.length * 15;
let index = 0;
let objectQuestions = {};
let clockId = 0;
$("#submitStartBtn").on("click", runQuestions);
function runQuestions() {
  createQuizQuestions();
  clockId = setInterval(startTimer, 1000);
}

function startTimer() {
  $(".counter").html(timeRemaining--);
}

//Calling current question out of the createQuestions function
let currentQuestion = {};
$("#hiddenQuestions").hide();
//Creating function that is attached to the first html element buttton. Once clicked .show() items are hidden
function createQuizQuestions() {
  $("#questions").html(questionObject[index].qObject);
  $("#listOptionsId").empty();
  for (let i = 0; i < questionObject[index].choices.length; i++) {
    $("#listOptionsId").append(` <li class="list-group-item text-bg-warning">
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

$(document).ready(function () {
  console.info("ready");
});

//Another function to add the players name after the game
let playerInputName = "";

//how to add this to the click of the last call to questions
function enterPlayerName() {
  playerInputName.name = $("#playerName").val();
  $("#cardBody").hide();
}

// $("#submitOptionBtn");
// "#revealDivId"
// "#submitStartBtn"
// "#hiddenQuestions"
// "#submitOptionBtn"
