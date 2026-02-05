# 📖 API Reference

Complete reference for all functions, variables, and DOM elements in Math Master Quiz.

## 📊 Global Variables

### `questions`
```javascript
const questions = Array<QuestionObject>
```

**Type**: Constant array of question objects

**Structure**:
```javascript
{
    q: string,           // Question text
    options: string[],   // Array of 4 answer options
    correct: number      // Index of correct option (0-3)
}
```

**Example**:
```javascript
{
    q: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correct: 1  // "30" is correct
}
```

**Usage**: Stores all quiz questions. Modify this array to change questions.

---

### `currentIndex`
```javascript
let currentIndex: number = 0
```

**Type**: Integer (0-5)

**Purpose**: Tracks the current question being displayed

**Range**: 
- `0-4`: Valid question indices
- `5`: Triggers results screen

**Modified by**: `selectAnswer()` function

---

### `score`
```javascript
let score: number = 0
```

**Type**: Float

**Purpose**: Tracks the user's current score

**Range**: `-1.25` to `5.0`

**Calculation**:
- Starts at `0`
- Increments by `+1.0` for correct answers
- Decrements by `-0.25` for wrong/timeout

**Display**: Shown with up to 2 decimal places, trailing zeros removed

---

### `timer`
```javascript
let timer: number | null
```

**Type**: Interval ID (from `setInterval`)

**Purpose**: Reference to active countdown timer

**Values**:
- `null` or `undefined`: No active timer
- `number`: Active timer ID

**Usage**: Used to clear timer with `clearInterval(timer)`

---

### `timeLeft`
```javascript
let timeLeft: number = 15
```

**Type**: Integer (0-15)

**Purpose**: Seconds remaining for current question

**Lifecycle**:
1. Reset to `15` at question start
2. Decrements by `1` every second
3. Triggers timeout at `0`

---

### `userAnswers`
```javascript
let userAnswers: number[] = []
```

**Type**: Array of integers

**Purpose**: Stores indices of user's selected answers

**Values**:
- `0-3`: Option index selected
- `-1`: Timeout (no answer)

**Length**: Equals number of questions answered

**Usage**: Used in results screen to show ✅/❌

---

## 🎯 Core Functions

### `showQuestion()`

```javascript
function showQuestion(): void
```

**Purpose**: Display current question and start timer

**Parameters**: None (uses global `currentIndex`)

**Returns**: `void`

**Side Effects**:
- Updates question text
- Updates progress bar width
- Generates option buttons
- Starts countdown timer
- May call `showResults()` if quiz complete

**Called by**:
- Start button click handler
- `selectAnswer()` after delay

**Example Flow**:
```javascript
currentIndex = 2;
showQuestion();
// Displays question #3, starts 15s timer
```

**DOM Updates**:
- `#question-text`: Question text
- `#progress`: Progress bar width
- `#options-container`: 4 option buttons

---

### `startTimer()`

```javascript
function startTimer(): void
```

**Purpose**: Initialize and start countdown timer

**Parameters**: None

**Returns**: `void`

**Side Effects**:
- Clears any existing timer
- Resets `timeLeft` to `15`
- Updates timer display every second
- Calls `selectAnswer(-1)` on timeout

**Timer Interval**: 1000ms (1 second)

**Cleanup**: Automatically stops at `timeLeft <= 0`

**DOM Updates**:
- `#time-left`: Countdown value

---

### `selectAnswer(selectedIndex)`

```javascript
function selectAnswer(selectedIndex: number): void
```

**Purpose**: Process user's answer and update score

**Parameters**:
- `selectedIndex` (number): 
  - `0-3`: User-selected option
  - `-1`: Timeout (no selection)

**Returns**: `void`

**Side Effects**:
- Stops timer
- Updates score
- Stores answer in `userAnswers`
- Applies visual feedback
- Disables all buttons
- Schedules next question

**Timing**: 1.2 second delay before next question

**Called by**:
- Option button click handlers
- `startTimer()` on timeout

**Score Logic**:
```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;
} else {
    score -= 0.25;
}
```

**DOM Updates**:
- `#current-score`: Updated score
- Option buttons: Background colors, disabled state

---

### `showResults()`

```javascript
function showResults(): void
```

**Purpose**: Display final score and answer review

**Parameters**: None

**Returns**: `void`

**Side Effects**:
- Hides quiz screen
- Shows result screen
- Displays final score
- Generates answer review

**Called by**: `showQuestion()` when `currentIndex >= questions.length`

**DOM Updates**:
- `#quiz-screen`: Hidden
- `#result-section`: Visible
- `#final-score-text`: Final score
- `#review-container`: Review HTML

**Review Format**:
```html
<div class="review-item">
    ✅ Question text - <strong>Correct answer</strong>
</div>
```

---

### `restartQuiz()`

```javascript
function restartQuiz(): void
```

**Purpose**: Reset quiz and return to start screen

**Parameters**: None

**Returns**: `void`

**Side Effects**: Reloads the entire page

**Implementation**: `location.reload()`

**Called by**: "Restart Quiz" button click

---

## 🎨 DOM Elements

### Screen Containers

#### `#start-screen`
```html
<div id="start-screen" class="screen">
```

**Purpose**: Welcome/landing screen

**Visibility**: Shown initially, hidden when quiz starts

**Children**:
- Icon (🧮)
- Title: "Math Challenge"
- Subtitle with quiz info
- Start button

---

#### `#quiz-screen`
```html
<div id="quiz-screen" class="screen hidden">
```

**Purpose**: Active quiz interface

**Visibility**: Hidden initially, shown during quiz

**Children**:
- Quiz header (timer and score)
- Progress bar
- Question text
- Options container

---

#### `#result-section`
```html
<div id="result-section" class="screen hidden">
```

**Purpose**: Final results and review

**Visibility**: Hidden until quiz complete

**Children**:
- Icon (🏆)
- "Quiz Finished!" message
- Final score display
- Review container
- Restart button

---

### Interactive Elements

#### `#start-btn`
```html
<button id="start-btn" class="main-btn">
```

**Purpose**: Initiates the quiz

**Event**: `click` → Hides start screen, shows quiz screen, calls `showQuestion()`

**Text**: "Start Quiz"

---

#### `#time-left`
```html
<span id="time-left" class="value">15</span>
```

**Purpose**: Display countdown timer

**Updates**: Every second via `startTimer()`

**Format**: Integer (15 to 0)

---

#### `#current-score`
```html
<span id="current-score" class="value">0</span>
```

**Purpose**: Display current score

**Updates**: After each answer via `selectAnswer()`

**Format**: Float with up to 2 decimals (trailing zeros removed)

---

#### `#progress`
```html
<div class="progress-bar" id="progress"></div>
```

**Purpose**: Visual progress indicator

**Updates**: Before each question via `showQuestion()`

**Style**: Width percentage (0% to 100%)

**Calculation**: `(currentIndex / totalQuestions) × 100%`

---

#### `#question-text`
```html
<h2 id="question-text">Question loading...</h2>
```

**Purpose**: Display current question

**Updates**: Each question via `showQuestion()`

**Content**: Question text from `questions[currentIndex].q`

---

#### `#options-container`
```html
<div id="options-container" class="options-grid"></div>
```

**Purpose**: Container for answer option buttons

**Updates**: Cleared and repopulated each question

**Children**: 4 dynamically created `.option-btn` buttons

---

#### `.option-btn` (dynamic)
```html
<button class="option-btn">Option Text</button>
```

**Purpose**: Individual answer option

**Count**: 4 per question

**Event**: `click` → Calls `selectAnswer(index)`

**States**:
- Default: White background
- Hover: Purple tint
- Correct: Green background
- Wrong: Red background
- Disabled after selection

---

#### `#final-score-text`
```html
<h1 id="final-score-text">0</h1>
```

**Purpose**: Display final score on results screen

**Updates**: Once via `showResults()`

**Format**: Same as current score (float, no trailing zeros)

---

#### `#review-container`
```html
<div id="review-container"></div>
```

**Purpose**: Container for answer review

**Updates**: Populated by `showResults()`

**Content**: List of `.review-item` elements

**Format**:
```html
✅/❌ Question - <strong>Correct Answer</strong>
```

---

## 🎯 CSS Classes

### `.screen`
**Purpose**: Base class for all three main screens

**Behavior**: Handles transitions

```css
.screen {
    transition: all 0.3s ease;
}
```

---

### `.hidden`
**Purpose**: Hide elements

**Behavior**: Completely removes from layout

```css
.hidden {
    display: none;
}
```

**Usage**: Toggle screen visibility

---

### `.main-btn`
**Purpose**: Primary action buttons

**Applied to**: Start button, restart button

**Style**: Large, prominent, full-width

---

### `.option-btn`
**Purpose**: Answer option buttons

**Applied to**: Dynamically created answer buttons

**States**: default, hover, correct, wrong, disabled

---

### `.review-item`
**Purpose**: Individual answer in review list

**Applied to**: Each question in final review

**Style**: Left-aligned, bordered

---

## 🔄 Event Listeners

### Start Button Click

```javascript
document.getElementById('start-btn').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
});
```

**Trigger**: User clicks "Start Quiz"

**Actions**:
1. Hide start screen
2. Show quiz screen
3. Initialize first question

---

### Option Button Click (Dynamic)

```javascript
btn.onclick = () => selectAnswer(index);
```

**Trigger**: User clicks an answer option

**Actions**:
1. Stop timer
2. Process answer
3. Update score
4. Show feedback
5. Schedule next question

**Note**: Created dynamically for each question

---

### Restart Button Click (Inline)

```html
<button onclick="restartQuiz()">
```

**Trigger**: User clicks "Restart Quiz"

**Actions**: Reload page

---

## 📊 Data Types

### QuestionObject

```typescript
interface QuestionObject {
    q: string;           // Question text
    options: string[];   // 4 answer options
    correct: number;     // Correct option index (0-3)
}
```

**Example**:
```javascript
{
    q: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1  // Index 1 = "4"
}
```

---

## 🔢 Constants

### Timer Duration
```javascript
const TIMER_DURATION = 15;  // seconds (implicit)
```

### Scoring Values
```javascript
const CORRECT_POINTS = 1.0;
const WRONG_PENALTY = -0.25;
```

### Feedback Delay
```javascript
const FEEDBACK_DELAY = 1200;  // milliseconds
```

### Timer Interval
```javascript
const TIMER_INTERVAL = 1000;  // 1 second
```

---

## 🎨 Color Constants (CSS Variables)

```css
--primary: #4f46e5        /* Main brand color */
--primary-dark: #3730a3   /* Darker shade */
--success: #10b981        /* Correct answer */
--error: #ef4444          /* Wrong answer */
--white: #ffffff          /* Background */
```

**Correct Answer Styling**:
```javascript
background: "#d1fae5"
borderColor: "#10b981"
color: "#065f46"
```

**Wrong Answer Styling**:
```javascript
background: "#fee2e2"
borderColor: "#ef4444"
color: "#991b1b"
```

---

## 🔗 Related Documentation

- **[Technical Documentation](Technical-Documentation.md)** - Architecture details
- **[Customization Guide](Customization-Guide.md)** - How to modify
- **[User Guide](User-Guide.md)** - End-user documentation
