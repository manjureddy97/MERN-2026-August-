# Day 6: Borders, Shadows, and Effects

## Borders

Borders create outlines around elements.

### Border Width

```html
<!-- Border on all sides -->
<div class="border">1px border</div>
<div class="border-2">2px border</div>
<div class="border-4">4px border</div>
<div class="border-8">8px border</div>

<!-- Specific sides -->
<div class="border-t">Top border only</div>
<div class="border-r">Right border only</div>
<div class="border-b">Bottom border only</div>
<div class="border-l">Left border only</div>

<!-- Exclude sides -->
<div class="border border-t-0">All except top</div>
```

### Border Color

```html
<div class="border border-red-500">Red border</div>
<div class="border border-blue-500">Blue border</div>
<div class="border border-gray-300">Light gray border</div>
```

### Real Example: Card with Border
```html
<div class="p-6 border border-gray-300 rounded-lg">
  <h3 class="font-bold text-lg mb-2">Card Title</h3>
  <p class="text-gray-600">Card content with border</p>
</div>
```

**Output:** Card with light gray border.

---

## Border Radius (Rounded Corners)

Make corners rounded with `rounded-[size]`

```html
<!-- Slight rounding -->
<div class="rounded">4px corners</div>
<div class="rounded-md">6px corners</div>

<!-- More rounding -->
<div class="rounded-lg">8px corners</div>
<div class="rounded-xl">12px corners</div>
<div class="rounded-2xl">16px corners</div>

<!-- Maximum rounding -->
<div class="rounded-full">50% (circle/pill shape)</div>

<!-- Specific corners -->
<div class="rounded-tl-lg">Top-left only</div>
<div class="rounded-tr-lg">Top-right only</div>
<div class="rounded-bl-lg">Bottom-left only</div>
<div class="rounded-br-lg">Bottom-right only</div>
```

### Visual Guide

```
rounded:     rounded-lg:    rounded-full:
┌────────┐   ┌──────────┐   ◯
│        │   │          │
└────────┘   └──────────┘
```

### Real Example: Modern Card
```html
<div class="bg-white rounded-lg border border-gray-200 p-6 shadow-md">
  <h3 class="font-bold text-lg mb-2">Modern Card</h3>
  <p class="text-gray-600">Rounded corners make it feel modern</p>
</div>
```

---

## Shadows

Add depth with shadows.

### Shadow Levels

```html
<!-- Small shadow -->
<div class="shadow-sm p-4 bg-white">Subtle shadow</div>

<!-- Medium shadow -->
<div class="shadow p-4 bg-white">Regular shadow</div>
<div class="shadow-md p-4 bg-white">Medium shadow</div>

<!-- Large shadow -->
<div class="shadow-lg p-4 bg-white">Large shadow</div>
<div class="shadow-xl p-4 bg-white">Extra large shadow</div>

<!-- Huge shadow -->
<div class="shadow-2xl p-4 bg-white">Massive shadow</div>

<!-- No shadow -->
<div class="shadow-none p-4 bg-white">No shadow</div>
```

### Shadow Visual Impact

```
shadow-sm:    subtle depth
shadow:       normal depth (most common)
shadow-lg:    prominent depth
shadow-xl:    strong elevation
shadow-2xl:   maximum depth
```

### Real Example: Elevated Card
```html
<div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition">
  <h3 class="font-bold text-lg mb-2">Elevated Card</h3>
  <p class="text-gray-600">Hover for more shadow</p>
</div>
```

**Output:** Card with shadow that increases on hover.

---

## Ring (Focus Indicators)

Create a focus ring for accessibility and user feedback.

```html
<!-- Ring around element -->
<button class="px-4 py-2 bg-blue-500 text-white rounded ring-2 ring-blue-300">
  Focused Button
</button>

<!-- Ring on focus state (we'll cover hover/focus next lesson) -->
<input class="px-4 py-2 rounded focus:ring-2 focus:ring-blue-500" />
```

### Ring Colors and Sizes

```html
<div class="ring-1 ring-gray-300">Thin ring</div>
<div class="ring-2 ring-blue-500">Medium ring</div>
<div class="ring-4 ring-red-500">Thick ring</div>
```

---

## Opacity (Transparency)

Make elements see-through.

```html
<!-- Fully visible -->
<div class="bg-red-500 opacity-100 p-4">Fully visible</div>

<!-- Partially transparent -->
<div class="bg-red-500 opacity-75 p-4">75% visible</div>
<div class="bg-red-500 opacity-50 p-4">50% visible</div>

<!-- Mostly transparent -->
<div class="bg-red-500 opacity-25 p-4">25% visible</div>
<div class="bg-red-500 opacity-0 p-4">Invisible</div>
```

### Real Example: Image Overlay
```html
<div class="relative">
  <img src="image.jpg" alt="background" class="w-full h-64 object-cover" />
  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black opacity-40"></div>
  <!-- Text on top -->
  <h1 class="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
    Overlay Text
  </h1>
</div>
```

**Output:** Image with dark overlay and white text on top.

---

## Gradients

Color gradients create smooth color transitions.

### Linear Gradients

```html
<!-- Left to right -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
  Left to right gradient
</div>

<!-- Top to bottom -->
<div class="bg-gradient-to-b from-blue-500 to-purple-600 p-8">
  Top to bottom gradient
</div>

<!-- Diagonal -->
<div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8">
  Diagonal gradient
</div>
```

### Direction Options

```html
<div class="bg-gradient-to-t">To top</div>
<div class="bg-gradient-to-r">To right</div>
<div class="bg-gradient-to-b">To bottom</div>
<div class="bg-gradient-to-l">To left</div>

<div class="bg-gradient-to-tr">To top-right</div>
<div class="bg-gradient-to-br">To bottom-right</div>
<div class="bg-gradient-to-bl">To bottom-left</div>
<div class="bg-gradient-to-tl">To top-left</div>
```

### Multiple Colors

```html
<!-- 3-color gradient -->
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 p-8">
  Multi-color gradient
</div>
```

### Real Example: Hero Section
```html
<div class="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
  <div class="text-center text-white">
    <h1 class="text-5xl font-bold mb-4">Welcome</h1>
    <p class="text-xl">Beautiful gradient background</p>
  </div>
</div>
```

---

## Blur and Backdrop Blur

Blur effects for modern UI.

### Blur

```html
<!-- Blur the element -->
<img src="image.jpg" alt="blurred" class="blur-sm" />
<img src="image.jpg" alt="blurred" class="blur" />
<img src="image.jpg" alt="blurred" class="blur-lg" />
```

### Backdrop Blur (Glassmorphism)

Create a frosted glass effect.

```html
<div class="relative">
  <img src="background.jpg" alt="background" class="w-full" />
  
  <!-- Frosted glass card -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="backdrop-blur-md bg-white bg-opacity-30 rounded-lg p-8 shadow-lg">
      <h2 class="text-white text-2xl font-bold">Glassmorphism</h2>
      <p class="text-white">Blurred background shows through</p>
    </div>
  </div>
</div>
```

**Output:** Card with frosted glass effect (blurred background visible through semi-transparent card).

---

## Complete Modern Card Example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-gray-100 p-8">
    <div class="max-w-md mx-auto">
      
      <!-- Premium Card -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        
        <!-- Image with gradient overlay -->
        <div class="relative">
          <img src="product.jpg" alt="product" class="w-full h-48 object-cover" />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>

        <!-- Content -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Premium Product</h3>
          <p class="text-gray-600 text-sm mb-4">
            High-quality product with excellent features
          </p>

          <!-- Price -->
          <div class="flex items-center justify-between mb-6">
            <span class="text-3xl font-bold text-blue-600">$99.99</span>
            <span class="text-sm text-gray-500 line-through">$149.99</span>
          </div>

          <!-- Button -->
          <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>

        <!-- Footer -->
        <div class="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div class="flex gap-4 text-sm text-gray-600">
            <span>✓ Free Shipping</span>
            <span>✓ Money Back</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
```

**Components:**
- Rounded corners on card
- Shadow for elevation
- Gradient overlay on image
- Organized border and spacing
- Professional appearance

---

## Glassmorphism Card

Modern frosted glass effect:

```html
<div class="relative bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex items-center justify-center">
  
  <div class="backdrop-blur-xl bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-8 max-w-md shadow-lg">
    <h2 class="text-white text-2xl font-bold mb-4">Glassmorphism</h2>
    <p class="text-white text-opacity-80 mb-6">
      This card has a frosted glass effect with a blurred background visible through it.
    </p>
    <button class="w-full bg-white bg-opacity-30 text-white py-2 rounded-lg font-bold hover:bg-opacity-40 transition">
      Learn More
    </button>
  </div>

</div>
```

---

## Best Practices

✅ **Use shadows for elevation hierarchy**
```html
<!-- Regular card -->
<div class="shadow-md p-4 bg-white">Normal</div>

<!-- Elevated card -->
<div class="shadow-lg p-4 bg-white">Important</div>

<!-- Floating card -->
<div class="shadow-xl p-4 bg-white">Very important</div>
```

✅ **Pair border and shadow**
```html
<div class="border border-gray-200 shadow-sm rounded-lg p-4">
  Card with subtle border and shadow
</div>
```

✅ **Use opacity for overlays**
```html
<div class="bg-black opacity-50">Dark overlay</div>
<div class="bg-white opacity-75">Light overlay</div>
```

✅ **Gradients for visual interest**
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
  Engaging gradient background
</div>
```

---

## Common Mistakes

❌ **Too many shadow levels**
```html
<!-- Confusing -->
<div class="shadow-sm p-4">Shadow SM</div>
<div class="shadow-md p-4">Shadow MD</div>
<div class="shadow-lg p-4">Shadow LG</div>
<div class="shadow-xl p-4">Shadow XL</div>
```

✅ **Use 2-3 consistent levels**
```html
<div class="shadow-sm p-4">Subtle</div>
<div class="shadow-lg p-4">Prominent</div>
```

❌ **Gradients that are too busy**
```html
<!-- Too much -->
<div class="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
  Busy gradient
</div>
```

✅ **Simple, clean gradients**
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Clean gradient
</div>
```

❌ **Low contrast with opacity**
```html
<!-- Hard to read -->
<div class="bg-gray-300 opacity-70 text-gray-500">
  Poor contrast
</div>
```

✅ **Good contrast**
```html
<div class="bg-white opacity-90 text-gray-900">
  Readable
</div>
```

---

## Interview Questions

**Q1: What's the difference between border and ring?**
A: Border is an outline; ring is a focus indicator (used for accessibility).

**Q2: When would you use backdrop-blur?**
A: For glassmorphism effects - cards on top of images where background is visible through blur.

**Q3: What's a good shadow level for most cards?**
A: shadow-md or shadow-lg. shadow-sm is too subtle; shadow-2xl is too much.

**Q4: How do you create a gradient from left to right?**
A: Use `bg-gradient-to-r from-[color] to-[color]`

**Q5: Why is opacity useful for overlays?**
A: It lets background show through while darkening or lightening it for contrast.

---

## Practice Assignment

### Task 1: Card Styling
Create 3 cards with:
- Different shadow levels
- Rounded corners
- Borders (one with, one without)
- Note the visual hierarchy

### Task 2: Gradient Backgrounds
Create backgrounds with:
- Horizontal gradient
- Vertical gradient
- Diagonal gradient
- Multi-color gradient
- Note which looks best

### Task 3: Glassmorphism Card
Build a frosted glass card with:
- Gradient background
- Blurred card on top
- Semi-transparent white background
- Text on card

### Task 4: Product Card
Create a product card with:
- Image with gradient overlay
- Product name and description
- Price
- Border, shadow, and rounded corners
- Button at bottom

---

## Summary

- **border:** Outline around element
- **rounded:** Rounded corners (rounded-lg for most cases)
- **shadow:** Depth effect (shadow-lg typical)
- **ring:** Focus indicator for accessibility
- **opacity:** Transparency level
- **bg-gradient-to-[direction]:** Color gradient
- **blur/backdrop-blur:** Blur effect
- **Best practice:** Combine border, shadow, and rounded for polished look
- **Glassmorphism:** backdrop-blur + opacity for modern effect
