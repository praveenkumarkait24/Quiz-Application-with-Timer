# 🔧 Technical Documentation

Deep dive into the architecture, code structure, and implementation details of Math Master Quiz.

## 🏗️ Architecture Overview

### Technology Stack

```
┌─────────────────────────────────────┐
│         Frontend Layer              │
├─────────────────────────────────────┤
│  HTML5 - Structure                  │
│  CSS3 - Styling & Animations        │
│  JavaScript (ES6) - Logic           │
└─────────────────────────────────────┘
```

### Key Characteristics

- **Client-side only**: No backend or database required
- **Pure vanilla JavaScript**: No frameworks or libraries
- **Single page application**: All screens in one HTML file
- **State management**: Simple global variables
- **Event-driven**: User interactions trigger state changes

---

## 📁 File Structure

### Core Files

```
Quiz-Application-with-Timer/
│
├── index.html          # DOM structure, 3 screens
├── style.css           # Styling with CSS variables
├── script.js           # Quiz logic and interactivity
└── README.md           # Project documentation
```

### File Breakdown

| File | Lines | Purpose | Key Features |
|------|-------|---------|--------------|
| `index.html` | ~50 | Structure | 3 screens, semantic HTML |
| `style.css` | ~100 | Presentation | CSS variables, responsive |
| `script.js` | ~100 | Behavior | Timer, scoring, navigation |

---

## 🔍 Code Structure Analysis

### 1. HTML Structure (`index.html`)

#### Three Main Screens

```html
<div class="quiz-container">
    <!-- Screen 1: Start -->
    <div id="start-screen" class="screen">
        <!-- Welcome message and start button -->
    </div>

    <!-- Screen 2: Quiz -->
    <div id="quiz-screen" class="screen hidden">
        <!-- Timer, score, progress, question, options -->
    </div>

    <!-- Screen 3: Results -->
    <div id="result-section" class="screen hidden">
        <!-- Final score and review -->
    </div>
</div>
```

#### Key Elements

```javascript
// Screen management
start-screen      → Initial landing page
quiz-screen       → Active quiz interface
result-section    → Final results and review

// Quiz elements
time-left         → Countdown timer display
current-score     → Real-time score display
progress          → Progress bar
question-text     → Current question
options-container → Answer buttons container
review-container  → Answer review list
```

---

### 2. CSS Architecture (`style.css`)

#### CSS Custom Properties

```css
:root {
    --primary: #4f46e5;           /* Main brand color */
    --primary-dark: #3730a3;      /* Darker variant */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --white: #ffffff;
    --success: #10b981;           /* Correct answer color */
    --error: #ef4444;             /* Wrong answer color */
}
```

#### Key Styling Patterns

**Responsive Design:**
```css
.quiz-container {
    width: 90%;              /* Fluid width */
    max-width: 420px;        /* Constrained on large screens */
}
```

**Smooth Transitions:**
```css
.option-btn {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.option-btn:hover {
    transform: translateY(-4px);    /* Lift effect */
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
}
```

**Screen Management:**
```css
.screen { transition: all 0.3s ease; }
.hidden { display: none; }
```

---

### 3. JavaScript Logic (`script.js`)

#### Data Structure

```javascript
// Question format
const questions = [
    {
        q: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        correct: 1    // Index of correct option (0-3)
    },
    // ... more questions
];
```

#### Global State Variables

```javascript
let currentIndex = 0;        // Current question index (0-4)
let score = 0;               // Current score (can be negative)
let timer;                   // setInterval timer reference
let timeLeft = 15;           // Countdown value
let userAnswers = [];        // Array of user's selections
```

#### Core Functions

##### 1. `showQuestion()`
**Purpose**: Display current question and start timer

```javascript
function showQuestion() {
    // Check if quiz is complete
    if (currentIndex >= questions.length) return showResults();
    
    // Get current question
    const currentQ = questions[currentIndex];
    
    // Update DOM
    document.getElementById("question-text").innerText = currentQ.q;
    
    // Update progress bar
    document.getElementById("progress").style.width = 
        `${(currentIndex / questions.length) * 100}%`;
    
    // Create option buttons
    optionsBox.innerHTML = "";
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(index);
        optionsBox.appendChild(btn);
    });
    
    // Start countdown
    startTimer();
}
```

**Flow:**
1. Check if quiz complete
2. Retrieve current question from array
3. Update question text
4. Calculate and update progress bar width
5. Generate 4 option buttons dynamically
6. Attach click handlers to each button
7. Initiate countdown timer

---

##### 2. `startTimer()`
**Purpose**: Countdown from 15 seconds

```javascript
function startTimer() {
    clearInterval(timer);        // Clear any existing timer
    timeLeft = 15;               // Reset to 15 seconds
    
    // Update display immediately
    document.getElementById("time-left").innerText = timeLeft;
    
    // Start interval
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        
        // Auto-submit on timeout
        if (timeLeft <= 0) selectAnswer(-1);  // -1 = timeout
    }, 1000);  // Every 1 second
}
```

**Behavior:**
- Clears previous timer (prevents multiple timers)
- Resets timeLeft to 15
- Updates display every second
- Calls `selectAnswer(-1)` on timeout
- `-1` index indicates no answer selected

---

##### 3. `selectAnswer(selectedIndex)`
**Purpose**: Process user's answer and update UI

```javascript
function selectAnswer(selectedIndex) {
    clearInterval(timer);                           // Stop timer
    const correctIndex = questions[currentIndex].correct;
    userAnswers.push(selectedIndex);                // Store answer
    
    // Update score
    if (selectedIndex === correctIndex) {
        score += 1.0;                               // Correct: +1
    } else {
        score -= 0.25;                              // Wrong/Timeout: -0.25
    }
    
    // Display score (remove trailing zeros)
    scoreDisplay.innerText = parseFloat(score.toFixed(2));
    
    // Visual feedback
    Array.from(optionsBox.children).forEach((btn, i) => {
        if (i === correctIndex) {
            // Highlight correct answer (green)
            btn.style.background = "#d1fae5";
            btn.style.borderColor = "#10b981";
            btn.style.color = "#065f46";
        } else if (i === selectedIndex) {
            // Highlight wrong selection (red)
            btn.style.background = "#fee2e2";
            btn.style.borderColor = "#ef4444";
            btn.style.color = "#991b1b";
        }
        btn.disabled = true;                        // Prevent further clicks
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1200);  // 1.2 second pause
}
```

**Logic Flow:**
1. Stop the countdown timer
2. Get correct answer index
3. Store user's selection in array
4. Calculate score change (+1 or -0.25)
5. Update score display
6. Apply visual feedback (green/red)
7. Disable all buttons
8. Wait 1.2 seconds
9. Increment question index
10. Load next question or show results

---

##### 4. `showResults()`
**Purpose**: Display final score and review

```javascript
function showResults() {
    // Switch screens
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Display final score (remove trailing zeros)
    document.getElementById("final-score-text").innerText = 
        parseFloat(score.toFixed(2));
    
    // Generate review
    const review = document.getElementById("review-container");
    review.innerHTML = "";
    
    questions.forEach((q, i) => {
        const status = userAnswers[i] === q.correct ? "✅" : "❌";
        review.innerHTML += `
            <div class="review-item">
                ${status} ${q.q} - <strong>${q.options[q.correct]}</strong>
            </div>
        `;
    });
}
```

**Display Logic:**
- Hides quiz screen
- Shows result screen
- Formats final score
- Loops through all questions
- Compares user answers to correct answers
- Generates review HTML with checkmarks/X marks

---

##### 5. `restartQuiz()`
**Purpose**: Reset and restart the quiz

```javascript
function restartQuiz() {
    location.reload();  // Simple page reload
}
```

**Note**: Uses browser's built-in reload for simplicity. All state resets automatically.

---

## 🔄 Application State Flow

### State Diagram

```
[Initial State]
currentIndex: 0
score: 0
userAnswers: []
timer: null
timeLeft: 15

        ↓

[Quiz Active]
currentIndex: 0-4 (incrementing)
score: varies (-1.25 to 5.0)
userAnswers: [indices]
timer: setInterval reference
timeLeft: 15-0 (decrementing)

        ↓

[Quiz Complete]
currentIndex: 5
score: final value
userAnswers: [all 5 answers]
timer: cleared
timeLeft: 0
```

---

## 🎨 UI/UX Design Patterns

### Screen Transitions

```javascript
// Hide current screen
screen.classList.add('hidden');

// Show target screen
targetScreen.classList.remove('hidden');
```

### Dynamic Content Generation

```javascript
// Create elements dynamically
const btn = document.createElement("button");
btn.innerText = optionText;
btn.onclick = () => handleClick();
container.appendChild(btn);
```

### Visual Feedback System

| State | Background | Border | Text Color |
|-------|-----------|--------|------------|
| **Default** | #ffffff | #f3f4f6 | #4b5563 |
| **Hover** | #f5f3ff | #4f46e5 | #4f46e5 |
| **Correct** | #d1fae5 | #10b981 | #065f46 |
| **Wrong** | #fee2e2 | #ef4444 | #991b1b |

---

## 🧮 Scoring Algorithm

### Mathematical Formula

```javascript
// Initialize
let score = 0;

// For each question
if (answer === correct) {
    score = score + 1.0;
} else {
    score = score - 0.25;
}

// Display (remove trailing zeros)
displayScore = parseFloat(score.toFixed(2));
```

### Score Range

- **Maximum**: 5.0 (all correct)
- **Minimum**: -1.25 (all wrong)
- **Typical**: 2.0 to 4.0

### Precision Handling

```javascript
// toFixed(2) → Always 2 decimals
score.toFixed(2)  // "3.00", "2.50"

// parseFloat → Removes trailing zeros
parseFloat("3.00")  // 3
parseFloat("2.50")  // 2.5
```

---

## ⏱️ Timer Implementation

### Countdown Mechanism

```javascript
timer = setInterval(() => {
    timeLeft--;                                    // Decrement
    updateDisplay(timeLeft);                       // Update UI
    if (timeLeft <= 0) handleTimeout();           // Check condition
}, 1000);                                         // Every 1000ms (1s)
```

### Timer Lifecycle

1. **Start**: Called when question loads
2. **Run**: Decrements every second
3. **Stop**: Cleared on answer selection or timeout
4. **Reset**: Reinitialized for next question

---

## 🔧 Performance Considerations

### Efficiency Measures

1. **No heavy computations**: Simple arithmetic only
2. **Minimal DOM updates**: Update only changed elements
3. **Event delegation**: Could be used (not implemented)
4. **No memory leaks**: Timer properly cleared

### Optimization Opportunities

```javascript
// Current: Create new buttons each time
optionsBox.innerHTML = "";
// ... create 4 new buttons

// Better: Reuse existing buttons
// Update text content instead of recreating
```

---

## 🐛 Error Handling

### Current Implementation

- **Minimal error handling**: Assumes valid data
- **No try-catch blocks**: Simple logic, low error risk
- **Input validation**: None needed (predefined questions)

### Potential Issues

1. **Timer overlap**: Prevented by `clearInterval()` before starting new timer
2. **Index out of bounds**: Prevented by checking `currentIndex >= questions.length`
3. **Invalid answers**: Prevented by UI (buttons only)

---

## 🔌 Extensibility

### Easy to Modify

1. **Add questions**: Append to `questions` array
2. **Change timer**: Modify `timeLeft` initial value
3. **Adjust scoring**: Change `+1.0` and `-0.25` values
4. **Customize colors**: Edit CSS variables

### Extension Points

```javascript
// Add difficulty levels
const easyQuestions = [...];
const hardQuestions = [...];

// Add categories
const mathQuestions = [...];
const scienceQuestions = [...];

// Add sound effects
function playSound(type) {
    const audio = new Audio(`sounds/${type}.mp3`);
    audio.play();
}
```

---

## 📊 Data Flow Diagram

```
User Action
    ↓
Event Handler
    ↓
Update State
    ↓
Update DOM
    ↓
Visual Feedback
```

### Example: Answering a Question

```
Click Option 2
    ↓
selectAnswer(2) called
    ↓
Clear timer
Store answer in userAnswers[currentIndex]
    ↓
Calculate score change
score = score ± value
    ↓
Update score display
Update option colors
    ↓
Wait 1.2s
    ↓
Increment currentIndex
Call showQuestion()
```

---

## 🧪 Testing Considerations

### Manual Testing Checklist

- [ ] All questions display correctly
- [ ] Timer counts down from 15 to 0
- [ ] Correct answers give +1 point
- [ ] Wrong answers give -0.25 points
- [ ] Timeout gives -0.25 points
- [ ] Progress bar updates correctly
- [ ] Review shows correct answers
- [ ] Restart button works
- [ ] Responsive on mobile
- [ ] All buttons clickable

### Edge Cases

1. **Rapid clicking**: Buttons disabled after selection
2. **Browser refresh**: State resets correctly
3. **Timer at 0**: Auto-submits properly
4. **Negative scores**: Display correctly

---

## 🔐 Security Considerations

### Client-Side Only

- **No backend**: No server vulnerabilities
- **No user data**: No privacy concerns
- **No authentication**: Public access
- **No sensitive data**: Math questions only

### Safe Practices

- ✅ No `eval()` or dangerous functions
- ✅ No external API calls
- ✅ No localStorage of personal data
- ✅ No inline scripts (good practice)

---

## 📚 Code Standards

### Naming Conventions

```javascript
// camelCase for variables and functions
let currentIndex;
function showQuestion() {}

// kebab-case for CSS classes and IDs
<div id="start-screen" class="main-btn">
```

### Code Style

- **Indentation**: 4 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: Used consistently
- **Comments**: Minimal, code is self-documenting

---

## 🔗 Related Documentation

- **[API Reference](API-Reference.md)** - Detailed function documentation
- **[Customization Guide](Customization-Guide.md)** - How to modify
- **[User Guide](User-Guide.md)** - End-user documentation
