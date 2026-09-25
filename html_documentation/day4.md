# Day 4: Semantic HTML

## What is Semantic HTML?

### Simple Definition:
Semantic HTML means using tags that describe the **meaning** of content, not just styling.

### Why Use Semantic HTML?

1. **Better SEO** - Search engines understand your content better
2. **Accessibility** - Screen readers help blind users navigate
3. **Cleaner Code** - More readable and maintainable
4. **Professional** - Industry standard practice
5. **Mobile friendly** - Better on all devices

### Non-Semantic vs Semantic

**Non-Semantic (BAD):**
```html
<div>
  <div>My Website</div>
  <div>Home | About | Contact</div>
  <div>Main content here</div>
</div>
```

**Semantic (GOOD):**
```html
<header>
  <h1>My Website</h1>
  <nav>Home | About | Contact</nav>
</header>
<main>Main content here</main>
```

The semantic version tells the browser what each section does!

---

## Key Semantic Tags

### 1. `<header>` - Page or Section Header

**What is it?**
Container for introductory content (logo, title, navigation).

**Why use it?**
- Shows important intro info
- Usually at top of page
- Can appear multiple times (once per section)

**Syntax:**
```html
<header>
  <h1>Website Title</h1>
  <p>Subtitle or tagline</p>
</header>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>My Blog</h1>
    <p>Thoughts on web development</p>
  </header>
  
  <main>
    <!-- Page content -->
  </main>
</body>
</html>
```

---

### 2. `<nav>` - Navigation Menu

**What is it?**
Container for navigation links (menu).

**Why use it?**
- Groups navigation links
- Tells screen readers "this is navigation"
- Search engines understand structure
- Multiple `<nav>` elements allowed

**Syntax:**
```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
```

**Using Lists:**
```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>My Website</h1>
  </header>
  
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
  </nav>
  
  <main>
    <!-- Main content -->
  </main>
</body>
</html>
```

---

### 3. `<main>` - Main Content

**What is it?**
Container for main content (not navigation, sidebar, footer).

**Why use it?**
- Shows what page is about
- Only ONE `<main>` per page
- Search engines focus here
- Screen readers skip to `<main>`

**Syntax:**
```html
<main>
  <h2>Page Content</h2>
  <p>Main information goes here...</p>
</main>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Tech Blog</h1>
  </header>
  
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
  
  <main>
    <article>
      <h2>Learning HTML</h2>
      <p>HTML is the foundation of web development...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 Tech Blog</p>
  </footer>
</body>
</html>
```

---

### 4. `<section>` - Content Section

**What is it?**
Groups related content together (chapters, sections, parts).

**Why use it?**
- Organize content logically
- Create meaningful sections
- Can have its own heading

**Syntax:**
```html
<section>
  <h2>Section Title</h2>
  <p>Content here...</p>
</section>
```

**Real-World Example - About Page:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>About Us</h1>
  </header>
  
  <main>
    <section>
      <h2>Our Story</h2>
      <p>We started in 2020...</p>
    </section>
    
    <section>
      <h2>Our Mission</h2>
      <p>To teach web development...</p>
    </section>
    
    <section>
      <h2>Our Team</h2>
      <p>We have 50+ instructors...</p>
    </section>
  </main>
</body>
</html>
```

---

### 5. `<article>` - Self-Contained Content

**What is it?**
Independent content that can stand alone (blog post, news article, forum post).

**Why use it?**
- Blog posts
- News articles
- Forum posts
- Reviews
- Comments

**Syntax:**
```html
<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
</article>
```

**Real-World Example - Blog:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>My Blog</h1>
  </header>
  
  <main>
    <article>
      <h2>Learning JavaScript</h2>
      <p>Posted on: 2024-01-15</p>
      <p>Today I learned about variables...</p>
    </article>
    
    <article>
      <h2>CSS Tips and Tricks</h2>
      <p>Posted on: 2024-01-10</p>
      <p>Here are some cool CSS tricks...</p>
    </article>
  </main>
</body>
</html>
```

---

### 6. `<aside>` - Sidebar / Related Content

**What is it?**
Content that's related but separate (sidebar, related links, ads).

**Why use it?**
- Sidebars
- Related articles
- Call-to-action boxes
- Advertisements
- Extra information

**Syntax:**
```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#">Article 1</a></li>
    <li><a href="#">Article 2</a></li>
  </ul>
</aside>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Tech News</h1>
  </header>
  
  <main>
    <article>
      <h2>New CSS Features</h2>
      <p>Learn about the latest CSS features...</p>
    </article>
    
    <aside>
      <h3>Popular Posts</h3>
      <ul>
        <li><a href="#">HTML Basics</a></li>
        <li><a href="#">CSS Guide</a></li>
        <li><a href="#">JavaScript Tips</a></li>
      </ul>
    </aside>
  </main>
</body>
</html>
```

---

### 7. `<footer>` - Page Footer

**What is it?**
Container for footer content (copyright, contact info, links).

**Why use it?**
- Copyright information
- Links
- Contact information
- Sitemap
- Bottom navigation

**Syntax:**
```html
<footer>
  <p>&copy; 2024 My Company</p>
  <p><a href="/privacy">Privacy</a></p>
</footer>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>My Website</h1>
  </header>
  
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
  
  <main>
    <p>Welcome to my website!</p>
  </main>
  
  <footer>
    <p>&copy; 2024 John Smith</p>
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </footer>
</body>
</html>
```

---

## More Semantic Tags

### `<figure>` and `<figcaption>` - Image with Caption

**What is it?**
Groups an image with its caption.

**Why use it?**
- Image + description together
- Better SEO
- Accessible
- Professional

**Syntax:**
```html
<figure>
  <img src="dog.jpg" alt="Golden retriever">
  <figcaption>A friendly golden retriever</figcaption>
</figure>
```

**Real-World Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <main>
    <h1>Dog Breeds</h1>
    
    <figure>
      <img src="retriever.jpg" alt="Golden Retriever">
      <figcaption>
        The Golden Retriever is known for its loyalty 
        and friendly nature.
      </figcaption>
    </figure>
    
    <figure>
      <img src="labrador.jpg" alt="Labrador">
      <figcaption>
        Labradors are excellent family dogs.
      </figcaption>
    </figure>
  </main>
</body>
</html>
```

---

## Complete Semantic HTML Example

### Blog Website Layout:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Tech Blog</title>
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Tech Tutorials</h1>
    <p>Learn web development from scratch</p>
  </header>

  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    
    <!-- Article Section -->
    <article>
      <h2>Getting Started with HTML</h2>
      <p>Posted on: January 15, 2024 | Author: John Smith</p>
      
      <section>
        <h3>Introduction</h3>
        <p>
          HTML is the foundation of web development. 
          In this article, we'll learn the basics.
        </p>
      </section>
      
      <section>
        <h3>Basic Tags</h3>
        <p>Every HTML document needs these tags...</p>
      </section>
      
      <figure>
        <img src="html-structure.jpg" alt="HTML Document Structure">
        <figcaption>Basic HTML document structure</figcaption>
      </figure>
    </article>

    <!-- Sidebar -->
    <aside>
      <h3>Popular Articles</h3>
      <ul>
        <li><a href="#">CSS Basics</a></li>
        <li><a href="#">JavaScript Guide</a></li>
        <li><a href="#">Web Design Tips</a></li>
      </ul>
      
      <h3>Recent Comments</h3>
      <p>No comments yet</p>
    </aside>

  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2024 Tech Tutorials. All rights reserved.</p>
    <nav>
      <a href="/privacy">Privacy Policy</a> |
      <a href="/terms">Terms</a> |
      <a href="/contact">Contact</a>
    </nav>
  </footer>

</body>
</html>
```

---

## Semantic vs Non-Semantic Comparison

### Non-Semantic Version (BAD):
```html
<div class="header">
  <div class="title">My Blog</div>
</div>

<div class="nav">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</div>

<div class="content">
  <div class="article">
    <h2>Article Title</h2>
    <p>Content here...</p>
  </div>
  
  <div class="sidebar">
    <div class="popular">
      <a href="#">Related</a>
    </div>
  </div>
</div>

<div class="footer">
  <p>&copy; 2024</p>
</div>
```

### Semantic Version (GOOD):
```html
<header>
  <h1>My Blog</h1>
</header>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Content here...</p>
  </article>
  
  <aside>
    <a href="#">Related</a>
  </aside>
</main>

<footer>
  <p>&copy; 2024</p>
</footer>
```

---

## Benefits of Semantic HTML

### 1. Better SEO
- Search engines understand structure
- Index content properly
- Improve ranking

### 2. Accessibility
- Screen readers navigate better
- Keyboard users navigate easier
- More people can use your site

### 3. Cleaner Code
- More readable
- Easier to maintain
- Other developers understand it

### 4. Better Mobile
- Browsers handle layout better
- Consistent display
- Improved performance

---

## Best Practices

✅ **DO:**
- Use semantic tags for structure
- One `<header>` and `<main>` per page
- Use `<section>` for logical grouping
- Use `<article>` for blog posts
- Use `<aside>` for sidebars
- Include headings in sections/articles
- Use `<nav>` for navigation

❌ **DON'T:**
- Use `<div>` for everything
- Use semantic tags just for styling
- Put non-navigation links in `<nav>`
- Use multiple `<main>` tags
- Nest `<header>` or `<footer>` incorrectly

---

## Common Mistakes

### ❌ Mistake 1: Div Soup
```html
<!-- WRONG - Everything is a div -->
<div>
  <div>
    <div>
      <p>Content</p>
    </div>
  </div>
</div>
```

**FIX:**
```html
<!-- CORRECT - Use semantic tags -->
<article>
  <section>
    <p>Content</p>
  </section>
</article>
```

### ❌ Mistake 2: Wrong Container
```html
<!-- WRONG - Content in header -->
<header>
  <article>Blog post here</article>
</header>
```

**FIX:**
```html
<!-- CORRECT - Article in main -->
<main>
  <article>Blog post here</article>
</main>
```

### ❌ Mistake 3: Navigation Overuse
```html
<!-- WRONG - All links are nav -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="https://example.com">Random link</a>
  <a href="/blog">Blog</a>
</nav>
```

**FIX:**
```html
<!-- CORRECT - Only main navigation -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
</nav>

<!-- Other links elsewhere -->
<p><a href="https://example.com">Random link</a></p>
```

---

## Interview Questions

1. **Why is semantic HTML important?**
   - Answer: Better SEO, accessibility, cleaner code, and professional practice

2. **What's the difference between `<div>` and `<section>`?**
   - Answer: `<div>` is non-semantic (styling), `<section>` is semantic (logical grouping)

3. **How many `<main>` tags can you have per page?**
   - Answer: Only ONE per page

4. **What is the difference between `<article>` and `<section>`?**
   - Answer: `<article>` is self-contained, `<section>` groups related content

5. **Should you put sidebars in `<aside>`?**
   - Answer: Yes, `<aside>` is for sidebar and related content

6. **Can `<header>` appear multiple times?**
   - Answer: Yes, once per page/section, but usually once at top

---

## Practice Assignment

### Task 1: Convert Non-Semantic to Semantic
```html
<!-- BEFORE (Non-semantic) -->
<div class="header">
  <div class="logo">My Site</div>
  <div class="menu">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>

<div class="content">
  <div class="main">
    <p>Main content</p>
  </div>
  <div class="side">
    <p>Related content</p>
  </div>
</div>

<div class="bottom">
  <p>&copy; 2024</p>
</div>
```

Convert this to semantic HTML using proper tags.

### Task 2: Create a Blog Layout
Create a blog page with:
- Header with title and tagline
- Navigation menu
- Main section with:
  - Article 1 with multiple sections
  - Article 2
  - Sidebar with popular posts
- Footer with copyright and links

Use all semantic tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`

### Task 3: News Website
Create a news homepage with:
- Header with logo
- Navigation (Home, News, About, Contact)
- Main section with:
  - 3 news articles
  - Featured article with image
  - Sidebar with trending articles
- Footer

### Task 4: Portfolio Website
Create a portfolio site with:
- Header (name/logo)
- Navigation
- Main with:
  - About section
  - Skills section
  - Projects section (3 projects)
  - Contact section
- Footer

---

## Summary Notes

- **`<header>`** = Introduction/top content
- **`<nav>`** = Navigation menu
- **`<main>`** = Main content (only one per page)
- **`<section>`** = Logical grouping of content
- **`<article>`** = Self-contained content (blog, news)
- **`<aside>`** = Sidebar/related content
- **`<footer>`** = Bottom content/links
- **`<figure>` + `<figcaption>`** = Image with description
- **Semantic HTML** improves SEO, accessibility, and readability
- **Use semantic tags** instead of `<div>` when appropriate

---
