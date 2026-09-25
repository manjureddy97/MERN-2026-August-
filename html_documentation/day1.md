# Introduction to HTML

## What is HTML?

**Simple Definition:**
HTML is a language that tells your web browser what to show on a webpage. Think of it like a recipe card - it gives instructions on where to put text, images, and buttons.

**Why Do We Use HTML?**
- Every website you see on the internet uses HTML
- It structures the content (text, images, videos)
- Browsers read HTML and display it to users
- It's the foundation of web development

---

## How Do Websites Work? (Simple Version)

1. **User types a URL** → `google.com`
2. **Browser sends a request** → "Hey, give me the webpage"
3. **Server sends HTML file** → Browser receives the HTML code
4. **Browser reads the HTML** → Browser understands the structure
5. **Browser displays the webpage** → You see the website

```
User → Browser → Internet → Server → HTML File → Browser renders it → Display
```

---

## HTML vs Frontend vs Backend

### What is Frontend?
**Frontend = What users see**
- HTML (structure)
- CSS (styling/colors)
- JavaScript (interactivity)

### What is Backend?
**Backend = What users don't see**
- Databases (storing data)
- Servers (processing requests)
- Business logic (decision making)

**Example:**
- **Frontend:** Login form on website
- **Backend:** Checking if password is correct

**For this course:** We focus only on HTML (Frontend)

---

## How a Browser Reads HTML

```
1. Browser receives HTML file
2. Browser reads it top to bottom (line by line)
3. Browser interprets the tags
4. Browser displays the content
```

**Real example:** If you write:
```html
<h1>Hello</h1>
<p>World</p>
```
Browser shows:
```
Hello
World
```

---

## HTML Document Structure

Every HTML page has the same basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Information about the page -->
  </head>
  <body>
    <!-- Content users see -->
  </body>
</html>
```

### Let's understand each part:

#### 1. `<!DOCTYPE html>`
- **What:** Tells browser "This is HTML5"
- **Why:** HTML has different versions. This says "use the latest one"
- **Where:** Always FIRST line
- **Example:**
```html
<!DOCTYPE html>
```

#### 2. `<html>` tag
- **What:** Container for entire webpage
- **Why:** Wraps all content
- **Syntax:**
```html
<html>
  <!-- everything goes here -->
</html>
```

#### 3. `<head>` tag
- **What:** Information about the page (not displayed to users)
- **Why:** Stores metadata (page title, character set, links)
- **What goes inside:**
  - `<title>` - Page title
  - `<meta>` - Page information
  - Links to CSS, JavaScript
  
**Example:**
```html
<head>
  <title>My First Webpage</title>
  <meta charset="UTF-8">
</head>
```

#### 4. `<body>` tag
- **What:** Container for content users actually see
- **Why:** Holds all visible content
- **What goes inside:**
  - Headings
  - Paragraphs
  - Images
  - Links
  - Everything visible!

**Example:**
```html
<body>
  <h1>Welcome to my site</h1>
  <p>This is my first webpage</p>
</body>
```

#### 5. `<title>` tag
- **What:** The text shown in browser tab
- **Why:** Users know what webpage they're on
- **Goes inside:** `<head>` tag
- **Example:**
```html
<head>
  <title>Google</title>
</head>
```
**Output:** Browser tab shows "Google"

#### 6. `<meta>` tags
- **What:** Information about the webpage
- **Why:** Tells browser how to display the page
- **Most important ones:**

```html
<meta charset="UTF-8">
```
**Why:** Allows special characters (emojis, accents) to display correctly

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Why:** Makes webpage work on mobile phones (responsive)

---

## Your First HTML Page - Complete Example

Create a file named `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my first HTML webpage.</p>
  </body>
</html>
```

### Step-by-step explanation:

| Line | What | Why |
|------|------|-----|
| `<!DOCTYPE html>` | HTML version declaration | Browser knows to use HTML5 |
| `<html>` | Opens HTML document | Container for everything |
| `<head>` | Opens head section | Contains page metadata |
| `<title>My First Webpage</title>` | Sets browser tab title | Users see "My First Webpage" in tab |
| `<meta charset="UTF-8">` | Character encoding | Special characters work |
| `<meta name="viewport"...` | Mobile responsive | Works on phones too |
| `<body>` | Opens body section | This is what users see |
| `<h1>Welcome!</h1>` | Large heading | Shows "Welcome!" as big text |
| `<p>This is...</p>` | Paragraph | Shows paragraph text |
| `</body>` `</html>` | Closing tags | Closes all open tags |

### Expected Output (in browser):
```
Welcome!

This is my first HTML webpage.
```

---

## How to Run This Code

### Option 1: VS Code + Live Server (Recommended)

1. **Install VS Code** → Download from code.visualstudio.com
2. **Open VS Code**
3. **Install Live Server extension:**
   - Click Extensions (left side)
   - Search "Live Server"
   - Click Install
4. **Create a new file:**
   - File → New File
   - Type your HTML
   - Save as `index.html`
5. **Run it:**
   - Right-click on file
   - Click "Open with Live Server"
   - Browser opens automatically

### Option 2: Without Live Server
1. Create a file `index.html`
2. Write HTML code
3. Double-click the file
4. It opens in your default browser

---

## File Extensions

- `.html` → HTML file
- `.htm` → Same as .html (older format, avoid)
- `.css` → CSS file (styling)
- `.js` → JavaScript file (interactivity)

**Always use `.html` for new files.**

---

## Best Practices

✅ **DO:**
- Always include `<!DOCTYPE html>` at the top
- Always include `<title>` tag
- Use proper indentation (easier to read)
- Close all tags properly

❌ **DON'T:**
- Write HTML without DOCTYPE
- Forget closing tags
- Use inconsistent indentation
- Put `<body>` content in `<head>`

---

## Common Mistakes

### ❌ Mistake 1: Forgetting DOCTYPE
```html
<!-- WRONG -->
<html>
  <head></head>
  <body></body>
</html>
```

**FIX:**
```html
<!-- CORRECT -->
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

### ❌ Mistake 2: Forgetting Closing Tags
```html
<!-- WRONG -->
<p>This is a paragraph
<p>Another paragraph
```

**FIX:**
```html
<!-- CORRECT -->
<p>This is a paragraph</p>
<p>Another paragraph</p>
```

### ❌ Mistake 3: Content in Wrong Section
```html
<!-- WRONG -->
<head>
  <h1>Welcome</h1>  <!-- Content should be in body -->
</head>
```

**FIX:**
```html
<!-- CORRECT -->
<body>
  <h1>Welcome</h1>
</body>
```

---

## Interview Questions

1. **What does HTML stand for?**
   - Answer: HyperText Markup Language

2. **What is the difference between `<head>` and `<body>`?**
   - Answer: `<head>` contains page info (not visible), `<body>` contains visible content

3. **Why do we need `<!DOCTYPE html>`?**
   - Answer: Tells browser which HTML version to use (HTML5)

4. **What tag shows in the browser tab?**
   - Answer: `<title>` tag

5. **Is HTML a programming language?**
   - Answer: No, it's a markup language (gives instructions, doesn't calculate)

---

## Practice Assignment

### Task 1: Create Your First Webpage
Create an `index.html` file with:
- Proper HTML structure (DOCTYPE, html, head, body)
- A title that shows in the browser tab
- A heading with your name
- A paragraph about yourself

**Example output should look like:**
```
Your Name
This is me. I am learning HTML.
```

### Task 2: Understand the Structure
Write down:
- What goes in `<head>`?
- What goes in `<body>`?
- Why do we need `<meta charset="UTF-8">`?

### Task 3: Fix the Broken HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page
  </head>
  <body
    <h1>Hello</h1>
    <p>This is broken
  </body>
</html>
```
Find and fix all the errors.

---

## Summary Notes

- **HTML** = Language to create webpages
- **Structure:** DOCTYPE → html → head/body
- **Head** = Page information (title, meta tags)
- **Body** = Content users see
- **Browser** reads HTML top to bottom and displays it
- **Every HTML page** needs proper structure
- **Tags** = Instructions for browser

---

