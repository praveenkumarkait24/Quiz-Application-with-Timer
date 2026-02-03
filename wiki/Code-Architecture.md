# 🏗️ Code Architecture

This page provides a technical overview of how Math Master Quiz is built, explaining the code structure, key functions, and implementation details.

---

## 📁 File Structure

The project consists of three main files:

```
Quiz-Application-with-Timer/
├── index.html    (~50 lines)  - Structure & DOM elements
├── style.css     (~100 lines) - Styling & animations
└── script.js     (~100 lines) - Logic & interactivity
```

**Total Project Size:** ~250 lines of code, < 10KB

---

## 🌐 HTML Structure (index.html)

### Three-Screen Layout

The application uses a single-page architecture with three screens:

```html
<div class="quiz-container">
    <!-- Screen 1: Start -->
    <div id="start-screen" class="screen">
        <!-- Welcome message & Start button -->
    </div>
    
    <!-- Screen 2: Quiz -->
    <div id="quiz-screen" class="screen hidden">
        <!-- Timer, Score, Progress, Question, Options -->
    </div>
    
    <!-- Screen 3: Results -->
    <div id="result-section" class="screen hidden">
        <!-- Final score & Review -->
    </div>
</div>
```

### Key DOM Elements

| Element ID | Purpose | Parent Screen |
|------------|---------|---------------|
| `start-screen` | Welcome/landing screen | Main container |
| `quiz-screen` | Active quiz interface | Main container |
| `result-section` | Results and review | Main container |
| `time-left` | Timer countdown display | Quiz screen |
| `current-score` | Real-time score | Quiz screen |
| `progress` | Progress bar fill | Quiz screen |
| `question-text` | Question display | Quiz screen |
| `options-container` | Answer options grid | Quiz screen |
| `final-score-text` | Final score display | Result screen |
| `review-container` | Answer review list | Result screen |

### Screen Visibility Management

Screens are toggled using the `.hidden` class:
```css
.hidden { display: none; }
```

Transitions handled in JavaScript:
```javascript
startScreen.classList.add('hidden');
quizScreen.classList.remove('hidden');
```

---

## 🎨 CSS Architecture (style.css)

### CSS Variables (Custom Properties)

Defined in `:root` for easy theming:

```css
:root {
    --primary: #4f46e5;          /* Indigo */
    --primary-dark: #3730a3;     /* Dark indigo */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --white: #ffffff;
    --success: #10b981;          /* Green */
    --error: #ef4444;            /* Red */
}
```

**Benefits:**
- Single source of truth for colors
- Easy theme customization
- Maintainable codebase

### Layout System

**Centering Strategy:**
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

**Container:**
```css
.quiz-container {
    max-width: 420px;
    width: 90%;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 24px;
    padding: 2.5rem;
}
```

### Key CSS Patterns

1. **Flexbox for Header Stats:**
   ```css
   .quiz-header {
       display: flex;
       justify-content: space-between;
   }
   ```

2. **Grid for Options:**
   ```css
   .options-grid {
       display: grid;
       gap: 12px;
   }
   ```

3. **Smooth Transitions:**
   ```css
   .option-btn {
       transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   }
   ```

4. **Hover Effects:**
   ```css
   .option-btn:hover {
       transform: translateY(-4px);
       box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
   }
   ```

---

## ⚙️ JavaScript Architecture (script.js)

### Data Structure

#### Questions Array

```javascript
const questions = [
    {
        q: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        correct: 1  // Index of correct option (0-3)
    },
    // ... 4 more questions
];
```

**Structure:**
- `q` (string): The question text
- `options` (array): Four answer choices
- `correct` (number): Index of correct answer (0-based)

### Global State Variables

```javascript
let currentIndex = 0;     // Current question index (0-4)
let score = 0;            // Cumulative score (float)
let timer;                // setInterval reference for cleanup
let timeLeft = 15;        // Countdown seconds
let userAnswers = [];     // Array storing user's selected indices
```

### DOM References (Cached)

```javascript
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-section');
const optionsBox = document.getElementById("options-container");
const scoreDisplay = document.getElementById("current-score");
```

**Why cache?** 
- Better performance (single DOM query)
- Cleaner code (reusable references)

---

## 🔄 Application Flow

### 1. Initialization

**Event Listener Setup:**
```javascript
document.getElementById('start-btn').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
});
```

**State Reset:**
When quiz starts, variables are already at initial values:
- `currentIndex = 0`
- `score = 0`
- `userAnswers = []`

---

### 2. Question Display (`showQuestion()`)

**Function Flow:**

```javascript
function showQuestion() {
    // Check if quiz is complete
    if (currentIndex >= questions.length) return showResults();
    
    // Get current question data
    const currentQ = questions[currentIndex];
    
    // Update question text
    document.getElementById("question-text").innerText = currentQ.q;
    
    // Update progress bar
    document.getElementById("progress").style.width = 
        `${(currentIndex / questions.length) * 100}%`;
    
    // Clear previous options
    optionsBox.innerHTML = "";
    
    // Create option buttons
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(index);
        optionsBox.appendChild(btn);
    });
    
    // Start countdown timer
    startTimer();
}
```

**Key Operations:**
1. Boundary check for quiz completion
2. DOM updates (question, progress)
3. Dynamic button creation
4. Timer initialization

---

### 3. Timer System (`startTimer()`)

**Implementation:**

```javascript
function startTimer() {
    clearInterval(timer);  // Clear any existing timer
    timeLeft = 15;         // Reset to 15 seconds
    
    // Initial display update
    document.getElementById("time-left").innerText = timeLeft;
    
    // Start countdown interval
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        
        // Auto-submit on timeout
        if (timeLeft <= 0) selectAnswer(-1);
    }, 1000);  // Update every 1000ms (1 second)
}
```

**Timer Characteristics:**
- Runs every 1 second using `setInterval`
- Decrements `timeLeft` counter
- Updates DOM each tick
- Auto-triggers `selectAnswer(-1)` on timeout
- Cleaned up properly on answer selection

**Memory Management:**
```javascript
clearInterval(timer);  // Prevents memory leaks
```

---

### 4. Answer Selection (`selectAnswer()`)

**Core Logic:**

```javascript
function selectAnswer(selectedIndex) {
    // Stop the timer immediately
    clearInterval(timer);
    
    // Get correct answer for comparison
    const correctIndex = questions[currentIndex].correct;
    
    // Store user's answer for review
    userAnswers.push(selectedIndex);

    // Update score
    if (selectedIndex === correctIndex) {
        score += 1.0;   // Correct: +1 point
    } else {
        score -= 0.25;  // Wrong/Timeout: -0.25 points
    }
    
    // Update score display (removes trailing zeros)
    scoreDisplay.innerText = parseFloat(score.toFixed(2));

    // Visual feedback on options
    Array.from(optionsBox.children).forEach((btn, i) => {
        if (i === correctIndex) {
            // Highlight correct answer in green
            btn.style.background = "#d1fae5";
            btn.style.borderColor = "#10b981";
            btn.style.color = "#065f46";
        } else if (i === selectedIndex) {
            // Highlight wrong selection in red
            btn.style.background = "#fee2e2";
            btn.style.borderColor = "#ef4444";
            btn.style.color = "#991b1b";
        }
        btn.disabled = true;  // Disable all options
    });

    // Move to next question after brief pause
    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1200);  // 1.2 second delay
}
```

**Key Steps:**
1. Stop timer
2. Store user's selection
3. Calculate score change
4. Update UI (score display)
5. Apply color-coded feedback
6. Disable further interaction
7. Auto-advance after 1.2s

**Special Cases:**
- `selectedIndex === -1`: Timeout (treated as wrong)
- `selectedIndex === correctIndex`: Correct answer
- All others: Wrong answer

---

### 5. Results Display (`showResults()`)

**Implementation:**

```javascript
function showResults() {
    // Hide quiz screen, show results
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Display final score
    document.getElementById("final-score-text").innerText = 
        parseFloat(score.toFixed(2));
    
    // Build review section
    const review = document.getElementById("review-container");
    review.innerHTML = "";
    
    questions.forEach((q, i) => {
        // Determine if answer was correct
        const status = userAnswers[i] === q.correct ? "✅" : "❌";
        
        // Create review item
        review.innerHTML += `
            <div class="review-item">
                ${status} ${q.q} - <strong>${q.options[q.correct]}</strong>
            </div>
        `;
    });
}
```

**Review Format:**
```
[✅/❌] [Question Text] - [Correct Answer]
```

**Example Output:**
```
✅ What is 15% of 200? - 30
❌ Solve for x: 3x - 7 = 11 - 6
```

---

### 6. Quiz Restart (`restartQuiz()`)

**Simple Approach:**

```javascript
function restartQuiz() {
    location.reload();  // Reload the entire page
}
```

**Why reload?**
- Simplest implementation
- Resets all state automatically
- Clears all timers and event listeners
- No risk of memory leaks or stale state

**Alternative (Manual Reset):**
Could manually reset variables, but reload is more reliable:
```javascript
// Manual reset approach (not used)
currentIndex = 0;
score = 0;
userAnswers = [];
resultScreen.classList.add('hidden');
startScreen.classList.remove('hidden');
```

---

## 🧩 Key Algorithms

### 1. Progress Calculation

```javascript
const progressPercentage = (currentIndex / questions.length) * 100;
// Example: Question 2 of 5 = (2 / 5) * 100 = 40%
```

### 2. Score Formatting

```javascript
parseFloat(score.toFixed(2))
```

**Purpose:** Removes trailing zeros

**Examples:**
- `3.00` → `3`
- `2.50` → `2.5`
- `1.75` → `1.75`

**Process:**
1. `toFixed(2)`: Convert to string with 2 decimals → "3.00"
2. `parseFloat()`: Convert back to number → 3

### 3. Answer Comparison

```javascript
userAnswers[i] === questions[i].correct
```

Simple equality check of indices.

---

## 🎯 Design Patterns Used

### 1. Single Responsibility Principle

Each function has one clear purpose:
- `showQuestion()`: Display question
- `startTimer()`: Handle countdown
- `selectAnswer()`: Process answer selection
- `showResults()`: Display final screen

### 2. Separation of Concerns

- **HTML**: Structure only
- **CSS**: Presentation only
- **JavaScript**: Behavior only

### 3. State Management

Global variables track application state:
```javascript
let currentIndex = 0;  // Where we are
let score = 0;         // User performance
let userAnswers = [];  // History for review
```

### 4. Event-Driven Architecture

Actions triggered by events:
- Button clicks
- Timer intervals
- Timeouts

---

## ⚡ Performance Considerations

### Optimizations

1. **DOM Caching:**
   ```javascript
   const optionsBox = document.getElementById("options-container");
   // Query once, use many times
   ```

2. **Minimal Reflows:**
   - Batch DOM updates
   - Use `innerHTML = ""` to clear (efficient)

3. **Timer Cleanup:**
   ```javascript
   clearInterval(timer);  // Prevent multiple timers
   ```

4. **No External Dependencies:**
   - Zero network requests
   - Instant loading
   - Works offline

### Potential Improvements

1. **Event Delegation:**
   Instead of:
   ```javascript
   btn.onclick = () => selectAnswer(index);
   ```
   Use:
   ```javascript
   optionsBox.addEventListener('click', (e) => {
       if (e.target.matches('.option-btn')) {
           // Handle click
       }
   });
   ```

2. **Debouncing:**
   Prevent rapid clicks (currently blocked by `disabled`)

3. **Local Storage:**
   Persist high scores between sessions

---

## 🔍 Code Quality

### Best Practices Used

✅ Descriptive variable names  
✅ Consistent formatting  
✅ Modular functions  
✅ Comments where needed  
✅ DRY principle (Don't Repeat Yourself)  
✅ Clear code flow  

### Possible Improvements

📋 Add JSDoc comments for functions  
📋 Extract magic numbers to constants  
📋 Add error handling  
📋 Use ES6 modules  
📋 Add unit tests  
📋 Implement accessibility features  

---

## 🧪 Testing Considerations

### Manual Testing Checklist

- ✅ Start quiz from welcome screen
- ✅ Answer correctly (verify +1)
- ✅ Answer incorrectly (verify -0.25)
- ✅ Let timer expire (verify -0.25)
- ✅ Check progress bar updates
- ✅ Verify score updates in real-time
- ✅ Complete all 5 questions
- ✅ Review results screen
- ✅ Verify correct answers shown
- ✅ Test restart functionality
- ✅ Test on different browsers
- ✅ Test on mobile devices

### Unit Test Ideas (If Implemented)

```javascript
// Example test cases
describe('Quiz Logic', () => {
    test('Correct answer adds 1 point', () => {
        // Test scoring
    });
    
    test('Wrong answer subtracts 0.25 points', () => {
        // Test penalty
    });
    
    test('Timer counts down from 15', () => {
        // Test timer
    });
    
    test('Quiz ends after 5 questions', () => {
        // Test completion
    });
});
```

---

## 📚 Technology Stack Details

### HTML5 Features

- Semantic markup
- Meta viewport for responsive design
- External CSS/JS linking

### CSS3 Features

- Custom properties (CSS variables)
- Flexbox layout
- CSS Grid layout
- Transitions and transforms
- Gradient backgrounds
- RGBA colors with transparency

### JavaScript (ES6) Features

- `const` and `let` declarations
- Arrow functions
- Template literals (in review)
- `forEach` array iteration
- `Array.from()` for HTMLCollection conversion

---

## 🛠️ Development Tips

### Modifying Questions

```javascript
const questions = [
    {
        q: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0  // Index of correct answer (0, 1, 2, or 3)
    },
    // Add more questions...
];
```

### Changing Timer Duration

```javascript
// In startTimer() function
timeLeft = 30;  // Change to desired seconds

// Also update initial declaration
let timeLeft = 30;
```

### Adjusting Scoring

```javascript
// In selectAnswer() function
if (selectedIndex === correctIndex) {
    score += 2.0;   // Change correct points
} else {
    score -= 0.5;   // Change penalty
}
```

### Customizing Colors

```css
/* In style.css */
:root {
    --primary: #your-color;
    --success: #your-green;
    --error: #your-red;
}
```

---

## 🔗 Dependencies

**None!** This project is built with pure vanilla JavaScript, HTML, and CSS.

**Benefits:**
- Zero npm dependencies
- No build process
- No bundler required
- Instant loading
- Works offline
- Easy to understand
- Low maintenance

---

<div align="center">

**Want to contribute? Read [How to Contribute](How-to-Contribute)!**

[⬅ Back to Features](Features) | [Home](Home) | [➡ How to Contribute](How-to-Contribute)

</div>
