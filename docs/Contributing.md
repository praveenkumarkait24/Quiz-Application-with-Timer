# 🤝 Contributing Guide

Thank you for your interest in contributing to Math Master Quiz! This guide will help you get started.

## 🌟 Ways to Contribute

### 1. 🐛 Report Bugs

Found a bug? Help us fix it!

**Before Reporting**:
- Check [existing issues](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues)
- Verify it's actually a bug (check [FAQ](FAQ.md) and [Troubleshooting](Troubleshooting.md))
- Test in multiple browsers if possible

**How to Report**:
1. Go to [Issues](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues)
2. Click "New Issue"
3. Use this template:

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Open index.html
2. Click Start Quiz
3. [specific steps]

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
[If applicable]

## Environment
- Browser: Chrome 96
- OS: Windows 10
- Device: Desktop

## Console Errors
[Paste any error messages]
```

---

### 2. 💡 Suggest Features

Have an idea? We'd love to hear it!

**Good Feature Requests Include**:
- Clear description of the feature
- Why it would be useful
- How it might work
- (Optional) Implementation ideas

**Example**:
```markdown
## Feature: Dark Mode

### Description
Add a dark theme option for better viewing at night

### Use Case
Users studying late at night would benefit from reduced eye strain

### Possible Implementation
- Add dark/light toggle button
- Store preference in localStorage
- Define dark mode CSS variables
```

---

### 3. 📝 Improve Documentation

Documentation contributions are highly valued!

**Areas That Need Help**:
- Fixing typos
- Clarifying confusing sections
- Adding examples
- Translating to other languages
- Adding screenshots

**Documentation Files**:
- `README.md` - Main documentation
- `docs/*.md` - Wiki pages
- Code comments

---

### 4. 💻 Submit Code

Want to contribute code? Awesome!

#### First-Time Contributors

Look for issues labeled:
- `good first issue` - Great for beginners
- `help wanted` - We need assistance
- `documentation` - Documentation improvements

#### Code Contribution Process

**1. Fork the Repository**
```bash
# Click "Fork" button on GitHub
# Then clone your fork:
git clone https://github.com/YOUR-USERNAME/Quiz-Application-with-Timer.git
cd Quiz-Application-with-Timer
```

**2. Create a Branch**
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch Naming**:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `style/` - Code style/formatting
- `refactor/` - Code refactoring

**3. Make Your Changes**
- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Test thoroughly

**4. Test Your Changes**
- Test in multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices
- Verify no console errors
- Check all features still work

**5. Commit Your Changes**
```bash
git add .
git commit -m "Add feature: descriptive message"
```

**Commit Message Format**:
```
Add feature: Support for multiple quiz categories
Fix bug: Timer not stopping on answer selection
Update docs: Add customization examples
Refactor: Improve code organization in script.js
```

**6. Push to Your Fork**
```bash
git push origin feature/your-feature-name
```

**7. Create Pull Request**
1. Go to your fork on GitHub
2. Click "Pull Request"
3. Fill in the template:

```markdown
## Description
What does this PR do?

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing Done
- [x] Tested in Chrome
- [x] Tested in Firefox
- [ ] Tested in Safari
- [x] Tested on mobile

## Screenshots
[If applicable]

## Related Issues
Fixes #123
```

---

## 📋 Code Guidelines

### HTML Guidelines

**DO**:
```html
<!-- Semantic HTML -->
<section id="quiz-screen">
    <h2 id="question-text">Question</h2>
</section>

<!-- Descriptive IDs -->
<button id="start-btn">Start Quiz</button>
```

**DON'T**:
```html
<!-- Non-semantic -->
<div id="quiz-screen">
    <div id="question-text">Question</div>
</div>

<!-- Unclear IDs -->
<button id="btn1">Start Quiz</button>
```

---

### CSS Guidelines

**DO**:
```css
/* Use CSS variables */
:root {
    --primary: #4f46e5;
}

.button {
    background: var(--primary);
}

/* Clear, descriptive class names */
.option-btn { }
.quiz-header { }
```

**DON'T**:
```css
/* Hardcoded values everywhere */
.button {
    background: #4f46e5;
}

/* Unclear names */
.btn1 { }
.box { }
```

---

### JavaScript Guidelines

**DO**:
```javascript
// Descriptive variable names
let currentQuestionIndex = 0;
let userScore = 0;

// Comments for complex logic
function calculateScore(isCorrect) {
    // Apply bonus for quick answers
    if (isCorrect && timeLeft > 10) {
        return 1.5;  // Bonus points
    }
    return isCorrect ? 1.0 : -0.25;
}

// Consistent formatting
function showQuestion() {
    // Code here
}
```

**DON'T**:
```javascript
// Unclear names
let x = 0;
let y = 0;

// No comments for complex logic
function calc(c) {
    if (c && t > 10) {
        return 1.5;
    }
    return c ? 1.0 : -0.25;
}

// Inconsistent formatting
function showQuestion()
{
    // Code here
}
```

---

### Code Style

**Indentation**: 4 spaces (not tabs)

**Quotes**: Double quotes for strings
```javascript
const message = "Hello";  // Good
const message = 'Hello';  // Avoid
```

**Semicolons**: Always use
```javascript
let x = 5;  // Good
let x = 5   // Avoid
```

**Naming**:
- `camelCase` for variables and functions
- `kebab-case` for CSS classes and IDs
- `PascalCase` for constructors (if used)

---

## ✅ Pull Request Checklist

Before submitting, ensure:

- [ ] Code follows style guidelines
- [ ] Changes are well-tested
- [ ] No console errors
- [ ] Works in multiple browsers
- [ ] Works on mobile devices
- [ ] Documentation updated (if needed)
- [ ] Commit messages are descriptive
- [ ] No merge conflicts
- [ ] Added yourself to contributors (optional)

---

## 🎯 Priority Areas

We especially welcome contributions in these areas:

### High Priority
- 🐛 Bug fixes
- 📱 Mobile optimization
- ♿ Accessibility improvements
- 🧪 Adding tests
- 📖 Documentation improvements

### Feature Ideas
- 🎲 Question randomization
- 💾 High score tracking (localStorage)
- 🎵 Sound effects
- 🌙 Dark mode
- 📊 Statistics/analytics
- 🏆 Achievement system
- 🌐 Multiple languages

### Code Quality
- ♻️ Code refactoring
- 📝 Adding comments
- 🧹 Removing code duplication
- ⚡ Performance optimization

---

## 🚫 What NOT to Contribute

Please avoid:

- ❌ Breaking changes without discussion
- ❌ Dependencies or frameworks (keep it vanilla!)
- ❌ Huge PRs without prior discussion
- ❌ Changing core functionality drastically
- ❌ Unrelated or off-topic changes
- ❌ Code that doesn't follow guidelines

**For major changes, open an issue first to discuss!**

---

## 🤔 Questions?

- Check the [FAQ](FAQ.md)
- Read [Technical Documentation](Technical-Documentation.md)
- Open an issue for discussion
- Ask in your Pull Request

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## 🏆 Contributors

Thank you to all contributors!

<!-- Add yourself here when contributing -->

---

## 💬 Code of Conduct

### Our Standards

- ✅ Be respectful and inclusive
- ✅ Welcome newcomers
- ✅ Accept constructive criticism
- ✅ Focus on what's best for the community
- ✅ Show empathy

### Unacceptable Behavior

- ❌ Harassment or discrimination
- ❌ Trolling or insulting comments
- ❌ Personal attacks
- ❌ Publishing others' private information
- ❌ Unethical or illegal behavior

---

## 🎉 Thank You!

Every contribution, no matter how small, is valuable and appreciated. Whether it's fixing a typo, reporting a bug, or adding a feature, you're helping make Math Master Quiz better for everyone!

---

## 🔗 Helpful Resources

- **[GitHub Flow Guide](https://guides.github.com/introduction/flow/)** - Git workflow
- **[Markdown Guide](https://www.markdownguide.org/)** - Markdown syntax
- **[Semantic Versioning](https://semver.org/)** - Version numbering
- **[Keep a Changelog](https://keepachangelog.com/)** - Changelog format

---

<div align="center">

**Ready to contribute? [Fork the repo](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/fork) and get started!**

</div>
