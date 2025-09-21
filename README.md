# Neo's Simple Blog

A simple, lightweight blog site built with vanilla HTML/CSS/JavaScript that displays markdown files as blog posts. No Jekyll or build process required - just upload the files to GitHub Pages and it works!

## Features

- ✅ **Simple Setup**: No build process or dependencies required
- ✅ **Markdown Support**: Basic markdown parsing for formatting
- ✅ **Responsive Design**: Works on all devices
- ✅ **GitHub Pages Ready**: Upload directly to GitHub Pages
- ✅ **Fast Loading**: Pure HTML/CSS/JS, no frameworks
- ✅ **Easy to Customize**: Simple file structure

## File Structure

```
/
├── index.html          # Main blog homepage
├── style.css           # Blog styling
├── script.js           # JavaScript for markdown parsing
├── _posts/             # Your markdown blog posts
│   ├── 2025-09-22-us-history-guide.md
│   └── 2025-09-21-jp-ca-us-travel.md
└── README.md           # This file
```

## How to Use

### 1. Create Blog Posts

Add your blog posts as markdown files in the `_posts/` directory. Use this naming convention:
```
YYYY-MM-DD-your-post-title.md
```

### 2. Add Front Matter

Each markdown file should start with front matter:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-09-22
categories: [category1, category2]
tags: [tag1, tag2, tag3]
excerpt: "A brief description of your post..."
---

# Your Post Content

Your markdown content goes here...
```

### 3. Upload to GitHub Pages

1. Create a new repository on GitHub (or use existing)
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose the main branch
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### 4. Add New Posts

1. Create a new markdown file in `_posts/` with the date-title format
2. Add front matter with title, date, categories, tags, and excerpt
3. Write your content in markdown
4. Commit and push to GitHub
5. The post will automatically appear on your homepage

## Markdown Support

The blog supports basic markdown formatting:

- `# Headers` - Different header levels
- `**bold text**` - Bold formatting
- `*italic text*` - Italic formatting
- `[link text](url)` - Hyperlinks
- `- List items` - Bullet lists
- `1. Numbered lists` - Numbered lists

## Customization

### Change Blog Title

Edit the `<h1>` tag in `index.html`:

```html
<h1>Your Blog Title</h1>
```

### Modify Styling

Edit `style.css` to change colors, fonts, and layout:

```css
body {
    background-color: #your-color;
    font-family: 'Your Font', sans-serif;
}
```

### Add More Posts

Update the `posts` array in `script.js`:

```javascript
const posts = [
    {
        file: '_posts/your-new-post.md',
        title: 'Your New Post Title',
        date: 'Month Day, Year',
        excerpt: 'Your post excerpt...'
    },
    // ... existing posts
];
```

## Browser Support

Works in all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## No Build Process Required

Unlike Jekyll or other static site generators, this blog:
- ✅ No Ruby/Python dependencies
- ✅ No `gem install` or `pip install`
- ✅ No `bundle exec` commands
- ✅ Just upload files to GitHub Pages
- ✅ Works immediately

## GitHub Pages Setup

1. Push all files to your GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose your main branch
5. Your site is live!

That's it! Your simple blog is ready to use.

---

*Built with ❤️ using vanilla HTML/CSS/JS*
