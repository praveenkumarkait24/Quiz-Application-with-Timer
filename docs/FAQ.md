# ❓ Frequently Asked Questions (FAQ)

Common questions and answers about Math Master Quiz.

## 📱 General Questions

### What is Math Master Quiz?

Math Master Quiz is a browser-based, timer quiz application that tests your math skills with 5 questions, each having a 15-second time limit. It's built with HTML, CSS, and JavaScript—no frameworks required!

### Do I need to install anything?

No! Just download the files and open `index.html` in any modern web browser. No installation, dependencies, or configuration needed.

### What browsers are supported?

- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Safari 14+
- ✅ Microsoft Edge 90+
- ✅ Opera 76+

Basically any modern browser with JavaScript enabled.

### Is it free to use?

Yes! Math Master Quiz is completely free and open source. You can use, modify, and distribute it for educational purposes.

### Does it work offline?

Yes! Once you've downloaded the files, no internet connection is needed. All code runs locally in your browser.

### Can I use it on mobile?

Absolutely! The quiz is fully responsive and works great on:
- 📱 Smartphones
- 📱 Tablets  
- 💻 Laptops
- 🖥️ Desktops

---

## 🎮 Gameplay Questions

### How many questions are there?

The default quiz has **5 questions**, but you can easily add more by editing the `questions` array in `script.js`.

### How much time do I have per question?

**15 seconds** per question. The timer automatically starts when each question loads and counts down to 0.

### What happens if time runs out?

If the timer reaches 0 before you answer:
- The quiz automatically moves to the next question
- You receive a **-0.25 point penalty** (same as a wrong answer)
- The correct answer is shown in green

### Can I pause the quiz?

No, the quiz runs continuously once started. You must complete all questions in one session.

### Can I go back to a previous question?

No, the quiz moves forward only. Once you've answered or time expires, you move to the next question automatically.

### Can I skip questions?

Not directly, but you can let the timer expire to move forward (though you'll get the -0.25 penalty).

---

## 📊 Scoring Questions

### How does scoring work?

- ✅ **Correct answer**: +1.0 point
- ❌ **Wrong answer**: -0.25 points
- ⏰ **Time expired**: -0.25 points (same as wrong)

### What's the maximum score?

**5.0 points** (answering all 5 questions correctly)

### Can my score be negative?

Yes! If you get all questions wrong or let time expire on all:
- 5 questions × (-0.25) = **-1.25 points**

### Why the -0.25 penalty?

This discourages random guessing and encourages careful thinking, even under time pressure.

### How are decimals displayed?

Scores show up to 2 decimal places with trailing zeros removed:
- `3.00` displays as `3`
- `2.50` displays as `2.5`
- `2.75` displays as `2.75`

---

## 🎨 Customization Questions

### Can I add my own questions?

Yes! Edit the `questions` array in `script.js`. See the [Customization Guide](Customization-Guide.md) for details.

### Can I change the timer duration?

Yes! Modify the `timeLeft` value in `script.js` (line 44 and line 9). See [Customization Guide](Customization-Guide.md).

### Can I change the colors?

Yes! Edit CSS variables in `style.css` (lines 1-8). Examples:
```css
:root {
    --primary: #2563eb;  /* Change to blue */
    --bg-gradient: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
}
```

### Can I add more than 5 questions?

Absolutely! Just add more question objects to the `questions` array in `script.js`.

### Can I remove the timer?

Yes! Comment out the timeout check in the `startTimer()` function or set a very high time limit (e.g., 999 seconds).

### Can I change the penalty from -0.25?

Yes! Edit lines 59-62 in `script.js`:
```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;  // Change this
} else {
    score -= 0.5;  // Change this
}
```

---

## 🔧 Technical Questions

### What technologies are used?

- **HTML5**: Structure and markup
- **CSS3**: Styling and animations
- **JavaScript (ES6)**: Quiz logic and interactivity

No frameworks, libraries, or dependencies!

### Where is the data stored?

All questions are stored in the `questions` array in `script.js`. Scores are stored in memory (lost on page reload).

### Can I add a backend/database?

Yes, but you'll need to:
1. Set up a server (Node.js, PHP, Python, etc.)
2. Create a database (MongoDB, MySQL, PostgreSQL)
3. Add API calls to save/retrieve data
4. Modify the JavaScript to communicate with the backend

### How do I track high scores?

Use `localStorage` for client-side storage:
```javascript
localStorage.setItem('highScore', score);
const highScore = localStorage.getItem('highScore');
```

See [Customization Guide](Customization-Guide.md) for implementation details.

### Is the code documented?

Yes! Check out:
- [Technical Documentation](Technical-Documentation.md) - Architecture details
- [API Reference](API-Reference.md) - Function documentation
- Inline comments in the code

### Can I contribute to the project?

Yes! See the [Contributing Guide](Contributing.md) for how to contribute.

---

## 🐛 Troubleshooting Questions

### The quiz won't start when I click the button

**Possible causes**:
1. JavaScript is disabled in your browser
2. File paths are incorrect
3. Browser console shows errors

**Solutions**:
- Enable JavaScript: Browser Settings → Privacy & Security → JavaScript
- Check that all files are in the same folder
- Press F12 to open console and check for errors

### Timer doesn't count down

**Check**:
- JavaScript is enabled
- No browser console errors
- `script.js` is loaded correctly

### Styling looks broken

**Possible causes**:
1. `style.css` not loaded
2. File path incorrect
3. Browser cache issue

**Solutions**:
- Ensure `style.css` is in the same folder as `index.html`
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Check browser console for 404 errors

### Questions don't display correctly

**Check**:
- `questions` array syntax in `script.js`
- All questions have 4 options
- `correct` index is 0-3

### Score displays incorrectly

**Verify**:
- Scoring logic in `selectAnswer()` function
- `parseFloat(score.toFixed(2))` is working
- Browser supports ES6 JavaScript

---

## 💡 Feature Questions

### Can I add sound effects?

Yes! See the [Customization Guide](Customization-Guide.md) for implementation details.

### Can I add difficulty levels?

Yes! You can:
1. Create separate question arrays for each difficulty
2. Adjust timer duration based on difficulty
3. Modify scoring rules

See [Customization Guide](Customization-Guide.md) for examples.

### Can I add categories (Math, Science, History)?

Yes! Create separate question arrays and let users choose a category. See [Customization Guide](Customization-Guide.md).

### Can I randomize questions?

Yes! Use array shuffling:
```javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

See [Customization Guide](Customization-Guide.md) for full implementation.

### Can I add a leaderboard?

Client-side only: Use `localStorage` to save top 10 scores locally.

With backend: Build an API to save scores to a database and display global leaderboard.

---

## 🌍 Deployment Questions

### How do I host it online?

Several free options:

**1. GitHub Pages**:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```
Enable GitHub Pages in repository settings.

**2. Netlify**:
- Drag and drop your folder to Netlify
- Get instant hosting with custom domain

**3. Vercel**:
- Import from GitHub
- Automatic deployments on push

### Do I need a server?

No! This is a static website. You can:
- Open locally from files
- Host on any static hosting service
- Upload to any web server

### Can I embed it in another website?

Yes! Use an `<iframe>`:
```html
<iframe src="path/to/index.html" width="500" height="700"></iframe>
```

---

## 📚 Learning Questions

### Is this good for learning web development?

Yes! Great for learning:
- DOM manipulation
- Event handling
- Timers and intervals
- CSS animations
- Responsive design
- State management

### Where can I learn more about the code?

- [Technical Documentation](Technical-Documentation.md) - Architecture
- [API Reference](API-Reference.md) - Function details
- [MDN Web Docs](https://developer.mozilla.org/) - JavaScript reference

### Can I use this for a school project?

Absolutely! Perfect for:
- Web development courses
- JavaScript classes
- Portfolio projects
- Learning demonstrations

Just give credit if required by your institution.

---

## 🔐 Security Questions

### Is it safe to use?

Yes! The code:
- Runs entirely client-side
- Doesn't collect any personal data
- Doesn't connect to external servers
- Contains no malicious code
- Is open source and reviewable

### Does it collect my data?

No! The quiz:
- Doesn't track users
- Doesn't store personal information
- Doesn't send data anywhere
- Doesn't use cookies (except localStorage if you add it)

---

## 📄 License Questions

### What license is it under?

This project is open source and available for educational purposes. Check the repository for specific license details.

### Can I use it commercially?

Check the license file in the repository. Generally allowed with attribution, but verify first.

### Can I modify and redistribute?

Yes! You're free to:
- Modify the code
- Add features
- Change questions
- Share your version

Just give credit to the original author.

---

## 🆘 Still Have Questions?

### Where can I get help?

1. **Read the documentation**:
   - [User Guide](User-Guide.md)
   - [Technical Documentation](Technical-Documentation.md)
   - [Troubleshooting Guide](Troubleshooting.md)

2. **Check the code**:
   - Files are well-structured
   - Comments explain key sections
   - [API Reference](API-Reference.md) documents functions

3. **Ask the community**:
   - [Open an issue](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) on GitHub
   - Be specific about your question
   - Include error messages if applicable

---

## 🔗 Quick Links

- **[Home](Home.md)** - Wiki home page
- **[Quick Start](Quick-Start.md)** - Get started in 2 minutes
- **[User Guide](User-Guide.md)** - How to play
- **[Customization Guide](Customization-Guide.md)** - Modify the quiz
- **[Technical Documentation](Technical-Documentation.md)** - Code details
- **[Troubleshooting](Troubleshooting.md)** - Fix common issues

---

<div align="center">

**Didn't find your answer? [Open an issue](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues)!**

</div>
