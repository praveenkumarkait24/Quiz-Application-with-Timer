# 🔧 Troubleshooting Guide

Solutions to common problems and errors with Math Master Quiz.

## 🚫 Common Issues

### Issue: Quiz Won't Start

**Symptoms**:
- Clicking "Start Quiz" button does nothing
- Page doesn't respond
- Button appears but inactive

**Possible Causes**:
1. JavaScript is disabled
2. JavaScript file not loaded
3. Browser compatibility issues

**Solutions**:

**1. Enable JavaScript**
```
Chrome: Settings → Privacy and Security → Site Settings → JavaScript → Allowed
Firefox: about:config → javascript.enabled → true
Safari: Preferences → Security → Enable JavaScript
```

**2. Check File Structure**
```
Quiz-Application-with-Timer/
├── index.html       ✓ Must be present
├── script.js        ✓ Must be present  
└── style.css        ✓ Must be present
```

**3. Verify Script Loading**
- Press `F12` to open Developer Console
- Check for errors (red text)
- Look for "Failed to load resource: script.js"

**4. Check HTML Link**
```html
<!-- Should be at bottom of index.html -->
<script src="script.js"></script>
```

---

### Issue: Timer Doesn't Count Down

**Symptoms**:
- Timer shows 15 but never decreases
- Question appears but timer frozen
- No countdown happening

**Possible Causes**:
1. JavaScript error preventing execution
2. Timer function not called
3. Browser compatibility

**Solutions**:

**1. Check Browser Console**
- Press `F12`
- Look for errors in Console tab
- Common errors:
  ```
  Uncaught ReferenceError: startTimer is not defined
  Uncaught TypeError: Cannot read property 'innerText'
  ```

**2. Verify Code Syntax**
```javascript
// In script.js, check startTimer function exists
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    // ... rest of code
}
```

**3. Test Timer Manually**
- Open Console (`F12`)
- Type: `startTimer()`
- Press Enter
- Check if timer starts

**4. Clear Browser Cache**
```
Chrome: Ctrl+Shift+Delete → Clear Cached Images and Files
Firefox: Ctrl+Shift+Delete → Cache → Clear Now  
Safari: Develop → Empty Caches
```

---

### Issue: Styling Looks Broken

**Symptoms**:
- No colors or purple background
- Plain white page with black text
- Buttons not styled
- Layout broken

**Possible Causes**:
1. CSS file not loaded
2. Wrong file path
3. Browser cache issues

**Solutions**:

**1. Check CSS Link**
```html
<!-- In <head> of index.html -->
<link rel="stylesheet" href="style.css">
```

**2. Verify File Location**
- Ensure `style.css` is in same folder as `index.html`
- Check file name spelling (case-sensitive)

**3. Check Browser Console**
- Press `F12` → Network tab
- Reload page
- Look for "404 Not Found" for `style.css`

**4. Hard Refresh**
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**5. Test CSS Loading**
- Open Console (`F12`)
- Type: `getComputedStyle(document.body).background`
- Should show gradient, not plain color

---

### Issue: Questions Don't Display

**Symptoms**:
- Blank screen after clicking Start
- "Question loading..." never changes
- No options appear

**Possible Causes**:
1. Questions array empty or malformed
2. JavaScript error in `showQuestion()`
3. DOM elements not found

**Solutions**:

**1. Verify Questions Array**
```javascript
// In script.js, check format:
const questions = [
    { q: "Question?", options: ["A", "B", "C", "D"], correct: 0 },
    // ... must have all 5 questions
];
```

**2. Check Array Length**
- Open Console (`F12`)
- Type: `questions.length`
- Should return `5`

**3. Verify DOM IDs**
```javascript
// Check these elements exist in HTML:
document.getElementById("question-text")  // Should not be null
document.getElementById("options-container")  // Should not be null
```

**4. Test Manually**
- Open Console
- Type: `showQuestion()`
- Check for errors

---

### Issue: Score Displays Incorrectly

**Symptoms**:
- Score shows weird numbers
- Score doesn't update
- NaN displayed
- Wrong calculations

**Possible Causes**:
1. Math error in scoring logic
2. Type conversion issue
3. Rounding problem

**Solutions**:

**1. Check Initial Score**
```javascript
// Should start at 0
let score = 0;
```

**2. Verify Scoring Logic**
```javascript
if (selectedIndex === correctIndex) {
    score += 1.0;  // Check this
} else {
    score -= 0.25;  // Check this
}
```

**3. Test in Console**
```javascript
// Open Console, type:
let score = 0;
score += 1.0;  // Should be 1
score -= 0.25;  // Should be 0.75
```

**4. Check Display Code**
```javascript
// Should remove trailing zeros:
parseFloat(score.toFixed(2))
```

---

### Issue: Buttons Not Clickable

**Symptoms**:
- Can't click answer options
- Hover effect works but click doesn't
- Buttons appear disabled

**Possible Causes**:
1. Buttons created but no click handler
2. JavaScript error preventing attachment
3. Buttons already disabled

**Solutions**:

**1. Check Button Creation**
```javascript
// In showQuestion(), verify:
btn.onclick = () => selectAnswer(index);  // This line needed
```

**2. Test Button State**
- Open Console
- Type: `document.querySelectorAll('.option-btn')[0].disabled`
- Should return `false`

**3. Inspect Element**
- Right-click button → Inspect
- Check for `disabled` attribute
- Check for overlapping elements (z-index issues)

---

### Issue: Quiz Gets Stuck

**Symptoms**:
- Same question repeats
- Can't move to next question
- Stuck on results screen

**Possible Causes**:
1. `currentIndex` not incrementing
2. Infinite loop
3. setTimeout not working

**Solutions**:

**1. Check currentIndex**
```javascript
// In selectAnswer(), verify:
setTimeout(() => {
    currentIndex++;  // This line needed
    showQuestion();
}, 1200);
```

**2. Check Loop Logic**
```javascript
// In showQuestion():
if (currentIndex >= questions.length) return showResults();
```

**3. Test in Console**
```javascript
console.log(currentIndex);  // Should print 0, 1, 2, 3, 4, 5
```

---

### Issue: Results Screen Doesn't Show

**Symptoms**:
- After question 5, nothing happens
- Blank screen
- Stuck on quiz screen

**Possible Causes**:
1. `showResults()` not called
2. Screen switching logic error
3. DOM elements missing

**Solutions**:

**1. Verify Results Call**
```javascript
// In showQuestion():
if (currentIndex >= questions.length) return showResults();
```

**2. Check Screen Classes**
```javascript
// In showResults():
quizScreen.classList.add('hidden');  // Hide quiz
resultScreen.classList.remove('hidden');  // Show results
```

**3. Check DOM Elements**
```javascript
// Verify in HTML:
<div id="result-section" class="screen hidden">
```

---

### Issue: Timer Runs Multiple Times

**Symptoms**:
- Timer counts down too fast
- Multiple timers running
- Erratic countdown

**Possible Causes**:
1. Not clearing previous timer
2. Multiple calls to `startTimer()`

**Solutions**:

**1. Always Clear Timer First**
```javascript
function startTimer() {
    clearInterval(timer);  // MUST be first line
    timeLeft = 15;
    // ...
}
```

**2. Check for Double Calls**
- Add console.log to track calls:
```javascript
function startTimer() {
    console.log('Timer started');  // Add this for debugging
    clearInterval(timer);
    // ...
}
```

---

## 🌐 Browser-Specific Issues

### Chrome Issues

**Issue**: Quiz doesn't work offline
- **Solution**: Chrome may block local file access. Use a local server or try Firefox.

**Issue**: Timer seems slow
- **Solution**: Chrome throttles timers in background tabs. Keep tab active.

### Firefox Issues

**Issue**: Styling slightly different
- **Solution**: Firefox renders some CSS differently. Usually minor and acceptable.

### Safari Issues

**Issue**: Buttons look different
- **Solution**: Safari has different default button styles. Add explicit styling if needed.

### Mobile Browser Issues

**Issue**: Buttons hard to tap
- **Solution**: Increase button size in CSS:
```css
.option-btn {
    padding: 20px;  /* Larger tap target */
}
```

---

## 📱 Mobile-Specific Issues

### Issue: Layout Broken on Mobile

**Solution**: Check viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Issue: Text Too Small

**Solution**: Increase font sizes:
```css
@media (max-width: 600px) {
    body { font-size: 16px; }
    h2 { font-size: 1.2rem; }
}
```

### Issue: Keyboard Covers Quiz

**Solution**: The quiz doesn't use text input, so this shouldn't occur. If you added input fields, handle keyboard with JavaScript.

---

## 💻 Development Issues

### Issue: Changes Not Showing

**Cause**: Browser cache

**Solutions**:
1. **Hard refresh**: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. **Disable cache**: 
   - F12 → Network tab → Disable cache checkbox
   - Keep DevTools open while testing
3. **Incognito/Private mode**: Test in private browsing

### Issue: Can't Find Error

**Solution**: Use Browser DevTools
```
1. Press F12
2. Go to Console tab
3. Look for red error messages
4. Click error to see line number
5. Fix the error
6. Refresh page
```

### Issue: Code Works Locally But Not Online

**Possible Causes**:
1. File paths incorrect (case sensitivity)
2. Files not uploaded
3. Server configuration

**Solutions**:
- Use relative paths: `./script.js` not `/script.js`
- Check all files uploaded
- Verify file names match exactly (case-sensitive)

---

## 🔍 Debugging Tips

### Enable Console Logging

Add to `script.js` for debugging:

```javascript
function showQuestion() {
    console.log('Showing question:', currentIndex);
    // ... rest of code
}

function selectAnswer(selectedIndex) {
    console.log('Selected:', selectedIndex, 'Correct:', questions[currentIndex].correct);
    // ... rest of code
}

function updateScore() {
    console.log('Current score:', score);
}
```

### Check Variable Values

In Console (`F12`):
```javascript
currentIndex  // Check current question index
score         // Check current score
questions     // Check questions array
timeLeft      // Check remaining time
userAnswers   // Check recorded answers
```

### Validate HTML

1. Go to [W3C Validator](https://validator.w3.org/)
2. Upload `index.html`
3. Fix any errors reported

### Validate CSS

1. Go to [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
2. Upload `style.css`
3. Fix any errors reported

---

## 🆘 Still Having Issues?

### Steps to Get Help

1. **Check this guide** thoroughly
2. **Read [FAQ](FAQ.md)** for common questions
3. **Review [Technical Documentation](Technical-Documentation.md)**
4. **Open browser console** and note any errors
5. **Try in different browser** to isolate the issue

### Reporting a Bug

When opening an issue on GitHub, include:

```markdown
**Bug Description**
Clear description of the problem

**Steps to Reproduce**
1. Open index.html
2. Click Start Quiz
3. [specific action that causes issue]

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
If applicable

**Environment**
- Browser: Chrome 96
- OS: Windows 10
- Device: Desktop

**Console Errors**
[Paste any error messages from console]
```

---

## 🔗 Helpful Resources

- **[User Guide](User-Guide.md)** - How to use the quiz
- **[FAQ](FAQ.md)** - Frequently asked questions
- **[Technical Documentation](Technical-Documentation.md)** - Code architecture
- **[API Reference](API-Reference.md)** - Function documentation
- **[MDN Web Docs](https://developer.mozilla.org/)** - JavaScript reference
- **[Stack Overflow](https://stackoverflow.com/)** - Developer Q&A

---

<div align="center">

**Need more help? [Open an issue](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) on GitHub!**

</div>
