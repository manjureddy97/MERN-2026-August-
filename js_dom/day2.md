# Day 2 — JavaScript DOM Masterclass
## Creating Elements · append / prepend · before / after · remove · replace · clone

## Learning Goals

1. Create elements with `createElement`
2. Add them with `append`, `appendChild`, `prepend`
3. Place them with `before` and `after`
4. Remove elements with `remove` and `removeChild`
5. Replace with `replaceChild`
6. Copy with `cloneNode`
7. Mini Project: **Dynamic Task List Builder**

---

# 1. Creating Elements

## Definition (2 lines)

**Creating an element** means asking JavaScript to make a new HTML tag object in memory that does not exist on the page yet.  
After you create it, you must **insert** it into the DOM (append/prepend/etc.) or the user will never see it.

### Simple idea

```
createElement  →  set text/style/attributes  →  put it on the page
```

### The main method

```js
var el = document.createElement("tagName");
```

Examples:

```js
var p = document.createElement("p");       // <p></p>
var btn = document.createElement("button"); // <button></button>
var div = document.createElement("div");   // <div></div>
var li = document.createElement("li");     // <li></li>
```

### Important truth

Creating is **not** enough. The new element lives only in a variable until you attach it.

```js
var p = document.createElement("p");
p.innerText = "Hello";
// Still invisible!
// Need: document.body.append(p);
```

### Complete example — create one paragraph

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>createElement Basics</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eff6ff; }
    button { padding: 10px 16px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Create Element</h1>
  <button id="add">Add a Paragraph</button>
  <div id="area"></div>

  <script>
    var add = document.getElementById("add");
    var area = document.getElementById("area");

    add.onclick = function () {
      // 1) Create empty <p>
      var p = document.createElement("p");

      // 2) Put text inside it
      p.innerText = "I was created with JavaScript!";

      // 3) Optional style
      p.style.background = "#dbeafe";
      p.style.padding = "10px";
      p.style.borderRadius = "8px";

      // 4) Put it on the page
      area.append(p);
    };
  </script>
</body>
</html>
```

### Setting attributes on new elements

```js
var a = document.createElement("a");
a.href = "https://example.com";
a.target = "_blank";
a.innerText = "Visit Example";
a.id = "link1";
a.className = "btn-link";
```

Or with `setAttribute`:

```js
a.setAttribute("href", "https://example.com");
a.setAttribute("data-id", "99");
```

---

# 2. append()

## Definition (2 lines)

`parent.append(child)` adds one or more nodes (or text) **at the end** of the parent’s children.  
It is modern, simple, and can take multiple arguments at once.

### Why use append?

- Easy to read
- Can append text strings directly
- Can append several things in one call

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>append() Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f0fdf4; }
    #list {
      background: white;
      padding: 15px;
      border-radius: 10px;
      min-height: 80px;
    }
    .chip {
      display: inline-block;
      background: #bbf7d0;
      padding: 6px 12px;
      margin: 4px;
      border-radius: 999px;
    }
    button { margin: 10px 6px 0 0; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>append()</h1>
  <div id="list">Start → </div>
  <button id="one">Append One</button>
  <button id="many">Append Many</button>
  <button id="text">Append Text</button>

  <script>
    var list = document.getElementById("list");

    document.getElementById("one").onclick = function () {
      var span = document.createElement("span");
      span.className = "chip";
      span.innerText = "One";
      // Add at the END of #list
      list.append(span);
    };

    document.getElementById("many").onclick = function () {
      var a = document.createElement("span");
      a.className = "chip";
      a.innerText = "A";

      var b = document.createElement("span");
      b.className = "chip";
      b.innerText = "B";

      // Multiple items in one append
      list.append(a, b);
    };

    document.getElementById("text").onclick = function () {
      // append can take plain text too
      list.append(" [text] ");
    };
  </script>
</body>
</html>
```

---

# 3. appendChild()

## Definition (2 lines)

`parent.appendChild(child)` adds **one node** as the last child of the parent.  
It is the older classic method; it only accepts a node (not a plain text string).

### append vs appendChild (simple)

| Feature              | append()        | appendChild()     |
|----------------------|-----------------|-------------------|
| Multiple items       | Yes             | No (one only)     |
| Plain text string    | Yes             | No                |
| Returns              | undefined       | the child node    |
| Age                  | Newer           | Older / classic   |

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>appendChild Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff7ed; }
    #box {
      background: white;
      padding: 15px;
      border-radius: 10px;
      border: 2px solid #fdba74;
    }
    li { margin: 6px 0; }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>appendChild()</h1>
  <ul id="box"></ul>
  <button id="add">Add List Item</button>

  <script>
    var box = document.getElementById("box");
    var n = 1;

    document.getElementById("add").onclick = function () {
      // Create <li>
      var li = document.createElement("li");
      li.innerText = "Item number " + n;
      n = n + 1;

      // appendChild adds ONE node at the end
      box.appendChild(li);

      // appendChild returns the node (useful sometimes)
      // var returned = box.appendChild(li);
    };
  </script>
</body>
</html>
```

### Beginner advice

For new code, **`append()`** is often nicer.  
Know **`appendChild()`** because many tutorials and interviews still use it.

---

# 4. prepend()

## Definition (2 lines)

`parent.prepend(child)` inserts content **at the beginning** of the parent (before existing children).  
It is the opposite position of `append` (start vs end).

### Picture

```
Before:  [A] [B] [C]
prepend(X)
After:   [X] [A] [B] [C]
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>prepend Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #faf5ff; }
    #feed {
      background: white;
      padding: 15px;
      border-radius: 10px;
    }
    .post {
      padding: 10px;
      margin: 8px 0;
      background: #f3e8ff;
      border-left: 4px solid #9333ea;
      border-radius: 6px;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>prepend() — newest on top</h1>
  <div id="feed">
    <div class="post">Old post</div>
  </div>
  <button id="add">Add New Post on Top</button>

  <script>
    var feed = document.getElementById("feed");
    var count = 1;

    document.getElementById("add").onclick = function () {
      var post = document.createElement("div");
      post.className = "post";
      post.innerText = "New post #" + count + " (added on top)";
      count++;

      // Goes to the START
      feed.prepend(post);
    };
  </script>
</body>
</html>
```

### Real-world uses

- New chat messages at top
- Latest news first
- Notification banners

---

# 5. before()

## Definition (2 lines)

`element.before(newNode)` inserts `newNode` as a **sibling just before** that element.  
The parent is the same parent of `element`; you do not call before on the parent.

### Picture

```
Parent
 ├── A
 ├── B   ← call B.before(X)
 └── C

Result:
 ├── A
 ├── X
 ├── B
 └── C
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>before() Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #ecfeff; }
    #target {
      background: #a5f3fc;
      padding: 15px;
      border-radius: 8px;
      font-weight: bold;
    }
    .note {
      background: white;
      padding: 10px;
      margin: 6px 0;
      border: 1px solid #67e8f9;
      border-radius: 6px;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>before()</h1>
  <div id="target">I am the target</div>
  <button id="go">Insert Note BEFORE Target</button>

  <script>
    var target = document.getElementById("target");

    document.getElementById("go").onclick = function () {
      var note = document.createElement("div");
      note.className = "note";
      note.innerText = "I was inserted BEFORE the target";

      // Insert as previous sibling of target
      target.before(note);
    };
  </script>
</body>
</html>
```

---

# 6. after()

## Definition (2 lines)

`element.after(newNode)` inserts `newNode` as a **sibling just after** that element.  
It is the mirror of `before()` — same parent, position after the reference element.

### Picture

```
Parent
 ├── A
 ├── B   ← call B.after(X)
 └── C

Result:
 ├── A
 ├── B
 ├── X
 └── C
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>after() Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff1f2; }
    #target {
      background: #fecdd3;
      padding: 15px;
      border-radius: 8px;
      font-weight: bold;
    }
    .note {
      background: white;
      padding: 10px;
      margin: 6px 0;
      border: 1px solid #fda4af;
      border-radius: 6px;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>after()</h1>
  <div id="target">I am the target</div>
  <button id="go">Insert Note AFTER Target</button>

  <script>
    var target = document.getElementById("target");

    document.getElementById("go").onclick = function () {
      var note = document.createElement("div");
      note.className = "note";
      note.innerText = "I was inserted AFTER the target";

      target.after(note);
    };
  </script>
</body>
</html>
```

### Memory trick

| Method    | Where it goes                      |
|-----------|------------------------------------|
| append    | End of **children** of parent      |
| prepend   | Start of **children** of parent     |
| before    | Just **before** this element       |
| after     | Just **after** this element        |

---

# 7. remove()

## Definition (2 lines)

`element.remove()` deletes that element from the DOM completely.  
After remove, it disappears from the page; the variable may still hold the object in memory until you drop the reference.

### Super simple

```js
var box = document.getElementById("box");
box.remove(); // gone from page
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>remove() Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fefce8; }
    .card {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      border: 2px solid #facc15;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button { padding: 8px 12px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>remove()</h1>

  <div class="card" id="c1">
    <span>Card One</span>
    <button onclick="document.getElementById('c1').remove()">Delete</button>
  </div>

  <div class="card" id="c2">
    <span>Card Two</span>
    <button onclick="document.getElementById('c2').remove()">Delete</button>
  </div>

  <div class="card" id="c3">
    <span>Card Three</span>
    <button onclick="document.getElementById('c3').remove()">Delete</button>
  </div>
</body>
</html>
```

### Note for beginners

Inline `onclick="..."` is fine for tiny demos.  
In real apps, we usually attach events in JS (Day 3).

---

# 8. removeChild()

## Definition (2 lines)

`parent.removeChild(child)` removes a **known child** from a parent element.  
You must pass the child node; the parent does the removal.

### Difference from remove()

```js
// Modern / simple
child.remove();

// Older style
parent.removeChild(child);
```

Both remove from the page. `remove()` is shorter when you already have the child.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>removeChild Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f1f5f9; }
    #parent {
      background: white;
      padding: 15px;
      border-radius: 10px;
    }
    .item {
      padding: 10px;
      margin: 6px 0;
      background: #e2e8f0;
      border-radius: 6px;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>removeChild()</h1>
  <div id="parent">
    <div class="item" id="first">First child</div>
    <div class="item" id="second">Second child</div>
    <div class="item" id="third">Third child</div>
  </div>
  <button id="del">Remove First Child</button>

  <script>
    var parent = document.getElementById("parent");

    document.getElementById("del").onclick = function () {
      var first = document.getElementById("first");

      // Only works if first is still a child
      if (first && parent.contains(first)) {
        parent.removeChild(first);
      } else {
        alert("First child already removed!");
      }
    };
  </script>
</body>
</html>
```

### Classic pattern: remove last child

```js
if (parent.lastElementChild) {
  parent.removeChild(parent.lastElementChild);
}
```

---

# 9. replaceChild()

## Definition (2 lines)

`parent.replaceChild(newChild, oldChild)` swaps an existing child with a new node.  
The old child is removed from the parent; the new child takes its place in the same position.

### Formula

```js
parent.replaceChild(newNode, oldNode);
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>replaceChild Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eef2ff; }
    #parent {
      background: white;
      padding: 15px;
      border-radius: 10px;
    }
    .old {
      padding: 12px;
      background: #fee2e2;
      border-radius: 8px;
      margin: 8px 0;
    }
    .new {
      padding: 12px;
      background: #dcfce7;
      border-radius: 8px;
      margin: 8px 0;
      font-weight: bold;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>replaceChild()</h1>
  <div id="parent">
    <div class="old" id="oldBox">I am the OLD box</div>
  </div>
  <button id="swap">Replace Old with New</button>

  <script>
    var parent = document.getElementById("parent");
    var oldBox = document.getElementById("oldBox");

    document.getElementById("swap").onclick = function () {
      // Create replacement
      var newBox = document.createElement("div");
      newBox.className = "new";
      newBox.innerText = "I am the NEW box (replaced!)";

      // Swap: new first argument, old second
      if (document.getElementById("oldBox")) {
        parent.replaceChild(newBox, oldBox);
      } else {
        alert("Already replaced!");
      }
    };
  </script>
</body>
</html>
```

### Modern alternative (also good to know)

```js
oldBox.replaceWith(newBox);
```

`replaceWith` is often easier than `replaceChild` because you call it on the old element itself.

---

# 10. cloneNode()

## Definition (2 lines)

`element.cloneNode(deep)` makes a **copy** of an element.  
If `deep` is `true`, it also copies all children; if `false`, only the empty shell of that element is copied.

### Syntax

```js
var copy = original.cloneNode(true);  // deep clone (with children)
var shell = original.cloneNode(false); // shallow (no children)
```

### Important notes

- Clone is a separate node (not the same object).
- You still need to `append` the clone somewhere.
- **id** is copied too — avoid duplicate ids (change the id after clone).
- Event listeners added with `addEventListener` are usually **not** cloned.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>cloneNode Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fdf4ff; }
    #gallery { display: flex; flex-wrap: wrap; gap: 12px; }
    .card {
      width: 160px;
      background: white;
      border: 2px solid #e9d5ff;
      border-radius: 12px;
      padding: 12px;
    }
    .card h3 { margin: 0 0 8px; color: #7e22ce; }
    .card p { margin: 0; font-size: 14px; color: #64748b; }
    button { margin: 16px 8px 0 0; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>cloneNode()</h1>

  <div id="gallery">
    <div class="card" id="template">
      <h3>Product</h3>
      <p>Nice item for sale</p>
    </div>
  </div>

  <button id="deep">Deep Clone (+ children)</button>
  <button id="shallow">Shallow Clone (no children)</button>

  <script>
    var gallery = document.getElementById("gallery");
    var template = document.getElementById("template");
    var n = 1;

    document.getElementById("deep").onclick = function () {
      // true = copy children too (h3 and p)
      var copy = template.cloneNode(true);

      // Avoid duplicate id
      copy.id = "card-" + n;

      // Optional: change title
      copy.querySelector("h3").innerText = "Product " + n;
      n++;

      gallery.append(copy);
    };

    document.getElementById("shallow").onclick = function () {
      // false = only outer div, empty inside
      var shell = template.cloneNode(false);
      shell.id = "shell-" + n;
      shell.innerText = "Empty shell clone #" + n;
      n++;
      gallery.append(shell);
    };
  </script>
</body>
</html>
```

---

# 11. Putting It Together (Mini Flow)

Almost every dynamic UI follows this recipe:

```js
// 1. Create
var li = document.createElement("li");

// 2. Configure
li.innerText = "Learn DOM";
li.className = "task";

// 3. Insert
list.append(li);

// 4. Later: remove or replace
// li.remove();
```

### Position cheat sheet

```
parent.prepend(x)   → first child
parent.append(x)    → last child
ref.before(x)       → sibling before ref
ref.after(x)        → sibling after ref
x.remove()          → delete x
parent.removeChild(x)
parent.replaceChild(newX, oldX)
x.cloneNode(true)
```

---

# 12. Mini Project — Dynamic Task List Builder

## Goal

Type a task, click Add, and see it appear in a list.  
Each task has a Delete button. Also support Clear All and Clone Last.

### Complete project (`day2-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 2 Mini Project — Task List Builder</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(135deg, #0ea5e9, #6366f1);
      padding: 30px 16px;
    }
    .app {
      max-width: 560px;
      margin: 0 auto;
      background: #fff;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.18);
    }
    h1 { margin: 0 0 6px; color: #1e293b; }
    .sub { color: #64748b; margin-bottom: 18px; font-size: 14px; }
    .row {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    input[type="text"] {
      flex: 1;
      padding: 12px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 15px;
    }
    input:focus { outline: none; border-color: #6366f1; }
    button {
      border: none;
      border-radius: 10px;
      padding: 12px 14px;
      cursor: pointer;
      font-size: 14px;
      color: #fff;
      background: #4f46e5;
    }
    button.secondary { background: #64748b; }
    button.danger { background: #ef4444; }
    button.ok { background: #059669; }
    button:hover { opacity: 0.92; }
    #stats {
      font-size: 14px;
      color: #475569;
      margin-bottom: 12px;
    }
    #list {
      list-style: none;
      padding: 0;
      margin: 0;
      min-height: 80px;
    }
    .task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px;
      margin-bottom: 8px;
    }
    .task span { flex: 1; word-break: break-word; }
    .task button {
      padding: 8px 10px;
      font-size: 12px;
    }
    .empty {
      text-align: center;
      color: #94a3b8;
      padding: 24px;
      border: 2px dashed #cbd5e1;
      border-radius: 10px;
    }
    .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
  </style>
</head>
<body>
  <div class="app">
    <h1>Task List Builder</h1>
    <p class="sub">Day 2 — createElement, append, remove, cloneNode</p>

    <div class="row">
      <input type="text" id="taskInput" placeholder="Enter a new task...">
      <button id="addBtn" class="ok">Add</button>
    </div>

    <div id="stats">Tasks: 0</div>
    <ul id="list"></ul>
    <div id="emptyMsg" class="empty">No tasks yet. Add your first task!</div>

    <div class="actions">
      <button id="clearBtn" class="danger">Clear All</button>
      <button id="cloneBtn" class="secondary">Clone Last Task</button>
      <button id="topBtn" class="secondary">Add Sample on Top</button>
    </div>
  </div>

  <script>
    // ===== SELECT =====
    var input = document.getElementById("taskInput");
    var addBtn = document.getElementById("addBtn");
    var list = document.getElementById("list");
    var stats = document.getElementById("stats");
    var emptyMsg = document.getElementById("emptyMsg");
    var clearBtn = document.getElementById("clearBtn");
    var cloneBtn = document.getElementById("cloneBtn");
    var topBtn = document.getElementById("topBtn");

    // ===== HELPERS =====
    function updateStats() {
      var count = list.children.length;
      stats.innerText = "Tasks: " + count;

      // Show / hide empty message
      if (count === 0) {
        emptyMsg.style.display = "block";
      } else {
        emptyMsg.style.display = "none";
      }
    }

    function createTask(text) {
      // 1) Create <li>
      var li = document.createElement("li");
      li.className = "task";

      // 2) Create text span
      var span = document.createElement("span");
      span.innerText = text;

      // 3) Create delete button
      var del = document.createElement("button");
      del.className = "danger";
      del.innerText = "Delete";

      // 4) Delete removes this li
      del.onclick = function () {
        li.remove();
        updateStats();
      };

      // 5) Assemble: span + button inside li
      li.append(span, del);
      return li;
    }

    function addTask(text, onTop) {
      text = text.trim();
      if (text === "") {
        alert("Please type a task first.");
        return;
      }

      var li = createTask(text);

      if (onTop) {
        list.prepend(li); // newest first
      } else {
        list.append(li);  // newest last
      }

      input.value = "";
      input.focus();
      updateStats();
    }

    // ===== EVENTS =====
    addBtn.onclick = function () {
      addTask(input.value, false);
    };

    // Enter key support (simple)
    input.onkeydown = function (e) {
      if (e.key === "Enter") {
        addTask(input.value, false);
      }
    };

    clearBtn.onclick = function () {
      // Remove all children
      list.innerHTML = "";
      // Or loop: while (list.firstChild) list.removeChild(list.firstChild);
      updateStats();
    };

    cloneBtn.onclick = function () {
      var last = list.lastElementChild;
      if (!last) {
        alert("No task to clone!");
        return;
      }

      // Deep clone the last task (includes text + button structure)
      var copy = last.cloneNode(true);

      // Re-bind delete on the cloned button
      // (clone does not keep our JS onclick from createTask reliably in all cases;
      //  we rebuild delete behavior)
      var delBtn = copy.querySelector("button");
      delBtn.onclick = function () {
        copy.remove();
        updateStats();
      };

      list.append(copy);
      updateStats();
    };

    topBtn.onclick = function () {
      addTask("Sample task (added on top)", true);
    };

    // Initial UI state
    updateStats();
  </script>
</body>
</html>
```

### What you practiced

| Feature        | Method used          |
|----------------|----------------------|
| New task       | createElement + append |
| Delete one     | remove()             |
| Clear all      | empty parent         |
| Clone last     | cloneNode(true)      |
| Add on top     | prepend()            |

---

# 13. Day 2 Quick Summary

| Method            | Simple meaning                          |
|-------------------|-----------------------------------------|
| createElement     | Make a new tag in memory                |
| append            | Add at end (can multi / text)           |
| appendChild       | Add one node at end                     |
| prepend           | Add at start                            |
| before            | Insert as previous sibling              |
| after             | Insert as next sibling                  |
| remove            | Delete this element                     |
| removeChild       | Parent deletes a child                  |
| replaceChild      | Swap old child with new                 |
| cloneNode         | Copy element (deep or shallow)          |

---

# 14. Interview Questions (Day 2)

1. **Does createElement show on page immediately?**  
   No. You must insert it with append/prepend/before/after.

2. **append vs appendChild?**  
   append can take multiple nodes/text; appendChild takes one node only.

3. **append vs prepend?**  
   End vs beginning of parent’s children.

4. **before vs prepend?**  
   before is relative to a sibling element; prepend is first child of a parent.

5. **remove vs removeChild?**  
   remove is called on the element; removeChild is called on the parent with the child argument.

6. **What does cloneNode(true) do?**  
   Copies the element and all its descendants.

7. **Why change id after cloning?**  
   Duplicate ids break getElementById and validity.

8. **Does cloneNode copy event listeners?**  
   Generally no for listeners added with addEventListener.

---

# 15. Practice Questions

### Practice 1
Create a button that adds a new `div` with text “Hello” into `#box` using `append`.

### Practice 2
Add items to a list with `prepend` so newest is always first.

### Practice 3
Use `before()` to insert a warning message above a form.

### Practice 4
Build 5 colored boxes; each has a button that `remove()`s itself.

### Practice 5
Clone a product card three times and change each title.

### Practice 6
Replace a “Loading...” div with a “Done!” div using `replaceChild` or `replaceWith`.

---

# 16. Homework

1. Rebuild the Task List without looking at the code.  
2. Add an “Edit” button that uses `prompt` and changes the task text.  
3. Add a counter badge that shows total tasks in the page title: `document.title`.  
4. Write 2-line definitions for: append, prepend, remove, cloneNode.  
5. Draw on paper: where append / prepend / before / after place a node.

---

# 17. Self-Check

- [ ] I can create elements with createElement  
- [ ] I know when to use append vs prepend  
- [ ] I understand before / after as siblings  
- [ ] I can remove and replace nodes  
- [ ] I can clone and re-insert a node  
- [ ] Mini project works in the browser  

---

