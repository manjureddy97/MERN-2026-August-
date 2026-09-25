# Day 3: Typography and Text Styling

## What is Typography?

Typography is how text looks: size, weight, color, alignment, spacing between letters and lines.

**Why it matters:** Good typography makes content readable and professional.

**Bad typography:** Users can't read or understand quickly.
**Good typography:** Users understand immediately and enjoy reading.

---

## Text Sizes (Font Size)

Change text size with `text-[size]`

### Size Scale

```html
<!-- Small text -->
<p class="text-xs">Extra small (12px)</p>
<p class="text-sm">Small (14px)</p>

<!-- Medium text -->
<p class="text-base">Base size (16px)</p>

<!-- Large text -->
<p class="text-lg">Large (18px)</p>
<p class="text-xl">Extra large (20px)</p>

<!-- Heading sizes -->
<h1 class="text-2xl">2XL (24px)</h1>
<h1 class="text-3xl">3XL (30px)</h1>
<h1 class="text-4xl">4XL (36px)</h1>
<h1 class="text-5xl">5XL (48px)</h1>
<h1 class="text-6xl">6XL (60px)</h1>
```

### Real Example: Typography Scale
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold mb-2">Page Title</h1>
    <h2 class="text-2xl font-semibold mb-4">Subtitle</h2>
    <p class="text-base mb-3">Normal paragraph text</p>
    <p class="text-sm text-gray-600">Small caption or metadata</p>
  </div>
</body>
</html>
```

**Output:** Clear visual hierarchy with different text sizes.

---

## Font Weight

Control how thick text is with `font-[weight]`

### Weight Levels

```html
<p class="font-thin">Thin text (100)</p>
<p class="font-light">Light text (300)</p>
<p class="font-normal">Normal text (400)</p>
<p class="font-medium">Medium text (500)</p>
<p class="font-semibold">Semi-bold text (600)</p>
<p class="font-bold">Bold text (700)</p>
<p class="font-black">Black text (900)</p>
```

### When to Use Each

- **font-light:** Secondary text, disabled buttons
- **font-normal:** Body text, paragraphs (default)
- **font-semibold:** Subheadings, strong emphasis
- **font-bold:** Main headings, important labels
- **font-black:** Large headlines, logos

### Real Example: Headline Variations
```html
<h1 class="text-4xl font-black">Bold Headline</h1>
<h2 class="text-2xl font-bold">Section Title</h2>
<p class="text-base font-normal">Regular paragraph text</p>
<p class="text-sm font-light">Subtle caption</p>
```

**Output:** Clear hierarchy using size and weight together.

---

## Text Colors

We covered basic `text-[color]` on Day 2. Let's go deeper.

### Text Color Best Practices

```html
<!-- On white background -->
<div class="bg-white">
  <p class="text-gray-900">Dark text (best readability)</p>
  <p class="text-gray-700">Dark gray (good readability)</p>
  <p class="text-gray-600">Medium gray (acceptable)</p>
  <p class="text-gray-400">Light gray (avoid for body)</p>
</div>

<!-- On dark background -->
<div class="bg-gray-900">
  <p class="text-white">White text (best contrast)</p>
  <p class="text-gray-100">Light text (good contrast)</p>
  <p class="text-gray-300">Medium light (okay)</p>
</div>
```

### Semantic Color Usage

```html
<!-- Success -->
<p class="text-green-600">Operation successful</p>

<!-- Error -->
<p class="text-red-600">Something went wrong</p>

<!-- Warning -->
<p class="text-yellow-600">Be careful</p>

<!-- Info -->
<p class="text-blue-600">Important information</p>
```

---

## Text Alignment

Align text with `text-[direction]`

```html
<!-- Left aligned (default) -->
<p class="text-left">Left aligned text</p>

<!-- Center aligned -->
<p class="text-center">Centered text</p>

<!-- Right aligned -->
<p class="text-right">Right aligned text</p>

<!-- Justified -->
<p class="text-justify">Justified text spreads across the full width</p>
```

### Real Example: Centered Hero
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
  <div class="text-center text-white max-w-2xl mx-auto">
    <h1 class="text-5xl font-bold mb-4">Welcome</h1>
    <p class="text-xl mb-8">
      Join thousands of users creating amazing designs
    </p>
    <button class="bg-white text-blue-500 font-bold py-2 px-6 rounded">
      Get Started
    </button>
  </div>
</div>
```

**Output:** Centered, readable hero section.

---

## Line Height

Space between lines of text. Important for readability.

```html
<p class="leading-none">No line spacing (tight)</p>
<p class="leading-tight">Tight line spacing</p>
<p class="leading-snug">Snug spacing</p>
<p class="leading-normal">Normal spacing (1.5)</p>
<p class="leading-relaxed">Relaxed spacing</p>
<p class="leading-loose">Loose spacing</p>
```

### Line Height Guide

- **leading-tight:** Headlines (line height ~1.25)
- **leading-normal:** Body text (line height ~1.5) ← Use this usually
- **leading-relaxed:** Long form content (line height ~1.625)
- **leading-loose:** Very long documents (line height ~2)

### Real Example: Blog Post
```html
<div class="max-w-2xl mx-auto p-8">
  <h1 class="text-4xl font-bold mb-2 leading-tight">
    How to Build Better UIs
  </h1>
  <p class="text-gray-600 mb-6">Published on May 17, 2024</p>
  
  <p class="text-base leading-relaxed mb-4 text-gray-800">
    Creating user interfaces is both art and science. 
    You need to understand your users, their needs, and how they interact with your application...
  </p>
  
  <p class="text-base leading-relaxed text-gray-800">
    With the right tools and practices, you can create interfaces that are not only beautiful 
    but also functional and accessible...
  </p>
</div>
```

**Output:** Comfortable to read with proper line spacing.

---

## Letter Spacing

Space between individual letters.

```html
<!-- Tighter spacing -->
<p class="tracking-tight">Tighter letter spacing</p>

<!-- Normal -->
<p class="tracking-normal">Normal spacing</p>

<!-- Wider -->
<p class="tracking-wide">Wider letter spacing</p>
<p class="tracking-wider">Even wider</p>
<p class="tracking-widest">Maximum spacing</p>
```

### When to Use

- **tracking-tight:** Headlines (looks premium)
- **tracking-normal:** Body text (most readable)
- **tracking-wide:** All-caps text, fancy headings
- **tracking-widest:** Large display text

### Real Example: Premium Headline
```html
<h1 class="text-5xl font-black tracking-wider">
  PREMIUM BRAND
</h1>
<p class="text-lg tracking-normal">
  Regular paragraph with normal letter spacing
</p>
```

---

## Text Transform

Change text case with `text-[case]`

```html
<!-- Uppercase -->
<p class="uppercase">THIS TEXT IS UPPERCASE</p>

<!-- Lowercase -->
<p class="lowercase">this text is lowercase</p>

<!-- Capitalize first letter -->
<p class="capitalize">this text is capitalized</p>

<!-- Normal (no transform) -->
<p class="normal-case">Keep Original Case</p>
```

### Usage Examples

```html
<!-- Navigation items -->
<nav>
  <a class="uppercase text-sm font-bold">Home</a>
  <a class="uppercase text-sm font-bold">About</a>
</nav>

<!-- Labels -->
<label class="uppercase text-xs font-semibold">Email Address</label>

<!-- Captions -->
<p class="capitalize">user profile page</p>
```

---

## Text Decoration

Underlines, strikethrough, etc.

```html
<!-- Underline -->
<p class="underline">Underlined text</p>

<!-- Strikethrough -->
<p class="line-through">Strikethrough text</p>

<!-- Overline (rare) -->
<p class="overline">Text with line above</p>

<!-- No decoration -->
<a class="no-underline">Link without underline</a>
```

### Common Usage

```html
<!-- Regular link (underlined) -->
<a class="text-blue-600 underline">Visit our site</a>

<!-- Clean link (no underline) -->
<a class="text-blue-600 hover:underline">Visit our site</a>

<!-- Disabled text -->
<p class="text-gray-400 line-through">Out of stock</p>
```

---

## Complete Blog Post Example

Putting typography together:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-gray-50 py-12">
    <article class="max-w-2xl mx-auto px-4 bg-white rounded-lg shadow p-8">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-5xl font-black leading-tight mb-3 text-gray-900">
          Mastering Web Design
        </h1>
        <div class="flex items-center space-x-4 text-gray-600">
          <span>By Sarah Johnson</span>
          <span>•</span>
          <span>May 17, 2024</span>
        </div>
        <hr class="my-4" />
      </header>

      <!-- Content -->
      <section class="space-y-6">
        <p class="text-lg leading-relaxed text-gray-800">
          Web design has evolved dramatically over the past decade. 
          What started as simple HTML pages has become a sophisticated art form combining 
          visual design, user experience, and technical excellence.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">
          The Fundamentals
        </h2>

        <p class="text-base leading-relaxed text-gray-700">
          Every great design starts with understanding the basics. 
          Typography, color, spacing, and layout form the foundation of effective design. 
          Master these, and you'll be able to create beautiful interfaces consistently.
        </p>

        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li class="leading-relaxed">
            <span class="font-semibold">Typography:</span> Choose fonts wisely and use size, 
            weight, and spacing to create hierarchy
          </li>
          <li class="leading-relaxed">
            <span class="font-semibold">Color:</span> Use a consistent palette that conveys mood 
            and guides users
          </li>
          <li class="leading-relaxed">
            <span class="font-semibold">Spacing:</span> Whitespace is your friend. 
            Use consistent spacing rules
          </li>
        </ul>

        <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
          "Design is not just what it looks like and feels like. Design is how it works."
          <br><span class="text-sm font-semibold">— Steve Jobs</span>
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Practical Tips
        </h2>

        <p class="text-base leading-relaxed text-gray-700">
          Use contrasting colors for important information. 
          Keep line lengths between 50-75 characters for optimal readability. 
          Test your designs with real users before shipping.
        </p>
      </section>

      <!-- Footer -->
      <footer class="mt-12 pt-6 border-t text-sm text-gray-600">
        <div class="flex items-center space-x-2">
          <span class="font-semibold">Tags:</span>
          <a class="text-blue-600 hover:underline">design</a>
          <a class="text-blue-600 hover:underline">typography</a>
          <a class="text-blue-600 hover:underline">frontend</a>
        </div>
      </footer>
    </article>
  </div>
</body>
</html>
```

**What you see:**
- Clear hierarchy with text sizes
- Readable line height
- Professional appearance
- Good spacing between sections
- Contrasting colors for readability

---

## Responsive Typography

Scale text on different screens:

```html
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>

<p class="text-sm md:text-base lg:text-lg">
  Responsive paragraph
</p>
```

**Explanation:**
- Mobile: text-2xl
- Small devices: text-3xl
- Medium devices: text-4xl
- Large devices: text-5xl

---

## Best Practices

✅ **Use font-normal for body text**
```html
<p class="font-normal text-base">Easy to read paragraph</p>
```

✅ **Pair size and weight**
```html
<h1 class="text-4xl font-bold">Major heading</h1>
<h2 class="text-2xl font-semibold">Minor heading</h2>
<p class="text-base font-normal">Body text</p>
```

✅ **Use leading-relaxed for long content**
```html
<article class="text-base leading-relaxed">
  Long article content...
</article>
```

✅ **Ensure good contrast**
```html
<!-- Good contrast -->
<p class="text-gray-900 bg-white">Very readable</p>

<!-- Poor contrast -->
<p class="text-gray-300 bg-white">Hard to read</p>
```

---

## Common Mistakes

❌ **Too many font sizes on one page**
```html
<!-- Confusing -->
<h1 class="text-4xl">Title</h1>
<p class="text-3xl">Paragraph</p>
<span class="text-2xl">Label</span>
```

✅ **Consistent hierarchy**
```html
<h1 class="text-4xl">Title</h1>
<h2 class="text-2xl">Subtitle</h2>
<p class="text-base">Paragraph</p>
```

❌ **Mixing text colors randomly**
```html
<!-- Confusing -->
<p class="text-blue-500">Random blue</p>
<p class="text-red-600">Random red</p>
<p class="text-green-500">Random green</p>
```

✅ **Semantic color usage**
```html
<p class="text-gray-700">Normal text</p>
<p class="text-green-600">Success message</p>
<p class="text-red-600">Error message</p>
```

❌ **Ignoring line height on long text**
```html
<p class="text-base">Hard to read because no line height specified</p>
```

✅ **Always set line height for readability**
```html
<p class="text-base leading-relaxed">Easy to read</p>
```

---

## Interview Questions

**Q1: Why is line height important?**
A: It makes text readable. Proper line height (1.5-1.75) prevents lines from looking cramped.

**Q2: What font weight should body text be?**
A: font-normal (400) or font-light (300). Never bold for body text.

**Q3: What's the ideal line length for reading?**
A: 50-75 characters. Longer lines are hard to follow.

**Q4: When do you use text-justify?**
A: Rarely. It can create awkward spacing. Stick with text-left or text-center.

**Q5: How do you create visual hierarchy?**
A: Combine size, weight, and color. Larger + bolder = more important.

---

## Practice Assignment

### Task 1: Create a Typography Scale
Show all text sizes from text-xs to text-6xl:
- Label each size
- Show with different font weights
- Display in a clear layout

### Task 2: Blog Post
Build a blog post with:
- Large headline (text-4xl, font-bold)
- Byline (small gray text)
- Body paragraphs (text-base, leading-relaxed)
- Section headings (text-2xl, font-semibold)
- Use proper line height throughout

### Task 3: Read Readability Test
Create two versions of the same paragraph:
- Bad: No line height, poor spacing
- Good: Proper line height and spacing
- Note the difference

### Task 4: Color Contrast Test
Create text on backgrounds:
- Good contrast (readable)
- Poor contrast (hard to read)
- Explain why some fail

---
