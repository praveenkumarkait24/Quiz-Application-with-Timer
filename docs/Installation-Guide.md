# 📦 Installation Guide

Complete installation instructions for Math Master Quiz.

## 📋 Prerequisites

### System Requirements
- **Operating System**: Windows, macOS, or Linux
- **Web Browser**: Any modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **No additional software required!**

### Optional Tools
- **Git**: For cloning the repository
- **Text Editor**: VS Code, Sublime Text, etc. (if you want to modify the code)
- **Local Server**: For advanced development (optional)

---

## 🚀 Installation Methods

### Method 1: Clone with Git (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/praveenkumarkait24/Quiz-Application-with-Timer.git
   ```

2. **Navigate to the folder**
   ```bash
   cd Quiz-Application-with-Timer
   ```

3. **Open in browser**
   - Double-click `index.html`
   - Or use command line:
     ```bash
     # Windows
     start index.html
     
     # macOS
     open index.html
     
     # Linux
     xdg-open index.html
     ```

### Method 2: Download ZIP

1. Go to [GitHub Repository](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer)
2. Click **"Code"** → **"Download ZIP"**
3. Extract the ZIP file to your desired location
4. Open `index.html` in your browser

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. Go to **File** → **Clone Repository**
3. Enter: `praveenkumarkait24/Quiz-Application-with-Timer`
4. Choose location and click **Clone**
5. Open `index.html` from the cloned folder

---

## 🌐 Running with Local Server (Optional)

For a more development-friendly setup:

### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Using Node.js (http-server)
```bash
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

### Using VS Code Live Server
1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select **"Open with Live Server"**

---

## 📁 File Structure After Installation

```
Quiz-Application-with-Timer/
│
├── 📄 index.html          # Main HTML file (open this!)
├── 🎨 style.css           # Styling
├── ⚙️ script.js           # Quiz logic
├── 📖 README.md           # Project documentation
└── 📚 docs/               # Wiki documentation
    ├── Home.md
    ├── Quick-Start.md
    ├── Installation-Guide.md
    └── ...
```

---

## ✅ Verify Installation

After installation, you should see:

1. **Start Screen** with:
   - 🧮 Math Challenge icon
   - "5 Questions • 15s per round • -0.25 penalty" text
   - Blue "Start Quiz" button

2. **Clean UI** with:
   - Purple gradient background
   - White card with rounded corners
   - Responsive layout

If you see this, installation is successful! 🎉

---

## 🔧 Troubleshooting Installation

### Issue: Files won't open in browser
- **Solution**: Make sure you're opening `index.html` (not other files)
- Try right-clicking → Open with → [Your Browser]

### Issue: Styling looks broken
- **Solution**: Ensure all files (`index.html`, `style.css`, `script.js`) are in the same folder
- Check browser console for errors (F12 key)

### Issue: Quiz doesn't start
- **Solution**: Enable JavaScript in your browser
- Try a different browser
- Check browser console for errors

---

## 🔄 Updating the Quiz

To get the latest version:

```bash
cd Quiz-Application-with-Timer
git pull origin main
```

Or re-download the ZIP file from GitHub.

---

## 🗑️ Uninstallation

Simply delete the `Quiz-Application-with-Timer` folder. No system files are modified.

---

## 🆘 Need Help?

- Check [Troubleshooting Guide](Troubleshooting.md)
- Read the [FAQ](FAQ.md)
- [Open an issue](https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/issues) on GitHub

---

## 📚 Next Steps

- **[Quick Start](Quick-Start.md)** - Start playing immediately
- **[User Guide](User-Guide.md)** - Learn how to play
- **[Customization Guide](Customization-Guide.md)** - Modify the quiz
