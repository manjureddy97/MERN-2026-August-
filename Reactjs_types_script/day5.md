# Day 5: Lists, Keys, Forms, and Conditional Rendering (TypeScript)

## Rendering Lists with map()

The `.map()` function transforms each item in an array and returns a new array.

### Simple List

```tsx
export default function FruitList() {
  const fruits: string[] = ["Apple", "Banana", "Orange"];
  
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**Output:**
```
- Apple
- Banana
- Orange
```

### List with Objects

```tsx
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" }
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

### List with JSX

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Tablet", price: 399 }
];

return (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button>Buy Now</button>
      </div>
    ))}
  </div>
);
```

---

## Keys in Lists

**Key** is a unique identifier for each list item. React uses keys to track which items changed, were added, or were removed.

### Why Keys Matter

```tsx
// ❌ Without key - causes bugs
{items.map((item) => (
  <li>{item}</li>
))}

// ✅ With key - correct
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

**What happens without keys:**
1. You delete item from middle
2. React doesn't know which item was deleted
3. React just updates the last item instead
4. Causes bugs with state, inputs, etc.

### Using Index as Key (Not Recommended)

```tsx
// ❌ Not recommended if list can change
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
```

**Why not index?** When list reorders, index stays the same but item changes. React gets confused.

### Using ID as Key (Recommended)

```tsx
// ✅ Good - ID is stable
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

ID never changes, so React always knows which item is which.

### Real Example: Todo List with Keys

```tsx
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Get hired" }
  ]);
  
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>  {/* ✅ Use ID as key */}
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Filtering Data

Filter data before displaying it.

### Simple Filter

```tsx
interface User {
  id: number;
  name: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "John", active: true }
];

const activeUsers = users.filter(user => user.active);

return (
  <ul>
    {activeUsers.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

**Output:**
```
- Ali
- John
```

### Filter with Search Input

```tsx
import { useState, ChangeEvent } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserSearch() {
  const [search, setSearch] = useState<string>("");
  
  const users: User[] = [
    { id: 1, name: "Ali Khan" },
    { id: 2, name: "Sara Ahmed" },
    { id: 3, name: "John Smith" }
  ];
  
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <input 
        placeholder="Search users..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      
      <ul>
        {filtered.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      
      <p>Found {filtered.length} users</p>
    </div>
  );
}
```

**How it works:**
1. User types in search input
2. State updates
3. Filter runs on every render
4. Component shows matching users

---

## Dynamic Filtering

Filter by multiple criteria.

### Filter by Status

```tsx
import { useState } from 'react';

type StatusFilter = "all" | "inStock" | "outOfStock";

interface Product {
  id: number;
  name: string;
  inStock: boolean;
}

export default function ProductFilter() {
  const [status, setStatus] = useState<StatusFilter>("all");
  
  const products: Product[] = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true }
  ];
  
  let displayed: Product[] = products;
  
  if (status === "inStock") {
    displayed = products.filter(p => p.inStock);
  } else if (status === "outOfStock") {
    displayed = products.filter(p => !p.inStock);
  }
  
  return (
    <div>
      <button 
        onClick={() => setStatus("all")}
        style={{ fontWeight: status === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button 
        onClick={() => setStatus("inStock")}
        style={{ fontWeight: status === "inStock" ? "bold" : "normal" }}
      >
        In Stock
      </button>
      <button 
        onClick={() => setStatus("outOfStock")}
        style={{ fontWeight: status === "outOfStock" ? "bold" : "normal" }}
      >
        Out of Stock
      </button>
      
      <ul>
        {displayed.map(product => (
          <li key={product.id}>
            {product.name} - {product.inStock ? "✅ In Stock" : "❌ Out"}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Union types** (`"all" | "inStock" | "outOfStock"`) prevent invalid filter values.

---

## Advanced Conditional Rendering

Beyond if/else and ternary operators.

### Multiple Conditions

```tsx
type OrderStatusType = "pending" | "shipped" | "delivered" | "cancelled";

interface OrderStatusProps {
  status: OrderStatusType;
}

function OrderStatus({ status }: OrderStatusProps) {
  if (status === "pending") {
    return <p>⏳ Your order is being prepared</p>;
  } else if (status === "shipped") {
    return <p>📦 Your order is on the way</p>;
  } else if (status === "delivered") {
    return <p>✅ Your order has been delivered</p>;
  } else if (status === "cancelled") {
    return <p>❌ Your order was cancelled</p>;
  }
  return null;
}
```

### Using Switch

```tsx
function OrderStatus({ status }: OrderStatusProps) {
  switch (status) {
    case "pending":
      return <p>⏳ Being prepared</p>;
    case "shipped":
      return <p>📦 On the way</p>;
    case "delivered":
      return <p>✅ Delivered</p>;
    case "cancelled":
      return <p>❌ Cancelled</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

### Using Objects (Cleaner)

```tsx
function OrderStatus({ status }: OrderStatusProps) {
  const statusMessages: Record<OrderStatusType, string> = {
    pending: "⏳ Being prepared",
    shipped: "📦 On the way",
    delivered: "✅ Delivered",
    cancelled: "❌ Cancelled"
  };
  
  return <p>{statusMessages[status] || "Unknown status"}</p>;
}
```

---

## Dynamic Forms

Build forms that change based on data.

### Dynamic Input Fields

```tsx
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface FieldConfig {
  name: keyof FormState;
  label: string;
  type: string;
}

export default function DynamicForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: ""
  });
  
  const fields: FieldConfig[] = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone", type: "tel" }
  ];
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  
  return (
    <form>
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Dynamic Select Options

```tsx
import { useState, ChangeEvent } from 'react';

export default function CountrySelect() {
  const [country, setCountry] = useState<string>("");
  
  const countries: string[] = ["USA", "Canada", "UK", "Australia", "India"];
  
  return (
    <select
      value={country}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)}
    >
      <option value="">Select a country</option>
      {countries.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}
```

---

## Real-World Example: Product Listing with Search

```tsx
import { useState, ChangeEvent } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export default function ProductListing() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  
  const products: Product[] = [
    { id: 1, name: "Gaming Laptop", category: "electronics", price: 1200 },
    { id: 2, name: "Wireless Mouse", category: "electronics", price: 30 },
    { id: 3, name: "Office Chair", category: "furniture", price: 200 },
    { id: 4, name: "Standing Desk", category: "furniture", price: 500 },
    { id: 5, name: "LED Monitor", category: "electronics", price: 300 }
  ];
  
  let filtered: Product[] = products;
  
  // Filter by search
  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  
  return (
    <div>
      <h1>Product Store</h1>
      
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      
      <select
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
      </select>
      
      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div>
          <p>Showing {filtered.length} products</p>
          <div style={{ display: "grid", gap: "20px" }}>
            {filtered.map(product => (
              <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## Real-World Example: FAQ Accordion

```tsx
import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      id: 2,
      question: "Why use React?",
      answer: "React makes it easy to build interactive web apps efficiently."
    },
    {
      id: 3,
      question: "How do I learn React?",
      answer: "Start with components, then state, then hooks. Practice by building projects."
    }
  ];
  
  const toggleFAQ = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };
  
  return (
    <div>
      <h1>FAQ</h1>
      {faqs.map(faq => (
        <div key={faq.id} style={{ marginBottom: "10px", border: "1px solid #ddd" }}>
          <button 
            onClick={() => toggleFAQ(faq.id)}
            style={{ 
              width: "100%", 
              textAlign: "left", 
              padding: "10px",
              background: "#f5f5f5"
            }}
          >
            {faq.question}
            <span style={{ float: "right" }}>
              {expanded === faq.id ? "−" : "+"}
            </span>
          </button>
          
          {expanded === faq.id && (
            <p style={{ padding: "10px" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## Common Mistakes

**Mistake 1: Forgetting key prop**
```tsx
// ❌ Wrong - no key
{items.map(item => <li>{item.name}</li>)}

// ✅ Correct - with key
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

**Mistake 2: Using index as key when list can change**
```tsx
// ❌ Bad - index changes when list reorders
{items.map((item, index) => <li key={index}>{item}</li>)}

// ✅ Good - ID is stable
{items.map(item => <li key={item.id}>{item}</li>)}
```

**Mistake 3: Not handling empty list**
```tsx
// ❌ Wrong - shows nothing when empty
{items.map(item => <li key={item.id}>{item.name}</li>)}

// ✅ Correct - handles empty
{items.length === 0 ? <p>No items</p> : items.map(item => <li key={item.id}>{item.name}</li>)}
```

**Mistake 4: Filtering inside render every time**
```tsx
// ❌ Inefficient - filters on every render
{items.filter(i => i.active).map(i => <li key={i.id}>{i.name}</li>)}

// ✅ Better - filter once
const active = items.filter(i => i.active);
{active.map(i => <li key={i.id}>{i.name}</li>)}
```

**Mistake 5: Untyped arrays**
```tsx
// ❌ No type safety
const products = [{ id: 1, name: "Laptop" }];

// ✅ Typed
interface Product { id: number; name: string }
const products: Product[] = [{ id: 1, name: "Laptop" }];
```

---

## Interview Questions

1. **Why do you need keys in lists?**
   - React uses keys to identify which items changed, added, or removed

2. **Why shouldn't you use index as key?**
   - Index changes when list reorders, confusing React

3. **What does .map() do?**
   - Transforms each item in an array and returns a new array

4. **How do you filter a list?**
   - Use .filter() method to keep only items that match a condition

5. **How do you search/filter with user input?**
   - Store search text in state, filter list on every render

6. **What's the best way to show conditional content?**
   - Ternary for single choice, if/else for complex logic, objects for maps

7. **How do you handle empty lists?**
   - Check length, show "No items found" message

8. **How do union types help with filters?**
   - `type Status = "all" | "active"` prevents invalid values at compile time

---

## Practice Assignment 5

**Task**: Build a Movie Search App

Requirements:
- Display list of movies
- Search by movie name
- Filter by genre (Action, Comedy, Drama, etc.)
- Show "No movies found" if search returns nothing
- Display: movie name, genre, year, rating
- Use proper keys for list items
- Type all data with interfaces

**Sample Data:**
```tsx
interface Movie {
  id: number;
  name: string;
  genre: string;
  year: number;
  rating: number;
}

const movies: Movie[] = [
  { id: 1, name: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
  { id: 2, name: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { id: 3, name: "Forrest Gump", genre: "Drama", year: 1994, rating: 8.8 },
  // ... more movies
];
```

**Bonus:**
- Sort by rating (highest first)
- Sort by year (newest first)
- Show count of movies found
- Use a union type for genre filter

---

## Summary Notes

✅ Use .map() to render lists  
✅ Always use keys on list items  
✅ Use ID as key, not index  
✅ Type arrays with interfaces: `Product[]`  
✅ Filter with .filter() before .map()  
✅ Handle empty lists with conditional rendering  
✅ Use objects / `Record<>` to map status to messages  
✅ Build dynamic forms from typed data arrays  
✅ Show loading/empty states  
✅ Search works by filtering as user types  
✅ Union types lock filter values to valid options  
✅ Conditional rendering options: if/else, ternary, switch, objects  

---
