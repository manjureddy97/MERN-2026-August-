# Day 7: HTML5 APIs and Advanced Concepts

## Local Storage - Saving Data in Browser

### What is Local Storage?
A way to save data on user's computer (in the browser).

### Why use Local Storage?
- Save user preferences (dark mode, language)
- Remember form data
- Store settings
- Works without a server
- Data stays even after closing browser

### Simple Concept:
```
Your Website → Save Data → Browser Memory → Data stays saved
```

### Syntax (JavaScript, but let's understand):
```javascript
// Save data
localStorage.setItem("name", "John");

// Get data
var name = localStorage.getItem("name");

// Delete data
localStorage.removeItem("name");
```

### Real-World Example HTML:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Preferences</h1>
  
  <label>Theme:</label>
  <select id="theme">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <br>
  
  <label>Language:</label>
  <select id="language">
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
  </select>
  
  <button onclick="savePreferences()">Save</button>
  <button onclick="loadPreferences()">Load</button>
  
  <script>
    function savePreferences() {
      var theme = document.getElementById("theme").value;
      var language = document.getElementById("language").value;
      
      localStorage.setItem("userTheme", theme);
      localStorage.setItem("userLanguage", language);
      
      alert("Preferences saved!");
    }
    
    function loadPreferences() {
      var theme = localStorage.getItem("userTheme");
      var language = localStorage.getItem("userLanguage");
      
      if (theme) {
        document.getElementById("theme").value = theme;
      }
      if (language) {
        document.getElementById("language").value = language;
      }
    }
  </script>
</body>
</html>
```

### Key Points:
- Data saved locally on user's computer
- Persists across browser sessions
- Not sent to server
- Browser-specific (not shared between browsers)
- Limited storage (~5-10MB)

---

## Session Storage - Temporary Data

### What is Session Storage?
Like Local Storage, but deleted when browser closes.

### Why use Session Storage?
- Temporary preferences
- Session ID
- Current page state
- Shopping cart during session

### Difference from Local Storage:

| Local Storage | Session Storage |
|---------------|-----------------|
| Stays forever | Deleted when browser closes |
| No expiration | Auto-expires |
| For long-term | For temporary |
| Larger storage | Same size limit |

### Syntax:
```javascript
// Save
sessionStorage.setItem("cartId", "12345");

// Get
var cartId = sessionStorage.getItem("cartId");

// Delete
sessionStorage.removeItem("cartId");
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Shopping Cart</h1>
  
  <p>Items in cart: <span id="count">0</span></p>
  
  <button onclick="addToCart()">Add Item</button>
  <button onclick="clearCart()">Clear Cart</button>
  
  <script>
    function addToCart() {
      var count = sessionStorage.getItem("cartCount") || 0;
      count = parseInt(count) + 1;
      sessionStorage.setItem("cartCount", count);
      document.getElementById("count").textContent = count;
    }
    
    function clearCart() {
      sessionStorage.removeItem("cartCount");
      document.getElementById("count").textContent = "0";
    }
  </script>
</body>
</html>
```

### Key Points:
- Same as Local Storage but temporary
- Better for sensitive data
- Cleared on browser close
- Good for single-session data

---

## Content Editable - Make Text Editable

### What is contenteditable?
Allows users to edit text directly on the page.

### Why use it?
- Rich text editors
- Inline editing
- Note-taking apps
- User-generated content

### Syntax:
```html
<p contenteditable="true">Click to edit me!</p>
```

### Values:
- `true` = Editable
- `false` = Not editable
- `inherit` = Follow parent element

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Notes App</h1>
  
  <div contenteditable="true" style="border: 1px solid gray; padding: 10px;">
    Click here to write your notes...
  </div>
  
  <h2>Todo List</h2>
  <ul>
    <li contenteditable="true">Buy milk</li>
    <li contenteditable="true">Study HTML</li>
    <li contenteditable="true">Exercise</li>
  </ul>
</body>
</html>
```

### Expected Behavior:
- Users can click and type
- Text can be formatted (bold, etc.)
- Changes don't save automatically

### Key Points:
- No server save (need JavaScript)
- Good for draft editing
- Use with caution (security concern)

---

## Draggable Elements - `draggable` Attribute

### What is draggable?
Allows users to drag and drop elements.

### Why use it?
- File upload zones
- Drag to reorder
- Drag to organize
- Puzzle games

### Syntax:
```html
<div draggable="true">
  Drag me!
</div>
```

### Real-World Example - Drag to Reorder:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .draggable {
      padding: 10px;
      margin: 5px;
      background: lightblue;
      border: 1px solid blue;
    }
    .draggable:hover {
      cursor: move;
    }
  </style>
</head>
<body>
  <h1>Drag to Reorder Items</h1>
  
  <div id="container">
    <div class="draggable" draggable="true">Item 1</div>
    <div class="draggable" draggable="true">Item 2</div>
    <div class="draggable" draggable="true">Item 3</div>
  </div>
  
  <script>
    var draggedElement = null;
    
    var draggables = document.querySelectorAll('.draggable');
    draggables.forEach(element => {
      element.addEventListener('dragstart', function(e) {
        draggedElement = this;
        this.style.opacity = '0.5';
      });
      
      element.addEventListener('dragend', function(e) {
        this.style.opacity = '1';
      });
      
      element.addEventListener('dragover', function(e) {
        e.preventDefault();
      });
      
      element.addEventListener('drop', function(e) {
        if (draggedElement !== this) {
          this.parentNode.insertBefore(draggedElement, this);
        }
      });
    });
  </script>
</body>
</html>
```

### Key Points:
- Requires JavaScript to work
- Use CSS to show it's draggable
- `dragstart`, `dragend`, `dragover`, `drop` events
- Good UX (show visual feedback)

---

## Canvas - Draw Graphics

### What is Canvas?
A container for drawing graphics with JavaScript.

### Why use it?
- Draw shapes and diagrams
- Create games
- Data visualization
- Image manipulation

### Syntax:
```html
<canvas id="myCanvas" width="400" height="300">
  Your browser doesn't support canvas.
</canvas>
```

### Simple Drawing Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Canvas Drawing</h1>
  
  <canvas id="myCanvas" width="400" height="300" style="border: 1px solid black;">
  </canvas>
  
  <script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Draw a rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);
    
    // Draw a circle
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(300, 150, 50, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw a line
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(350, 250);
    ctx.stroke();
  </script>
</body>
</html>
```

### What You Can Draw:
- Rectangles
- Circles/Arcs
- Lines
- Text
- Images
- Complex shapes

### Key Points:
- Requires JavaScript (`getContext("2d")`)
- Very powerful for graphics
- Can be complex
- Great for games and visualizations

---

## Geolocation API - Get User Location

### What is Geolocation?
Gets user's current location (latitude, longitude).

### Why use it?
- Location-based services
- Map integration
- Weather by location
- Store locator

### Simple Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Find Your Location</h1>
  
  <button onclick="getLocation()">Get My Location</button>
  
  <p id="result"></p>
  
  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          
          document.getElementById("result").innerHTML = 
            "Latitude: " + lat + "<br>" +
            "Longitude: " + lng;
        });
      } else {
        document.getElementById("result").innerHTML = 
          "Geolocation not supported";
      }
    }
  </script>
</body>
</html>
```

### Important:
- **Requires user permission** (browser asks)
- Only works on HTTPS
- User can deny access
- Don't force it

---

## Meta Tags for Mobile - Responsive Design

### What are meta tags?
Information about the webpage.

### Why important?
- Makes pages mobile-friendly
- Sets character encoding
- Controls zoom level
- SEO information

### Essential Meta Tags:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Mobile responsiveness -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Page description -->
  <meta name="description" content="Learn HTML basics">
  
  <!-- Keywords for SEO -->
  <meta name="keywords" content="HTML, tutorial, web">
  
  <!-- Author -->
  <meta name="author" content="John Smith">
  
  <!-- Refresh page every 30 seconds -->
  <meta http-equiv="refresh" content="30">
</head>
<body>
  <!-- Content -->
</body>
</html>
```

### Most Important:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Custom Attributes - Data Attributes Extended

### Practical Example with Storage:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Product List</h1>
  
  <div class="product" 
       data-id="101" 
       data-name="Laptop" 
       data-price="999.99"
       data-stock="true">
    <h3>Laptop</h3>
    <p>High-performance laptop</p>
    <button onclick="addToCart(this)">Add to Cart</button>
  </div>
  
  <div class="product" 
       data-id="102" 
       data-name="Mouse" 
       data-price="29.99"
       data-stock="true">
    <h3>Mouse</h3>
    <p>Wireless mouse</p>
    <button onclick="addToCart(this)">Add to Cart</button>
  </div>
  
  <script>
    function addToCart(button) {
      var product = button.parentElement;
      var id = product.getAttribute("data-id");
      var name = product.getAttribute("data-name");
      var price = product.getAttribute("data-price");
      
      alert("Added " + name + " ($" + price + ") to cart");
      
      // Save to session storage
      sessionStorage.setItem("lastProduct", id);
    }
  </script>
</body>
</html>
```

---

## Complete Advanced HTML Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML5 APIs Demo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <header>
    <h1>HTML5 Features Demo</h1>
  </header>

  <!-- Local Storage Section -->
  <section>
    <h2>Save Preferences</h2>
    <input type="text" id="name" placeholder="Your name">
    <button onclick="saveName()">Save</button>
    <button onclick="loadName()">Load</button>
    <p id="nameDisplay"></p>
  </section>

  <!-- Editable Content -->
  <section>
    <h2>Click to Edit</h2>
    <p contenteditable="true" style="border: 1px solid blue; padding: 10px;">
      Click here to edit this text...
    </p>
  </section>

  <!-- Draggable Items -->
  <section>
    <h2>Drag to Reorder</h2>
    <div id="dragContainer">
      <div draggable="true" class="draggable-item">Item A</div>
      <div draggable="true" class="draggable-item">Item B</div>
      <div draggable="true" class="draggable-item">Item C</div>
    </div>
  </section>

  <!-- Canvas Drawing -->
  <section>
    <h2>Canvas Drawing</h2>
    <canvas id="myCanvas" width="400" height="200" 
            style="border: 1px solid black;">
    </canvas>
  </section>

  <!-- Location Info -->
  <section>
    <h2>Your Location</h2>
    <button onclick="showLocation()">Get Location</button>
    <p id="locationDisplay"></p>
  </section>

  <!-- Data Attributes -->
  <section>
    <h2>Product with Data</h2>
    <div data-product-id="001" data-price="99.99" data-category="electronics">
      <h3>Laptop</h3>
      <p>High-performance laptop</p>
    </div>
  </section>

  <script>
    // Local Storage
    function saveName() {
      var name = document.getElementById("name").value;
      localStorage.setItem("userName", name);
      alert("Name saved!");
    }
    
    function loadName() {
      var name = localStorage.getItem("userName");
      if (name) {
        document.getElementById("nameDisplay").innerHTML = "Welcome, " + name;
      }
    }
    
    // Canvas Drawing
    var canvas = document.getElementById("myCanvas");
    if (canvas) {
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "blue";
      ctx.fillRect(50, 50, 100, 80);
    }
    
    // Geolocation
    function showLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          document.getElementById("locationDisplay").innerHTML = 
            "Lat: " + lat + "<br>Lng: " + lng;
        });
      }
    }
  </script>

</body>
</html>
```

---

## Best Practices

✅ **DO:**
- Use Local Storage for persistent data
- Use Session Storage for temporary data
- Always use HTTPS for sensitive data
- Request permission before accessing location
- Provide fallbacks for unsupported features
- Use data attributes for custom data

❌ **DON'T:**
- Store passwords in Local Storage
- Rely on browser storage alone
- Force geolocation requests
- Use contenteditable without validation
- Store too much data (storage is limited)
- Mix concerns (HTML structure separate from storage)

---

## Interview Questions

1. **What's the difference between Local Storage and Session Storage?**
   - Answer: Local Storage persists forever, Session Storage deletes on browser close

2. **Why not store passwords in Local Storage?**
   - Answer: Not secure, can be stolen by JavaScript code/browser attacks

3. **What does `contenteditable="true"` do?**
   - Answer: Allows users to click and edit text directly on the page

4. **What is a data attribute?**
   - Answer: Custom HTML attribute starting with `data-` to store extra information

5. **What does Canvas do?**
   - Answer: Allows drawing graphics and shapes with JavaScript

6. **Why request permission for Geolocation?**
   - Answer: Privacy. User should control what location data is shared

---

## Practice Assignment

### Task 1: Note-Taking App
Create an app where users can:
- Type notes
- Click "Save" to save to Local Storage
- Click "Load" to retrieve notes
- Display loaded notes

### Task 2: Todo List with Storage
Create a todo app with:
- Add todo items
- Save to Session Storage
- Display saved todos
- Clear all button

### Task 3: Editable Profile
Create a profile page with:
- `contenteditable` fields (name, bio, skills)
- Edit and view modes
- Save button

### Task 4: Draggable Task Board
Create a task board with:
- 3 draggable task items
- Drag to reorder
- CSS styling to show it's draggable

### Task 5: Simple Canvas Drawing
Create a page with:
- Canvas element
- Draw a rectangle
- Draw a circle
- Draw a line
- Display them

---

## Summary Notes

- **Local Storage** = Data saved forever (even after close)
- **Session Storage** = Data deleted when browser closes
- **`contenteditable="true"`** = Makes text editable
- **`draggable="true"`** = Element can be dragged
- **Canvas** = Draw graphics with JavaScript
- **Geolocation** = Get user's location (needs permission)
- **data-*** = Custom attributes for data
- **Meta tags** = Info about page (charset, viewport)
- **Always use HTTPS** for sensitive operations
- **Always request permission** for sensitive APIs

---
