# Day 5: Grid and Responsive Design

## What is CSS Grid?

Grid creates a 2D layout system with rows AND columns. Perfect for complex layouts.

**Flexbox vs Grid:**
- **Flexbox:** One-dimensional (row or column)
- **Grid:** Two-dimensional (rows and columns together)

**Visual:**
```
Flexbox (1D):
[Item] [Item] [Item]

Grid (2D):
┌─────┬─────┬─────┐
│ 1   │ 2   │ 3   │
├─────┼─────┼─────┤
│ 4   │ 5   │ 6   │
└─────┴─────┴─────┘
```

---

## Enable Grid

Start with the `grid` class:

```html
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Grid Columns

Define how many columns using `grid-cols-[number]`

```html
<!-- 1 column (stacked) -->
<div class="grid grid-cols-1">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 2 columns -->
<div class="grid grid-cols-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- 3 columns -->
<div class="grid grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 4 columns -->
<div class="grid grid-cols-4">
  <!-- 4 items per row -->
</div>
```

### Visual Example: 3 Columns
```
grid-cols-3:
┌─────────┬─────────┬─────────┐
│ Item 1  │ Item 2  │ Item 3  │
├─────────┼─────────┼─────────┤
│ Item 4  │ Item 5  │ Item 6  │
└─────────┴─────────┴─────────┘
```

---

## Grid Gaps

Add space between grid items with `gap-[size]`

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
  <div class="bg-blue-500 p-4">Item 4</div>
  <div class="bg-blue-500 p-4">Item 5</div>
  <div class="bg-blue-500 p-4">Item 6</div>
</div>
```

**Output:** 3-column grid with 16px space between items.

---

## Column Spanning

Make an item take up multiple columns using `col-span-[number]`

```html
<div class="grid grid-cols-3 gap-4">
  <!-- Spans 2 columns -->
  <div class="col-span-2 bg-blue-500 p-4">Wide Item</div>
  
  <!-- Regular item -->
  <div class="bg-blue-500 p-4">Item</div>
  
  <!-- Regular items -->
  <div class="bg-blue-500 p-4">Item</div>
  <div class="bg-blue-500 p-4">Item</div>
  <div class="bg-blue-500 p-4">Item</div>
</div>
```

**Output:**
```
┌─────────────────┬─────────┐
│ Wide Item (2)   │ Item    │
├─────────┬───────┼─────────┤
│ Item    │ Item  │ Item    │
└─────────┴───────┴─────────┘
```

### Real Example: Dashboard Header
```html
<div class="grid grid-cols-3 gap-4 mb-8">
  <!-- Main chart spans 2 columns -->
  <div class="col-span-2 bg-white rounded shadow p-6">
    <h3 class="font-bold mb-4">Revenue Chart</h3>
    <!-- Chart here -->
  </div>
  
  <!-- Stat box -->
  <div class="bg-white rounded shadow p-6">
    <h3 class="text-gray-600 text-sm font-semibold">Total Revenue</h3>
    <p class="text-3xl font-bold">$45,000</p>
  </div>
</div>
```

---

## Row Spanning

Make an item take up multiple rows using `row-span-[number]`

```html
<div class="grid grid-cols-3 grid-rows-2 gap-4">
  <!-- Spans 2 rows -->
  <div class="row-span-2 bg-blue-500 p-4">Tall Item</div>
  
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
  <div class="bg-blue-500 p-4">Item 4</div>
</div>
```

**Output:**
```
┌─────┬───────┬───────┐
│ Tall│ Item1 │ Item2 │
│ Item│ Item3 │ Item4 │
└─────┴───────┴───────┘
```

---

## Responsive Design: Mobile-First Approach

Design for mobile FIRST, then add classes for larger screens.

### Responsive Breakpoints

```
sm:  640px   (small phones)
md:  768px   (tablets)
lg:  1024px  (desktops)
xl:  1280px  (large screens)
2xl: 1536px  (very large screens)
```

### How to Use

Prefix classes with breakpoint:

```html
<!-- Mobile (1 column) -->
<!-- Tablet (2 columns) at md: -->
<!-- Desktop (3 columns) at lg: -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
  <div class="bg-blue-500 p-4">Item 4</div>
  <div class="bg-blue-500 p-4">Item 5</div>
  <div class="bg-blue-500 p-4">Item 6</div>
</div>
```

**Behavior:**
- **Mobile:** 1 column (full width)
- **Tablet:** 2 columns
- **Desktop:** 3 columns

---

## Complete Responsive Product Gallery

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <h1 class="text-4xl font-bold mb-2">Our Products</h1>
      <p class="text-gray-600 mb-12">Discover our latest collection</p>

      <!-- Product Grid - Responsive -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Product Card 1 -->
        <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="product1.jpg" alt="Product 1" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-4">Great product description</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-blue-600">$29.99</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="product2.jpg" alt="Product 2" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-4">Great product description</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-blue-600">$39.99</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="product3.jpg" alt="Product 3" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-4">Great product description</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-blue-600">$49.99</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</body>
</html>
```

**Responsive behavior:**
- **Mobile:** 1 product per row (full width, stacked)
- **Tablet:** 2 products per row
- **Desktop:** 3 products per row

---

## Gallery Layout with Mixed Sizes

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
  <!-- Large featured item -->
  <div class="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-300 rounded-lg h-64">
    Featured
  </div>

  <!-- Regular items -->
  <div class="bg-gray-300 rounded-lg h-32">Item</div>
  <div class="bg-gray-300 rounded-lg h-32">Item</div>
  <div class="bg-gray-300 rounded-lg h-32">Item</div>
  <div class="bg-gray-300 rounded-lg h-32">Item</div>
  <div class="bg-gray-300 rounded-lg h-32">Item</div>
</div>
```

---

## Responsive Dashboard Layout

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>

    <!-- Cards - 1 col on mobile, 2 on tablet, 4 on desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-600 text-sm font-semibold mb-2">Total Users</h3>
        <p class="text-3xl font-bold">12,345</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-600 text-sm font-semibold mb-2">Revenue</h3>
        <p class="text-3xl font-bold">$45,000</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-600 text-sm font-semibold mb-2">Conversion</h3>
        <p class="text-3xl font-bold">3.2%</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-600 text-sm font-semibold mb-2">Traffic</h3>
        <p class="text-3xl font-bold">24.5K</p>
      </div>
    </div>

    <!-- Main content -->
    <!-- Full width on mobile, 2/3 on desktop -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">Revenue Chart</h2>
        <!-- Chart placeholder -->
        <div class="bg-gray-200 h-64 rounded"></div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">Top Products</h2>
        <div class="space-y-3">
          <div class="text-sm">Product A - $2,345</div>
          <div class="text-sm">Product B - $1,890</div>
          <div class="text-sm">Product C - $1,234</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Grid vs Flexbox: When to Use Each

| Use Case | Best Choice |
|----------|-------------|
| Navigation bar (horizontal) | Flexbox |
| Single row of items | Flexbox |
| Multi-column form | Grid |
| Complex 2D layout | Grid |
| Card grid (equal items) | Either (Grid simpler) |
| Centering content | Flexbox |
| Mixed column spans | Grid |

---

## Best Practices

✅ **Mobile-first design**
```html
<!-- Start simple -->
<div class="grid grid-cols-1">
  <!-- Then scale up -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

✅ **Use consistent gaps**
```html
<div class="grid grid-cols-3 gap-6">
  <!-- All items have same spacing -->
</div>
```

✅ **Responsive column spanning**
```html
<div class="col-span-2 lg:col-span-1">
  <!-- Spans 2 columns on mobile, 1 on desktop -->
</div>
```

✅ **Use max-w for large screens**
```html
<div class="max-w-6xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <!-- Content limited to max width on large screens -->
  </div>
</div>
```

---

## Common Mistakes

❌ **Not thinking mobile-first**
```html
<!-- Wrong approach -->
<div class="grid grid-cols-3 md:grid-cols-1">
  <!-- Large on mobile, small on desktop - backwards! -->
</div>
```

✅ **Mobile-first approach**
```html
<!-- Right approach -->
<div class="grid grid-cols-1 md:grid-cols-3">
  <!-- Small on mobile, large on desktop -->
</div>
```

❌ **Too many column spans**
```html
<div class="col-span-3 md:col-span-2 lg:col-span-1">
  <!-- Too complex to maintain -->
</div>
```

✅ **Simple, clear spans**
```html
<div class="col-span-1 lg:col-span-2">
  <!-- Easy to understand -->
</div>
```

---

## Interview Questions

**Q1: What's the difference between Grid and Flexbox?**
A: Flexbox is one-dimensional (rows OR columns); Grid is two-dimensional (rows AND columns).

**Q2: When would you use col-span-2?**
A: When you want an item to take up 2 columns instead of 1.

**Q3: What is mobile-first design?**
A: Designing for small screens first, then adding complexity for larger screens.

**Q4: How do you create a responsive grid that changes from 1 to 2 to 3 columns?**
A: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**Q5: What's a common responsive grid layout?**
A: 1 column on mobile, 2 on tablet, 3-4 on desktop for card-based layouts.

---

## Practice Assignment

### Task 1: Product Grid
Create a responsive product listing:
- 1 column on mobile
- 2 columns on tablets
- 3 columns on desktop
- Use gap for spacing

### Task 2: Dashboard Layout
Build a dashboard with:
- 4 stat cards (1 col mobile, 2 col tablet, 4 col desktop)
- Chart area spanning 2/3 width on desktop
- Sidebar on right

### Task 3: Gallery Layout
Create a masonry-style gallery:
- Some items span 2 columns
- Responsive on all sizes
- Use images if available, otherwise colored boxes

### Task 4: Landing Page
Build a landing page with:
- Hero section (full width)
- Features section (3 columns on desktop)
- Testimonials (2 columns on tablet)
- All responsive

---

## Summary

- **grid:** Enable grid layout
- **grid-cols-[n]:** Create n columns
- **gap:** Space between grid items
- **col-span-[n]:** Item spans n columns
- **row-span-[n]:** Item spans n rows
- **Responsive prefixes:** sm:, md:, lg:, xl: for different screens
- **Mobile-first:** Design small first, enhance for larger screens
- **Common pattern:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Use max-w:** Limit container width on large screens for readability
