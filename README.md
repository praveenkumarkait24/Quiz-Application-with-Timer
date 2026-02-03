# 🧮 Math Master Quiz - Quiz Application with Timer

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**An interactive math quiz application with time-based challenges and instant feedback**

[✨ Features](#-features) • [🛠️ Technologies](#️-technologies-used) • [📖 How It Works](#-how-it-works) • [🚀 Getting Started](#-getting-started)

</div>

---

## 📝 Description

**Math Master Quiz** is an engaging, timer-based quiz application designed to test your mathematical skills under time pressure. Built with vanilla JavaScript, HTML, and CSS, this lightweight application provides an interactive learning experience with immediate feedback, score tracking, and a comprehensive review system.

The application challenges users with 5 carefully crafted math questions ranging from percentages and algebra to geometry and arithmetic. Each question comes with a **15-second countdown timer**, creating an exciting race-against-time experience. The scoring system rewards correct answers with **+1 point** while deducting **-0.25 points** for incorrect or missed answers, encouraging accuracy and quick thinking.

---

## ✨ Features

- ⏱️ **Countdown Timer** - 15 seconds per question to keep the challenge exciting
- 📊 **Real-time Score Tracking** - Watch your score update instantly with each answer
- ✅ **Instant Feedback** - Visual indicators show correct/incorrect answers immediately
- 🎯 **Smart Scoring System** - +1 for correct answers, -0.25 penalty for wrong ones
- 📈 **Progress Bar** - Visual representation of quiz completion
- 🔄 **Quiz Review** - Detailed review of all questions with correct answers at the end
- 🎨 **Modern UI Design** - Clean, responsive interface with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Color-coded Feedback** - Green for correct, red for incorrect answers
- 🏆 **Final Results Display** - Comprehensive summary with emoji indicators

---

## 🛠️ Technologies Used

| Technology | Purpose | Icon |
|------------|---------|------|
| **HTML5** | Structure and markup | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **CSS3** | Styling, animations, and responsive design | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **JavaScript (ES6)** | Quiz logic, timer, and interactivity | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |

### 🎨 Design Features
- **CSS Variables** - For consistent theming and easy customization
- **Flexbox & Grid** - Modern layouts and responsive design
- **CSS Transitions** - Smooth animations and hover effects
- **Gradient Backgrounds** - Eye-catching purple gradient theme

---

## 📖 How It Works

### 🔄 Application Logic Flow

```
┌─────────────────┐
│  Start Screen   │  👤 User clicks "Start Quiz"
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Initialize Quiz │  📝 Reset variables (score=0, index=0, answers=[])
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Show Question   │  ❓ Display question + 4 options
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Start Timer    │  ⏱️ 15-second countdown begins
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
   User Selects      Timer Expires (15s)
     Answer              (Auto -0.25)
         │                  │
         └────────┬─────────┘
                  │
                  ▼
         ┌─────────────────┐
         │ Validate Answer │
         └────────┬────────┘
                  │
         ┌────────┴─────────┐
         │                  │
    ✅ Correct         ❌ Wrong/Timeout
    (+1 point)         (-0.25 points)
         │                  │
         └────────┬─────────┘
                  │
                  ▼
         ┌─────────────────┐
         │ Update Score &  │
         │ Show Feedback   │  🎨 Color-code options
         └────────┬────────┘
                  │
                  ▼
         ┌─────────────────┐
         │ Wait 1.2s       │  ⏳ Brief pause for user to see feedback
         └────────┬────────┘
                  │
                  ▼
         ┌─────────────────┐
         │ Next Question?  │
         └────────┬────────┘
                  │
         ┌────────┴─────────┐
         │                  │
    More Questions      All Done
         │                  │
         └──────┐           ▼
                │   ┌─────────────────┐
                │   │  Show Results   │  🏆 Final score + review
                │   └─────────────────┘
                │           │
                │           ▼
                │   ┌─────────────────┐
                │   │ Review Answers  │  📋 Display all Q&A with ✅/❌
                │   └─────────────────┘
                │           │
                │           ▼
                │   ┌─────────────────┐
                │   │ Restart Option  │  🔄 Page reload to restart
                │   └─────────────────┘
                │
                └───▶ (Loop back to Show Question)
```

### 🧩 Key Components

#### 1️⃣ **Question Management**
- Array of 5 math questions with 4 options each
- Tracks correct answer index (0-3)
- Sequential question display with progress tracking

#### 2️⃣ **Timer System**
```javascript
- Countdown from 15 seconds
- Updates every 1 second
- Auto-submits on timeout (treated as wrong answer)
- Cleared when user selects answer
```

#### 3️⃣ **Scoring Algorithm**
```javascript
Correct Answer: score += 1.0
Wrong/Timeout:  score -= 0.25
Final Display:  parseFloat(score.toFixed(2)) // Removes trailing zeros
```

#### 4️⃣ **Answer Validation**
- Compares user selection with correct answer index
- Applies color coding:
  - ✅ **Green** (#d1fae5) - Correct answer
  - ❌ **Red** (#fee2e2) - Wrong answer
- Disables all options after selection
- Stores user answers for final review

#### 5️⃣ **Progress Tracking**
- Visual progress bar: `(currentIndex / totalQuestions) * 100%`
- Real-time score display with decimal precision
- Question counter implicit in progress bar width

---

## 🚀 Getting Started

### 📋 Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations or dependencies required!

### 💻 Installation & Usage

1️⃣ **Clone the repository**
```bash
git clone https://github.com/praveenkumarkait24/Quiz-Application-with-Timer.git
```

2️⃣ **Navigate to the project folder**
```bash
cd Quiz-Application-with-Timer
```

3️⃣ **Open in browser**
```bash
# Simply open index.html in your preferred browser
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

**Or** just double-click `index.html` to launch the quiz! 🎉

---

## 📁 Project Structure

```
Quiz-Application-with-Timer/
│
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and animations
├── ⚙️ script.js           # Quiz logic and functionality
└── 📖 README.md           # Project documentation
```

### File Descriptions

| File | Description | Lines of Code |
|------|-------------|---------------|
| `index.html` | Contains the quiz structure with three screens: start, quiz, and results | ~50 |
| `style.css` | Modern styling with CSS variables, gradients, and responsive design | ~100 |
| `script.js` | Core quiz functionality including timer, scoring, and navigation logic | ~100 |

---

## 🎮 How to Play

1. **🚀 Start**: Click the "Start Quiz" button on the welcome screen
2. **📖 Read**: Carefully read each question (you have 15 seconds!)
3. **🖱️ Click**: Select your answer from the 4 options
4. **👀 Review**: See immediate feedback (green = correct, red = wrong)
5. **➡️ Continue**: Automatically moves to next question after 1.2 seconds
6. **🏁 Finish**: View your final score and review all answers
7. **🔄 Retry**: Click "Restart Quiz" to try again and improve your score!

---

## 🎯 Quiz Questions

The quiz includes 5 diverse math questions covering:
- 📊 **Percentages** - Calculate percentage values
- 🔢 **Algebra** - Solve simple equations
- √ **Square Roots** - Basic root calculations
- 📐 **Geometry** - Angle measurements
- ➗ **Arithmetic** - Order of operations (BODMAS/PEMDAS)

---

## 🌟 Future Enhancements

- 🔧 **Difficulty Levels** - Easy, Medium, Hard modes
- 📚 **Question Categories** - Physics, Chemistry, History, etc.
- 💾 **Local Storage** - Save high scores
- 🎵 **Sound Effects** - Audio feedback for answers
- 📊 **Analytics Dashboard** - Track performance over time
- 🌐 **Multiplayer Mode** - Compete with friends
- 🎲 **Random Questions** - Shuffle from larger question pool

---

## 👨‍💻 Author

**Praveen Kumar**
- GitHub: [@praveenkumarkait24](https://github.com/praveenkumarkait24)

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and ☕ by Praveen Kumar**

</div>
