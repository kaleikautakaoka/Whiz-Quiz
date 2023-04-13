const quizForm = document.querySelector('.quiz-form');
const aBox = document.getElementById('checkbox1');
const bBox = document.getElementById('checkbox2');
const cBox = document.getElementById('checkbox3');
const aOption = document.getElementById('form-check-labela');
const bOption = document.getElementById('form-check-labelb');
const cOption = document.getElementById('form-check-labelc');
let questions = document.getElementById('questions');
const submitButton = document.getElementById('submitbtn');
const allFormAnswers = document.querySelectorAll('form-check-input');
// questions.append(qAndAObject.question[0]);


const qAndAObject = [
    { question : "What is a function?",
     options : [
    { a: "A statement that performs a task"}, 
    { b: "A progrmming language"}, 
    { c: "An array"}, ],
    answer : a,
},
    { question : 'What is an array?',
     options : [
    { a: "A statement that performs a task"}, 
    { b: "A progrmming language"}, 
    { c: "A list of stored values and elements"}, ], 
    answer : c,
},
    { question : 'What is a class?',
     options : [
    { a: "A statement that performs a task"}, 
    { b: "A template for creating objects"}, 
    { c: "An array"}, ],
    answer : b,
},
];

beginQuiz()
quizForm.addEventListener('submit', e=> {
    e.preventDefault();
    // console.log(firstCheckBox.value)
//    console.log(questions.append(qAndAObject.question[0]))
   let qDisplayed = 0; 
   let score = 0;

   function beginQuiz(){
    uncheckBox()
   let displayedQ = qAndAObject[qDisplayed]
   questions.innerText = displayedQ.question
   aOption.innerText = displayedQ.a
   bOption.innerText = displayedQ.b
   cOption.innerText = displayedQ.c

// questions.appendChild(qAndAObject.question[0])
// for(i = 0; i < qAndAObject.question.length; i++) {
//     console.log(questions)
}

}


);

function uncheckBox() {
allFormAnswers.forEach(allFormAnswers => allFormAnswers.checked = false)
}     

submitButton.addEventListener('click', ()=> {
    let 
})