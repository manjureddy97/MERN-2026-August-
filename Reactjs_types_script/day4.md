# Day 4: useEffect and API Calls (TypeScript)

## What is useEffect?

`useEffect` lets you perform **side effects** in functional components.

**Side effect** = Something that happens outside of rendering (fetching data, timers, logging, etc.)

### Simple Example

```tsx
import { useEffect, useState } from 'react';

export default function Welcome() {
  const [name, setName] = useState<string>("Guest");
  
  useEffect(() => {
    console.log("Component mounted or updated");
    document.title = `Welcome, ${name}!`;
  });
  
  return <h1>Hello, {name}!</h1>;
}
```

### useEffect Syntax

```tsx
useEffect(() => {
  // This code runs after render
  console.log("Side effect runs");
}, []);  // Empty dependency array

// ↑         ↑         ↑
// function  when to run

return <div>Content</div>;
```

---

## Dependency Array

The **dependency array** controls when useEffect runs.

### No Dependencies (Runs Every Render)

```tsx
useEffect(() => {
  console.log("Runs after EVERY render");
});

// Click button
// "Runs after every render"
// Component re-renders
// "Runs after every render" (again)
```

**Usually a bad idea** - can cause infinite loops.

### Empty Dependencies (Runs Once)

```tsx
useEffect(() => {
  console.log("Runs ONCE when component first appears");
}, []);

// Component mounts
// "Runs once"
// Click button, state changes, component re-renders
// (useEffect doesn't run again)
```

**Most common use case** - fetch data when page loads.

### Specific Dependencies (Runs When Dependencies Change)

```tsx
const [userId, setUserId] = useState<number>(1);

useEffect(() => {
  console.log(`Fetching user ${userId}`);
  // Fetch user data
}, [userId]);

// Initial render: userId = 1
// "Fetching user 1"

// Click button: userId = 2
// Component re-renders
// "Fetching user 2"
```

**When to use**: Run side effect when specific values change.

---

## Lifecycle Basics

useEffect mimics component **lifecycle** (different stages of existence).

### Component Lifecycle

```
1. Mount (component appears on screen)
   → useEffect runs []
   
2. Update (props or state changes)
   → useEffect runs [dependency]
   
3. Unmount (component is removed)
   → cleanup function runs
```

### Example: Lifecycle Stages

```tsx
import { useEffect, useState } from 'react';

export default function LifecycleDemo() {
  const [count, setCount] = useState<number>(0);
  
  // Runs on mount
  useEffect(() => {
    console.log("Mounted");
  }, []);
  
  // Runs on update
  useEffect(() => {
    console.log("Component updated, count is now", count);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Console output:**
```
Mounted                          (initial render)
Component updated, count is now 0
Component updated, count is now 1  (after click)
Component updated, count is now 2  (after click)
```

---

## Fetch API

The Fetch API lets you get data from servers. Type the response data with interfaces.

### Simple GET Request

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function FetchUser() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    fetch('https://api.example.com/user/1')
      .then((response) => response.json())
      .then((data: User) => setUser(data));
  }, []);
  
  if (!user) return <p>Loading...</p>;
  return <p>User: {user.name}</p>;
}
```

### How Fetch Works

```tsx
fetch(url)                    // 1. Make request
  .then(response => response.json())  // 2. Parse JSON
  .then((data: User) => setUser(data)) // 3. Use typed data
  .catch((error: Error) => console.log(error)) // 4. Handle errors
```

**Steps:**
1. `fetch()` makes HTTP request
2. `.then(response => response.json())` converts response to JSON
3. `.then(data => ...)` does something with data
4. `.catch()` handles errors

---

## Async Operations

You can also use `async/await` syntax (cleaner):

### With async/await

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function FetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user/1');
        const data: User = await response.json();
        setUser(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      }
    };
    
    fetchUser();
  }, []);
  
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;
  return <p>User: {user.name}</p>;
}
```

**Why async/await is better:**
- Looks more like regular code
- Easier to read
- Easier to handle errors

---

## Loading States

Show a loading message while fetching data.

### Loading, Loaded, Error States

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        const data: User[] = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  // Show loading
  if (loading) return <p>Loading users...</p>;
  
  // Show error
  if (error) return <p>Error: {error}</p>;
  
  // Show data
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**States:**
- Loading = true → Show "Loading..."
- Error exists → Show error message
- Both false → Show users list

---

## Error Handling

Always handle errors when fetching:

```tsx
const fetchData = async (): Promise<void> => {
  try {
    const response = await fetch(url);
    
    // Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data: MyData = await response.json();
    setData(data);
  } catch (error) {
    console.log("Error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    setError(message);
  }
};
```

### Common Errors to Handle

```tsx
try {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }
  
  const data: MyData = await response.json();
  setData(data);
} catch (error) {
  // Network error, JSON parsing error, etc.
  const message = error instanceof Error ? error.message : "Unknown error";
  setError(message);
}
```

**Tip:** `catch (error)` is typed as `unknown` in TypeScript — always check with `instanceof Error` before using `.message`.

---

## Cleanup Functions

Sometimes you need to clean up when component unmounts.

### Example: Cleanup

```tsx
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    console.log("Timer started");
    
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);
    
    // Cleanup function (runs when component unmounts)
    return () => {
      console.log("Timer cleaned up");
      clearInterval(interval);
    };
  }, []);
  
  return <p>Check console</p>;
}
```

**Output when component unmounts:**
```
Timer started
Tick
Tick
Tick
Timer cleaned up
```

### When to Use Cleanup

- Cancel API requests
- Clear timers/intervals
- Unsubscribe from events
- Close connections

---

## Real-World Example: Fetch Users

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function FetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Using JSONPlaceholder API (free fake API)
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
}
```

**Output:**
```
Loading users...

(After API responds)
- Leanne Graham
  Email: Sincere@april.biz
  Phone: 1-770-736-8031

- Erwin Howell
  Email: Shanna@melissa.tv
  Phone: 010-692-6593
```

---

## Real-World Example: Product API

```tsx
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  price: number;
  description: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [productId, setProductId] = useState<number>(1);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.example.com/products/${productId}`
        );
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);  // Run when productId changes
  
  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <button onClick={() => setProductId(productId - 1)}>Previous</button>
      <button onClick={() => setProductId(productId + 1)}>Next</button>
      
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
}
```

---

## Real-World Example: Weather App

```tsx
import { useEffect, useState, ChangeEvent } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>("New York");
  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
        );
        const data: WeatherData = await response.json();
        setWeather(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWeather();
  }, [city]);
  
  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <input 
        value={city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
      />
      
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
```

---

## Common Mistakes

**Mistake 1: Forgetting dependency array**
```tsx
// ❌ Wrong - runs every render (performance issue)
useEffect(() => {
  fetch(url).then(data => setData(data));
});

// ✅ Correct - runs once
useEffect(() => {
  fetch(url).then(data => setData(data));
}, []);
```

**Mistake 2: Forgetting to handle loading state**
```tsx
// ❌ Wrong - tries to access data.name while data is null
const [data, setData] = useState<User | null>(null);
return <p>{data.name}</p>;  // TypeScript error + runtime error!

// ✅ Correct
if (!data) return <p>Loading...</p>;
return <p>{data.name}</p>;
```

**Mistake 3: Not catching errors**
```tsx
// ❌ Wrong - app crashes on error
useEffect(() => {
  fetch(url).then(r => r.json()).then(setData);
}, []);

// ✅ Correct
useEffect(() => {
  fetch(url)
    .then(r => r.json())
    .then((data: User) => setData(data))
    .catch((err: Error) => setError(err.message));
}, []);
```

**Mistake 4: Missing cleanup function for intervals**
```tsx
// ❌ Wrong - creates new interval every render
useEffect(() => {
  setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
});

// ✅ Correct
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  
  return () => clearInterval(interval);
}, []);
```

**Mistake 5: Not typing API response**
```tsx
// ❌ Untyped - no autocomplete or safety
const data = await response.json();
setUser(data);

// ✅ Typed
const data: User = await response.json();
setUser(data);
```

---

## Interview Questions

1. **What is useEffect?**
   - A hook that lets you run side effects in functional components

2. **What does the dependency array do?**
   - Tells React when to run the effect

3. **What happens with an empty dependency array?**
   - The effect runs once when the component mounts

4. **What happens with no dependency array?**
   - The effect runs after every render (usually bad)

5. **Why do we use async/await in fetch?**
   - Makes the code cleaner and easier to understand

6. **What's the order of: fetch → then → then?**
   - 1. Make request 2. Parse JSON 3. Use data

7. **What should you show while loading?**
   - A loading message or spinner

8. **How do you type API data in TypeScript?**
   - Define an interface for the response and annotate: `const data: User = await response.json()`

---

## Practice Assignment 4

**Task**: Build a "User Search" component

Requirements:
- Input field to search for a user by ID
- When ID changes, fetch user from API
- Show loading state while fetching
- Show error if fetch fails
- Display user info: name, email, phone, website
- Use JSONPlaceholder API (free)
- Type the User interface and all state

**Steps:**
1. Create typed state for userId, user data, loading, error
2. Use useEffect with [userId] dependency
3. Fetch from `https://jsonplaceholder.typicode.com/users/{id}`
4. Handle all states (loading, error, success)

**Bonus:**
- Add Previous/Next buttons to change user ID
- Show "User not found" if ID doesn't exist
- Display user posts count

---

## Summary Notes

✅ useEffect runs side effects after render  
✅ Empty dependency [] = runs once  
✅ Specific dependency [count] = runs when count changes  
✅ Fetch gets data from servers  
✅ Type API responses with interfaces  
✅ Always handle loading, error, and success states  
✅ Use async/await for cleaner code  
✅ `catch (error)` is `unknown` — check with `instanceof Error`  
✅ Use finally to always stop loading  
✅ Cleanup function runs when component unmounts  
✅ Clear intervals, cancel requests, unsubscribe  

---

