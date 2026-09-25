# Day 7: Positioning, Display, and Overflow

## Display: Block vs Inline vs Inline-Block

Control how elements behave and take up space.

### Block
Takes full width, starts on new line.

```html
<div class="block">
  This block takes full width
</div>
<div class="block">
  This also takes full width
</div>
```

**Output:**
```
[Full width]
[Full width]
```

### Inline
Takes only necessary width, flows with text.

```html
<span class="inline">Inline text</span>
<span class="inline">flows together</span>
<span class="inline">on same line</span>
```

**Output:** Inline text flows together on same line

### Inline-Block
Inline but respects width/height.

```html
<div class="inline-block w-32 h-24 bg-blue-500">Box 1</div>
<div class="inline-block w-32 h-24 bg-blue-500">Box 2</div>
```

**Output:** Two boxes side by side.

### Real Example: Navigation Links
```html
<nav class="flex">
  <a class="inline-block px-4 py-2 hover:bg-gray-200">Home</a>
  <a class="inline-block px-4 py-2 hover:bg-gray-200">About</a>
  <a class="inline-block px-4 py-2 hover:bg-gray-200">Contact</a>
</nav>
```

---

## Hidden

Hide elements from display.

```html
<!-- Completely hidden -->
<div class="hidden">
  This is not visible
</div>

<!-- Hidden but takes up space (invisible) -->
<div class="invisible">
  Not visible but space reserved
</div>

<!-- Show only on large screens -->
<div class="hidden lg:block">
  Visible on large screens only
</div>
```

### Real Example: Mobile Menu Toggle
```html
<!-- Navigation on desktop -->
<nav class="hidden md:flex gap-6 items-center">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<!-- Mobile menu button -->
<button class="md:hidden">Menu</button>
```

---

## Positioning

Control element position in the layout.

### Relative
Position relative to its normal position.

```html
<div class="relative">
  <div class="relative left-4 top-2">
    Moved 4px right and 2px down
  </div>
</div>
```

**Use case:** Fine-tuning position of element.

### Absolute
Position relative to nearest positioned parent.

```html
<div class="relative">
  <!-- Parent for absolute positioning -->
  
  <div class="absolute top-4 right-4">
    Top-right corner
  </div>
</div>
```

**Visual:**
```
┌──────────────────┐
│              [Item]  (absolute)
│                  │
└──────────────────┘
```

### Fixed
Position relative to viewport (stays while scrolling).

```html
<!-- Sticky navbar that stays at top -->
<nav class="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
  Navigation bar
</nav>

<!-- Content below navbar -->
<div class="pt-16">
  Page content (offset for navbar)
</div>
```

### Sticky
Sticks to viewport when scrolling past it.

```html
<div class="sticky top-0 bg-white border-b z-10">
  Section heading - sticks to top while scrolling
</div>
```

**Difference from fixed:** Sticky only sticks within its parent container.

---

## Z-Index: Layering

Control which elements appear on top.

```html
<!-- Lower z-index (behind) -->
<div class="z-10 bg-blue-500 w-32 h-32 absolute">
  Behind
</div>

<!-- Higher z-index (in front) -->
<div class="z-20 bg-red-500 w-32 h-32 absolute left-10 top-10">
  On top
</div>
```

### Z-Index Scale

```
z-0     = 0
z-10    = 10
z-20    = 20
z-30    = 30
z-40    = 40
z-50    = 50
z-auto  = auto
```

### Real Example: Modal Overlay
```html
<!-- Overlay behind modal -->
<div class="fixed inset-0 bg-black opacity-50 z-40"></div>

<!-- Modal on top -->
<div class="fixed inset-0 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg p-8 max-w-md">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p class="text-gray-600 mb-6">Modal content here</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
  </div>
</div>
```

---

## Inset: Shorthand Positioning

Set top, right, bottom, left at once.

```html
<!-- All sides (usually with absolute/fixed) -->
<div class="absolute inset-0">
  Covers entire parent
</div>

<!-- Specific sides -->
<div class="absolute inset-x-0 top-0">
  Full width at top
</div>

<div class="absolute inset-y-0 right-0">
  Full height on right
</div>

<div class="absolute top-0 left-4 right-4">
  Top with side margins
</div>
```

### Real Example: Full-Screen Overlay
```html
<div class="fixed inset-0 bg-black opacity-50"></div>
```

Equivalent to:
```html
<div class="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div>
```

---

## Overflow

Control what happens when content is too big.

### Overflow-Hidden
Cut off content that doesn't fit.

```html
<div class="w-32 h-32 overflow-hidden bg-white border">
  This content might be cut off if it overflows
</div>
```

### Overflow-Auto
Show scrollbar only if needed.

```html
<div class="w-64 h-32 overflow-auto bg-white border">
  Long content that might overflow...
</div>
```

### Overflow-Scroll
Always show scrollbar.

```html
<div class="w-64 h-32 overflow-scroll bg-white border">
  Content scrolls within this box
</div>
```

### Overflow-Visible
Content spills out (default).

```html
<div class="overflow-visible">
  Content can overflow visibly
</div>
```

### Real Example: Truncated Text
```html
<!-- Single line truncation -->
<div class="overflow-hidden text-ellipsis whitespace-nowrap">
  This very long text gets cut off with ellipsis...
</div>

<!-- Multi-line truncation -->
<div class="line-clamp-3">
  This text is limited to 3 lines.
  If it's longer, it gets cut off.
  Very useful for previews and cards.
</div>
```

---

## Complete Sticky Navbar Example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- Sticky Navbar -->
  <nav class="sticky top-0 bg-white border-b border-gray-200 shadow-md z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Logo</div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-blue-600">Home</a>
        <a href="#" class="hover:text-blue-600">About</a>
        <a href="#" class="hover:text-blue-600">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6">Page Title</h1>
    <p class="text-gray-600 mb-4">This content scrolls under the navbar.</p>
    
    <!-- Spacer for scrolling demo -->
    <div class="space-y-4">
      <p class="h-32 bg-gray-200 rounded flex items-center justify-center">
        Content block 1
      </p>
      <p class="h-32 bg-gray-200 rounded flex items-center justify-center">
        Content block 2
      </p>
      <p class="h-32 bg-gray-200 rounded flex items-center justify-center">
        Content block 3
      </p>
    </div>
  </div>
</body>
</html>
```

**Behavior:** Navbar stays at top while scrolling.

---

## Modal Popup Example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
    }
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
    }
  </script>
</head>
<body class="bg-gray-100">
  <!-- Page content -->
  <div class="p-8">
    <button onclick="openModal()" class="bg-blue-600 text-white px-6 py-2 rounded-lg">
      Open Modal
    </button>
  </div>

  <!-- Modal (hidden by default) -->
  <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <!-- Modal backdrop (click to close) -->
    <div class="absolute inset-0" onclick="closeModal()"></div>
    
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow-xl p-8 max-w-md z-50">
      <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
      <p class="text-gray-600 mb-6">
        This is modal content. It appears on top of the page.
      </p>
      <div class="flex gap-4">
        <button onclick="closeModal()" class="flex-1 bg-gray-300 text-gray-800 py-2 rounded">
          Cancel
        </button>
        <button onclick="closeModal()" class="flex-1 bg-blue-600 text-white py-2 rounded">
          Confirm
        </button>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Floating Action Button

```html
<!-- Page content -->
<div class="p-8">
  <!-- Content here -->
</div>

<!-- Floating button (bottom-right, fixed position) -->
<button class="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-40">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
  </svg>
</button>
```

---

## Text Ellipsis (Truncation)

Cut off text with ellipsis.

```html
<!-- Single line truncation -->
<div class="w-48 overflow-hidden text-ellipsis whitespace-nowrap bg-gray-100 p-4">
  This very long text will be cut off with ellipsis at the end...
</div>

<!-- Multi-line truncation (3 lines) -->
<div class="line-clamp-3 bg-gray-100 p-4">
  This is a paragraph of text that will be truncated after 3 lines.
  The text will be cut off with an ellipsis at the end.
  This is useful for card previews and descriptions.
</div>
```

---

## Best Practices

✅ **Use relative parent for absolute children**
```html
<div class="relative">
  <!-- Child is positioned relative to this -->
  <div class="absolute top-4 right-4">
    Positioned correctly
  </div>
</div>
```

✅ **Use z-index for modals and overlays**
```html
<!-- Overlay -->
<div class="z-40">Overlay</div>

<!-- Modal on top -->
<div class="z-50">Modal</div>
```

✅ **Use sticky for section headers**
```html
<div class="sticky top-0 bg-white font-bold z-10">
  Section Header
</div>
```

✅ **Combine overflow with width constraints**
```html
<div class="w-64 overflow-hidden text-ellipsis">
  Long text gets truncated
</div>
```

---

## Common Mistakes

❌ **Absolute positioning without relative parent**
```html
<!-- Wrong - positioned relative to viewport -->
<div>
  <div class="absolute top-4">Positioned wrongly</div>
</div>
```

✅ **Set relative on parent**
```html
<div class="relative">
  <div class="absolute top-4">Positioned correctly</div>
</div>
```

❌ **Z-index too high**
```html
<!-- Unnecessary -->
<div class="z-9999">Element</div>
```

✅ **Use reasonable z-index**
```html
<div class="z-10">Modal</div>
<div class="z-20">Popup</div>
```

❌ **Overflow-scroll when not needed**
```html
<!-- Always shows scrollbar -->
<div class="overflow-scroll">Short content</div>
```

✅ **Use overflow-auto**
```html
<!-- Scrollbar only if needed -->
<div class="overflow-auto">Content</div>
```

---

## Interview Questions

**Q1: What's the difference between position absolute and fixed?**
A: Absolute is relative to nearest positioned parent; fixed is relative to viewport and stays while scrolling.

**Q2: When would you use sticky positioning?**
A: For headers and section titles that should stick to top while scrolling but only within their container.

**Q3: Why is z-index important for modals?**
A: To ensure the modal appears on top of all other content.

**Q4: What does `inset-0` do?**
A: Sets top, right, bottom, and left to 0, making element cover entire parent.

**Q5: How do you truncate text with ellipsis?**
A: Use `overflow-hidden text-ellipsis whitespace-nowrap` for single line, or `line-clamp-[n]` for multiple lines.

---

## Practice Assignment

### Task 1: Sticky Navbar
Create a navbar that:
- Stays at top while scrolling
- Has some content below
- Navbar doesn't move with scroll

### Task 2: Modal Dialog
Build a modal that:
- Appears centered on screen
- Has backdrop overlay
- Can be closed by clicking backdrop or button
- Use z-index properly

### Task 3: Floating Button
Create a button that:
- Fixed in bottom-right corner
- Always visible while scrolling
- Has proper z-index
- Hover effect

### Task 4: Card with Ellipsis
Build a card with:
- Title (single line truncated)
- Description (3 lines max, truncated)
- Image
- Shows how to handle overflow

---

## Summary

- **display:** Control how element takes up space (block, inline, inline-block)
- **hidden:** Completely hide element
- **position:** relative (within normal flow), absolute (exact position), fixed (viewport-fixed), sticky (within container)
- **inset-0:** Set all sides to 0 (full coverage)
- **z-index:** Control layering (higher = on top)
- **overflow:** What happens to oversized content (hidden, auto, scroll)
- **text-ellipsis:** Truncate text with three dots
- **line-clamp-[n]:** Limit text to n lines
- **Sticky navbar:** Use `sticky top-0` with z-index
- **Modals:** Combine fixed + absolute + z-index
