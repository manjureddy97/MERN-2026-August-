# Day 2: Components, JSX, and Props (TypeScript)

## Functional Components

A functional component is just a TypeScript function that returns JSX.

### Basic Structure

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

### Or Using Arrow Functions

```tsx
const Welcome = () => {
  return <h1>Welcome to React!</h1>;
};
```

**Component names MUST start with capital letters:**
```tsx
// ❌ Wrong - won't work
function welcome() {
  return <h1>Welcome</h1>;
}

// ✅ Correct
function Welcome() {
  return <h1>Welcome</h1>;
}
```

### Using Components

In `App.tsx`:
```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default function App() {
  return <Welcome />;  // Use like a tag
}
```

**Components are like custom HTML tags** - they're reusable pieces you create.

---

## JSX Rules (Complete)

### Rule 1: Return One Root Element

```tsx
// ❌ Wrong
return (
  <h1>Title</h1>
  <p>Content</p>
);

// ✅ Correct - wrapped in div
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// ✅ Also correct - using fragment (no extra div)
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);
```

**Fragment `<>...</>` advantage**: Doesn't add an extra HTML element

### Rule 2: Close All Tags

```tsx
// ❌ Wrong
<input type="text">
<img src="photo.jpg">
<br>

// ✅ Correct
<input type="text" />
<img src="photo.jpg" />
<br />
```

### Rule 3: Use `className` Not `class`

```tsx
// ❌ Wrong
<div class="container">

// ✅ Correct
<div className="container">
```

### Rule 4: Use camelCase for Attributes

```tsx
// ❌ Wrong
<button onclick="click">
<input placeholder="Enter name" autocomplete="off">

// ✅ Correct
<button onClick={handleClick}>
<input placeholder="Enter name" autoComplete="off" />
```

### Rule 5: Curly Braces for JavaScript

```tsx
const userName: string = "Ali";
const age: number = 25;
const items: string[] = ["Apple", "Banana", "Orange"];

return (
  <div>
    <p>Name: {userName}</p>           {/* Variable */}
    <p>Age: {age + 5}</p>              {/* Expression */}
    <p>Adults: {age >= 18 ? "Yes" : "No"}</p>  {/* Ternary */}
  </div>
);
```

### Rule 6: Inline Styles Use Objects

```tsx
// ❌ Wrong
<h1 style="color: blue; font-size: 20px">

// ✅ Correct
<h1 style={{ color: "blue", fontSize: "20px" }}>
```

**Note**: 
- Outer `{}` means "this is JavaScript"
- Inner `{}` is a JavaScript object
- Property names use camelCase: `font-size` → `fontSize`

---

## Props Basics

**Props = Properties**. Props are how you pass data to components, like function arguments.

In TypeScript, you define prop types with an **interface** or **type**.

### Simple Prop Example

```tsx
interface GreetingProps {
  name: string;
}

// Component that receives typed props
function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
export default function App() {
  return <Greeting name="Ali" />;
}
```

**Output:**
```
Hello, Ali!
```

### Multiple Props

```tsx
interface UserCardProps {
  name: string;
  age: number;
  city: string;
}

function UserCard({ name, age, city }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default function App() {
  return (
    <UserCard 
      name="Ali" 
      age={25} 
      city="New York" 
    />
  );
}
```

**Output:**
```
Ali
Age: 25
City: New York
```

### Destructuring Props (Cleaner)

Instead of `props.name`, you can destructure:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}

// ❌ Without destructuring (repetitive)
function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

// ✅ With destructuring (cleaner)
function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

### Optional Props

```tsx
interface ButtonProps {
  label: string;
  disabled?: boolean;  // Optional - may be undefined
}

function Button({ label, disabled = false }: ButtonProps) {
  return <button disabled={disabled}>{label}</button>;
}
```

---

## Passing Different Data Types

### String
```tsx
<Greeting name="Ali" />
```

### Number
```tsx
<UserCard age={25} />  // Use curly braces for JavaScript
```

### Boolean
```tsx
interface ProductProps {
  isAvailable: boolean;
}

<Product isAvailable={true} />
```

### Array
```tsx
interface ShoppingListProps {
  items: string[];
}

<ShoppingList items={["Apple", "Banana", "Orange"]} />
```

### Object
```tsx
interface User {
  name: string;
  email: string;
}

interface UserProps {
  userData: User;
}

<User userData={{ name: "Ali", email: "ali@example.com" }} />
```

TypeScript will error if you pass the wrong type:
```tsx
// ❌ TypeScript error: Type 'number' is not assignable to type 'string'
<Greeting name={123} />
```

---

## Component Reuse

The power of components is **reusability**. Write once, use many times.

### Example: Product Card

```tsx
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img src={image} alt={name} style={{ width: "100px" }} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ProductCard name="Laptop" price={999} image="laptop.jpg" />
      <ProductCard name="Phone" price={599} image="phone.jpg" />
      <ProductCard name="Tablet" price={399} image="tablet.jpg" />
    </div>
  );
}
```

**Output**: Three product cards with different data

**Why this is powerful:**
- Write the ProductCard once
- Use it 100+ times with different data
- Change the design in one place, updates everywhere
- TypeScript ensures every card gets the right props

---

## Children Props

`children` is a special prop that contains everything inside a component's opening and closing tags.

### Example 1: Simple Button

```tsx
import { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
}

function CustomButton({ children }: CustomButtonProps) {
  return <button style={{ padding: "10px 20px" }}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <CustomButton>Click Me</CustomButton>
      <CustomButton>Submit</CustomButton>
      <CustomButton>Save</CustomButton>
    </div>
  );
}
```

**Output**: Three buttons with different text

**How it works:**
- `children` = "Click Me" in the first button
- `children` = "Submit" in the second button

### Example 2: Card with Children

```tsx
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card title="User Profile">
      <p>Name: Ali Khan</p>
      <p>Email: ali@example.com</p>
      <button>Edit</button>
    </Card>
  );
}
```

**Why use children?**
- More flexible than fixed props
- Component wraps other content
- Reuse the same wrapper with different content inside

---

## Component Thinking

Before writing React, think about your UI structure:

### Example: Navbar

Instead of building a giant navbar:
```tsx
// ❌ One big component - hard to maintain
function Navbar() {
  return (
    <nav>
      <div className="logo">MyApp</div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="user">
        <img src="user.jpg" />
        <span>Ali Khan</span>
      </div>
    </nav>
  );
}
```

Break it into smaller components:
```tsx
import { ReactNode } from 'react';

function Logo() {
  return <div className="logo">MyApp</div>;
}

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return <a href={href}>{children}</a>;
}

interface UserProfileProps {
  image: string;
  name: string;
}

function UserProfile({ image, name }: UserProfileProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <Logo />
      <div className="links">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      <UserProfile image="user.jpg" name="Ali Khan" />
    </nav>
  );
}
```

**Benefits:**
- NavLink is reusable
- Each component is small and understandable
- Easy to test and maintain
- Easy to change styling
- TypeScript documents what each component needs

---

## Reusable UI Concepts

### Think in Components

**Good idea**: Break UI into pieces by functionality:
- Header → Logo, NavLinks, UserMenu
- Main Content → Card, Button, Input
- Footer → Links, Copyright

**Bad idea**: One giant component for everything

### Props Flow

Data flows FROM parent TO child via props:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}

// Parent (App)
<UserCard name="Ali" age={25} />
       ↓
// Child (UserCard)
function UserCard({ name, age }: UserCardProps) {
  return <div>{name}, {age}</div>;
}
```

**Children cannot change props** - props are read-only. (We'll learn how to change data in Day 3 with state)

---

## Real-World Example: Product Listing

```tsx
interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
}

function ProductCard({ name, price, rating }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", width: "200px" }}>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>⭐ {rating}/5</p>
      <button>Buy Now</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <ProductCard name="Laptop" price={999} rating={4.5} />
      <ProductCard name="Mouse" price={25} rating={4.8} />
      <ProductCard name="Keyboard" price={75} rating={4.3} />
    </div>
  );
}
```

---

## Fragment (`<>...</>`)

Fragment is an invisible wrapper. It doesn't add extra HTML.

### Without Fragment
```tsx
function Message() {
  return (
    <div>
      <p>Hello</p>
      <p>World</p>
    </div>
  );
}

// HTML output:
// <div>
//   <p>Hello</p>
//   <p>World</p>
// </div>
```

### With Fragment
```tsx
function Message() {
  return (
    <>
      <p>Hello</p>
      <p>World</p>
    </>
  );
}

// HTML output (no extra div):
// <p>Hello</p>
// <p>World</p>
```

**When to use:**
- When you don't want extra HTML elements
- When styling would break with extra div
- Keep your HTML clean

---

## Conditional Rendering Basics

Show or hide content based on conditions.

### Using if/else

```tsx
interface LoginStatusProps {
  isLoggedIn: boolean;
}

function LoginStatus({ isLoggedIn }: LoginStatusProps) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in</p>;
  }
}

export default function App() {
  return <LoginStatus isLoggedIn={true} />;
}
```

**Output**: Welcome back!

### Using Ternary (Inline)

```tsx
function LoginStatus({ isLoggedIn }: LoginStatusProps) {
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>;
}
```

### Using && (When One Option)

```tsx
interface NotificationBadgeProps {
  count: number;
}

function NotificationBadge({ count }: NotificationBadgeProps) {
  return (
    <div>
      <h1>Messages</h1>
      {count > 0 && <span style={{ color: "red" }}>({count})</span>}
    </div>
  );
}

export default function App() {
  return <NotificationBadge count={3} />;
}
```

**Output:**
```
Messages
(3)
```

Only shows the badge if count > 0.

---

## Real-World Examples

### Example 1: Navbar Component

```tsx
interface NavbarProps {
  userName: string;
}

function Navbar({ userName }: NavbarProps) {
  return (
    <nav style={{ background: "#333", color: "white", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>MyApp</h2>
        <p>Hello, {userName}!</p>
      </div>
    </nav>
  );
}

export default function App() {
  return <Navbar userName="Ali" />;
}
```

### Example 2: Product List

```tsx
interface ProductProps {
  name: string;
  price: number;
  inStock: boolean;
}

function Product({ name, price, inStock }: ProductProps) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Product name="Laptop" price={999} inStock={true} />
      <Product name="Phone" price={599} inStock={false} />
    </div>
  );
}
```

---

## Common Mistakes

**Mistake 1: Component name starting with lowercase**
```tsx
// ❌ Won't work
function greeting() {
  return <h1>Hello</h1>;
}

// ✅ Correct
function Greeting() {
  return <h1>Hello</h1>;
}
```

**Mistake 2: Forgetting curly braces for non-strings**
```tsx
// ❌ Wrong - shows "true" as text / TypeScript may error
<Card count="5" />

// ✅ Correct - passes number
<Card count={5} />
```

**Mistake 3: Trying to modify props**
```tsx
// ❌ Wrong - props are read-only
function UserCard({ name }: { name: string }) {
  name = "John";  // Don't do this
  return <p>{name}</p>;
}

// ✅ Correct - don't change props
function UserCard({ name }: { name: string }) {
  return <p>{name}</p>;
}
```

**Mistake 4: Not typing props**
```tsx
// ❌ Untyped - no safety
function Button({ children }) {
  return <button>{children}</button>;
}

// ✅ Typed
interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
```

---

## Interview Questions

1. **What is a component?**
   - A reusable piece of UI (a function that returns JSX)

2. **What are props?**
   - Data passed from parent to child component (like function arguments)

3. **Can you modify props inside a component?**
   - No, props are read-only. Use state to change data (Day 3)

4. **Why is Fragment useful?**
   - It avoids adding extra HTML elements

5. **What does `children` prop do?**
   - It contains everything between opening and closing tags of a component

6. **Why use camelCase for attributes like `onClick`?**
   - Because JSX is JavaScript, not HTML. JavaScript uses camelCase

7. **When should you break UI into components?**
   - When you want to reuse pieces, keep components small, or organize complex UIs

8. **How do you type props in TypeScript?**
   - Define an interface (or type) and annotate the component parameter: `function Card(props: CardProps)`

---

## Practice Assignment 2

**Task**: Create a User Profile Card component

Requirements:
- Display user name, email, and phone
- Show a green badge if "Active", red if "Inactive"
- Create at least 3 users with different data
- Use destructuring for props
- Type all props with an interface

Example display:
```
John Doe
john@example.com
555-1234
✅ Active
```

**File structure:**
```
src/
├─ App.tsx
└─ UserProfileCard.tsx
```

**Tips:**
- Create the component in UserProfileCard.tsx with a `UserProfileCardProps` interface
- Import and use it 3 times in App.tsx with different data
- Use conditional rendering for the status badge
- TypeScript will catch missing or wrong props

---

## Summary Notes

✅ Components are reusable TypeScript functions  
✅ Component names start with CAPITAL letters  
✅ Props pass data from parent to child  
✅ Type props with `interface` or `type`  
✅ Destructure props for cleaner code  
✅ Props are read-only (can't change them)  
✅ Use curly braces for non-string values  
✅ Fragment `<>` doesn't add HTML  
✅ Conditional rendering: `if/else`, ternary, `&&`  
✅ Children prop for flexible components (`ReactNode`)  
✅ Break UI into small reusable pieces  

---
