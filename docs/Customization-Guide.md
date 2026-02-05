# 🎨 Customization Guide

Learn how to customize Math Master Quiz to fit your needs. Add questions, change styling, modify timing, and more!

## 📝 Adding or Modifying Questions

### Question Structure

Each question follows this format:

```javascript
{
    q: "Question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 2  // Index of correct answer (0-3)
}
```

### Adding New Questions

**Location**: `script.js`, line 1

**Steps**:

1. Open `script.js` in a text editor
2. Find the `questions` array
3. Add your question using the format above

**Example - Adding a 6th Question**:

```javascript
const questions = [
    { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], correct: 1 },
    { q: "Solve for x: 3x - 7 = 11", options: ["4", "5", "6", "7"], correct: 2 },
    { q: "Square root of 225?", options: ["13", "14", "15", "16"], correct: 2 },
    { q: "How many degrees in a right angle?", options: ["45°", "90°", "180°", "360°"], correct: 1 },
    { q: "Value of (8 × 3) ÷ 4 + 2?", options: ["6", "8", "10", "12"], correct: 1 },
    // NEW QUESTION
    { q: "What is 12 × 12?", options: ["120", "124", "144", "164"], correct: 2 }
];
```

### Modifying Existing Questions

**Simply edit the text**:

```javascript
// Before
{ q: "Square root of 225?", options: ["13", "14", "15", "16"], correct: 2 }

// After
{ q: "What is the square root of 225?", options: ["13", "14", "15", "16"], correct: 2 }
```

### Best Practices for Questions

✅ **Do**:
- Keep questions concise and clear
- Ensure one correct answer only
- Make all 4 options plausible
- Test difficulty level appropriately
- Use consistent formatting

❌ **Don't**:
- Create trick questions
- Use ambiguous wording
- Have multiple correct answers
- Make options too obvious
- Exceed reasonable length

---

## ⏱️ Customizing Timer Duration

### Change Time Limit

**Location**: `script.js`, line 44

**Default**: 15 seconds

**To Change**:

```javascript
// Before
timeLeft = 15;

// After - 30 second timer
timeLeft = 30;
```

**Also update the initial value** (line 9):

```javascript
// Before
let currentIndex = 0, score = 0, timer, timeLeft = 15, userAnswers = [];

// After
let currentIndex = 0, score = 0, timer, timeLeft = 30, userAnswers = [];
```

### Disable Timer

To remove time pressure:

```javascript
// Comment out the timeout check in startTimer()
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("time-left").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        // Comment out this line:
        // if (timeLeft <= 0) selectAnswer(-1);
    }, 1000);
}
```

Or increase to a very high number (e.g., 999 seconds).

---

## 🎯 Modifying Scoring System

### Change Point Values

**Location**: `script.js`, lines 59-62

**Default**:
- Correct: +1.0
- Wrong: -0.25

**To Change**:

```javascript
// Before
if (selectedIndex === correctIndex) {
    score += 1.0;
} else {
    score -= 0.25;
}

// After - Custom scoring
if (selectedIndex === correctIndex) {
    score += 10;  // 10 points for correct
} else {
    score -= 5;   // -5 points for wrong
}
```

### Remove Negative Scoring

```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;
} else {
    score += 0;  // No penalty
}
```

### Time-Based Bonus

Add bonus points for quick answers:

```javascript
if (selectedIndex === correctIndex) {
    let basePoints = 1.0;
    let timeBonus = timeLeft * 0.1;  // Bonus for remaining time
    score += (basePoints + timeBonus);
} else {
    score -= 0.25;
}
```

---

## 🎨 Changing Colors and Styling

### Color Theme

**Location**: `style.css`, lines 1-8

**Default (Purple Theme)**:

```css
:root {
    --primary: #4f46e5;
    --primary-dark: #3730a3;
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --white: #ffffff;
    --success: #10b981;
    --error: #ef4444;
}
```

### Example Themes

**Blue Theme**:
```css
:root {
    --primary: #2563eb;
    --primary-dark: #1e40af;
    --bg-gradient: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
    --white: #ffffff;
    --success: #10b981;
    --error: #ef4444;
}
```

**Green Theme**:
```css
:root {
    --primary: #059669;
    --primary-dark: #047857;
    --bg-gradient: linear-gradient(135deg, #10b981 0%, #065f46 100%);
    --white: #ffffff;
    --success: #10b981;
    --error: #ef4444;
}
```

**Dark Theme**:
```css
:root {
    --primary: #8b5cf6;
    --primary-dark: #7c3aed;
    --bg-gradient: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    --white: #1f2937;
    --success: #10b981;
    --error: #ef4444;
}

body {
    color: #f3f4f6;
}
```

### Change Button Styles

**Location**: `style.css`, lines 50-68

**Rounded Buttons**:
```css
.option-btn {
    border-radius: 50px;  /* Pill shape */
}
```

**Square Buttons**:
```css
.option-btn {
    border-radius: 4px;  /* Less rounded */
}
```

**Larger Buttons**:
```css
.option-btn {
    padding: 24px;  /* Increase padding */
    font-size: 1.2rem;  /* Larger text */
}
```

### Change Fonts

```css
body {
    font-family: 'Arial', sans-serif;  /* Change font */
}
```

**Using Google Fonts**:

1. Add to `<head>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
```

2. Update CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

---

## 📏 Adjusting Layout and Size

### Container Width

**Location**: `style.css`, lines 20-28

```css
.quiz-container {
    width: 90%;
    max-width: 420px;  /* Change this */
}
```

**Larger Quiz**:
```css
max-width: 600px;
```

**Smaller Quiz**:
```css
max-width: 320px;
```

### Question Text Size

```css
h2 {
    font-size: 1.8rem;  /* Larger questions */
}
```

### Progress Bar Height

```css
.progress-wrapper {
    height: 10px;  /* Thicker bar */
}
```

---

## 🕐 Adjusting Feedback Delay

**Location**: `script.js`, line 80

**Default**: 1.2 seconds

**To Change**:

```javascript
// Before
setTimeout(() => {
    currentIndex++;
    showQuestion();
}, 1200);

// After - 2 second delay
setTimeout(() => {
    currentIndex++;
    showQuestion();
}, 2000);
```

**Instant (No Delay)**:
```javascript
setTimeout(() => {
    currentIndex++;
    showQuestion();
}, 0);
```

---

## 🔊 Adding Sound Effects

### Setup

1. Create a `sounds` folder in your project
2. Add sound files (MP3 format):
   - `correct.mp3`
   - `wrong.mp3`
   - `timeout.mp3`

### Implementation

**Add to `script.js`**:

```javascript
// Add this function
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
}

// Update selectAnswer function
function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const correctIndex = questions[currentIndex].correct;
    userAnswers.push(selectedIndex);

    if (selectedIndex === correctIndex) {
        score += 1.0;
        playSound('correct');  // Add this
    } else {
        score -= 0.25;
        if (selectedIndex === -1) {
            playSound('timeout');  // Add this
        } else {
            playSound('wrong');  // Add this
        }
    }
    
    // ... rest of function
}
```

---

## 🎭 Changing Icons/Emojis

### Start Screen Icon

**Location**: `index.html`, line 13

```html
<!-- Before -->
<div class="icon">🧮</div>

<!-- After - Change emoji -->
<div class="icon">📚</div>
<div class="icon">🎓</div>
<div class="icon">⚡</div>
```

### Results Screen Icon

**Location**: `index.html`, line 40

```html
<!-- Before -->
<div class="icon">🏆</div>

<!-- After -->
<div class="icon">🎉</div>
<div class="icon">⭐</div>
```

---

## 📝 Customizing Text Content

### Change Title

**Location**: `index.html`, line 14

```html
<!-- Before -->
<h1>Math Challenge</h1>

<!-- After -->
<h1>Science Quiz</h1>
<h1>History Trivia</h1>
```

### Change Subtitle

**Location**: `index.html`, line 15

```html
<!-- Before -->
<p class="subtitle">5 Questions • 15s per round • -0.25 penalty</p>

<!-- After - Update to match your changes -->
<p class="subtitle">10 Questions • 30s per round • No penalty</p>
```

### Button Text

```html
<!-- Start button -->
<button id="start-btn" class="main-btn">Begin Quiz</button>

<!-- Restart button -->
<button onclick="restartQuiz()" class="main-btn blue-btn">Try Again</button>
```

---

## 🔄 Adding Question Categories

### Implementation

```javascript
// Define categories
const mathQuestions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    // ... more math questions
];

const scienceQuestions = [
    { q: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Air"], correct: 0 },
    // ... more science questions
];

// Let user choose
function selectCategory(category) {
    if (category === 'math') {
        questions = mathQuestions;
    } else if (category === 'science') {
        questions = scienceQuestions;
    }
    startQuiz();
}
```

---

## 🎲 Randomizing Questions

### Shuffle Questions

Add this function to `script.js`:

```javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle before starting
document.getElementById('start-btn').addEventListener('click', () => {
    shuffleArray(questions);  // Add this line
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
});
```

### Shuffle Options

```javascript
function showQuestion() {
    // ... existing code
    
    const currentQ = questions[currentIndex];
    
    // Shuffle options
    const shuffledOptions = [...currentQ.options];
    shuffleArray(shuffledOptions);
    
    // ... rest of function (update correct index accordingly)
}
```

---

## 💾 Saving High Scores

### Using LocalStorage

```javascript
// Save score
function saveHighScore(score) {
    const highScore = localStorage.getItem('highScore') || 0;
    if (score > highScore) {
        localStorage.setItem('highScore', score);
        return true;  // New high score
    }
    return false;
}

// Display in results
function showResults() {
    // ... existing code
    
    const isNewHigh = saveHighScore(score);
    if (isNewHigh) {
        alert('New High Score! 🎉');
    }
    
    // Show high score
    const highScore = localStorage.getItem('highScore');
    document.getElementById('high-score-display').innerText = highScore;
}
```

---

## 📊 Adding Difficulty Levels

### Implementation

```javascript
let difficulty = 'medium';  // easy, medium, hard

function setDifficulty(level) {
    difficulty = level;
    
    if (level === 'easy') {
        timeLeft = 30;  // More time
        // Load easy questions
    } else if (level === 'hard') {
        timeLeft = 10;  // Less time
        // Load hard questions
    }
}
```

---

## 🔗 Advanced Customizations

### Add Progress Counter

```html
<!-- Add to quiz-screen in index.html -->
<div class="question-counter">
    Question <span id="current-q">1</span> of <span id="total-q">5</span>
</div>
```

```javascript
// Update in showQuestion()
document.getElementById('current-q').innerText = currentIndex + 1;
document.getElementById('total-q').innerText = questions.length;
```

### Add Skip Button

```html
<button onclick="skipQuestion()" class="skip-btn">Skip</button>
```

```javascript
function skipQuestion() {
    selectAnswer(-1);  // Treat as wrong
}
```

---

## 📚 Resources

- **[MDN Web Docs](https://developer.mozilla.org/)** - JavaScript reference
- **[CSS Tricks](https://css-tricks.com/)** - CSS tutorials
- **[Coolors](https://coolors.co/)** - Color scheme generator
- **[Google Fonts](https://fonts.google.com/)** - Free fonts

---

## 🆘 Need Help?

If you need help with customization:

1. Check the [FAQ](FAQ.md)
2. Review [Technical Documentation](Technical-Documentation.md)
3. Look at [API Reference](API-Reference.md)
4. [Open an issue](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) on GitHub
