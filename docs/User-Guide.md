# 🎮 User Guide

Complete guide to playing and understanding Math Master Quiz.

## 🎯 Overview

Math Master Quiz is a timed quiz application that tests your math skills with 5 questions. Each question has a 15-second time limit and multiple scoring rules.

---

## 🚀 Getting Started

### Starting the Quiz

1. Open `index.html` in your web browser
2. You'll see the **Start Screen** with:
   - 🧮 Math Challenge icon
   - Quiz details: "5 Questions • 15s per round • -0.25 penalty"
3. Click the **"Start Quiz"** button to begin

---

## 🎮 How to Play

### Quiz Flow

1. **Read the Question**
   - Each question appears at the top of the screen
   - You have 15 seconds to answer
   - Timer counts down from 15 to 0

2. **Select Your Answer**
   - Click one of the four option buttons
   - Once clicked, your answer is locked in
   - Can't change after selection

3. **View Feedback**
   - **Green background** ✅ = Correct answer
   - **Red background** ❌ = Your wrong selection
   - Correct answer always shown in green
   - Screen pauses for 1.2 seconds

4. **Move to Next Question**
   - Automatically advances after feedback
   - Progress bar updates
   - Score updates in real-time

5. **Complete the Quiz**
   - After 5 questions, see your final score
   - Review all questions and answers
   - Option to restart and try again

---

## 📊 Scoring System

### How Points Work

| Result | Points | Description |
|--------|--------|-------------|
| ✅ **Correct Answer** | **+1.0** | Full point awarded |
| ❌ **Wrong Answer** | **-0.25** | Quarter point penalty |
| ⏰ **Time Expired** | **-0.25** | Same as wrong answer |

### Score Display
- **Real-time updates**: Score changes immediately after each answer
- **Decimal precision**: Shows up to 2 decimal places (e.g., 3.5, 2.75)
- **Trailing zeros removed**: 3.00 displays as 3, 2.50 displays as 2.5

### Example Scoring
```
Question 1: Correct   → Score: 1
Question 2: Wrong     → Score: 0.75  (1 - 0.25)
Question 3: Correct   → Score: 1.75  (0.75 + 1)
Question 4: Timeout   → Score: 1.5   (1.75 - 0.25)
Question 5: Correct   → Score: 2.5   (1.5 + 1)
```

---

## ⏱️ Timer System

### How the Timer Works

- **Duration**: 15 seconds per question
- **Display**: Top-left corner shows countdown
- **Updates**: Every 1 second
- **Auto-submit**: If time runs out, treated as wrong answer

### Timer Behavior

1. **Starts automatically** when question appears
2. **Stops immediately** when you select an answer
3. **Resets to 15** for each new question
4. **Can't be paused** - must answer or let it expire

### Time Management Tips

- Read the question quickly but carefully
- Eliminate obviously wrong answers first
- Make your best guess if running low on time
- Remember: -0.25 penalty whether wrong or timeout

---

## 📈 Progress Tracking

### Visual Indicators

1. **Progress Bar**
   - Blue bar at top of quiz screen
   - Fills from 0% to 100%
   - Updates after each question
   - Formula: `(questions answered / 5) × 100%`

2. **Timer Display**
   - Shows seconds remaining
   - Located in top-left
   - Large, easy-to-read numbers

3. **Score Display**
   - Shows current score
   - Located in top-right
   - Updates immediately after each answer

---

## 🏁 Results Screen

### What You'll See

After completing all 5 questions:

1. **Trophy Icon** 🏆
2. **"Quiz Finished!" message**
3. **Final Score** - Large, prominent display
4. **Review Section** - List of all questions

### Answer Review

Each question shows:
- ✅ **Green checkmark** = You answered correctly
- ❌ **Red X** = You answered incorrectly or timed out
- **Question text** - The original question
- **Correct answer** - Highlighted in bold

Example:
```
✅ What is 15% of 200? - 30
❌ Solve for x: 3x - 7 = 11 - 6
✅ Square root of 225? - 15
```

---

## 🔄 Restarting the Quiz

### Two Ways to Restart

1. **Restart Button**
   - Click blue "Restart Quiz" button on results screen
   - Reloads the page completely
   - Resets all scores and progress

2. **Browser Refresh**
   - Press F5 or Ctrl+R (Cmd+R on Mac)
   - Returns to start screen
   - Same effect as restart button

---

## 📚 Quiz Content

### Question Types

The quiz covers 5 math topics:

1. **Percentages** - Calculate percentage values
   - Example: "What is 15% of 200?"

2. **Algebra** - Solve simple equations
   - Example: "Solve for x: 3x - 7 = 11"

3. **Square Roots** - Basic root calculations
   - Example: "Square root of 225?"

4. **Geometry** - Angle measurements
   - Example: "How many degrees in a right angle?"

5. **Arithmetic** - Order of operations
   - Example: "Value of (8 × 3) ÷ 4 + 2?"

### Difficulty Level

- **Target audience**: Middle school to high school students
- **Time challenge**: 15 seconds adds pressure
- **Mixed difficulty**: From basic to moderate
- **Educational**: Covers fundamental math concepts

---

## 💡 Tips & Strategies

### For Best Performance

1. **Read Carefully**
   - Don't rush despite the timer
   - Misreading can lead to wrong answers

2. **Mental Math**
   - Practice quick calculations
   - Eliminate obvious wrong answers

3. **Stay Calm**
   - 15 seconds is usually enough
   - Panic leads to mistakes

4. **Learn from Review**
   - Study the correct answers
   - Understand where you went wrong
   - Retry to improve your score

5. **Aim for Accuracy**
   - Better to answer correctly than quickly
   - -0.25 penalty adds up fast

---

## 🎯 Scoring Interpretation

| Score Range | Performance | Emoji |
|-------------|-------------|-------|
| **4.5 - 5.0** | Excellent! | 🌟 |
| **3.5 - 4.25** | Very Good | 🎉 |
| **2.5 - 3.25** | Good | 👍 |
| **1.5 - 2.25** | Fair | 📚 |
| **Below 1.5** | Keep Practicing | 💪 |

---

## 📱 Mobile Usage

### Playing on Mobile Devices

- **Fully responsive**: Works on all screen sizes
- **Touch-friendly**: Large, easy-to-tap buttons
- **Portrait mode**: Best experience in portrait orientation
- **No pinch-zoom needed**: Text is readable by default

### Mobile Tips

- Use landscape for slightly larger buttons
- Ensure stable internet if hosted online
- Close other apps for best performance
- Use a stylus for precise tapping (optional)

---

## ♿ Accessibility

### Features

- **High contrast**: Clear text and button colors
- **Large text**: Readable font sizes
- **Color coding**: Visual feedback with colors
- **Simple navigation**: Linear, straightforward flow

### Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

---

## 🆘 Common Questions

### "Can I pause the quiz?"
No, the quiz runs continuously once started. Complete all 5 questions in one session.

### "Can I skip questions?"
No, but if the timer expires, the quiz automatically moves to the next question.

### "Can I review before submitting?"
No, each answer locks in immediately. The review comes at the end.

### "How do I improve my score?"
Practice mental math, read questions carefully, and learn from the review section.

---

## 📚 Next Steps

- **[Customization Guide](Customization-Guide.md)** - Add your own questions
- **[Technical Documentation](Technical-Documentation.md)** - Understand how it works
- **[FAQ](FAQ.md)** - More questions answered
