# 📖 How to Publish Wiki to GitHub

This guide explains how to publish the wiki documentation to your GitHub repository's Wiki feature.

## 🎯 Overview

The wiki documentation has been created in the `wiki/` directory of your repository. To make it accessible as a GitHub Wiki, you need to:

1. Enable Wiki in your repository settings
2. Clone the wiki repository
3. Copy the wiki files
4. Push to GitHub

## 📋 Step-by-Step Instructions

### Step 1: Enable Wiki Feature

1. Go to your repository on GitHub: https://github.com/praveenkumarkait24/Quiz-Application-with-Timer
2. Click on **"Settings"** (top right)
3. Scroll down to the **"Features"** section
4. Check the **"Wikis"** checkbox to enable it
5. A new **"Wiki"** tab will appear in your repository

### Step 2: Clone the Wiki Repository

The GitHub Wiki is actually a separate Git repository. Clone it:

```bash
# Clone the wiki repository (note the .wiki.git suffix)
git clone https://github.com/praveenkumarkait24/Quiz-Application-with-Timer.wiki.git

# Navigate into the wiki directory
cd Quiz-Application-with-Timer.wiki
```

### Step 3: Copy Wiki Files

Copy all the markdown files from your main repository's `wiki/` directory:

```bash
# If you're in the wiki repo directory, go back one level
cd ..

# Copy all markdown files from the main repo to wiki repo
cp Quiz-Application-with-Timer/wiki/*.md Quiz-Application-with-Timer.wiki/

# Navigate to the wiki repo
cd Quiz-Application-with-Timer.wiki
```

### Step 4: Commit and Push

```bash
# Add all the wiki files
git add .

# Commit the changes
git commit -m "Add comprehensive wiki documentation"

# Push to GitHub
git push origin master
```

### Step 5: Verify

1. Go to your repository on GitHub
2. Click the **"Wiki"** tab
3. You should see the Home page with full navigation
4. Test the navigation links between pages

## 📁 Wiki Files Included

The following files will be published:

- **Home.md** - Main landing page (this becomes the wiki homepage)
- **Getting-Started.md** - Installation and setup guide
- **Features.md** - Complete feature documentation
- **Code-Architecture.md** - Technical details and code structure
- **How-to-Contribute.md** - Contribution guidelines
- **FAQ.md** - Frequently asked questions
- **_Sidebar.md** - Navigation sidebar (GitHub automatically displays this)
- **_Footer.md** - Page footer (GitHub automatically displays this)

Note: `README.md` is for the wiki directory itself and doesn't need to be copied to the wiki repo.

## 🎨 Wiki Features

Once published, your wiki will have:

### Navigation
- **Sidebar** - Automatic navigation menu on every page
- **Footer** - Consistent footer with links
- **Cross-links** - All pages link to each other

### Content
- **2,900+ lines** of comprehensive documentation
- **10 wiki pages** covering all aspects
- **Code examples** and snippets
- **Tables** and formatted content
- **Step-by-step guides**
- **Troubleshooting tips**

### Organization
- Clear section headers with emoji
- Logical information hierarchy
- Easy-to-scan content
- Beginner-friendly explanations
- Advanced technical details

## 🔄 Updating the Wiki

When you need to update the wiki:

1. **Update files in main repo:**
   ```bash
   cd Quiz-Application-with-Timer
   # Edit wiki/*.md files as needed
   git add wiki/
   git commit -m "Update wiki documentation"
   git push
   ```

2. **Sync to wiki repo:**
   ```bash
   cd Quiz-Application-with-Timer.wiki
   cp ../Quiz-Application-with-Timer/wiki/*.md .
   git add .
   git commit -m "Update wiki from main repo"
   git push origin master
   ```

## 🎯 Alternative: Manual Creation

If you prefer to create the wiki pages manually through GitHub's interface:

1. Go to the **Wiki** tab in your repository
2. Click **"Create the first page"** or **"New Page"**
3. For each page:
   - Set the page title (e.g., "Home", "Getting Started")
   - Copy the content from the corresponding `.md` file
   - Click **"Save Page"**
4. Repeat for all wiki pages

**Note:** The sidebar and footer files (`_Sidebar.md` and `_Footer.md`) should be created exactly with those names for GitHub to recognize them.

## ✅ Verification Checklist

After publishing, verify:

- [ ] Wiki tab is visible in repository
- [ ] Home page loads correctly
- [ ] Navigation links work between pages
- [ ] Sidebar appears on all pages
- [ ] Footer appears on all pages
- [ ] Images/emoji display correctly
- [ ] Code blocks are properly formatted
- [ ] Tables render correctly
- [ ] All internal links work

## 🔧 Troubleshooting

### Wiki tab not visible
- Ensure Wiki feature is enabled in Settings
- Refresh the page
- Check repository permissions

### Links not working
- GitHub Wiki links don't need `.md` extension
- Use format: `[Text](Page-Name)` not `[Text](Page-Name.md)`
- Our links are already in correct format

### Sidebar/Footer not showing
- File must be named exactly `_Sidebar.md` and `_Footer.md`
- Must be in root of wiki repository
- Both are case-sensitive

### Formatting issues
- Ensure markdown syntax is correct
- GitHub Wiki uses GitHub Flavored Markdown (GFM)
- Test with markdown preview tools first

## 📚 Additional Resources

- [GitHub Wiki Documentation](https://docs.github.com/en/communities/documenting-your-project-with-wikis)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

## 🎉 You're Done!

Once published, your wiki will provide:
- **Professional documentation** for your project
- **Easy navigation** for users
- **Technical details** for developers
- **Contribution guidelines** for collaborators
- **Help resources** for troubleshooting

Share the wiki link with users:
```
https://github.com/praveenkumarkait24/Quiz-Application-with-Timer/wiki
```

---

**Questions?** Check the [FAQ page](FAQ.md) or open an issue on GitHub!
