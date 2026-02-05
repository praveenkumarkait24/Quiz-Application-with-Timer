# ❓ FAQ (Frequently Asked Questions)

Find answers to common questions about Math Master Quiz.

---

## 🎮 General Questions

### Q: What is Math Master Quiz?

**A:** Math Master Quiz is an interactive, timer-based quiz application that tests your mathematical skills. It features 5 questions with a 15-second countdown timer for each, instant feedback, and a scoring system that rewards accuracy.

---

### Q: Do I need to install anything to use this?

**A:** No! This is a pure HTML/CSS/JavaScript application. Simply open `index.html` in any modern web browser, and you're ready to go. No installations, no dependencies, no setup required.

---

### Q: Does it work offline?

**A:** Yes! Once you've downloaded the files, the quiz works completely offline. There are no external resources, APIs, or network requests.

---

### Q: Is it free to use?

**A:** Absolutely! This project is open source and completely free to use for personal or educational purposes.

---

### Q: What devices and browsers are supported?

**A:** Math Master Quiz works on:

**Desktop Browsers:**
- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

**Mobile Browsers:**
- ✅ iOS Safari
- ✅ Chrome for Android
- ✅ Samsung Internet

**Devices:**
- ✅ Desktop computers
- ✅ Laptops
- ✅ Tablets
- ✅ Smartphones

---

## 🎯 Quiz Functionality

### Q: How many questions are in the quiz?

**A:** Currently, there are **5 math questions** covering various topics including percentages, algebra, square roots, geometry, and arithmetic.

---

### Q: How much time do I have per question?

**A:** You get **15 seconds** per question. A countdown timer displays at the top of the screen.

---

### Q: What happens if time runs out?

**A:** If the timer reaches 0 before you select an answer, it's treated as a wrong answer, and you'll lose **0.25 points**. The correct answer will be shown, and the quiz automatically moves to the next question.

---

### Q: How does the scoring system work?

**A:** The scoring system is:
- ✅ **Correct answer:** +1.0 point
- ❌ **Wrong answer:** -0.25 points
- ⏰ **Timeout:** -0.25 points (same as wrong)

**Example:**
- Answer 3 correctly, 2 wrongly: (3 × 1.0) + (2 × -0.25) = 2.5 points

---

### Q: Can I get a negative score?

**A:** Yes, if you answer enough questions incorrectly or let the timer run out, your score can go negative. The minimum possible score is -1.25 (if all 5 answers are wrong).

---

### Q: Why -0.25 penalty for wrong answers?

**A:** The -0.25 penalty is designed to discourage random guessing. With 4 options per question, you have a 25% chance of guessing correctly. The penalty makes random guessing a neutral strategy (expected value of 0), encouraging thoughtful answers.

---

### Q: Can I skip a question?

**A:** No, you must either select an answer or wait for the timer to expire. The quiz automatically progresses after each question.

---

### Q: Can I go back to previous questions?

**A:** No, the quiz is designed to move forward only. Once you've answered a question, you cannot go back to change it.

---

### Q: Can I pause the quiz?

**A:** No, there's currently no pause feature. Once you start, the quiz runs continuously through all 5 questions.

---

## 🔄 After the Quiz

### Q: How do I see my results?

**A:** After answering all 5 questions, a results screen automatically appears showing:
- 🏆 Your final score
- 📋 A review of all questions
- ✅/❌ Indicators for correct/incorrect answers
- The correct answer for each question

---

### Q: Can I review my answers?

**A:** Yes! The results screen shows all questions with:
- Your result (✅ for correct, ❌ for wrong)
- The question text
- The correct answer (in bold)

---

### Q: How do I restart the quiz?

**A:** Click the **"Restart Quiz"** button on the results screen. This reloads the page and resets everything back to the start screen.

---

### Q: Are my scores saved?

**A:** Currently, scores are not saved. Once you close the browser or reload the page, your score is lost. This is a potential future enhancement.

---

## 🎨 Customization

### Q: Can I change the questions?

**A:** Yes! If you have access to the code, you can edit the `questions` array in `script.js`:

```javascript
const questions = [
    {
        q: "Your custom question?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0  // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

---

### Q: Can I change the timer duration?

**A:** Yes! Edit these values in `script.js`:

```javascript
let timeLeft = 15;  // Change to desired seconds

// In startTimer() function:
timeLeft = 15;  // Change this too
```

---

### Q: Can I modify the scoring system?

**A:** Yes! Edit the `selectAnswer()` function in `script.js`:

```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;   // Change correct answer points
} else {
    score -= 0.25;  // Change penalty amount
}
```

---

### Q: Can I change the colors/theme?

**A:** Yes! Edit the CSS variables in `style.css`:

```css
:root {
    --primary: #4f46e5;          /* Main color */
    --success: #10b981;          /* Correct answer color */
    --error: #ef4444;            /* Wrong answer color */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

### Q: Can I add more questions?

**A:** Yes! Simply add more question objects to the `questions` array in `script.js`. The quiz will automatically adapt to any number of questions.

---

## 🐛 Troubleshooting

### Q: The quiz isn't loading. What should I do?

**A:** Try these steps:
1. Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same folder
2. Clear your browser cache (Ctrl/Cmd + Shift + R)
3. Try a different browser
4. Check browser console (F12) for error messages
5. Verify JavaScript is enabled in your browser

---

### Q: The timer isn't counting down. Why?

**A:** Possible causes:
- JavaScript is disabled in your browser
- Browser doesn't support JavaScript features used
- Console errors preventing script execution (check with F12)
- Try a different browser

---

### Q: The styling looks broken/plain. What's wrong?

**A:** This usually means `style.css` isn't loading:
- Verify `style.css` is in the same directory as `index.html`
- Check that the filename is exactly `style.css` (not `Style.css` or `style.CSS`)
- Clear browser cache
- Check browser console for CSS load errors

---

### Q: Buttons aren't clickable. How do I fix this?

**A:** Possible solutions:
- Ensure `script.js` is loading (check browser console)
- Verify JavaScript is enabled
- Try clicking directly on button text
- Test in a different browser
- Check for JavaScript errors in console (F12)

---

### Q: The quiz looks weird on mobile. Is this normal?

**A:** The quiz should be fully responsive. If it looks broken:
- Try rotating your device
- Ensure you're using a modern browser
- Clear browser cache
- Try zooming out if elements overlap
- Report the issue on GitHub with device details

---

### Q: Can I use this on my school/company website?

**A:** Yes! The project is open source. You can:
- Use it as-is
- Modify it for your needs
- Embed it in your website
- Host it on your servers

Just keep the attribution to the original author if you share it publicly.

---

## 💻 Technical Questions

### Q: What technologies are used?

**A:** Math Master Quiz uses:
- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Logic and interactivity

**No frameworks, libraries, or build tools!**

---

### Q: Why no framework like React or Vue?

**A:** This project intentionally uses vanilla JavaScript to:
- Keep it simple and lightweight
- Make it easy to understand for beginners
- Avoid dependencies and build processes
- Demonstrate that complex features don't require frameworks
- Ensure fast load times and offline functionality

---

### Q: Can I use this code in my project?

**A:** Yes! This is an open source project. You're free to:
- Study the code
- Use it in your projects
- Modify it to your needs
- Learn from it

If you use significant portions, please provide attribution to the original project.

---

### Q: Where is the database?

**A:** There's no database! All questions and logic are in the JavaScript code. Scores are not persisted - they exist only during the current session.

---

### Q: How can I add a backend?

**A:** While this project is frontend-only, you could add a backend to:
- Store high scores
- Track user progress
- Serve questions dynamically
- Implement user accounts

You'd need to:
1. Set up a server (Node.js, Python, PHP, etc.)
2. Create a database (MySQL, MongoDB, etc.)
3. Modify the JavaScript to make API calls
4. Handle authentication if needed

---

## 🤝 Contributing

### Q: Can I contribute to this project?

**A:** Absolutely! Contributions are welcome. You can:
- Report bugs
- Suggest features
- Improve documentation
- Submit code improvements
- Fix typos
- Enhance the UI

See the **[How to Contribute](How-to-Contribute)** page for details.

---

### Q: I found a bug. How do I report it?

**A:** Please [open an issue on GitHub](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

---

### Q: I have a feature idea. Where do I suggest it?

**A:** [Open a feature request](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues/new) on GitHub explaining:
- What feature you'd like
- Why it would be useful
- How it might work
- Any examples or mockups

---

### Q: How do I submit code changes?

**A:** Follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

See detailed instructions in **[How to Contribute](How-to-Contribute)**.

---

## 📚 Learning & Educational Use

### Q: Can I use this for teaching?

**A:** Yes! This project is perfect for:
- Teaching web development basics
- Demonstrating DOM manipulation
- Explaining JavaScript timers
- Showing responsive design
- Illustrating event handling
- Learning git and GitHub

---

### Q: Is this a good beginner project to learn from?

**A:** Absolutely! This project is ideal for beginners because:
- Simple, well-organized code (~250 lines total)
- No complex build tools or dependencies
- Clear file structure
- Demonstrates practical JavaScript concepts
- Includes timer, events, and DOM manipulation
- Fully functional, real-world application

---

### Q: What concepts can I learn from this code?

**A:** This project demonstrates:

**HTML:**
- Semantic markup
- Form elements
- Multiple screen layout

**CSS:**
- CSS Variables
- Flexbox and Grid
- Responsive design
- Transitions and animations
- Gradients

**JavaScript:**
- DOM manipulation
- Event handling
- Timers (setInterval/clearInterval)
- Array operations
- Conditional logic
- Functions and scope
- ES6 features (arrow functions, template literals)

---

## 🔮 Future Features

### Q: Will there be new features added?

**A:** The project is open to enhancements! Potential future features include:
- Difficulty levels
- More question categories
- Score persistence (localStorage)
- Sound effects
- Multiplayer mode
- Leaderboards
- Custom timer settings

Follow the GitHub repository for updates!

---

### Q: Can I request a specific feature?

**A:** Yes! Please [open a feature request](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues/new) on GitHub. While we can't guarantee all features will be implemented, all suggestions are considered.

---

## 📞 Still Have Questions?

### Q: My question isn't answered here. What should I do?

**A:** You can:
1. **Search existing GitHub issues** - Someone may have asked already
2. **Open a new GitHub issue** - For bugs or feature requests
3. **Check the other wiki pages:**
   - [Getting Started](Getting-Started) - Installation and setup
   - [Features](Features) - Detailed feature documentation
   - [Code Architecture](Code-Architecture) - Technical details
   - [How to Contribute](How-to-Contribute) - Contributing guidelines

---

<div align="center">

**Question not answered? [Open an issue on GitHub](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues)!**

[⬅ Back to How to Contribute](How-to-Contribute) | [Home](Home)

---

**Thank you for using Math Master Quiz! 🎓✨**

</div>
