# Day 3: State and Event Handling (TypeScript)

## useState Hook

**State** is data that can change. When state changes, React re-renders the component.

**Hook** is a special React function that starts with `use`. `useState` is the most important hook.

In TypeScript, you can type state explicitly: `useState<number>(0)`.

### Simple Counter Example

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### How useState Works

```tsx
const [count, setCount] = useState<number>(0);
//    ↑       ↑                  ↑
//   current setter           initial
//   value   function         value
```

- `count`: Current value (starts at 0), typed as `number`
- `setCount`: Function to update `count`
- `useState<number>(0)`: Initial value is 0, type is number

TypeScript often **infers** the type from the initial value:
```tsx
const [count, setCount] = useState(0);        // inferred as number
const [name, setName] = useState("Ali");      // inferred as string
const [user, setUser] = useState<User | null>(null);  // need explicit type for null
```

### What Happens When You Click?

```
1. User clicks button
   ↓
2. onClick runs: setCount(count + 1)
   ↓
3. count changes from 0 to 1
   ↓
4. React re-renders the component
   ↓
5. p tag shows "Count: 1"
```

### Multiple Pieces of State

```tsx
import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState<string>("Ali");
  const [age, setAge] = useState<number>(25);
  const [city, setCity] = useState<string>("New York");
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <button onClick={() => setName("John")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Birthday!</button>
    </div>
  );
}
```

---

## State Updates

### Simple Update

```tsx
const [count, setCount] = useState<number>(0);

// Click button
setCount(1);  // count = 1
setCount(5);  // count = 5
```

### Update Based on Current Value

```tsx
const [count, setCount] = useState<number>(0);

// Good - depends on current value
setCount(count + 1);

// Also good - using function form
setCount((prevCount) => prevCount + 1);
```

### Function Form (Better for Multiple Updates)

```tsx
const [count, setCount] = useState<number>(0);

function handleTripleClick() {
  setCount(count => count + 1);
  setCount(count => count + 1);
  setCount(count => count + 1);
}

// Result: count increases by 3, not by 1
```

**Why use function form?** When you make multiple updates in sequence, it ensures each one uses the latest value.

---

## State Immutability

**Never directly change state.** Always create new values.

### ❌ Wrong: Directly Changing Objects

```tsx
interface User {
  name: string;
  age: number;
}

const [user, setUser] = useState<User>({ name: "Ali", age: 25 });

// ❌ Don't do this
user.age = 26;  // Changing directly
setUser(user);  // Won't work properly

// ❌ This is also wrong
user.name = "John";
```

### ✅ Correct: Create New Objects

```tsx
const [user, setUser] = useState<User>({ name: "Ali", age: 25 });

// ✅ Create new object
setUser({ ...user, age: 26 });

// ✅ Or completely new object
setUser({ name: "Ali", age: 26 });
```

### ❌ Wrong: Directly Changing Arrays

```tsx
const [items, setItems] = useState<string[]>(["Apple", "Banana"]);

// ❌ Don't do this
items.push("Orange");
setItems(items);
```

### ✅ Correct: Create New Arrays

```tsx
const [items, setItems] = useState<string[]>(["Apple", "Banana"]);

// ✅ Create new array
setItems([...items, "Orange"]);

// ✅ Or use concat
setItems(items.concat("Orange"));

// ✅ Remove item
setItems(items.filter(item => item !== "Banana"));
```

**Why immutability matters?** React detects changes by comparing old and new state. Direct changes break this detection.

---

## Event Handling

React handles events with camelCase attributes and functions. TypeScript types event objects for you.

### Click Events

```tsx
function ClickButton() {
  function handleClick(): void {
    alert("Button clicked!");
  }
  
  return <button onClick={handleClick}>Click Me</button>;
}
```

### Inline Functions

```tsx
function ClickButton() {
  return <button onClick={() => alert("Clicked!")}>Click Me</button>;
}
```

### Common Events (Typed)

```tsx
import { ChangeEvent, FormEvent, FocusEvent } from 'react';

function EventsDemo() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevent page reload
    console.log("Form submitted");
  };
  
  return (
    <div>
      <input onChange={handleChange} />
      <input onFocus={() => console.log("Focused")} />
      <input onBlur={() => console.log("Blurred")} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

### Event Object (`e`)

Every event handler receives a typed event object:

```tsx
import { ChangeEvent } from 'react';

function InputDemo() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);  // What user typed (string)
    console.log(e.target.name);   // Input name
    console.log(e.type);          // "change"
  };
  
  return <input onChange={handleChange} name="email" />;
}
```

**Common event types:**
| Event | TypeScript type |
|-------|-----------------|
| `onChange` (input) | `ChangeEvent<HTMLInputElement>` |
| `onChange` (select) | `ChangeEvent<HTMLSelectElement>` |
| `onSubmit` | `FormEvent<HTMLFormElement>` |
| `onClick` | `MouseEvent<HTMLButtonElement>` |
| `onKeyDown` | `KeyboardEvent<HTMLInputElement>` |

---

## Component Re-rendering

When state changes, React **re-renders** the component (runs it again).

### Example: Visual

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  
  console.log("Component rendered");  // Logs every render
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Console output when you click the button:**
```
Component rendered        (initial render)
Component rendered        (after 1st click)
Component rendered        (after 2nd click)
```

**What this means:**
- Component function runs again
- Variables are reset (except state)
- UI updates on screen

---

## Controlled Components

A **controlled component** is an input whose value is controlled by React state.

### Without Control (Uncontrolled)

```tsx
function Input() {
  return <input type="text" />;  // React doesn't know what's in it
}
```

### With Control (Controlled)

```tsx
import { useState, ChangeEvent } from 'react';

function ControlledInput() {
  const [value, setValue] = useState<string>("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  return (
    <input 
      type="text" 
      value={value}
      onChange={handleChange}
    />
  );
}
```

**How it works:**
1. User types in input
2. `onChange` fires → `setValue()` updates state
3. Component re-renders with new state
4. Input `value` prop shows the new state

### Why Use Controlled?

**Controlled** advantages:
- React knows the value
- Can validate while typing
- Can reset easily
- Can programmatically set value

```tsx
import { useState, ChangeEvent } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Real-time validation
    if (!value.includes("@")) {
      setError("Please enter valid email");
    } else {
      setError("");
    }
  };
  
  return (
    <div>
      <input value={email} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
```

---

## Forms Basics

### Simple Form

```tsx
import { useState, FormEvent, ChangeEvent } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Stop page reload
    console.log("Login:", { username, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Form with Multiple Fields

```tsx
import { useState, FormEvent, ChangeEvent } from 'react';

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export default function SignUpForm() {
  const [form, setForm] = useState<SignUpFormState>({
    firstName: "",
    lastName: "",
    email: "",
    country: ""
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,           // Keep existing values
      [name]: value      // Update changed field
    });
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      <input 
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <select name="country" value={form.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

---

## Two-Way Binding Basics

**Two-way binding** = UI changes state, state changes UI (automatic sync).

### Example: Live Character Counter

```tsx
import { useState, ChangeEvent } from 'react';

export default function CharCounter() {
  const [text, setText] = useState<string>("");
  
  return (
    <div>
      <textarea 
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Characters: {text.length}</p>
    </div>
  );
}
```

**What happens:**
1. User types in textarea
2. `onChange` updates `text` state
3. Component re-renders
4. Both textarea and counter update

---

## Real-World Example: Todo App (Basic)

```tsx
import { useState, ChangeEvent } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  
  const handleAddTodo = () => {
    if (input.trim() === "") return;
    
    setTodos([...todos, input]);
    setInput("");  // Clear input
  };
  
  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <h1>My Todo List</h1>
      
      <input 
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Real-World Example: Counter App

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "40px", fontWeight: "bold" }}>{count}</p>
      
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

---

## Common Mistakes

**Mistake 1: Forgetting to import useState**
```tsx
// ❌ Wrong - useState not imported
function Counter() {
  const [count, setCount] = useState(0);  // Error!
}

// ✅ Correct
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
}
```

**Mistake 2: Directly modifying state**
```tsx
// ❌ Wrong
const [obj, setObj] = useState({ name: "Ali" });
obj.name = "John";  // Wrong!

// ✅ Correct
setObj({ ...obj, name: "John" });
```

**Mistake 3: Forgetting e.preventDefault() in forms**
```tsx
// ❌ Wrong - page reloads
const handleSubmit = (e: FormEvent) => {
  console.log("Submitted");
};

// ✅ Correct
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();  // Stop reload
  console.log("Submitted");
};
```

**Mistake 4: Using array index as key (we'll see why Day 5)**
```tsx
// ❌ Not recommended (we'll explain why later)
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ Use unique ID instead
{items.map((item) => <div key={item.id}>{item.name}</div>)}
```

**Mistake 5: Wrong state type when initial is null**
```tsx
// ❌ TypeScript may infer only null
const [user, setUser] = useState(null);

// ✅ Explicit union type
interface User { name: string }
const [user, setUser] = useState<User | null>(null);
```

---

## Interview Questions

1. **What is state in React?**
   - Data that can change and cause the UI to re-render

2. **What is useState?**
   - A hook that lets you add state to functional components

3. **What's the difference between state and props?**
   - Props are passed data (read-only), state is internal (changeable)

4. **Why can't you directly modify state?**
   - React won't detect the change, and the UI won't update

5. **What are controlled components?**
   - Components where React state controls the input value

6. **What does e.preventDefault() do?**
   - Stops the default browser behavior (like form submission)

7. **What's the difference between these two?**
   ```tsx
   setCount(count + 1);           // Current value
   setCount(count => count + 1);  // Function form
   ```
   - Function form is safer when multiple updates happen

8. **How do you type useState in TypeScript?**
   - `useState<Type>(initial)` — e.g. `useState<string>("")` or `useState<User | null>(null)`

---

## Practice Assignment 3

**Task**: Build a Registration Form with validation

Requirements:
- Input fields: Name, Email, Password, Password Confirm
- Type form state with an interface
- Type event handlers (`ChangeEvent`, `FormEvent`)
- Show error messages if:
  - Name is empty
  - Email doesn't include "@"
  - Password is less than 6 characters
  - Passwords don't match
- Show success message after form submission
- Reset form after submission

**Example flow:**
```
1. User types email without "@" → Show error
2. User types password "123" → Show error (too short)
3. User fixes all → Button becomes enabled
4. User clicks submit → Show success message
5. Form resets
```

**Bonus:**
- Add a "Show Password" checkbox
- Display password strength (Weak/Medium/Strong)
- Use a single typed state object for the form instead of multiple states

---

## Summary Notes

✅ State makes components interactive  
✅ `useState<Type>` returns [current, setter]  
✅ Setter function updates state and triggers re-render  
✅ Never directly modify state objects/arrays  
✅ Always create new values when updating state  
✅ Use spread operator `...` for objects and arrays  
✅ Controlled components sync with React state  
✅ Use `e.preventDefault()` in forms  
✅ Type events: `ChangeEvent`, `FormEvent`, etc.  
✅ `onChange` is triggered when user types  
✅ `onSubmit` is triggered on form submit  

---

## Next Steps
