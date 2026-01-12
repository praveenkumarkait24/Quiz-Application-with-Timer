const questions = [
    { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], correct: 1 },
    { q: "Solve for x: 3x - 7 = 11", options: ["4", "5", "6", "7"], correct: 2 },
    { q: "Square root of 225?", options: ["13", "14", "15", "16"], correct: 2 },
    { q: "How many degrees in a right angle?", options: ["45°", "90°", "180°", "360°"], correct: 1 },
    { q: "Value of (8 × 3) ÷ 4 + 2?", options: ["6", "8", "10", "12"], correct: 1 }
];

let currentIndex = 0, score = 0, timer, timeLeft = 15, userAnswers = [];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-section');
const optionsBox = document.getElementById("options-container");
const scoreDisplay = document.getElementById("current-score");

document.getElementById('start-btn').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    if (currentIndex >= questions.length) return showResults();
    
    const currentQ = questions[currentIndex];
    document.getElementById("question-text").innerText = currentQ.q;
    document.getElementById("progress").style.width = `${(currentIndex / questions.length) * 100}%`;
    
    optionsBox.innerHTML = "";
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(index);
        optionsBox.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("time-left").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        if (timeLeft <= 0) selectAnswer(-1);
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const correctIndex = questions[currentIndex].correct;
    userAnswers.push(selectedIndex);

    if (selectedIndex === correctIndex) {
        score += 1.0;
    } else {
        score -= 0.25;
    }
    
    // Remove trailing zeros logic
    scoreDisplay.innerText = parseFloat(score.toFixed(2));

    Array.from(optionsBox.children).forEach((btn, i) => {
        if (i === correctIndex) {
            btn.style.background = "#d1fae5";
            btn.style.borderColor = "#10b981";
            btn.style.color = "#065f46";
        } else if (i === selectedIndex) {
            btn.style.background = "#fee2e2";
            btn.style.borderColor = "#ef4444";
            btn.style.color = "#991b1b";
        }
        btn.disabled = true;
    });

    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1200);
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Remove trailing zeros for final display
    document.getElementById("final-score-text").innerText = parseFloat(score.toFixed(2));
    
    const review = document.getElementById("review-container");
    review.innerHTML = "";
    questions.forEach((q, i) => {
        const status = userAnswers[i] === q.correct ? "✅" : "❌";
        review.innerHTML += `<div class="review-item">${status} ${q.q} - <strong>${q.options[q.correct]}</strong></div>`;
    });
}

function restartQuiz() {
    location.reload(); 
}