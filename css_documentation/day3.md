# Day 3: Text, Fonts, and Styling

## Why Typography Matters

Good typography is 95% of web design.

Poor typography makes text hard to read. Good typography makes reading enjoyable.

**Compare these:**
```css
/* Bad */
body {
  font-size: 12px;
  line-height: 1;
  font-family: Impact;
}

/* Good */
body {
  font-size: 16px;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
}
```

Same text, completely different readability.

---

## Color Property

Changes text color (foreground color).

**Syntax:**
```css
color: value;
```

**Examples:**
```css
p {
  color: red;
}

h1 {
  color: #2c3e50;
}

.highlight {
  color: rgb(255, 165, 0);
}

.subtle {
  color: rgba(0, 0, 0, 0.6);
}
```

**Output:**
- Red paragraph text
- Dark blue heading
- Orange text
- Semi-transparent black text

**Common text colors:**
- Dark colors for body text: `#333`, `#444`, `rgb(50, 50, 50)`
- Light colors for light backgrounds: `#666`, `#999`
- Never use pure black `#000` on white (too harsh)
- Never use pure white `#fff` on black (eye strain)

**Real example:**
```html
<article>
  <h1>Article Title</h1>
  <p class="meta">By John | 5 min read</p>
  <p>Main content here...</p>
  <p class="note">Important note</p>
</article>
```

```css
article h1 {
  color: #2c3e50;
}

article .meta {
  color: #7f8c8d;
}

article p {
  color: #34495e;
}

article .note {
  color: #e74c3c;
}
```

**Output:**
- Dark blue heading
- Gray metadata
- Dark blue body text
- Red important note

---

## Font-Size Property

Controls size of text.

**Syntax:**
```css
font-size: value;
```

**Units:**
- `px` (pixels) - fixed size
- `em` - relative to parent
- `rem` - relative to root
- `%` - percentage

**Examples:**
```css
p {
  font-size: 16px;
}

h1 {
  font-size: 48px;
}

small {
  font-size: 12px;
}

.large {
  font-size: 24px;
}

.extra-large {
  font-size: 200%;
}
```

**HTML:**
```html
<h1>Large Heading</h1>
<p>Regular paragraph</p>
<small>Small text</small>
```

**Output:**
- Extra large heading
- Normal sized paragraph
- Very small text

**Font size scale (typical):**
- h1: 32-48px
- h2: 28-36px
- h3: 24-28px
- h4: 20-24px
- p: 14-18px
- small: 12-14px

**Mobile vs Desktop:**
```css
/* Mobile */
p { font-size: 14px; }

/* Desktop */
@media (min-width: 768px) {
  p { font-size: 16px; }
}
```

---

## Font-Family Property

Controls which font is used.

**Syntax:**
```css
font-family: font1, font2, fallback;
```

**Important:** Always provide fallback fonts!

**Safe fonts (system fonts):**
```css
/* Serif fonts */
font-family: Georgia, serif;
font-family: "Times New Roman", serif;

/* Sans-serif fonts */
font-family: Arial, sans-serif;
font-family: Verdana, sans-serif;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

/* Monospace fonts */
font-family: "Courier New", monospace;
font-family: monospace;
```

**Best practices (modern):**
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

This uses system fonts, no downloading needed, super fast.

**Real example:**
```html
<h1>Heading</h1>
<p>Body text</p>
<code>Code example</code>
```

```css
h1 {
  font-family: Georgia, serif;
}

p {
  font-family: Arial, sans-serif;
}

code {
  font-family: "Courier New", monospace;
}
```

**Output:**
- Heading in elegant serif font
- Paragraph in clean sans-serif
- Code in monospace

---

## Google Fonts (Web Fonts)

Use beautiful fonts beyond system fonts.

**How to use:**

1. Go to https://fonts.google.com
2. Find font you like (e.g., "Roboto")
3. Copy the `<link>` code
4. Paste in your HTML `<head>`
5. Use in CSS

**Example:**

**Step 1: Add to HTML head**
```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
</head>
```

**Step 2: Use in CSS**
```css
body {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Open Sans', sans-serif;
}
```

**Output:** Beautiful custom fonts on your website.

**Popular Google Fonts:**
- Roboto - modern, clean
- Open Sans - professional, readable
- Playfair Display - elegant, fancy
- Inter - geometric, modern
- Raleway - thin, elegant

**Performance tip:** Use only fonts/weights you need:
```html
<!-- Bad: Loading too many variants -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Good: Only what you need -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

---

## Font-Weight Property

Controls thickness of text.

**Syntax:**
```css
font-weight: value;
```

**Values:**
- `normal` or `400` - regular weight
- `bold` or `700` - bold weight
- `300` - light weight
- `500` - medium weight
- `600` - semibold
- `800` - extra bold
- `900` - black

**Examples:**
```css
p {
  font-weight: normal;
}

strong {
  font-weight: bold;
}

.light {
  font-weight: 300;
}

.heavy {
  font-weight: 900;
}
```

**HTML:**
```html
<p>Regular text</p>
<p class="light">Light text</p>
<p class="heavy">Heavy text</p>
<strong>Bold text</strong>
```

**Output:**
- Normal weight paragraph
- Very thin paragraph
- Very thick paragraph
- Bold text

**Real use:**
```css
h1 {
  font-weight: 700;
}

h2 {
  font-weight: 600;
}

h3 {
  font-weight: 500;
}

p {
  font-weight: 400;
}

.meta {
  font-weight: 300;
}
```

**Note:** Font must support these weights. Not all fonts have all weights.

---

## Line-Height Property

Controls space between lines of text.

**Syntax:**
```css
line-height: value;
```

**Values:**
- `1` or `100%` - same as text height (too tight)
- `1.5` - 1.5x text height
- `2` - double spacing
- `20px` - fixed pixels
- `140%` - 140% of text height

**Examples:**
```css
p {
  line-height: 1.6;
}

article {
  line-height: 1.8;
}

code {
  line-height: 1.4;
}
```

**HTML:**
```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
```

```css
.tight {
  line-height: 1;
}

.normal {
  line-height: 1.6;
}

.loose {
  line-height: 2;
}
```

**Output:**
- Tight: hard to read, cramped
- Normal: comfortable, readable
- Loose: airy, easy to read

**Best practice for body text:** `line-height: 1.6` to `1.8`

**Real example:**
```css
body {
  font-size: 16px;
  line-height: 1.6;  /* 16 * 1.6 = 25.6px between lines */
}

h1 {
  font-size: 48px;
  line-height: 1.2;  /* Tighter for headings */
}

article {
  line-height: 1.8;  /* Looser for reading */
}
```

---

## Letter-Spacing Property

Controls space between letters.

**Syntax:**
```css
letter-spacing: value;
```

**Values:**
- `normal` - default spacing
- `2px` - add 2px between letters
- `-1px` - tighter spacing
- `0.1em` - relative spacing

**Examples:**
```css
p {
  letter-spacing: normal;
}

h1 {
  letter-spacing: 2px;
}

.uppercase {
  letter-spacing: 3px;
}

code {
  letter-spacing: -0.5px;
}
```

**HTML:**
```html
<h1>HEADING</h1>
<p>Normal paragraph</p>
<h2 class="uppercase">SUBTITLE</h2>
```

**Output:**
- Spread-out heading
- Normal spaced paragraph
- Extra spaced subtitle

**When to use:**
- Headings: add breathing room
- Uppercase text: improves readability
- Logos and branding: special styling

**Real example:**
```css
.page-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
```

---

## Text-Align Property

Aligns text horizontally.

**Syntax:**
```css
text-align: value;
```

**Values:**
- `left` - align to left
- `center` - center text
- `right` - align to right
- `justify` - spread evenly

**Examples:**
```css
p {
  text-align: left;
}

h1 {
  text-align: center;
}

.footer {
  text-align: center;
}

article {
  text-align: justify;
}
```

**HTML:**
```html
<h1>Centered Title</h1>
<p>Left-aligned paragraph</p>
<div class="footer">Centered footer</div>
```

**Output:**
- Heading centered
- Paragraph aligned left
- Footer centered

**Real example:**
```css
header {
  text-align: center;
}

article {
  text-align: left;
}

footer {
  text-align: center;
}

.about-section {
  text-align: justify;
}
```

---

## Text-Decoration Property

Adds underlines, overlines, or strikethrough.

**Syntax:**
```css
text-decoration: value;
```

**Values:**
- `none` - no decoration
- `underline` - underline text
- `overline` - line above text
- `line-through` - strikethrough

**Examples:**
```css
a {
  text-decoration: none;
}

.underline {
  text-decoration: underline;
}

.strikethrough {
  text-decoration: line-through;
}

strong {
  text-decoration: underline;
}
```

**HTML:**
```html
<a href="#">Link (no underline)</a>
<p class="underline">Underlined text</p>
<p class="strikethrough">Deleted text</p>
```

**Output:**
- Plain link without underline
- Underlined paragraph
- Strikethrough paragraph

**Common use:**
```css
/* Remove underlines from links */
a {
  text-decoration: none;
}

/* Add underline on hover */
a:hover {
  text-decoration: underline;
}

/* Deleted items */
.deleted {
  text-decoration: line-through;
  color: #999;
}
```

---

## Text-Transform Property

Changes text case without changing HTML.

**Syntax:**
```css
text-transform: value;
```

**Values:**
- `none` - no change
- `uppercase` - ALL CAPITALS
- `lowercase` - all lowercase
- `capitalize` - First Letter Of Each Word

**Examples:**
```css
h1 {
  text-transform: uppercase;
}

.title {
  text-transform: capitalize;
}

.disclaimer {
  text-transform: lowercase;
}
```

**HTML:**
```html
<h1>hello world</h1>
<p class="title">john smith</p>
<p class="disclaimer">ATTENTION REQUIRED</p>
```

**Output:**
- "HELLO WORLD"
- "John Smith"
- "attention required"

**Real example:**
```css
.product-title {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

.product-category {
  text-transform: capitalize;
  font-size: 12px;
  color: #7f8c8d;
}
```

---

## Text-Shadow Property

Adds shadow to text.

**Syntax:**
```css
text-shadow: offsetX offsetY blurRadius color;
```

**Examples:**
```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.heading-fancy {
  text-shadow: 3px 3px 0px #333;
}

.title {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
```

**HTML:**
```html
<h1>Heading with Shadow</h1>
<p class="title">Title Text</p>
```

**Output:**
- Heading with soft drop shadow
- Title with sharp shadow
- Subtle shadow below

**Common uses:**
```css
/* Text over image */
.hero-text {
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

/* Glow effect */
.neon {
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
}

/* Depth effect */
.lifted {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}
```

---

## Complete Example: Blog Post

**HTML:**
```html
<article class="blog-post">
  <h1>My First Blog Post</h1>
  <div class="metadata">
    <span class="author">By John Doe</span>
    <span class="date">May 17, 2026</span>
  </div>
  
  <h2>Introduction</h2>
  <p>Lorem ipsum dolor sit amet...</p>
  
  <h2>Main Content</h2>
  <p>More detailed content here...</p>
  
  <p class="note">Important note for readers</p>
  
  <h2>Conclusion</h2>
  <p>Final thoughts...</p>
</article>
```

**CSS:**
```css
.blog-post {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.8;
  color: #333;
}

.blog-post h1 {
  font-size: 48px;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.blog-post h2 {
  font-size: 32px;
  font-weight: 600;
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 10px;
}

.blog-post p {
  font-size: 16px;
  margin-bottom: 15px;
  text-align: justify;
}

.metadata {
  color: #7f8c8d;
  font-size: 14px;
  margin-bottom: 30px;
}

.metadata span {
  margin-right: 20px;
}

.note {
  background-color: #fffacd;
  border-left: 4px solid #f39c12;
  padding: 15px;
  margin: 20px 0;
  color: #d68910;
  font-weight: 500;
}
```

**Output:**
- Professional blog layout
- Clear typography hierarchy
- Readable line height
- Styled metadata
- Highlighted note

---

## Typography Best Practices

1. **Use 1-2 fonts max** - more looks unprofessional
2. **Font size:** 14-18px for body text
3. **Line height:** 1.6-1.8 for readability
4. **Max width:** 600-700px for articles
5. **Contrast:** Dark text on light background
6. **Letter spacing:** Add to uppercase text
7. **Hierarchy:** Use different sizes and weights
8. **System fonts:** Faster than web fonts
9. **Limited weights:** Don't load all 9 weights
10. **Test readability:** Use real text, not Lorem ipsum

---

## Common Mistakes

❌ **Mistake 1:** Wrong line height
```css
p {
  line-height: 1;  /* Too tight, hard to read */
}
```

✅ **Fix:**
```css
p {
  line-height: 1.6;  /* Comfortable reading */
}
```

---

❌ **Mistake 2:** Too many fonts
```css
h1 { font-family: Georgia; }
h2 { font-family: Palatino; }
p { font-family: Arial; }
body { font-family: Verdana; }
```

✅ **Fix:**
```css
body { font-family: Arial, sans-serif; }
h1, h2 { font-family: Georgia, serif; }
```

---

❌ **Mistake 3:** Font too small
```css
p { font-size: 12px; }  /* Too small */
```

✅ **Fix:**
```css
p { font-size: 16px; }  /* Readable */
```

---

## Interview Questions

**Q1: Why is line-height important?**
A: Makes text readable. 1.6-1.8 is ideal for body text.

**Q2: What's the difference between font-weight values?**
A: 400=normal, 700=bold, 300=light. Not all fonts support all weights.

**Q3: How do you use Google Fonts?**
A: Add `<link>` to head, then use `font-family` in CSS.

**Q4: When should you use text-transform?**
A: To change case in CSS without changing HTML.

**Q5: What's the best font for web?**
A: System fonts are fastest. Google Fonts for custom looks.

**Q6: How many fonts should a site use?**
A: Maximum 2-3 fonts. More looks unprofessional.

---

## Practice Assignments

### Assignment 1: Typography Scale
1. Create heading hierarchy (h1-h4)
2. Style each with different font-size
3. Use different font-weight for each
4. Maintain line-height ratio

### Assignment 2: Blog Post Styling
1. Create blog post structure
2. Style h1, h2, paragraphs
3. Add metadata styling
4. Create highlighted note style
5. Use Google Font

### Assignment 3: Font Family Exploration
1. Create 5 paragraphs
2. Use different font-families
3. Test readability
4. Pick best combination

### Assignment 4: Text Effects
1. Create heading with text-shadow
2. Create strikethrough text
3. Use text-transform for uppercase
4. Add letter-spacing to headings

### Assignment 5: News Article Layout
1. Create realistic news article
2. Apply proper typography
3. Use text-align appropriately
4. Create distinct sections
5. Make it readable on all sizes

---

## Summary Notes

- **Color:** Changes text color - use good contrast
- **Font-size:** 16px for body text baseline
- **Font-family:** Use 1-2 fonts, always add fallbacks
- **Font-weight:** 400=normal, 700=bold
- **Line-height:** 1.6-1.8 for readability
- **Letter-spacing:** Add to uppercase or headings
- **Text-align:** left, center, right, justify
- **Text-decoration:** underline, line-through
- **Text-transform:** uppercase, lowercase, capitalize
- **Text-shadow:** Add depth and readability
- **Google Fonts:** Use carefully, load only needed weights

---
