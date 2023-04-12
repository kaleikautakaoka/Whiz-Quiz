//create get element by ID variables to target html elements in javascript
var startBtn = $('#submit-btn');
var timerNumber = $('#timer-btn');

startBtn.on('click', function () {
    var random = Math.floor(Math.random() * 1000) + 1000;
    console.log(random);
    timerNumber.text(random);
});