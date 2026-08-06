#  Links, Images, Lists, and Tables

## Links - The `<a>` Tag

### What is a link?
A link allows users to click and navigate to another webpage or location.

### Why use links?
- Connect webpages together
- Navigate to external websites
- Create navigation menus
- Enable user interaction

### Syntax:
```html
<a href="URL">Click here</a>
```

### Key Attributes:
- `href` = Where the link goes (required)
- `target` = How to open (optional)

---

## External Links - Going to Other Websites

### What is an external link?
A link that goes to a different website.

### Syntax:
```html
<a href="https://www.google.com">Go to Google</a>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Useful Websites</h1>
  
  <p>
    Learn to code: 
    <a href="https://www.codecademy.com">Codecademy</a>
  </p>
  
  <p>
    Watch tutorials: 
    <a href="https://www.youtube.com">YouTube</a>
  </p>
  
  <p>
    Ask questions: 
    <a href="https://www.stackoverflow.com">Stack Overflow</a>
  </p>
</body>
</html>
```

### Expected Output:
```
Useful Websites

Learn to code: Codecademy (appears as blue underlined text)

Watch tutorials: YouTube (appears as blue underlined text)

Ask questions: Stack Overflow (appears as blue underlined text)
```

### Key Points:
- Always include `https://` for external websites
- Link text should be descriptive (not "click here")
- Visited links turn purple

### Best Practices:
✅ Describe where the link goes
✅ Always use `https://`
✅ Use meaningful link text

### Common Mistakes:
❌ `<a href="google.com">` (missing https://)
❌ `<a href="www.google.com">` (missing protocol)
❌ `<a href="https://google.com">click here</a>` (vague text)

---

## Open Link in New Tab - `target="_blank"`

### What is `target="_blank"`?
Opens the link in a new browser tab instead of current page.

### Syntax:
```html
<a href="https://www.google.com" target="_blank">
  Visit Google
</a>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Resources</h1>
  
  <p>
    <a href="https://github.com" target="_blank">
      GitHub
    </a>
  </p>
  
  <p>
    <a href="https://stackoverflow.com" target="_blank">
      Stack Overflow
    </a>
  </p>
</body>
</html>
```

### Why Use It?
- Keeps your website open
- User doesn't lose their place
- Good for external resources

---

## Internal Links - Linking to Same Website

### What is an internal link?
A link to another page on your own website.

### Syntax:
```html
<a href="about.html">About Us</a>
<a href="pages/contact.html">Contact</a>
```

### Folder Structure Example:
```
website/
├── index.html
├── about.html
├── contact.html
└── pages/
    └── blog.html
```

### Real-World Example:
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
  <h1>My Website</h1>
  
  <p>
    <a href="about.html">About</a>
  </p>
  
  <p>
    <a href="contact.html">Contact</a>
  </p>
  
  <p>
    <a href="pages/blog.html">Blog</a>
  </p>
</body>
</html>
```

### Key Points:
- Don't use `https://` for internal links
- Use relative paths (`about.html` not `/about.html`)
- Make sure file actually exists

---

## Email Links

### What is an email link?
Clicking it opens the user's email app to send an email.

### Syntax:
```html
<a href="mailto:name@example.com">Send Email</a>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Contact Me</h1>
  
  <p>
    Questions? 
    <a href="mailto:john@example.com">Email me</a>
  </p>
  
  <p>
    Report a bug: 
    <a href="mailto:support@example.com?subject=Bug Report">
      Contact Support
    </a>
  </p>
</body>
</html>
```

### With Subject:
```html
<a href="mailto:john@example.com?subject=Hello">
  Send Email
</a>
```

### With Multiple Recipients:
```html
<a href="mailto:john@example.com,jane@example.com">
  Email Both
</a>
```

---

## Images - The `<img>` Tag

### What is the `<img>` tag?
Displays an image on a webpage.

### Why use images?
- Visually appeal
- Show information better
- Break up text
- Make pages engaging

### Syntax:
```html
<img src="image.jpg" alt="Description">
```

### Key Attributes:
- `src` = Where the image is (required)
- `alt` = Description if image doesn't load (required)
- `width` = Image width (optional)
- `height` = Image height (optional)

---

## The `alt` Attribute - Very Important!

### What is `alt`?
Alternative text shown if image doesn't load or for screen readers.

### Why is `alt` important?
- **Accessibility:** Screen readers read `alt` text for blind users
- **If image breaks:** Users see description instead of broken image
- **SEO:** Search engines use `alt` text

### Good `alt` Text:
- Describes what's in the image
- Short and simple
- Not too long

### Syntax:
```html
<!-- GOOD -->
<img src="dog.jpg" alt="Golden retriever playing in grass">

<!-- GOOD -->
<img src="chart.png" alt="Sales chart 2024">

<!-- BAD -->
<img src="dog.jpg" alt="image">

<!-- BAD -->
<img src="dog.jpg" alt="">
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Dogs</h1>
  
  <h2>Golden Retriever</h2>
  <img 
    src="golden-retriever.jpg" 
    alt="Golden retriever playing in grass"
    width="400"
  >
  <p>Friendly and loyal dogs.</p>
  
  <h2>Labrador</h2>
  <img 
    src="labrador.jpg" 
    alt="Black labrador sitting"
    width="400"
  >
  <p>Great family dogs.</p>
</body>
</html>
```

### Expected Output:
Shows two dog images with descriptions below each.

---

## Image Sizing

### Using `width` and `height`:
```html
<!-- Only width (height adjusts automatically) -->
<img src="dog.jpg" alt="Dog" width="300">

<!-- Both width and height -->
<img src="dog.jpg" alt="Dog" width="300" height="200">
```

### Best Practice:
- Specify `width` only (height adjusts automatically)
- Prevents layout shift while loading
- Keeps image aspect ratio

---

## Lists

HTML has three types of lists.

---

## Unordered Lists - Bullets

### What is an unordered list?
A list with bullet points (no particular order).

### Why use unordered lists?
- Show items without order
- Create navigation menus
- Feature lists
- Ingredients, features, etc.

### Syntax:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Shopping List</h1>
  
  <ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
    <li>Butter</li>
  </ul>
  
  <h2>Website Features</h2>
  <ul>
    <li>Fast loading</li>
    <li>Mobile responsive</li>
    <li>Secure</li>
    <li>User-friendly</li>
  </ul>
</body>
</html>
```

### Expected Output:
```
Shopping List
• Milk
• Bread
• Eggs
• Butter

Website Features
• Fast loading
• Mobile responsive
• Secure
• User-friendly
```

### Key Points:
- `<ul>` = Container (unordered list)
- `<li>` = List item (goes inside ul)
- Browser adds bullets automatically

---

## Ordered Lists - Numbers

### What is an ordered list?
A list with numbers (items in order matter).

### Why use ordered lists?
- Steps in a process
- Rankings
- Instructions
- Numbered instructions

### Syntax:
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>How to Make Coffee</h1>
  
  <ol>
    <li>Boil water in a kettle</li>
    <li>Add coffee grounds to filter</li>
    <li>Pour hot water over grounds</li>
    <li>Wait 2-3 minutes</li>
    <li>Pour into cup and enjoy</li>
  </ol>
  
  <h2>Top 3 Programming Languages</h2>
  <ol>
    <li>Python</li>
    <li>JavaScript</li>
    <li>Java</li>
  </ol>
</body>
</html>
```

### Expected Output:
```
How to Make Coffee
1. Boil water in a kettle
2. Add coffee grounds to filter
3. Pour hot water over grounds
4. Wait 2-3 minutes
5. Pour into cup and enjoy

Top 3 Programming Languages
1. Python
2. JavaScript
3. Java
```

### Key Points:
- `<ol>` = Container (ordered list)
- `<li>` = List item (goes inside ol)
- Browser numbers automatically

---

## Nested Lists

### What are nested lists?
Lists inside lists.

### Syntax:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Sub-item 2.1</li>
      <li>Sub-item 2.2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>HTML Basics</h1>
  
  <ul>
    <li>Headings
      <ul>
        <li>h1 - Main title</li>
        <li>h2 - Section title</li>
        <li>h3 - Sub-section</li>
      </ul>
    </li>
    <li>Text Formatting
      <ul>
        <li>strong - Important text</li>
        <li>em - Emphasized text</li>
      </ul>
    </li>
    <li>Media
      <ul>
        <li>img - Images</li>
        <li>video - Videos</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

### Expected Output:
```
HTML Basics
• Headings
  ○ h1 - Main title
  ○ h2 - Section title
  ○ h3 - Sub-section
• Text Formatting
  ○ strong - Important text
  ○ em - Emphasized text
• Media
  ○ img - Images
  ○ video - Videos
```

---

## Description Lists

### What is a description list?
A list of terms with their definitions.

### Syntax:
```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

- `<dl>` = Description list
- `<dt>` = Term
- `<dd>` = Definition

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Web Development Terms</h1>
  
  <dl>
    <dt>HTML</dt>
    <dd>Markup language for creating webpages</dd>
    
    <dt>CSS</dt>
    <dd>Style sheet language for styling webpages</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language for interactivity</dd>
  </dl>
</body>
</html>
```

### Expected Output:
```
Web Development Terms
HTML
    Markup language for creating webpages

CSS
    Style sheet language for styling webpages

JavaScript
    Programming language for interactivity
```

---

## Tables

### What is a table?
Displays data in rows and columns.

### Why use tables?
- Organize data clearly
- Show comparisons
- Display schedules
- Student grades
- Product comparison

### Basic Syntax:
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

### Tags Explained:
- `<table>` = Container
- `<tr>` = Table row
- `<th>` = Header cell (bold)
- `<td>` = Data cell

### Real-World Example - Student Marks:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Student Report Card</h1>
  
  <table>
    <tr>
      <th>Student Name</th>
      <th>Math</th>
      <th>English</th>
      <th>Science</th>
    </tr>
    <tr>
      <td>John</td>
      <td>85</td>
      <td>90</td>
      <td>88</td>
    </tr>
    <tr>
      <td>Sarah</td>
      <td>92</td>
      <td>87</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>78</td>
      <td>82</td>
      <td>80</td>
    </tr>
  </table>
</body>
</html>
```

### Expected Output:
```
Student Report Card

| Student Name | Math | English | Science |
|--------------|------|---------|---------|
| John         | 85   | 90      | 88      |
| Sarah        | 92   | 87      | 95      |
| Mike         | 78   | 82      | 80      |
```

---

## Table Structure with `<thead>`, `<tbody>`, `<tfoot>`

### What is table structure?
Dividing table into header, body, and footer sections.

### Why use it?
- Semantic meaning
- Better for screen readers
- Easier to style with CSS
- Professional practice

### Syntax:
```html
<table>
  <thead>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </thead>
  <tbody>
    <tr><td>Data 1</td><td>Data 2</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>Sum</td></tr>
  </tfoot>
</table>
```

### Real-World Example:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Monthly Sales</h1>
  
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>January</th>
        <th>February</th>
        <th>March</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Laptops</td>
        <td>$5000</td>
        <td>$6000</td>
        <td>$7000</td>
      </tr>
      <tr>
        <td>Phones</td>
        <td>$3000</td>
        <td>$3500</td>
        <td>$4000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>$8000</td>
        <td>$9500</td>
        <td>$11000</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

---

## Table Spanning - `colspan` and `rowspan`

### `colspan` - Span Across Columns

```html
<table>
  <tr>
    <th colspan="2">Two-column header</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

**Example:**
```
| Two-column header    |
|--------|---------|
| Cell 1 | Cell 2  |
```

### `rowspan` - Span Across Rows

```html
<table>
  <tr>
    <th>Column 1</th>
    <td rowspan="2">Spans 2 rows</td>
  </tr>
  <tr>
    <th>Column 2</th>
  </tr>
</table>
```

### Real-World Example - Class Schedule:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Class Schedule</h1>
  
  <table>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
    </tr>
    <tr>
      <td>9 AM</td>
      <td colspan="2">Math Class</td>
    </tr>
    <tr>
      <td>10 AM</td>
      <td>English</td>
      <td>Science</td>
    </tr>
  </table>
</body>
</html>
```

---

## Best Practices for Links, Images, and Lists

### Links:
✅ Use descriptive text
✅ Always use `https://`
✅ Use `target="_blank"` for external sites
✅ Make links stand out

### Images:
✅ Always include `alt` text (important!)
✅ Specify `width` attribute
✅ Use optimized image files
✅ Make sure image files exist

### Lists:
✅ Use `<ul>` for unordered items
✅ Use `<ol>` for ordered steps
✅ Nest lists when appropriate
✅ Don't use lists for layout

### Tables:
✅ Use proper structure (thead, tbody, tfoot)
✅ Use `<th>` for headers
✅ Keep tables simple
✅ Don't use for layout (use CSS instead)

---

## Common Mistakes

### ❌ Links:
```html
<!-- WRONG - Missing https -->
<a href="google.com">Google</a>

<!-- WRONG - Bad link text -->
<a href="https://google.com">click here</a>
```

### ❌ Images:
```html
<!-- WRONG - No alt text -->
<img src="dog.jpg">

<!-- WRONG - File doesn't exist -->
<img src="dog.jpg" alt="Dog">
```

### ❌ Lists:
```html
<!-- WRONG - li outside ul -->
<ul>
<li>Item 1</li>
</ul>
<li>Item 2</li>

<!-- WRONG - Too nested -->
<ul>
  <li>Item
    <ul>
      <li>Sub
        <ul>
          <li>Too deep</li>
```

### ❌ Tables:
```html
<!-- WRONG - No headers -->
<table>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>

<!-- WRONG - Using table for layout -->
<table>
  <tr>
    <td>Header</td>
  </tr>
  <tr>
    <td>Content</td>
  </tr>
</table>
```

---

## Interview Questions

1. **What is the difference between `<ol>` and `<ul>`?**
   - Answer: `<ul>` for unordered (bullets), `<ol>` for ordered (numbers)

2. **Why is the `alt` attribute important?**
   - Answer: For accessibility and when images don't load

3. **What does `target="_blank"` do?**
   - Answer: Opens link in a new browser tab

4. **What is `colspan` used for?**
   - Answer: To span a cell across multiple columns

5. **How do you make an email link?**
   - Answer: `<a href="mailto:email@example.com">Email</a>`

6. **What's the correct table structure?**
   - Answer: `<table>` > `<thead>`, `<tbody>`, `<tfoot>` > `<tr>` > `<th>` or `<td>`

---

## Practice Assignment

### Task 1: Create a Navigation Menu
Create an HTML page with:
- A `<h1>` title
- A list of internal and external links
- At least one external link with `target="_blank"`

### Task 2: Product Gallery
Create a table showing:
- Product name
- Price
- In stock (yes/no)
- At least 5 products
- Use `<thead>` and `<tbody>`

### Task 3: Build a Complete Page
Create a page with:
- Navigation links at the top
- Product images with `alt` text
- A list of features
- A pricing table
- Contact link at bottom

### Task 4: Fix the Table
```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
  </tr>
  <tr>
    <th>John</th>
    <td>25</td>
  </tr>
</table>
```
Issues to find:
1. Header row not marked properly
2. Inconsistent use of `<th>` and `<td>`
3. Missing `<thead>`

---

## Summary Notes

- **Links:** `<a href="URL">text</a>` - Click to navigate
- **Images:** `<img src="file.jpg" alt="description">` - Always use alt!
- **Unordered List:** `<ul>` with bullets
- **Ordered List:** `<ol>` with numbers
- **Description List:** `<dl>` for terms and definitions
- **Tables:** `<table>` > `<thead>`, `<tbody>` > `<tr>` > `<th>`, `<td>`
- **colspan:** Span across columns
- **rowspan:** Span across rows

