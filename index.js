var countDown;
var timerInterval;
var arrayOfQuestions;
const maxTime = 5 * 60; //Time is in seconds
function setCountDownTimer(){
    countDownTimer = maxTime;
}

//when person clicks the begin button timer start
//Start time
function startTimer(){
timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer(){
    countDownTimer--;
    showTimer();
}

function showTimer() {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
}

function showScoreBoard() {
    let scoreBoard =document.getElementById('score-board');
    //scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.remove('hide');
}

//question is asked
function SetupQuestions(){
    console.log("SetupQuestions started")
    let question1 = {
        id: "quest0",
        question: "To select elemnts with a specific class",
        answer1: "Text",
        answer2: "Text",
        answer3: "Text",
        answer4: "Text",
        correctAnswer: 2
    };

    let question2 = {
        id: "quest1",
        question: "To select elemnts with a specific class",
        answer1: "yes",
        answer2: "no",
        answer3: "null",
        answer4: "null",
        correctAnswer: 1
    };

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions)

}

function nextQuestions() {
    for(let i = 0; i<arrayOfQuestions.length; i++) {
    
    }
}

function showQuestion(questionindex) {
    let questionSection = document.getElementById('question');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionindex].id;
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild()
}

function doGame() {
    setCountDownTimer();
    startTimer();
}


// if questio is correct next question
// if question is incorrect time penalty
// if answer is correct show points and then go to the next question
// Once all questions have been answered give options
//After answer questions ask to put on leaderboards 
// If user chpooses to save score show the scoreboard
