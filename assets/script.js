const quizForm = document.querySelector('.quiz-form');
const a = document.getElementById('checkbox1');
const b = document.getElementById('checkbox2');
const c = document.getElementById('checkbox3');
let questions = document.getElementById('questions');
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


quizForm.addEventListener('submit', e=> {
    e.preventDefault();
    // console.log(firstCheckBox.value)
//    console.log(questions.append(qAndAObject.question[0]))
   let score ="0";
questions.appendChild(qAndAObject.question[0])
for(i = 0; i < qAndAObject.question.length; i++) {
    console.log(questions)
}
  

});