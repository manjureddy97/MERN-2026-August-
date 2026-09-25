# Day 6: React Router and Navigation (TypeScript)

## What is React Router?

React Router lets you build **multi-page apps** without reloading the page (SPA navigation).

**Without Router**: You see the same page content  
**With Router**: Different URLs show different pages/components

---

## Setup React Router

### Install React Router

```bash
npm install react-router-dom
```

For TypeScript, types are included with modern `react-router-dom` (v6+). No extra package needed.

### Basic Setup

Replace `src/main.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

**What this does:**
- `BrowserRouter` enables routing in your app
- Wraps everything so routing works
- TypeScript ensures the root element exists before rendering

---

## Routes and Route

`Routes` and `Route` map URLs to components.

### Simple Routes

`src/App.tsx`:

```tsx
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

**How it works:**
- URL is `/` → shows `<Home />`
- URL is `/about` → shows `<About />`
- URL is `/contact` → shows `<Contact />`

**Try it:**
1. Start app: `npm run dev`
2. Go to `http://localhost:5173/`
3. Change URL to `/about`
4. See different content (no reload!)

---

## Link Component

`Link` navigates without page reload (like a normal `<a>` tag but faster).

### Basic Links

```tsx
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

**Why not `<a>` tags?**
- `<a>` reloads the page (slow)
- `<Link>` updates without reload (fast)

### Link Styling

```tsx
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <Link 
        to="/" 
        style={{ 
          fontWeight: location.pathname === "/" ? "bold" : "normal"
        }}
      >
        Home
      </Link>
      <Link 
        to="/about"
        style={{ 
          fontWeight: location.pathname === "/about" ? "bold" : "normal"
        }}
      >
        About
      </Link>
    </nav>
  );
}
```

---

## useNavigate Hook

`useNavigate` lets you navigate programmatically (with code, not clicks).

### Redirect After Action

```tsx
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check credentials
    if (email === "user@example.com" && password === "password") {
      navigate("/dashboard");  // Go to dashboard
    } else {
      alert("Invalid credentials");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Navigate Back

```tsx
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h1>Product Details</h1>
    </div>
  );
}
```

---

## Route Parameters

Pass data through URL.

### URL Parameters

```tsx
import { Routes, Route, useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  
  return <h1>User: {userId}</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}
```

**How it works:**
- URL: `/user/123` → userId = "123"
- URL: `/user/456` → userId = "456"
- `:userId` is a **parameter placeholder**
- `useParams<{ userId: string }>()` types the params

### Real Example: Product Detail Page

```tsx
import { Routes, Route, Link, useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
}

interface ProductDetail {
  name: string;
  price: number;
}

function ProductList() {
  const products: Product[] = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  
  const products: Record<string, ProductDetail> = {
    "1": { name: "Laptop", price: 999 },
    "2": { name: "Phone", price: 599 },
    "3": { name: "Tablet", price: 399 }
  };
  
  const product = productId ? products[productId] : undefined;
  
  if (!product) return <p>Product not found</p>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  );
}
```

---

## Nested Routes

Routes inside routes.

### Basic Nested Routing

```tsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />  {/* Where nested routes show */}
    </div>
  );
}

function Profile() {
  return <h2>Your Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

**How it works:**
- `/dashboard` shows Dashboard + Outlet
- `/dashboard/profile` shows Dashboard + Profile in Outlet
- `/dashboard/settings` shows Dashboard + Settings in Outlet

---

## 404 Page

Show a page when URL doesn't match any route.

### Catch-All Route

```tsx
import { Routes, Route } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />  {/* Catch all */}
    </Routes>
  );
}
```

`path="*"` matches any URL that didn't match above routes.

---

## Real-World Example: Multi-Page Website

```tsx
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductDetailData {
  name: string;
  price: number;
  description: string;
}

// Pages
function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Check out our amazing products!</p>
    </div>
  );
}

function Products() {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Tablet", price: 399 }
  ];
  
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div style={{ border: "1px solid #ccc", padding: "10px" }}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const products: Record<string, ProductDetailData> = {
    "1": { name: "Laptop", price: 999, description: "High-performance laptop" },
    "2": { name: "Phone", price: 599, description: "Latest smartphone" },
    "3": { name: "Tablet", price: 399, description: "Portable tablet" }
  };
  
  const product = productId ? products[productId] : undefined;
  
  if (!product) return <p>Product not found</p>;
  
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: info@example.com</p>
      <p>Phone: 1-800-123-4567</p>
    </div>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// Navigation Component
function Navbar() {
  return (
    <nav style={{ background: "#333", color: "white", padding: "10px" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "20px", color: "white" }}>Products</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

// Main App
export default function App() {
  return (
    <div>
      <Navbar />
      
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
```

---

## useLocation Hook

Get current URL information.

```tsx
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  console.log(location.pathname);  // Current path (string)
  
  return (
    <nav>
      <p>Current page: {location.pathname}</p>
      <Link to="/" style={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}>
        Home
      </Link>
      <Link to="/about" style={{ fontWeight: location.pathname === "/about" ? "bold" : "normal" }}>
        About
      </Link>
    </nav>
  );
}
```

---

## Common Mistakes

**Mistake 1: Forgetting BrowserRouter wrapper**
```tsx
// ❌ Wrong - router not enabled
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return <Routes>...</Routes>;
}

// ✅ Correct - wrapped in BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>...</Routes>
    </BrowserRouter>
  );
}
```

**Mistake 2: Using `<a>` instead of `<Link>`**
```tsx
// ❌ Wrong - reloads page
<a href="/about">About</a>

// ✅ Correct - no reload
<Link to="/about">About</Link>
```

**Mistake 3: Missing useParams import / typing**
```tsx
// ❌ Wrong - error / untyped
const { userId } = useParams();

// ✅ Correct
import { useParams } from 'react-router-dom';
const { userId } = useParams<{ userId: string }>();
```

**Mistake 4: Route order matters**
```tsx
// Put specific routes before dynamic ones when needed
<Route path="/user/123" element={<SpecificUser />} />
<Route path="/user/:id" element={<User />} />
```

**Mistake 5: Assuming params are always defined**
```tsx
// ❌ productId might be undefined
const product = products[productId];

// ✅ Check first
const product = productId ? products[productId] : undefined;
```

---

## Interview Questions

1. **What is React Router?**
   - A library for building multi-page SPAs with different URLs

2. **Why use Link instead of <a>?**
   - Link doesn't reload the page, making navigation faster

3. **What does useParams do?**
   - Gets URL parameters like `/user/:userId`

4. **What does useNavigate do?**
   - Lets you navigate programmatically with code

5. **What is an Outlet?**
   - A placeholder for nested routes to render

6. **How do you catch undefined routes?**
   - Use `<Route path="*" element={<NotFound />} />`

7. **How do you type route params?**
   - `useParams<{ userId: string }>()`

---

## Practice Assignment 6

**Task**: Build a Blog Website

Requirements:
- Home page (list all blog posts)
- Individual blog post page (by ID)
- About page
- Contact page
- 404 page
- Navigation bar (links to all pages)
- Click post title to view full post
- Back button on post detail page
- Type posts with an interface

**Sample Blog Posts:**
```tsx
interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: "Learning React", content: "React is awesome..." },
  { id: 2, title: "Web Development", content: "Building modern websites..." },
  { id: 3, title: "TypeScript Tips", content: "Useful TS techniques..." }
];
```

**Bonus:**
- Add search filter on home page
- Highlight current page in navbar
- Add breadcrumb navigation
- Use `useParams<{ id: string }>()` correctly

---

## Summary Notes

✅ Install: `npm install react-router-dom`  
✅ Wrap app in `<BrowserRouter>` (in `main.tsx`)  
✅ Use `<Routes>` and `<Route>` to map URLs  
✅ Use `<Link>` for navigation (no reload)  
✅ Use `useNavigate()` to navigate with code  
✅ Use `useParams<{ param: string }>()` for typed URL params  
✅ Use `useLocation()` to get current URL  
✅ Use `<Outlet />` for nested routes  
✅ Use `path="*"` for 404 page  
✅ Order routes correctly (specific first)  
✅ Check that params exist before using them  

---
