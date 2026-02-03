# 🤝 How to Contribute

Thank you for your interest in contributing to Math Master Quiz! This guide will help you get started with contributing to the project.

---

## 🌟 Ways to Contribute

There are many ways to contribute to this project:

1. 🐛 **Report Bugs** - Found an issue? Let us know!
2. 💡 **Suggest Features** - Have an idea? Share it!
3. 📝 **Improve Documentation** - Help make docs better
4. 💻 **Submit Code** - Fix bugs or add features
5. 🎨 **Design Improvements** - Enhance the UI/UX
6. ✅ **Write Tests** - Help improve code quality
7. ⭐ **Star the Repo** - Show your support!

---

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

1. **Check existing issues** - Search [GitHub Issues](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) to see if the bug has already been reported
2. **Test in different browsers** - Verify the bug occurs in multiple browsers
3. **Clear cache** - Try clearing browser cache and testing again
4. **Use latest version** - Make sure you're using the latest code from main branch

### How to Submit a Good Bug Report

Create a new issue on GitHub with:

**Title:** Clear, descriptive title (e.g., "Timer doesn't stop when answer selected")

**Description should include:**
- **What happened** - Describe the bug
- **What you expected** - What should have happened
- **Steps to reproduce** - Detailed steps to reproduce the bug
  1. Go to '...'
  2. Click on '....'
  3. See error
- **Screenshots** - If applicable, add screenshots
- **Environment:**
  - Browser: [e.g., Chrome 120]
  - OS: [e.g., Windows 11, macOS 14]
  - Device: [e.g., Desktop, iPhone 12]

**Example Issue:**

```markdown
## Bug: Score displays as NaN after first question

### Description
After answering the first question correctly, the score shows "NaN" instead of "1".

### Steps to Reproduce
1. Open index.html in browser
2. Click "Start Quiz"
3. Select any answer for first question
4. Observe score display

### Expected Behavior
Score should show "1" for correct answer.

### Environment
- Browser: Firefox 115
- OS: Ubuntu 22.04
- Device: Desktop
```

---

## 💡 Suggesting Features

We welcome feature suggestions! Before suggesting:

1. **Check existing issues** - Look for similar feature requests
2. **Consider scope** - Ensure it aligns with project goals
3. **Think about users** - How will this benefit users?

### How to Suggest a Feature

Create a new issue with the **"Feature Request"** label:

**Title:** Clear feature description (e.g., "Add difficulty levels")

**Include:**
- **Problem it solves** - What need does this address?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches you've thought about
- **Benefits** - Why is this valuable?
- **Mockups/Examples** - Visual aids if applicable

**Example:**

```markdown
## Feature Request: Add Difficulty Levels

### Problem
Current quiz has fixed difficulty, limiting appeal to different skill levels.

### Proposed Solution
Add three difficulty modes:
- Easy: 20 seconds per question, 10 simple questions
- Medium: 15 seconds (current), 5 moderate questions
- Hard: 10 seconds, 5 advanced questions

### Benefits
- Appeals to broader audience
- Increases replayability
- Provides learning progression
```

---

## 💻 Code Contributions

### Getting Started

#### 1. Fork the Repository

Click the **"Fork"** button on [GitHub](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer).

#### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Quiz-Application-with-Timer.git
cd Quiz-Application-with-Timer
```

#### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# Or for bug fixes:
git checkout -b fix/bug-description
```

**Branch Naming Convention:**
- `feature/` - New features (e.g., `feature/difficulty-levels`)
- `fix/` - Bug fixes (e.g., `fix/timer-bug`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `style/` - UI/styling (e.g., `style/improve-buttons`)

#### 4. Make Your Changes

Follow the [coding guidelines](#-coding-guidelines) below.

#### 5. Test Your Changes

- Open `index.html` in multiple browsers
- Test all quiz functionality
- Verify responsive design on mobile
- Check for console errors (F12)

#### 6. Commit Your Changes

```bash
git add .
git commit -m "Add: Brief description of your changes"
```

**Commit Message Convention:**
- `Add:` - New feature
- `Fix:` - Bug fix
- `Update:` - Modify existing feature
- `Docs:` - Documentation changes
- `Style:` - Code formatting (no logic change)
- `Refactor:` - Code restructuring

**Examples:**
```bash
git commit -m "Add: Difficulty level selection"
git commit -m "Fix: Timer not stopping on answer selection"
git commit -m "Update: Improve button hover effects"
git commit -m "Docs: Add installation instructions to wiki"
```

#### 7. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

#### 8. Create a Pull Request

1. Go to your fork on GitHub
2. Click **"Pull Request"** button
3. Select base: `main` and compare: `your-branch`
4. Fill in PR template (if available)
5. Click **"Create Pull Request"**

---

## 📝 Coding Guidelines

### JavaScript

**Style:**
```javascript
// Use descriptive variable names
const currentQuestionIndex = 0;  // Good
const idx = 0;  // Avoid

// Use const/let, not var
const questions = [...];  // Good
var questions = [...];    // Avoid

// Use arrow functions where appropriate
array.forEach((item) => {  // Good
    // ...
});

// Add comments for complex logic
// Calculate progress as percentage
const progress = (current / total) * 100;
```

**Best Practices:**
- Write modular, reusable functions
- Avoid global variables when possible
- Clean up resources (clearInterval, event listeners)
- Handle edge cases
- Maintain existing code style

### HTML

```html
<!-- Use semantic HTML5 elements -->
<section>, <article>, <nav>, <header>, <footer>

<!-- Provide meaningful IDs and classes -->
<button id="start-btn" class="main-btn">Start Quiz</button>

<!-- Ensure accessibility -->
<button aria-label="Start the quiz">Start</button>
```

### CSS

```css
/* Use CSS variables for consistency */
:root {
    --primary: #4f46e5;
}

/* Class names should be descriptive */
.quiz-container { }     /* Good */
.qc { }                 /* Avoid */

/* Organize by sections */
/* === Typography === */
/* === Layout === */
/* === Components === */

/* Mobile-first responsive design */
.element {
    /* Mobile styles */
}

@media (min-width: 768px) {
    .element {
        /* Desktop styles */
    }
}
```

### File Organization

Maintain the simple structure:
```
Quiz-Application-with-Timer/
├── index.html     # HTML structure only
├── style.css      # All styles in one file
└── script.js      # All JavaScript in one file
```

**Don't create** additional files unless absolutely necessary.

---

## ✅ Pull Request Guidelines

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] No console errors or warnings
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] Tested on mobile devices (or responsive mode)
- [ ] Existing functionality still works
- [ ] No unnecessary files included (node_modules, .DS_Store, etc.)
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains changes

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Code refactoring

## Changes Made
- Changed X to Y
- Added Z feature
- Fixed A bug

## Testing
Describe how you tested these changes:
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested on mobile
- [ ] All quiz functions work correctly

## Screenshots (if applicable)
Add screenshots showing your changes.

## Related Issues
Closes #123 (if applicable)
```

---

## 🎨 Design Guidelines

### UI/UX Principles

1. **Consistency** - Match existing design patterns
2. **Simplicity** - Keep it clean and minimal
3. **Responsiveness** - Must work on all devices
4. **Accessibility** - Consider all users
5. **Performance** - Keep it fast and lightweight

### Color Palette

Use existing CSS variables:
```css
--primary: #4f46e5;       /* Indigo */
--primary-dark: #3730a3;  /* Dark indigo */
--success: #10b981;       /* Green */
--error: #ef4444;         /* Red */
```

### Typography

- Font: Segoe UI, system fonts
- Sizes: Maintain hierarchy (h1 > h2 > p)
- Weights: Use 400 (normal), 600 (semibold), 800 (extrabold)

### Spacing

- Use consistent rem/em units
- Maintain existing padding/margin patterns
- Ensure adequate breathing room

---

## 🔍 Code Review Process

### What We Look For

1. **Functionality** - Does it work as intended?
2. **Code Quality** - Is it clean and maintainable?
3. **Performance** - Does it impact load times or runtime?
4. **Compatibility** - Works in all browsers?
5. **Style** - Follows project conventions?
6. **Documentation** - Are changes documented?

### Review Timeline

- Initial review: Within 1-2 weeks
- Feedback incorporated: We'll review updates within a few days
- Merge: After approval and all checks pass

### If Changes Are Requested

1. Make requested changes in your branch
2. Push updates to your fork
3. PR automatically updates
4. Respond to reviewer comments
5. Request re-review when ready

---

## 🚀 Feature Development Workflow

### For Larger Features

1. **Open an Issue First**
   - Discuss the feature before coding
   - Get feedback on approach
   - Ensure it aligns with project goals

2. **Break Into Smaller PRs**
   - Multiple small PRs > One large PR
   - Easier to review
   - Faster to merge

3. **Keep Main Updated**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

---

## 📚 Documentation Contributions

### Updating the Wiki

1. Wiki files are in `wiki/` directory
2. Use clear markdown formatting
3. Add examples where helpful
4. Link related pages
5. Keep language simple and friendly

### README Updates

- Keep README concise
- Update screenshots if UI changes
- Verify all links work
- Update feature list if needed

---

## 🏆 Recognition

Contributors will be:
- Listed in GitHub contributors
- Mentioned in release notes (for significant contributions)
- Credited in documentation (for major features)

---

## ❓ Questions?

### Need Help?

- 💬 Comment on the issue you're working on
- 📧 Contact the maintainer via GitHub
- 📖 Check the [FAQ](FAQ) page
- 🔍 Search existing issues and PRs

### Communication Guidelines

- Be respectful and professional
- Provide context and details
- Be patient with review process
- Accept feedback gracefully
- Help others when you can

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all.

**Expected Behavior:**
- ✅ Be respectful and inclusive
- ✅ Accept constructive criticism
- ✅ Focus on what's best for the community
- ✅ Show empathy towards others

**Unacceptable Behavior:**
- ❌ Harassment or discrimination
- ❌ Trolling or insulting comments
- ❌ Personal or political attacks
- ❌ Publishing others' private information

### Enforcement

Violations may result in:
1. Warning
2. Temporary ban
3. Permanent ban

Report violations to the project maintainer.

---

## 🎓 Learning Resources

New to open source? Check out:

- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

### Git Resources

- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Docs](https://docs.github.com/en)

---

## 🙏 Thank You!

Every contribution, no matter how small, is valuable and appreciated. Whether it's:
- Fixing a typo
- Reporting a bug
- Suggesting a feature
- Submitting code

**You're helping make this project better for everyone!** 🎉

---

<div align="center">

**Ready to contribute? Pick an issue and get started!**

[⬅ Back to Code Architecture](Code-Architecture) | [Home](Home) | [➡ View FAQ](FAQ)

</div>
