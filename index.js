questionArr = [
    {
        question: "Who is the most famous personality?",
        a:"Donald Trump",
        b:"Narendre Modi",
        c:"Christiano Ronaldo",
        d:"Selena Gomez",
        answer:1
    },
    {
        question: "What you believe in the most?",
        a:"Yoga",
        b:"Dad",
        c:"Mom",
        d:"Yourself",
        answer:3
    },
    {
        question: "Which is the highly paid profession?",
        a:"Software Engineer",
        b:"Sales Guy",
        c:"IAS Officer",
        d:"Data Scientist",
        answer:3
    },
    {
        question: "Which is the safest pet to keep?",
        a:"Dog",
        b:"Cat",
        c:"Boyfriend",
        d:"Cat",
        answer:2
    },
    {
        question: "Who the fuck you think you are?",
        a:"Your Own Boss",
        b:"Bahubali",
        c:"Superman",
        d:"B**8 S***",
        answer:0
    },
    {
        question: "Who the fuck you think you are?",
        a:"Your Own Boss",
        b:"Bahubali",
        c:"Superman",
        d:"B**8 S***",
        answer:0
    },
    {
        question: "Who the fuck you think you are?",
        a:"Your Own Boss",
        b:"Bahubali",
        c:"Superman",
        d:"B**8 S***",
        answer:0
    },
    {
        question: "Who the fuck you think you are?",
        a:"Your Own Boss",
        b:"Bahubali",
        c:"Superman",
        d:"B**8 S***",
        answer:0
    }
]

const question = document.getElementById('question');
const optionA = document.getElementById('a_text');
const optionB = document.getElementById('b_text');
const optionC = document.getElementById('c_text');
const optionD = document.getElementById('d_text');
const submit = document.getElementById('submit');
const userResponse = document.getElementsByName('options');
const allOptions = document.getElementById("all-options");


//console.log("I fucking exist!!!");

let quizQuestion = 0;
let totalScore = 0;
let currentQuestion;

loadQuiz();

function loadQuiz() {
    currentQuestion = questionArr[quizQuestion];
    question.innerHTML = currentQuestion['question'];
    optionA.innerHTML = currentQuestion['a'];
    optionB.innerHTML = currentQuestion['b'];
    optionC.innerHTML = currentQuestion['c'];
    optionD.innerHTML = currentQuestion['d'];
};


submit.addEventListener('click', () => {
    if (quizQuestion < 4) {
        quizQuestion++;
        loadQuiz();    
        if (userResponse[currentQuestion['answer']]) {
            totalScore++;
        }
    } else {
        question.innerHTML = `<h1>Your score is ${totalScore}. </h1>`;
        allOptions.remove();
        submit.value = "Start Again";
        submit.addEventListener('click', ()=>{ location.reload()});
    }
    
})