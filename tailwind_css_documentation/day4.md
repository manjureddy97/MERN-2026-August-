# Day 4: Flexbox and Layouts

## What is Flexbox?

Flexbox is a layout system that arranges elements in rows or columns and handles spacing automatically.

**Before Flexbox:** Complex CSS, manual calculations
**With Flexbox:** Simple, responsive layouts in seconds

**Visual:**
```
Row Layout:
┌─────────┬─────────┬─────────┐
│ Item 1  │ Item 2  │ Item 3  │
└─────────┴─────────┴─────────┘

Column Layout:
┌─────────┐
│ Item 1  │
├─────────┤
│ Item 2  │
├─────────┤
│ Item 3  │
└─────────┘
```

---

## Enabling Flexbox

Start with the `flex` class on the container:

```html
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

That's it! Items are now in a row.

---

## Flex Direction: Row vs Column

### Row (Default)
Items in a horizontal line (left to right).

```html
<div class="flex flex-row">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
</div>
```

**Output:**
```
[Item 1] [Item 2] [Item 3]
```

### Column
Items in a vertical stack (top to bottom).

```html
<div class="flex flex-col">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
</div>
```

**Output:**
```
[Item 1]
[Item 2]
[Item 3]
```

---

## Justify Content (Horizontal Alignment)

How items are spaced along the main axis (horizontally in rows, vertically in columns).

### Main Options

```html
<!-- Start (default) -->
<div class="flex justify-start">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Centered -->
<div class="flex justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- End -->
<div class="flex justify-end">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Spaced evenly -->
<div class="flex justify-around">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Equal space between -->
<div class="flex justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Visual Guide

```
justify-start:
[Item] [Item]              empty space

justify-center:
        [Item] [Item]      centered

justify-end:
              [Item] [Item]  right aligned

justify-between:
[Item]              [Item]  space between

justify-around:
  [Item]        [Item]      space around each
```

### Real Example: Navigation Bar
```html
<nav class="flex justify-between items-center p-4 bg-gray-900 text-white">
  <div class="text-2xl font-bold">Logo</div>
  
  <div class="flex gap-6">
    <a href="#" class="hover:text-gray-300">Home</a>
    <a href="#" class="hover:text-gray-300">About</a>
    <a href="#" class="hover:text-gray-300">Contact</a>
  </div>
  
  <button class="bg-blue-500 px-4 py-2 rounded">Sign In</button>
</nav>
```

**Output:** Logo on left, links in middle, button on right.

---

## Align Items (Vertical Alignment)

How items are aligned on the cross axis (vertically in rows, horizontally in columns).

### Main Options

```html
<!-- Stretch (default) -->
<div class="flex align-items-stretch">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Start/Top -->
<div class="flex items-start">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Center -->
<div class="flex items-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- End/Bottom -->
<div class="flex items-end">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Visual Guide

```
items-start:
Item 1     Item 2
(aligned to top)

items-center:
    Item 1      Item 2
    (vertically centered)

items-end:
           Item 1      Item 2
           (aligned to bottom)
```

### Real Example: Centered Card
```html
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-md">
    <h1 class="text-3xl font-bold mb-4 text-center">Welcome</h1>
    <p class="text-gray-600 text-center mb-6">Login to continue</p>
    <button class="w-full bg-blue-500 text-white py-2 rounded font-bold">
      Sign In
    </button>
  </div>
</div>
```

**Output:** Perfectly centered card on screen.

---

## Gap: Space Between Items

Add consistent spacing between flex items using `gap-[size]`

```html
<!-- Small gap -->
<div class="flex gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Medium gap -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Large gap -->
<div class="flex gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Why use gap?** Much cleaner than adding margins to each item.

### Real Example: Button Group
```html
<div class="flex gap-4">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">
    Save
  </button>
  <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded">
    Cancel
  </button>
</div>
```

**Output:** Two buttons with consistent spacing between them.

---

## Flex Wrap

What happens when items don't fit in one row?

### No Wrap (Default)
Items shrink to fit.

```html
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

Items get squished if container is narrow.

### With Wrap
Items move to next row.

```html
<div class="flex flex-wrap">
  <div class="w-1/3">Item 1</div>
  <div class="w-1/3">Item 2</div>
  <div class="w-1/3">Item 3</div>
  <div class="w-1/3">Item 4</div>
</div>
```

**Output:**
```
[Item 1] [Item 2] [Item 3]
[Item 4]
```

### Real Example: Product Grid
```html
<div class="flex flex-wrap gap-4">
  <div class="w-1/3 bg-white rounded shadow p-4">
    <img src="product1.jpg" alt="Product 1" class="w-full mb-2" />
    <h3 class="font-bold mb-2">Product 1</h3>
    <p class="text-gray-600">$29.99</p>
  </div>
  <div class="w-1/3 bg-white rounded shadow p-4">
    <img src="product2.jpg" alt="Product 2" class="w-full mb-2" />
    <h3 class="font-bold mb-2">Product 2</h3>
    <p class="text-gray-600">$39.99</p>
  </div>
  <div class="w-1/3 bg-white rounded shadow p-4">
    <img src="product3.jpg" alt="Product 3" class="w-full mb-2" />
    <h3 class="font-bold mb-2">Product 3</h3>
    <p class="text-gray-600">$49.99</p>
  </div>
</div>
```

---

## Order: Reorder Items

Change the order of items without changing HTML:

```html
<div class="flex">
  <div class="order-3">Item 1 (displays 3rd)</div>
  <div class="order-1">Item 2 (displays 1st)</div>
  <div class="order-2">Item 3 (displays 2nd)</div>
</div>
```

**Output:** Item 2, Item 3, Item 1

### Real Example: Responsive Navigation
```html
<!-- On desktop: logo, links, button. On mobile: button first -->
<nav class="flex items-center justify-between p-4">
  <div class="order-2 md:order-1">Logo</div>
  <div class="order-1 md:order-2 hidden md:flex gap-6">Links</div>
  <div class="order-3">Sign In</div>
</nav>
```

---

## Complete Dashboard Layout Example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- Navbar -->
  <nav class="flex justify-between items-center p-4 bg-gray-900 text-white">
    <div class="text-2xl font-bold">Dashboard</div>
    <div class="flex gap-6">
      <a href="#" class="hover:text-gray-300">Profile</a>
      <a href="#" class="hover:text-gray-300">Settings</a>
    </div>
  </nav>

  <!-- Main content -->
  <div class="flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-6 min-h-screen">
      <h3 class="font-bold text-lg mb-6">Navigation</h3>
      <div class="flex flex-col gap-4">
        <a href="#" class="hover:text-gray-300">Dashboard</a>
        <a href="#" class="hover:text-gray-300">Analytics</a>
        <a href="#" class="hover:text-gray-300">Reports</a>
        <a href="#" class="hover:text-gray-300">Settings</a>
      </div>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-8">
      <h1 class="text-3xl font-bold mb-8">Welcome Back</h1>

      <!-- Cards Grid -->
      <div class="flex flex-wrap gap-6">
        <div class="flex-1 min-w-xs bg-white rounded shadow p-6">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Total Users</h3>
          <p class="text-3xl font-bold text-gray-900">12,345</p>
          <p class="text-green-600 text-sm mt-2">↑ 5% from last week</p>
        </div>

        <div class="flex-1 min-w-xs bg-white rounded shadow p-6">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Revenue</h3>
          <p class="text-3xl font-bold text-gray-900">$45,000</p>
          <p class="text-green-600 text-sm mt-2">↑ 12% from last week</p>
        </div>

        <div class="flex-1 min-w-xs bg-white rounded shadow p-6">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Active Sessions</h3>
          <p class="text-3xl font-bold text-gray-900">3,456</p>
          <p class="text-red-600 text-sm mt-2">↓ 3% from last week</p>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

**Components:**
- Navbar with flexbox (space-between)
- Main layout with sidebar (flex row)
- Content cards (flex wrap with gap)

---

## Card Grid Example

```html
<div class="flex flex-wrap gap-6 p-8">
  <div class="flex-1 min-w-sm bg-white rounded-lg shadow p-6">
    <h3 class="text-xl font-bold mb-2">Feature 1</h3>
    <p class="text-gray-600">Description of feature 1</p>
  </div>
  <div class="flex-1 min-w-sm bg-white rounded-lg shadow p-6">
    <h3 class="text-xl font-bold mb-2">Feature 2</h3>
    <p class="text-gray-600">Description of feature 2</p>
  </div>
  <div class="flex-1 min-w-sm bg-white rounded-lg shadow p-6">
    <h3 class="text-xl font-bold mb-2">Feature 3</h3>
    <p class="text-gray-600">Description of feature 3</p>
  </div>
</div>
```

---

## Best Practices

✅ **Use gap instead of margins**
```html
<!-- Good -->
<div class="flex gap-4">
  <div>Item</div>
  <div>Item</div>
</div>

<!-- Avoid -->
<div class="flex">
  <div class="mr-4">Item</div>
  <div>Item</div>
</div>
```

✅ **Combine justify and align**
```html
<!-- Perfect centering -->
<div class="flex justify-center items-center h-screen">
  <div>Centered content</div>
</div>
```

✅ **Use flex-wrap for responsive grids**
```html
<div class="flex flex-wrap gap-4">
  <div class="w-1/3">Item</div>
  <!-- More items -->
</div>
```

✅ **Use flex-1 for equal widths**
```html
<div class="flex gap-4">
  <div class="flex-1 bg-white p-4">Takes equal space</div>
  <div class="flex-1 bg-white p-4">Takes equal space</div>
  <div class="flex-1 bg-white p-4">Takes equal space</div>
</div>
```

---

## Common Mistakes

❌ **Forgetting items-center for centering**
```html
<!-- Items not centered vertically -->
<div class="flex justify-center h-32">
  <div>Not centered</div>
</div>
```

✅ **Add items-center**
```html
<!-- Properly centered -->
<div class="flex justify-center items-center h-32">
  <div>Centered</div>
</div>
```

❌ **Using flex-col without gap**
```html
<!-- Items touch each other -->
<div class="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

✅ **Add gap**
```html
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Interview Questions

**Q1: What's the difference between justify-content and align-items?**
A: justify-content aligns items along the main axis (horizontal in rows); align-items aligns them perpendicular (vertical in rows).

**Q2: When would you use flex-wrap?**
A: When you want items to wrap to multiple rows/columns instead of shrinking.

**Q3: What does flex-1 do?**
A: It makes flex items grow equally to fill available space.

**Q4: How do you center content both vertically and horizontally?**
A: Use `flex justify-center items-center` with a height on the container.

**Q5: What's the advantage of gap over margin?**
A: Gap applies consistently between all items; margins can be inconsistent and cause double-spacing issues.

---

## Practice Assignment

### Task 1: Create a Navbar
Build a navigation bar with:
- Logo on the left
- Links in the center
- Sign in button on the right
- Use justify-between

### Task 2: Create Card Grid
Build 3 equal-width cards:
- Use flex and flex-1
- Add gap between them
- Use flex-wrap to stack on mobile

### Task 3: Create a Centered Modal
Build a modal dialog:
- Centered both ways
- Full screen background
- White card in center
- Use items-center and justify-center

### Task 4: Dashboard Layout
Create a dashboard with:
- Navbar at top
- Sidebar on left
- Main content on right
- Multiple cards in content area

---
