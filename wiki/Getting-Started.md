# 🚀 Getting Started

This guide will help you get Math Master Quiz up and running on your local machine.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Basic understanding of how to open HTML files (optional)

**That's it!** No installations, no dependencies, no build tools required. 🎉

---

## 💻 Installation Methods

### Method 1: Clone from GitHub (Recommended)

**Step 1:** Clone the repository

```bash
git clone https://github.com/praveenkumarkait24/Quiz-Application-with-Timer.git
```

**Step 2:** Navigate to the project folder

```bash
cd Quiz-Application-with-Timer
```

**Step 3:** Open in your browser

- **Windows:** Double-click `index.html` or run `start index.html` in Command Prompt
- **macOS:** Double-click `index.html` or run `open index.html` in Terminal
- **Linux:** Double-click `index.html` or run `xdg-open index.html` in Terminal

### Method 2: Download ZIP

1. Visit the [GitHub repository](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer)
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to your preferred location
5. Double-click `index.html` to launch the quiz

### Method 3: Fork the Repository

Perfect for developers who want to contribute or customize:

1. Visit the [GitHub repository](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer)
2. Click the **"Fork"** button in the top right
3. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Quiz-Application-with-Timer.git
   ```
4. Navigate and open as described in Method 1

---

## 🎯 First Run

When you first open the application:

1. **Welcome Screen** appears with:
   - 🧮 Math Challenge title
   - Quiz rules: 5 Questions • 15s per round • -0.25 penalty
   - **Start Quiz** button

2. **Click "Start Quiz"** to begin

3. **Quiz Interface** shows:
   - ⏱️ Countdown timer (starts at 15 seconds)
   - 📊 Current score (starts at 0)
   - 📈 Progress bar
   - ❓ Question with 4 answer options

4. **Select your answer** and see instant feedback:
   - ✅ Correct answers turn green
   - ❌ Wrong answers turn red (correct answer still shown in green)

5. **Results Screen** displays:
   - 🏆 Final score
   - 📋 Review of all questions with correct/incorrect markers
   - 🔄 Restart Quiz button

---

## 🗂️ Project Structure

After cloning, you'll see:

```
Quiz-Application-with-Timer/
│
├── 📄 index.html          # Main HTML structure (3 screens)
├── 🎨 style.css           # Styling and animations
├── ⚙️ script.js           # Quiz logic and functionality
├── 📖 README.md           # Project documentation
└── 📚 wiki/               # Wiki documentation (optional)
```

### File Descriptions

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Contains the quiz structure with start, quiz, and results screens | ~50 lines |
| `style.css` | Modern styling with CSS variables, gradients, and responsive design | ~100 lines |
| `script.js` | Core quiz functionality including timer, scoring, and navigation | ~100 lines |

---

## 🌐 Browser Compatibility

Math Master Quiz works on all modern browsers:

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 60+ | ✅ Fully Supported |
| Safari | 12+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |
| Opera | 47+ | ✅ Fully Supported |

**Mobile Browsers:** Fully responsive and works on mobile devices!

---

## 🔧 Customization (Optional)

Want to customize the quiz? Here's how:

### Change Quiz Questions

Edit the `questions` array in `script.js`:

```javascript
const questions = [
    { q: "Your question?", options: ["A", "B", "C", "D"], correct: 0 },
    // Add more questions...
];
```

### Adjust Timer Duration

Modify the timer value in `script.js`:

```javascript
let timeLeft = 15; // Change to desired seconds (e.g., 30)
```

In the `startTimer()` function:
```javascript
timeLeft = 15; // Change this too
```

### Change Color Scheme

Edit CSS variables in `style.css`:

```css
:root {
    --primary: #4f46e5;          /* Main purple color */
    --primary-dark: #3730a3;     /* Darker purple */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --success: #10b981;          /* Green for correct answers */
    --error: #ef4444;            /* Red for wrong answers */
}
```

### Modify Scoring System

Change score values in `script.js`:

```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;  // Change correct answer points
} else {
    score -= 0.25; // Change penalty amount
}
```

---

## 🐛 Troubleshooting

### Issue: HTML file won't open in browser

**Solution:**
- Right-click on `index.html`
- Select **"Open with"** → Choose your browser
- Alternatively, drag `index.html` into an open browser window

### Issue: Styling looks broken

**Solution:**
- Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory
- Check browser console (F12) for any errors

### Issue: Timer not working

**Solution:**
- Ensure JavaScript is enabled in your browser
- Check browser console (F12) for any JavaScript errors
- Try a different browser

### Issue: Questions not displaying

**Solution:**
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Ensure `script.js` is in the same directory as `index.html`

---

## 🎓 Learning Resources

New to web development? Check out these resources:

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📞 Next Steps

Now that you're set up:

1. 📖 Explore the **[Features](Features)** documentation
2. 🏗️ Learn about the **[Code Architecture](Code-Architecture)**
3. 🤝 Read **[How to Contribute](How-to-Contribute)** if you want to help improve the project
4. ❓ Check the **[FAQ](FAQ)** for common questions

---

<div align="center">

**Ready to test your math skills? Good luck! 🎓🚀**

[⬅ Back to Home](Home) | [➡ View Features](Features)

</div>
