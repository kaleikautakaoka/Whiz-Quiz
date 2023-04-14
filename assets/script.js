//Quiz Question, options, and answer object
const questionObject = [
  {
    qObject: "What is a function?",
    one: "A statement that performs a task",
    two: "A progrmming language",
    three: "An array",
    answer: "a",
  },
  {
    qObject: "What is an array?",
    one: "A statement that performs a task",
    two: "A progrmming language",
    three: "A list of stored values and elements",
    answer: "c",
  },
  {
    qObject: "What is a class?",
    one: "A statement that performs a task",
    two: "A template for creating objects",
    three: "An array",
    answer: "b",
  },
];

//Calling current question out of the createQuestions function
let currentQuestion = {};

//Creating function that is attached to the first html element buttton. Once clicked .show() items are hidden
function createQuizQuestions() {
    $("#questions").html(currentQuestion.name);
    $("#listOptionsId").show();
    $("#hiddenQuestions").show();
};

$(document).ready(function () {
    console.info("ready");
});

//Another function to add the players name after the game
let playerInputName =

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