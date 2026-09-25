# Basic HTML Tags

## Text Formatting Tags

HTML has special tags to format text. Let's learn the most important ones.

---

## Headings - `<h1>` to `<h6>`

### What are headings?
Headings show important titles and subtitles on a webpage.

### Why use headings?
- Show structure of content
- Important for SEO (search engines)
- Users scan headings first
- Makes pages easier to read

### Syntax:
```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Blog Article</title>
</head>
<body>
  <h1>How to Learn HTML</h1>
  <h2>What is HTML?</h2>
  <p>HTML is a markup language...</p>
  
  <h2>Why Learn HTML?</h2>
  <p>HTML is the foundation of web development...</p>
  
  <h3>Getting Started</h3>
  <p>First, download VS Code...</p>
</body>
</html>
```

### Expected Output:
```
How to Learn HTML         <- Large (h1)

What is HTML?             <- Medium (h2)
HTML is a markup language...

Why Learn HTML?           <- Medium (h2)
HTML is the foundation of web development...

  Getting Started         <- Smaller (h3)
  First, download VS Code...
```

### Key Points:
- `<h1>` = Largest, use only once per page
- `<h2>` = Section headings
- `<h3>` = Sub-section headings
- `<h4>` to `<h6>` = Less common

### Best Practices:
✅ Use `<h1>` only once per page (for main title)
✅ Use headings in order (h1 → h2 → h3, not h1 → h3)
✅ Use headings for actual content (not for styling)

### Common Mistakes:
❌ Using `<h1>` multiple times on one page
❌ Using headings just to make text big (use CSS instead)
❌ Skipping heading levels (h1 → h3, skipping h2)

---

## Paragraphs - `<p>`

### What is a paragraph?
A `<p>` tag is a block of text separated by space above and below.

### Why use `<p>`?
- Groups related sentences together
- Browsers automatically add space between paragraphs
- Semantic (tells browser this is text content)

### Syntax:
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>About Me</h1>
  
  <p>My name is John. I am a web developer. I love coding.</p>
  
  <p>I have 5 years of experience building websites. I work with HTML, CSS, and JavaScript.</p>
  
  <p>In my free time, I teach web development to beginners.</p>
</body>
</html>
```

### Expected Output:
```
About Me

My name is John. I am a web developer. I love coding.

I have 5 years of experience building websites. I work with HTML, CSS, and JavaScript.

In my free time, I teach web development to beginners.
```

### Key Points:
- Browsers automatically add space between paragraphs
- Text inside `<p>` wraps to next line if too long
- Use one `<p>` per logical paragraph

---

## Line Break - `<br>`

### What is `<br>`?
A line break creates a new line without creating a new paragraph.

### Why use `<br>`?
- Add spacing within a paragraph
- Poetry, addresses, song lyrics
- When you want a line break without paragraph spacing

### Syntax:
```html
<p>Line 1<br>Line 2</p>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Contact Address</h1>
  
  <p>
    John Smith<br>
    123 Main Street<br>
    New York, NY 10001<br>
    United States
  </p>
</body>
</html>
```

### Expected Output:
```
Contact Address

John Smith
123 Main Street
New York, NY 10001
United States
```

### Key Points:
- `<br>` is a self-closing tag (no closing tag needed)
- Use sparingly - CSS is better for spacing
- Each `<br>` adds one line break

### Common Mistakes:
❌ Using multiple `<br>` tags to add space (use CSS instead)
❌ Writing `<br></br>` (not needed, it's self-closing)

---

## Horizontal Line - `<hr>`

### What is `<hr>`?
Draws a horizontal line to separate content sections.

### Why use `<hr>`?
- Visually separate different topics
- Traditional way to show section breaks
- Semantic separation

### Syntax:
```html
<hr>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Blog</h1>
  <p>Welcome to my blog about web development.</p>
  
  <hr>
  
  <h2>Latest Article</h2>
  <p>Today I learned about HTML tags...</p>
  
  <hr>
  
  <h2>Previous Article</h2>
  <p>Yesterday I started learning HTML...</p>
</body>
</html>
```

### Expected Output:
```
My Blog
Welcome to my blog about web development.

_______________________________________________

Latest Article
Today I learned about HTML tags...

_______________________________________________

Previous Article
Yesterday I started learning HTML...
```

### Key Points:
- Self-closing tag (no closing tag)
- Used to separate content sections
- Creates visual break on page

---

## Text Formatting Tags

### 1. Bold - `<strong>` and `<b>`

**What's the difference?**
- `<strong>` = Important text (semantic, means "important")
- `<b>` = Bold text for styling (no semantic meaning)

**Which to use?**
✅ Use `<strong>` for important words
❌ Use `<b>` less often

### Syntax:
```html
<p>This is <strong>very important</strong> information.</p>
<p>This word is <b>bold</b> for styling.</p>
```

### Real-World Example:
```html
<p><strong>Warning:</strong> Do not enter without permission.</p>
<p>This feature is <strong>currently unavailable</strong>.</p>
```

### Output:
```
Warning: Do not enter without permission.
This feature is currently unavailable.
```

---

### 2. Italic - `<em>` and `<i>`

**What's the difference?**
- `<em>` = Emphasized text (semantic, means "emphasized")
- `<i>` = Italic text for styling (no semantic meaning)

**Which to use?**
✅ Use `<em>` for emphasis
❌ Use `<i>` less often

### Syntax:
```html
<p>This is <em>very important</em> information.</p>
<p>This word is <i>italic</i> for styling.</p>
```

### Real-World Example:
```html
<p>I <em>really</em> love learning to code.</p>
<p>The book title is <i>Harry Potter</i>.</p>
```

### Output:
```
I really love learning to code.
The book title is Harry Potter.
```

---

### 3. Underline - `<u>`

### Syntax:
```html
<p>This text is <u>underlined</u>.</p>
```

### Real-World Example:
```html
<p>The correct spelling is <u>accommodate</u>.</p>
```

### Key Points:
- Not used often (underlined text looks like links)
- Better to use CSS for styling

---

### 4. Mark (Highlight) - `<mark>`

### What is `<mark>`?
Highlights text with yellow background.

### Syntax:
```html
<p>This is <mark>highlighted</mark> text.</p>
```

### Real-World Example:
```html
<p>When studying, <mark>focus on key concepts</mark> like HTML tags.</p>
```

### Output:
```
When studying, focus on key concepts like HTML tags.
                   ^^^^^^^^^^^^^^^^^^^^^^^^^
                   (highlighted in yellow)
```

---

### 5. Small Text - `<small>`

### Syntax:
```html
<p>This is normal text. <small>This is smaller text.</small></p>
```

### Real-World Example:
```html
<p>Product Price: $99<small>(Was $199)</small></p>
```

---

### 6. Superscript - `<sup>` and Subscript - `<sub>`

### Superscript - `<sup>`
Text appears smaller and raised above the line.

### Syntax:
```html
<p>E=mc<sup>2</sup></p>
<p>2<sup>nd</sup> place</p>
```

### Subscript - `<sub>`
Text appears smaller and lowered below the line.

### Syntax:
```html
<p>H<sub>2</sub>O (Water)</p>
<p>CH<sub>4</sub> (Methane)</p>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Chemistry Formulas</h1>
  
  <p>Water: H<sub>2</sub>O</p>
  <p>Carbon Dioxide: CO<sub>2</sub></p>
  <p>Einstein's Formula: E=mc<sup>2</sup></p>
  <p>3<sup>rd</sup> Place Winner</p>
</body>
</html>
```

### Output:
```
Chemistry Formulas

Water: H₂O
Carbon Dioxide: CO₂
Einstein's Formula: E=mc²
3ʳᵈ Place Winner
```

---

## Complete Text Formatting Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Text Formatting</title>
</head>
<body>
  <h1>Typography Lesson</h1>
  
  <p>
    This is a <strong>very important</strong> lesson about HTML.
  </p>
  
  <p>
    I <em>really</em> love learning web development.
  </p>
  
  <p>
    The correct spelling is <u>definitely</u>, not "definitly".
  </p>
  
  <p>
    <mark>Key Concept:</mark> HTML provides structure to webpages.
  </p>
  
  <p>
    Chemical formula for water: H<sub>2</sub>O
  </p>
  
  <p>
    The area formula: A = πr<sup>2</sup>
  </p>
  
  <hr>
  
  <h2>Common Mistakes</h2>
  <p>
    <strong>Don't:</strong> Use multiple formatting tags for no reason.
  </p>
</body>
</html>
```

---

## Best Practices for Text Formatting

✅ **DO:**
- Use `<strong>` for important text
- Use `<em>` for emphasis
- Use `<mark>` to highlight key information
- Keep text readable and clear

❌ **DON'T:**
- Use too many formatting tags (makes it confusing)
- Use `<b>` and `<i>` instead of `<strong>` and `<em>`
- Format text just for styling (use CSS instead)
- Use underline (confuses with links)

---

## Common Mistakes

### ❌ Mistake 1: Forgetting to Close Tags
```html
<!-- WRONG -->
<p>This is <strong>important text
<p>Another paragraph</p>
```

**FIX:**
```html
<!-- CORRECT -->
<p>This is <strong>important</strong> text</p>
<p>Another paragraph</p>
```

### ❌ Mistake 2: Wrong Tag Order
```html
<!-- WRONG -->
<p>This is <strong><em>text</strong></em></p>
```

**FIX:**
```html
<!-- CORRECT -->
<p>This is <strong><em>text</em></strong></p>
```

### ❌ Mistake 3: Using Wrong Tags for Meaning
```html
<!-- WRONG - Using <b> for important text -->
<p>This is <b>very important</b> information.</p>
```

**FIX:**
```html
<!-- CORRECT -->
<p>This is <strong>very important</strong> information.</p>
```

---

## Interview Questions

1. **What is the difference between `<strong>` and `<b>`?**
   - Answer: `<strong>` means the text is important (semantic), `<b>` just makes it bold (styling only)

2. **What is the difference between `<em>` and `<i>`?**
   - Answer: `<em>` means emphasis (semantic), `<i>` just makes it italic (styling only)

3. **When should you use `<br>`?**
   - Answer: For line breaks within a paragraph (addresses, poetry), not for spacing

4. **What does `<mark>` tag do?**
   - Answer: It highlights text with a yellow background

5. **What is the correct order for opening and closing nested tags?**
   - Answer: `<strong><em>text</em></strong>` - last opened, first closed

6. **Should you use `<h1>` multiple times on one page?**
   - Answer: No, use only one `<h1>` per page for the main title

---

## Practice Assignment

### Task 1: Create a Formatted Article
Create an HTML page with:
- One `<h1>` heading (page title)
- Two `<h2>` sub-headings
- Paragraphs using `<strong>` and `<em>` appropriately
- Use `<hr>` to separate sections
- Include at least one `<mark>` tag

**Example topic:** "How to Stay Healthy"

### Task 2: Fix the Formatting Errors
```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Article</h1>
  
  <p>This is <strong>important<em> and emphasized</strong></em> text.</p>
  
  <p>Water is H2O
  
  <p>Visit <u>www.google.com</u> for more information.
</body>
</html>
```

Fix:
1. Closing tag order
2. Missing closing tags
3. Subscript for H2O

### Task 3: Write Semantic HTML
Write HTML that includes:
- A heading
- A paragraph with `<strong>` text
- A paragraph with `<em>` text
- A paragraph with both `<strong>` and `<em>`

Make sure it reads naturally, not awkwardly formatted.

---

## Summary Notes

- **`<h1>` to `<h6>`** = Headings (h1 largest, h6 smallest)
- **`<p>`** = Paragraph (text block with spacing)
- **`<br>`** = Line break (within paragraph)
- **`<hr>`** = Horizontal line (section separator)
- **`<strong>`** = Important text (semantic)
- **`<b>`** = Bold text (styling only)
- **`<em>`** = Emphasized text (semantic)
- **`<i>`** = Italic text (styling only)
- **`<mark>`** = Highlighted text
- **`<small>`** = Smaller text
- **`<sup>`** = Superscript (above line)
- **`<sub>`** = Subscript (below line)
- **Use semantic tags** for meaning, not just styling

---

