# Day 1: Introduction to React.js with TypeScript

## What is React.js?

React is a JavaScript library for building user interfaces. Instead of manually updating the DOM (the HTML on your page), React manages updates automatically. Think of it like having an assistant that knows exactly what changed on your page and updates only those parts.

**Simple definition**: React makes building interactive websites easier by handling all the DOM updates for you.

**With TypeScript**: You get type safety on top of React — catch bugs before the app runs, autocomplete props, and safer refactors.

---

## Why React?

Imagine you're building a Gmail-like email app. Without React:
- You'd manually find the email element in HTML
- Update its content with JavaScript
- Manage all the changes yourself
- This gets messy quickly with many features

With React:
- You describe what the UI should look like
- React figures out what changed
- React updates only the changed parts
- Your code is much cleaner

**Real-world example**: Netflix uses React because they need to update recommendations, play buttons, and user data constantly without reloading the whole page.

---

## What is an SPA?

**SPA = Single Page Application**

An SPA loads ONE HTML page and JavaScript updates the content dynamically. You don't reload the page when navigating.

### Traditional Website (Multiple Pages)
```
Click Link → Page reloads → New HTML → Flash of blank screen
```

### SPA with React
```
Click Link → JavaScript updates content → Instant, smooth
```

**Example**: 
- Traditional: Every click loads a whole new page (slow)
- SPA: Page content changes instantly (fast)

---

## Virtual DOM

React doesn't directly update the browser's DOM. Instead:

1. You describe your UI in React code
2. React creates a "Virtual DOM" (a copy in memory)
3. When state changes, React updates the Virtual DOM
4. React compares old and new Virtual DOM
5. React updates ONLY what changed in the real DOM

**Why this matters**: The real DOM is slow to update. Virtual DOM is fast. React is efficient.

```
Your Code → Virtual DOM → Compare → Real DOM (only changes)
```

**Real analogy**: It's like editing a document - you don't rewrite everything, you only change what's different.

---

## React vs Vanilla JavaScript

### Vanilla JavaScript
```typescript
// Manually finding and updating DOM
const button = document.getElementById('counter') as HTMLButtonElement;
const display = document.getElementById('count') as HTMLElement;

let count = 0;

button.addEventListener('click', () => {
  count++;
  display.textContent = String(count);  // Manual update
});
```

### React + TypeScript
```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Which is better?**
- **Vanilla JS**: Good for tiny projects
- **React + TypeScript**: Good for anything bigger (cleaner, faster to build, type-safe)

---

## React vs Angular vs Vue (Quick Overview)

| Feature | React | Angular | Vue |
|---------|-------|---------|-----|
| **Learning Curve** | Easy | Steep | Very Easy |
| **Speed** | Fast | Slow | Fast |
| **Company** | Meta (Facebook) | Google | Community |
| **Job Market** | Most jobs | Enterprise jobs | Growing |
| **Best For** | Startups, web apps | Large enterprises | Learning |
| **TypeScript** | Excellent support | Built-in | Good support |

**For beginners**: Start with React + TypeScript. React has more jobs, and TypeScript is standard in modern React teams.

---

## Component-Based Architecture

React breaks UIs into small, reusable pieces called **components**.

### Without Components (Hard to maintain)
```
One giant HTML file → Hard to find things → Hard to reuse
```

### With Components (Clean and reusable)
```
Header Component
  ├─ Logo Component
  ├─ Navigation Component
  └─ Search Component

Product Section
  ├─ Product Card Component (reused 100 times)
  ├─ Product Image Component
  └─ Product Price Component
```

**Real example**: Netflix's UI is made of small components:
- Header (reused on every page)
- Movie Card (reused hundreds of times)
- Search Bar (reused in many places)

---

## Setup: React + TypeScript Development Environment

### Step 1: Install Node.js

1. Go to https://nodejs.org
2. Download the LTS (Long Term Support) version
3. Install it
4. Verify: Open terminal and type:

```bash
node --version
npm --version
```

You should see version numbers like `v18.0.0` and `8.0.0`.

### Step 2: Create a React + TypeScript App with Vite

Vite is a modern tool that creates React apps quickly. Use the **react-ts** template for TypeScript.

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
```

Your app should start at `http://localhost:5173`

### Step 3: Project Structure

```
my-react-app/
├─ src/
│  ├─ App.tsx          (Main component)
│  ├─ App.css          (Styles)
│  ├─ main.tsx         (Entry point)
│  ├─ vite-env.d.ts    (Vite TypeScript types)
│  └─ index.css        (Global styles)
├─ public/             (Static files)
├─ package.json        (Dependencies)
├─ tsconfig.json       (TypeScript config)
├─ tsconfig.app.json   (App TypeScript config)
└─ vite.config.ts      (Vite configuration)
```

**What's what:**
- `src/`: Your React code lives here (`.tsx` = TypeScript + JSX)
- `public/`: Images, icons, static files
- `package.json`: List of libraries you installed
- `main.tsx`: Where React starts
- `tsconfig.json`: TypeScript compiler options

### Step 4: npm Basics

```bash
npm install          # Install all dependencies
npm run dev          # Start development server
npm run build        # Create production version (type-checks too)
npm uninstall axios  # Remove a package
```

### Step 5: Running Your React App

After `npm run dev`, you should see:
```
Local:   http://localhost:5173
```

Open that URL in your browser. You'll see the React default page.

---

## JSX / TSX Basics

**JSX = JavaScript XML**  
**TSX = TypeScript + JSX** (same syntax, with types)

JSX looks like HTML but it's actually JavaScript. React converts it to regular JavaScript.

### JSX Looks Like HTML
```tsx
const element: JSX.Element = <h1>Hello World</h1>;
```

### But It's Really JavaScript
```typescript
// React converts it to:
const element = React.createElement('h1', null, 'Hello World');
```

### JSX Rules

**Rule 1: Return ONE element**
```tsx
// ❌ Wrong - two elements
return (
  <p>Hello</p>
  <p>World</p>
);

// ✅ Correct - wrapped in one
return (
  <div>
    <p>Hello</p>
    <p>World</p>
  </div>
);
```

**Rule 2: Close all tags**
```tsx
// ❌ Wrong
<input type="text">

// ✅ Correct
<input type="text" />
```

**Rule 3: Use `className` instead of `class`**
```tsx
// ❌ Wrong
<div class="container">

// ✅ Correct
<div className="container">
```

**Rule 4: Use `camelCase` for attributes**
```tsx
// ❌ Wrong
<button onclick="handleClick">

// ✅ Correct
<button onClick={handleClick}>
```

**Rule 5: Use curly braces `{}` for JavaScript**
```tsx
const name: string = "Ali";

// ✅ Correct
<p>Hello {name}</p>  // Shows "Hello Ali"
```

---

## React App Flow

Here's how a React app starts:

```
1. User opens your website
   ↓
2. Browser loads main.tsx
   ↓
3. main.tsx loads App.tsx component
   ↓
4. App.tsx renders to the screen
   ↓
5. User interacts (clicks, types, etc.)
   ↓
6. React updates only what changed
```

---

## First React + TypeScript App

### Step 1: Open your project

```bash
cd my-react-app
npm run dev
```

### Step 2: Edit `src/App.tsx`

Replace everything with:

```tsx
export default function App() {
  return (
    <div>
      <h1>Welcome to React! 🎉</h1>
      <p>I'm learning React with TypeScript today!</p>
    </div>
  );
}
```

### Step 3: Save and see the result

Your browser should automatically update. You should see:

```
Welcome to React! 🎉
I'm learning React with TypeScript today!
```

**That's your first React + TypeScript app!** 🎊

---

## Simple Component Examples

### Example 1: Greeting Component

```tsx
export default function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

Usage in App.tsx:
```tsx
import Greeting from './Greeting';

export default function App() {
  return <Greeting />;
}
```

### Example 2: Card Component

```tsx
export default function Card() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>Product Name</h2>
      <p>Price: $99</p>
    </div>
  );
}
```

### Example 3: Multiple Components

`src/App.tsx`:
```tsx
function Header() {
  return <h1>My Website</h1>;
}

function Footer() {
  return <p>© 2024 My Company</p>;
}

export default function App() {
  return (
    <div>
      <Header />
      <p>Main content here</p>
      <Footer />
    </div>
  );
}
```

**Output:**
```
My Website
Main content here
© 2024 My Company
```

---

## Practice Assignment 1

**Task**: Create a simple profile card component that displays:
- A name
- A job title
- A bio

**Example:**
```
Ali Khan
Full Stack Developer
Building awesome web apps since 2020
```

**Steps:**
1. Create a new file `src/ProfileCard.tsx`
2. Make a component that shows the three items above
3. Import it in App.tsx and display it

---

## Common Mistakes

**Mistake 1: Forgetting parentheses in exports**
```tsx
// ❌ Wrong
export default App

// ✅ Correct
export default function App() { ... }
// or: export default App;
```

**Mistake 2: Not closing JSX tags**
```tsx
// ❌ Wrong
<input type="text">

// ✅ Correct
<input type="text" />
```

**Mistake 3: Using `onclick` instead of `onClick`**
```tsx
// ❌ Wrong
<button onclick={handleClick}>

// ✅ Correct
<button onClick={handleClick}>
```

**Mistake 4: Using `.jsx` instead of `.tsx` in a TypeScript project**
```tsx
// ❌ Wrong for TS projects
// App.jsx

// ✅ Correct
// App.tsx
```

---

## Interview Questions

1. **What is React?**
   - Answer: A JavaScript library for building user interfaces with components

2. **What is the Virtual DOM?**
   - Answer: A copy of the real DOM in memory that React uses to determine what changed

3. **What is JSX / TSX?**
   - Answer: HTML-like syntax in JavaScript/TypeScript that React converts to function calls

4. **What is an SPA?**
   - Answer: A Single Page Application that loads once and updates dynamically without reloading

5. **Why is React faster than vanilla JavaScript?**
   - Answer: React uses the Virtual DOM to update only what changed, not the entire page

6. **Why use TypeScript with React?**
   - Answer: Catch type errors at build time, better autocomplete, safer props and state

---

## Summary Notes

✅ React makes building interactive UIs easier  
✅ React uses components (reusable pieces)  
✅ Virtual DOM makes updates efficient  
✅ TSX looks like HTML but is TypeScript + JSX  
✅ Each component returns one element  
✅ Use `className` and `onClick` (camelCase)  
✅ Start with Vite + `react-ts` template  
✅ Files use `.tsx` for components, `.ts` for pure logic  
✅ `npm run dev` to see changes live  

---
