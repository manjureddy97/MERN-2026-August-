# Day 2: CSS Selectors and Colors

## Why Do We Need Different Selectors?

Imagine you have 100 paragraphs on your website.

If you use element selector `p { }`, ALL paragraphs get the same style.

But what if you want:
- 95 paragraphs to be black
- 5 paragraphs to be red (important warnings)

That's when we need different selectors to target specific elements.

---

## Universal Selector

Selects EVERY element on the page.

**Syntax:**
```css
* {
  property: value;
}
```

**Example:**
```css
* {
  color: blue;
}
```

**Output:** Everything on page becomes blue (headings, paragraphs, buttons, etc.)

**Common use:**
Remove default margins and padding from all elements:
```css
* {
  margin: 0;
  padding: 0;
}
```

**Why:** Different browsers add default spacing, so we reset it.

**Important:** Universal selector is slow on large pages. Use it sparingly.

---

## Element Selector

Selects all elements with that tag name.

**Syntax:**
```css
tagname {
  property: value;
}
```

**Examples:**
```css
h1 { color: blue; }
p { font-size: 18px; }
button { background-color: green; }
div { width: 500px; }
```

**Real-world HTML:**
```html
<h1>Title</h1>
<h1>Another Title</h1>
<p>First paragraph</p>
<p>Second paragraph</p>
```

**With CSS:**
```css
h1 { color: blue; }
p { color: gray; }
```

**Output:**
- Both h1 tags: blue
- Both paragraphs: gray

**When to use:**
- Style all elements of one type
- Simple styling

**Limitation:** You can't target specific elements.

---

## Class Selector

Selects elements with a specific class name. Use dot `.` before class name.

**Syntax:**
```css
.classname {
  property: value;
}
```

**HTML:**
```html
<p class="error">This is an error message</p>
<p>This is normal text</p>
<p class="error">Another error</p>
<div class="error">Error box</div>
```

**CSS:**
```css
.error {
  color: red;
  font-weight: bold;
}
```

**Output:**
- First paragraph: red + bold
- Second paragraph: normal
- Third paragraph: red + bold
- Div: red + bold

**Why use classes:**
- Reuse same style multiple times
- Style different elements the same way
- More flexible than element selectors

**Multiple classes:**
```html
<p class="error highlight">Important error</p>
```

```css
.error { color: red; }
.highlight { background-color: yellow; }
```

**Output:** Red text + yellow background

**Real-world example:**
```html
<button class="btn btn-primary">Submit</button>
<button class="btn btn-secondary">Cancel</button>
```

```css
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn-secondary {
  background-color: gray;
  color: black;
}
```

**Output:**
- Submit button: blue
- Cancel button: gray
- Both have same padding and border-radius

---

## ID Selector

Selects ONE specific element with that ID. Use hash `#` before ID name.

**Syntax:**
```css
#idname {
  property: value;
}
```

**HTML:**
```html
<h1 id="main-title">Welcome</h1>
<h1>Other Title</h1>
```

**CSS:**
```css
#main-title {
  color: purple;
  font-size: 48px;
}
```

**Output:**
- First h1: purple + large
- Second h1: normal

**Important rules:**
- IDs must be unique (only one element per page can have specific ID)
- Use IDs rarely - classes are usually better
- IDs have higher specificity than classes

**When to use:**
- Targeting one specific unique element
- JavaScript interactions

**Example:**
```html
<div id="header">Header content</div>
<div id="sidebar">Sidebar content</div>
<div id="footer">Footer content</div>
```

---

## Group Selector

Apply same style to multiple selectors at once. Use comma `,` between selectors.

**Syntax:**
```css
selector1, selector2, selector3 {
  property: value;
}
```

**Example:**
```css
h1, h2, h3 {
  color: blue;
  font-family: Arial;
}
```

**Output:**
- All h1, h2, h3 tags: blue + Arial font

**Real-world example:**
```css
/* Without group selector */
.btn { padding: 10px; }
.link { padding: 10px; }
.nav-item { padding: 10px; }

/* With group selector (better) */
.btn,
.link,
.nav-item {
  padding: 10px;
}
```

**Why use it:**
- Avoid repeating code
- Cleaner CSS
- Easier to maintain

---

## Descendant Selector

Selects elements INSIDE other elements. Use space between selectors.

**Syntax:**
```css
parent child {
  property: value;
}
```

**HTML:**
```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<footer>
  <a href="#">Privacy</a>
  <a href="#">Terms</a>
</footer>
```

**CSS:**
```css
nav a {
  color: blue;
}
```

**Output:**
- Links inside nav: blue
- Links inside footer: normal (not styled)

**Why it's useful:**
- Target elements only in specific contexts
- Avoid affecting elements elsewhere

**Real-world:**
```html
<article>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</article>

<aside>
  <p>Sidebar text</p>
</aside>
```

```css
article p {
  font-size: 18px;
  line-height: 1.6;
}

aside p {
  font-size: 14px;
}
```

**Output:**
- Paragraphs in article: 18px + 1.6 line-height
- Paragraph in sidebar: 14px

---

## Child Selector

Selects direct children only. Use `>` between selectors.

**Difference from descendant:**
- Descendant: targets all nested elements at any level
- Child: targets only direct children

**Syntax:**
```css
parent > child {
  property: value;
}
```

**HTML:**
```html
<ul>
  <li>Item 1
    <ul>
      <li>Nested Item 1</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>
```

**CSS:**
```css
/* Descendant selector - affects all li tags */
ul li {
  color: blue;
}

/* Child selector - affects only direct li children */
ul > li {
  color: red;
}
```

**Output:**
- With child selector: Only "Item 1" and "Item 2" are red
- Nested items would still be blue

---

## Attribute Selector

Selects elements based on attributes. Use square brackets `[]`.

**Syntax:**
```css
element[attribute="value"] {
  property: value;
}
```

**Example 1: Exact match**
```html
<input type="email">
<input type="password">
<input type="text">
```

```css
input[type="email"] {
  border: 2px solid blue;
}
```

**Output:** Only email input has blue border

**Example 2: Attribute contains value**
```html
<button class="btn-primary">Submit</button>
<button class="btn-secondary">Cancel</button>
<button class="btn-danger">Delete</button>
```

```css
/* All buttons with class starting with "btn-" */
button[class*="btn"] {
  padding: 10px;
}
```

**Example 3: Attribute starts with value**
```css
a[href^="https"] {
  color: green;  /* Secure links */
}

a[href^="http"] {
  color: orange;  /* Non-secure links */
}
```

**Real-world use:**
```css
input[type="text"] { padding: 8px; }
input[type="email"] { padding: 8px; }
input[type="password"] { padding: 8px; }

/* Better with attribute selector */
input[type] { padding: 8px; }
```

---

## Pseudo-Class Selector Basics

Selects elements in specific states. Use colon `:` before pseudo-class.

**Common pseudo-classes:**

### :hover
Triggers when you hover over element.

```html
<button>Click Me</button>
```

```css
button {
  background-color: blue;
  color: white;
  padding: 10px;
  transition: 0.3s;
}

button:hover {
  background-color: darkblue;
  cursor: pointer;
}
```

**Output:** Button turns dark blue when you hover over it.

### :active
Triggers when element is being clicked.

```css
button:active {
  transform: scale(0.98);  /* Button shrinks slightly */
}
```

### :focus
Triggers when element has focus (selected/clicked).

```css
input:focus {
  outline: 2px solid blue;
  background-color: lightyellow;
}
```

### :first-child
Selects first child of parent.

```html
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

```css
li:first-child {
  color: red;
}
```

**Output:** "First" is red.

### :last-child
Selects last child of parent.

```css
li:last-child {
  color: green;
}
```

**Output:** "Third" is green.

### :nth-child(n)
Selects specific child by position.

```css
li:nth-child(2) {
  color: blue;
}
```

**Output:** "Second" is blue.

**With patterns:**
```css
li:nth-child(2n) {  /* Every even child */
  background-color: lightyellow;
}

li:nth-child(odd) {  /* Every odd child */
  background-color: lightgray;
}
```

---

## Specificity Basics

When multiple CSS rules apply to same element, which wins?

**Specificity is like a scoring system:**

1. **Universal selector** `*` = 0 points
2. **Element selector** `p`, `div` = 1 point
3. **Class selector** `.classname` = 10 points
4. **ID selector** `#idname` = 100 points
5. **Inline CSS** `style=""` = 1000 points

**Example:**
```css
p { color: blue; }           /* Score: 1 */
.paragraph { color: red; }   /* Score: 10 */
#main { color: green; }      /* Score: 100 */
```

```html
<p id="main" class="paragraph">Hello</p>
```

**Output:** Green (ID selector wins with 100 points)

**Another example:**
```css
.btn { background: blue; }      /* Score: 10 */
.btn.primary { background: green; }  /* Score: 20 */
```

```html
<button class="btn primary">Click</button>
```

**Output:** Green (higher specificity wins)

**Rule:** More specific selectors override general ones.

---

## Colors in CSS

Colors are fundamental to web design. There are multiple ways to write colors.

### Named Colors

Use color name directly.

```css
p { color: red; }
h1 { color: blue; }
button { background-color: green; }
```

**Common named colors:**
- red, blue, green, yellow, orange, purple, pink, brown, gray, black, white

**Limitation:** Only ~140 named colors available.

**HTML:**
```html
<p>Red text</p>
<h1>Blue heading</h1>
<button>Green button</button>
```

**Output:** Obvious colors based on names.

---

### HEX Colors

Hexadecimal colors. Format: `#RRGGBB`

Each pair represents Red, Green, Blue intensity (00-FF).

**Examples:**
```css
#FF0000  /* Red (Full red, no green, no blue) */
#00FF00  /* Green */
#0000FF  /* Blue */
#FFFF00  /* Yellow (Red + Green) */
#FFA500  /* Orange */
#000000  /* Black */
#FFFFFF  /* White */
#808080  /* Gray */
#2c3e50  /* Professional dark blue */
```

**HTML:**
```html
<p style="color: #FF0000;">Red text</p>
<h1 style="color: #0000FF;">Blue heading</h1>
<button style="background-color: #00FF00;">Green button</button>
```

**Output:**
- Red paragraph
- Blue heading
- Green button

**Short form (when both digits same):**
```css
#F00  /* Same as #FF0000 */
#00F  /* Same as #0000FF */
#0F0  /* Same as #00FF00 */
```

**Why HEX:**
- Most common in web design
- Works everywhere
- Easy to remember colors
- Can create millions of colors

---

### RGB Colors

Red, Green, Blue values (0-255 each).

**Syntax:**
```css
rgb(red, green, blue)
```

**Examples:**
```css
rgb(255, 0, 0)      /* Red */
rgb(0, 255, 0)      /* Green */
rgb(0, 0, 255)      /* Blue */
rgb(255, 255, 0)    /* Yellow */
rgb(255, 165, 0)    /* Orange */
rgb(128, 128, 128)  /* Gray */
```

**HTML:**
```html
<p style="color: rgb(255, 0, 0);">Red text</p>
<button style="background-color: rgb(0, 255, 0);">Green button</button>
```

**Output:** Same colors as HEX but written differently.

**Why RGB:**
- More readable than HEX for some people
- Easier to understand intensity values
- Good for dynamic color changes in JavaScript

---

### RGBA Colors

RGB with Alpha (transparency). Same as RGB but adds transparency (0-1).

**Syntax:**
```css
rgba(red, green, blue, alpha)
```

Alpha values:
- `0` = completely transparent
- `0.5` = 50% transparent
- `1` = completely opaque (solid)

**Examples:**
```css
rgba(255, 0, 0, 1)      /* Solid red */
rgba(255, 0, 0, 0.5)    /* 50% transparent red */
rgba(255, 0, 0, 0.2)    /* 80% transparent red */
rgba(0, 0, 0, 0.7)      /* 70% transparent black */
```

**HTML:**
```html
<div style="background-color: rgba(255, 0, 0, 1);">
  Solid red background
</div>

<div style="background-color: rgba(255, 0, 0, 0.5);">
  Semi-transparent red background
</div>
```

**Output:**
- First div: solid red background
- Second div: see-through red (can see content below)

**Real-world use:**
```css
.overlay {
  background-color: rgba(0, 0, 0, 0.7);  /* Dark overlay for modals */
}

.button-hover {
  background-color: rgba(255, 255, 255, 0.2);  /* Subtle white overlay */
}
```

---

### HSL Colors

Hue, Saturation, Lightness. More intuitive than RGB.

**Syntax:**
```css
hsl(hue, saturation, lightness)
```

- **Hue:** 0-360 degrees (0=red, 120=green, 240=blue)
- **Saturation:** 0-100% (0=gray, 100=full color)
- **Lightness:** 0-100% (0=black, 50=normal, 100=white)

**Examples:**
```css
hsl(0, 100%, 50%)      /* Pure red */
hsl(120, 100%, 50%)    /* Pure green */
hsl(240, 100%, 50%)    /* Pure blue */
hsl(0, 100%, 25%)      /* Dark red */
hsl(0, 100%, 75%)      /* Light red */
hsl(0, 0%, 50%)        /* Gray */
```

**HTML:**
```html
<div style="background-color: hsl(0, 100%, 50%);">Red</div>
<div style="background-color: hsl(120, 100%, 50%);">Green</div>
<div style="background-color: hsl(240, 100%, 50%);">Blue</div>
```

**Output:** Three colored boxes: red, green, blue.

**Why HSL:**
- Easy to create color variations
- Intuitive saturation and lightness
- Great for generating color schemes

**Creating color schemes:**
```css
/* Base color */
.primary {
  background-color: hsl(200, 100%, 50%);
}

/* Darker version */
.primary-dark {
  background-color: hsl(200, 100%, 35%);
}

/* Lighter version */
.primary-light {
  background-color: hsl(200, 100%, 70%);
}
```

---

## Real-World Example: Navigation Bar

**HTML:**
```html
<nav class="navbar">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link active">Services</a>
  <a href="#" class="nav-link">Contact</a>
</nav>
```

**CSS:**
```css
.navbar {
  background-color: #2c3e50;
  padding: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 3px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-link.active {
  background-color: #3498db;
}
```

**Output:**
- Dark blue navigation bar
- White links with padding
- Links turn lighter on hover
- Active link has bright blue background

---

## Real-World Example: Product Card

**HTML:**
```html
<div class="card">
  <div class="card-header">
    <img src="product.jpg" alt="Product">
  </div>
  <div class="card-body">
    <h3>Product Name</h3>
    <p class="price">$99.99</p>
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
```

**CSS:**
```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  overflow: hidden;
}

.card-header {
  background-color: #f5f5f5;
  height: 200px;
}

.card-body {
  padding: 15px;
}

.card-body h3 {
  color: #2c3e50;
}

.price {
  color: #e74c3c;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2980b9;
}
```

**Output:**
- Nice card with image placeholder
- Product name in dark blue
- Price in red
- Blue button that darkens on hover

---

## Best Practices Day 2

1. **Prefer classes over IDs** - More flexible, better for reuse
2. **Use semantic selectors** - Keep HTML readable
3. **Keep specificity low** - Avoid !important
4. **Use color consistently** - Create color palette
5. **RGBA for transparency** - More control than opacity
6. **HSL for color schemes** - Easy to create variations
7. **Group similar selectors** - Keep CSS organized

---

## Common Mistakes

❌ **Mistake 1:** Using ID when class is better
```css
#user-name { color: blue; }
#user-email { color: blue; }
```

✅ **Fix:**
```css
.user-info { color: blue; }
```

---

❌ **Mistake 2:** Wrong specificity
```css
p { color: red; }
.text { color: blue; }  /* Won't override p */

<p class="text">Text</p>  /* Still red! */
```

✅ **Fix:**
```css
.text { color: blue; }  /* Higher specificity */
```

---

❌ **Mistake 3:** Using named colors for branding
```css
.btn { background-color: red; }  /* Changes with browser interpretation */
```

✅ **Fix:**
```css
.btn { background-color: #e74c3c; }  /* Consistent across browsers */
```

---

## Interview Questions

**Q1: What's the difference between class and ID selectors?**
A: ID is unique (one per page), class can be reused. Classes are preferred.

**Q2: What is specificity?**
A: Score system determining which CSS rule applies when multiple match. Higher wins.

**Q3: Order of specificity (low to high)?**
A: Element (1) < Class (10) < ID (100) < Inline (1000)

**Q4: What's the difference between descendant and child selector?**
A: Descendant targets all nested elements, child targets only direct children.

**Q5: How do you select first child of element?**
A: Use `:first-child` pseudo-class selector.

**Q6: What color format is most compatible?**
A: Hex (#RRGGBB) is most widely used and compatible.

**Q7: When would you use RGBA instead of RGB?**
A: When you need transparency/opacity in colors.

**Q8: What's the difference between HSL and RGB?**
A: HSL is more intuitive (hue/saturation/lightness), RGB is intensity-based.

---

## Practice Assignments

### Assignment 1: Selector Practice
1. Create HTML with multiple paragraphs
2. Use element selector to style all
3. Use class selector to highlight specific ones
4. Use pseudo-class :hover to add interactivity

### Assignment 2: Color Exploration
1. Create 10 divs with different background colors
2. Try all 4 color formats (named, hex, RGB, HSL)
3. Use RGBA to create transparent overlays
4. Create a color palette with HSL variations

### Assignment 3: Navigation Bar
1. Create navigation with links
2. Use descendant selector to style nav links
3. Use :hover pseudo-class for interaction
4. Use :active or custom class for current page

### Assignment 4: Product Card Grid
1. Create 3 product cards
2. Use group selector for common styles
3. Use class selectors for unique sections
4. Add hover effects with :hover
5. Use RGBA for shadow overlays

### Assignment 5: Specificity Challenge
1. Write CSS with different specificity scores
2. Test what overrides what
3. Try to override styles in console
4. Document what you learned

---

## Summary Notes

- **Selectors target elements** - Different types for different needs
- **Element:** targets all of type - **Class:** reusable style - **ID:** unique element
- **Descendant vs Child:** space vs > symbol
- **Pseudo-classes:** `:hover`, `:active`, `:focus`, `:first-child`
- **Specificity:** higher specificity wins (ID > Class > Element)
- **Colors:** Named, HEX, RGB, RGBA, HSL
- **RGBA:** Add transparency to colors
- **HSL:** Most intuitive for creating color variations

---
