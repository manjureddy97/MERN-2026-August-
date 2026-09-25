# Day 1 — JavaScript DOM Masterclass
## What is DOM? Selecting Elements · Reading & Changing Content · CSS with JS


# 1. What is DOM?

## Definition (2 lines)

**DOM (Document Object Model)** is a live tree-shaped map of your webpage that the browser builds in memory.  
JavaScript can use this map to find, read, change, add, or remove anything on the page without reloading.

### Even simpler

- HTML is the **blueprint** (the text file).
- DOM is the **working copy** the browser keeps in memory.
- When you change the DOM with JS, the page updates on screen.

### Real-world picture

Think of a **family tree**:

```
document
 └── html
      ├── head
      │    ├── title
      │    └── meta
      └── body
           ├── h1
           ├── p
           └── button
```

Each box is a **node** (an object). Parents have children. Children have one parent. Brothers and sisters are **siblings**.

### Key facts (remember these)

| Word        | Meaning                                      |
|------------|-----------------------------------------------|
| Document   | The whole webpage                             |
| Element    | A tag like `<div>`, `<p>`, `<button>`         |
| Node       | Any piece of the tree (element, text, etc.)   |
| DOM Tree   | How nodes connect as parent → child           |

---

# 2. How Browser Creates DOM

## Definition (2 lines)

When you open an HTML file, the browser **parses** (reads) the HTML from top to bottom and builds objects for each tag.  
That finished tree is the DOM, and then the browser paints it on the screen.

### Simple steps (Day 1 level)

1. You type a URL or open `index.html`.
2. Browser downloads / reads the HTML text.
3. Browser converts tags into objects (DOM nodes).
4. Browser also loads CSS and builds styles.
5. Browser draws the page (what you see).
6. JavaScript can now talk to the DOM and change it.

### Small mental model

```
HTML file (text)
      ↓
  DOM Tree (objects in memory)
      ↓
  Pixels on screen (what user sees)
```

You never edit the original HTML file with JS. You edit the **DOM in memory**. That is why the page can update without a full refresh.

---

# 3. HTML + CSS + JavaScript Connection

## Definition (2 lines)

**HTML** builds the structure (what exists), **CSS** styles it (how it looks), and **JavaScript** controls it (what happens).  
They meet at the DOM: JS finds HTML elements and can change their content, style, and behavior.

### Simple roles

| Language   | Job                    | Example              |
|-----------|------------------------|----------------------|
| HTML      | Structure / content    | `<button>Click</button>` |
| CSS       | Look / layout          | `color: red;`        |
| JavaScript| Actions / logic        | When click → change text |

### Complete tiny example (save as `connection-demo.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML + CSS + JS Connection</title>
  <style>
    /* CSS: makes the page look nice */
    body {
      font-family: Arial, sans-serif;
      background: #f0f4ff;
      padding: 40px;
      text-align: center;
    }
    #msg {
      font-size: 24px;
      color: #333;
      margin: 20px 0;
    }
    button {
      padding: 12px 24px;
      font-size: 16px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      background: #4338ca;
    }
  </style>
</head>
<body>
  <!-- HTML: structure -->
  <h1>HTML + CSS + JS</h1>
  <p id="msg">Hello Student!</p>
  <button id="btn">Change Message</button>

  <script>
    // JavaScript: finds HTML and changes it
    // document = the whole page (DOM root)
    // getElementById = find element with this id
    var message = document.getElementById("msg");
    var button = document.getElementById("btn");

    // When user clicks the button, run this function
    button.onclick = function () {
      // Change the text inside the paragraph
      message.innerText = "JavaScript changed me!";
      // Change the color using style
      message.style.color = "#4f46e5";
    };
  </script>
</body>
</html>
```

### What each part did

- **HTML** created the heading, paragraph, and button.
- **CSS** made colors, padding, and button style.
- **JS** listened for a click and updated the paragraph.

---

# 4. Selecting Elements

## Definition (2 lines)

**Selecting** means asking the DOM: “Please give me this element so I can work with it.”  
If you cannot select it, you cannot change it — selection is always step one.

### Why we need selection

```
Find element → Change it / read it / add event
```

Without finding the element first, JavaScript does not know *which* button or paragraph you mean.

---

## 4.1 getElementById()

## Definition (2 lines)

`getElementById("idName")` finds **one** element that has that exact `id`.  
IDs should be unique on the page, so this method returns a single element or `null` if not found.

### Rules

- Use the id string **without** the `#`.
- Returns one element (or null).
- Fast and very common.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getElementById Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff7ed; }
    #title { color: #c2410c; }
    #box { background: white; padding: 20px; border-radius: 10px; margin-top: 15px; }
  </style>
</head>
<body>
  <h1 id="title">My Title</h1>
  <div id="box">I am a box.</div>
  <button id="go">Select & Change</button>

  <script>
    // Find elements by their id
    var title = document.getElementById("title");
    var box = document.getElementById("box");
    var go = document.getElementById("go");

    go.onclick = function () {
      // Read current text
      console.log("Old title:", title.innerText);

      // Change text
      title.innerText = "Title Updated by getElementById";
      box.innerText = "Box was found and changed!";

      // Change style
      box.style.background = "#ffedd5";
      box.style.border = "2px solid #c2410c";
    };
  </script>
</body>
</html>
```

### Common mistake

```js
// WRONG — do not use #
document.getElementById("#title");

// CORRECT
document.getElementById("title");
```

---

## 4.2 getElementsByClassName()

## Definition (2 lines)

`getElementsByClassName("className")` finds **all** elements that share that class name.  
It returns a live **HTMLCollection** (list-like), not one element — so you use an index like `[0]`.

### Important

- Class can be reused many times.
- Result looks like an array, but is not a real array.
- Use `[0]`, `[1]`, … or a loop.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getElementsByClassName Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #ecfdf5; }
    .card {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      border-left: 4px solid #059669;
    }
  </style>
</head>
<body>
  <h1>Class Name Demo</h1>

  <div class="card">Card One</div>
  <div class="card">Card Two</div>
  <div class="card">Card Three</div>

  <button id="paint">Paint All Cards</button>

  <script>
    // Get ALL elements with class "card"
    var cards = document.getElementsByClassName("card");
    var paint = document.getElementById("paint");

    paint.onclick = function () {
      // cards.length = how many we found
      console.log("Found:", cards.length);

      // Change first card only
      cards[0].innerText = "First card changed";

      // Loop through all cards
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.background = "#d1fae5";
        cards[i].style.fontWeight = "bold";
      }
    };
  </script>
</body>
</html>
```

### Remember

```js
// One element by id
document.getElementById("x");

// Many elements by class → use index
document.getElementsByClassName("card")[0];
```

---

## 4.3 getElementsByTagName()

## Definition (2 lines)

`getElementsByTagName("tag")` finds **all** elements of that HTML tag name (`p`, `li`, `div`, `button`, etc.).  
It also returns a live HTMLCollection, so you pick items with `[0]` or loop.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getElementsByTagName Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fdf2f8; }
    li { margin: 8px 0; }
  </style>
</head>
<body>
  <h1>Tag Name Demo</h1>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>
  <p>Paragraph one</p>
  <p>Paragraph two</p>
  <button id="run">Count & Style</button>

  <script>
    var run = document.getElementById("run");

    run.onclick = function () {
      // All <li> tags
      var items = document.getElementsByTagName("li");
      // All <p> tags
      var paras = document.getElementsByTagName("p");

      alert("List items: " + items.length + " | Paragraphs: " + paras.length);

      // Style every list item
      for (var i = 0; i < items.length; i++) {
        items[i].style.color = "#be185d";
        items[i].innerText = (i + 1) + ". " + items[i].innerText;
      }

      // Change all paragraphs
      for (var j = 0; j < paras.length; j++) {
        paras[j].style.background = "#fce7f3";
        paras[j].style.padding = "10px";
      }
    };
  </script>
</body>
</html>
```

---

## 4.4 querySelector()

## Definition (2 lines)

`querySelector("css-selector")` finds the **first** element that matches a CSS selector.  
You write selectors like CSS: `#id`, `.class`, `tag`, or combinations like `div.card > p`.

### Why students love it

- One method for id, class, tag, or complex selectors.
- Returns only the **first** match.
- Modern and clean.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>querySelector Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eef2ff; }
    .highlight { background: yellow; }
    .box { padding: 15px; background: white; margin: 10px 0; border-radius: 8px; }
  </style>
</head>
<body>
  <h1 id="main">querySelector</h1>
  <div class="box">
    <p class="note">First note</p>
    <p class="note">Second note</p>
  </div>
  <button class="action">Run querySelector</button>

  <script>
    var btn = document.querySelector(".action"); // first with class action

    btn.onclick = function () {
      // By id (use # like CSS)
      var main = document.querySelector("#main");
      main.innerText = "Found with querySelector!";

      // By class (use . like CSS) — first match only
      var firstNote = document.querySelector(".note");
      firstNote.className = "note highlight";

      // Tag inside a parent
      var boxPara = document.querySelector(".box p");
      boxPara.style.color = "#3730a3";

      // Attribute selector example
      // document.querySelector('input[type="text"]');
    };
  </script>
</body>
</html>
```

### Selector cheat sheet

| Goal              | Selector example        |
|-------------------|-------------------------|
| By id             | `"#title"`              |
| By class          | `".card"`               |
| By tag            | `"button"`              |
| First p in .box   | `".box p"`              |
| Button with type  | `'button[type="submit"]'` |

---

## 4.5 querySelectorAll()

## Definition (2 lines)

`querySelectorAll("css-selector")` finds **all** elements matching the CSS selector.  
It returns a **NodeList** (list-like). You can use a `for` loop or `forEach` on it.

### Difference table (very important)

| Method                    | Returns        | How many      | Selector style |
|---------------------------|----------------|---------------|----------------|
| getElementById            | 1 element      | One           | id string      |
| getElementsByClassName    | HTMLCollection | Many          | class string   |
| getElementsByTagName      | HTMLCollection | Many          | tag string     |
| querySelector             | 1 element      | First only    | CSS selector   |
| querySelectorAll          | NodeList       | All matches   | CSS selector   |

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>querySelectorAll Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f5f3ff; }
    .item {
      padding: 12px;
      margin: 8px 0;
      background: white;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h1>querySelectorAll</h1>
  <div class="item">Item A</div>
  <div class="item">Item B</div>
  <div class="item">Item C</div>
  <div class="item">Item D</div>
  <button id="go">Style All Items</button>

  <script>
    document.getElementById("go").onclick = function () {
      // All elements with class "item"
      var items = document.querySelectorAll(".item");

      console.log("Count:", items.length);

      // Modern way: forEach
      items.forEach(function (el, index) {
        el.innerText = "Item #" + (index + 1) + " updated";
        el.style.background = index % 2 === 0 ? "#ddd6fe" : "#ede9fe";
        el.style.borderLeft = "4px solid #7c3aed";
      });

      // Old style for-loop also works
      // for (var i = 0; i < items.length; i++) { ... }
    };
  </script>
</body>
</html>
```

### Beginner tip

- Need **one** thing → `querySelector` or `getElementById`
- Need **many** things → `querySelectorAll` or `getElementsByClassName`

---

# 5. Reading Content

## Definition (2 lines)

**Reading content** means taking the text or HTML that is already inside an element and storing it in a variable.  
You use this to show values, check answers, copy text, or decide what to do next.

---

## 5.1 innerHTML

## Definition (2 lines)

`innerHTML` reads or writes the **HTML markup** inside an element, including tags.  
It can create real HTML structure, but never put untrusted user text into `innerHTML` (security risk later).

### Example idea

```js
// If element is: <div id="x"><b>Hi</b></div>
// innerHTML is: "<b>Hi</b>"  (includes tags)
```

---

## 5.2 innerText

## Definition (2 lines)

`innerText` reads or writes the **visible text** as the user sees it (respects CSS hide/show roughly).  
It does **not** include HTML tags — only the text on screen.

---

## 5.3 textContent

## Definition (2 lines)

`textContent` reads or writes **all text** inside an element, even if some is hidden by CSS.  
It never parses HTML tags; tags are treated as plain text characters if you assign them.

### Comparison (remember for interviews)

| Property     | Includes HTML tags? | Hidden text? | Typical use        |
|-------------|---------------------|--------------|--------------------|
| innerHTML   | Yes (as HTML)       | Yes in markup| Insert HTML        |
| innerText   | No                  | Mostly no    | Visible text       |
| textContent | No (tags as text)   | Yes          | Safe plain text    |

### Complete comparison example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reading Content Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f8fafc; }
    #demo { background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; }
    .hidden { display: none; }
    pre {
      background: #0f172a;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      white-space: pre-wrap;
    }
    button { margin-right: 8px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>innerHTML vs innerText vs textContent</h1>

  <div id="demo">
    Hello <b>World</b>
    <span class="hidden"> (hidden part)</span>
  </div>

  <button id="read">Read All Three</button>
  <button id="write">Write Examples</button>
  <pre id="out">Click "Read All Three"</pre>

  <script>
    var demo = document.getElementById("demo");
    var out = document.getElementById("out");

    document.getElementById("read").onclick = function () {
      var html = demo.innerHTML;
      var text = demo.innerText;
      var content = demo.textContent;

      out.innerText =
        "innerHTML   → " + html + "\n\n" +
        "innerText   → " + text + "\n\n" +
        "textContent → " + content;
    };

    document.getElementById("write").onclick = function () {
      // innerHTML understands tags
      // demo.innerHTML = "<i>Italic via innerHTML</i>";

      // textContent treats tags as plain text (safer for user input)
      demo.textContent = "<i>This shows tags as text</i>";
    };
  </script>
</body>
</html>
```

### Beginner rule

- Need HTML structure inside → `innerHTML`
- Need plain visible text → `innerText`
- Need plain text safely / including hidden → `textContent`

---

# 6. Changing Content

## Definition (2 lines)

**Changing content** means replacing what is inside an element after you selected it.  
You assign a new value to `innerHTML`, `innerText`, or `textContent`.

### Pattern (always the same)

```js
// 1) Select
var el = document.getElementById("msg");

// 2) Change
el.innerText = "New message";
```

### Small complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Changing Content</title>
  <style>
    body { font-family: Arial; padding: 30px; }
    #msg { font-size: 22px; margin: 20px 0; }
  </style>
</head>
<body>
  <p id="msg">Old text</p>
  <button id="a">Set plain text</button>
  <button id="b">Set HTML</button>

  <script>
    var msg = document.getElementById("msg");

    document.getElementById("a").onclick = function () {
      msg.innerText = "Plain text updated!";
    };

    document.getElementById("b").onclick = function () {
      msg.innerHTML = "HTML updated with <strong>bold</strong>!";
    };
  </script>
</body>
</html>
```

---

# 7. Changing CSS using JavaScript

## Definition (2 lines)

JavaScript can change how an element looks by editing its **inline style** or by changing **CSS classes**.  
Use `element.style.propertyName` for quick changes, or `classList` when you want cleaner reusable styles.

### Style property names

In CSS: `background-color`  
In JS: `backgroundColor` (camelCase)

| CSS                | JavaScript style          |
|--------------------|---------------------------|
| color              | style.color               |
| background-color   | style.backgroundColor     |
| font-size          | style.fontSize            |
| display            | style.display             |
| border-radius      | style.borderRadius        |

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Change CSS with JS</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f1f5f9; }
    #box {
      width: 220px;
      height: 120px;
      background: white;
      border: 2px solid #94a3b8;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      transition: 0.3s;
    }
    .active {
      background: #22c55e !important;
      color: white;
      border-color: #16a34a !important;
      transform: scale(1.05);
    }
    button { margin-right: 8px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Style with JavaScript</h1>
  <div id="box">Style Me</div>

  <button id="inline">Inline Style</button>
  <button id="toggle">Toggle Class</button>
  <button id="reset">Reset</button>

  <script>
    var box = document.getElementById("box");

    // Method 1: direct style (inline)
    document.getElementById("inline").onclick = function () {
      box.style.backgroundColor = "#3b82f6";
      box.style.color = "white";
      box.style.borderColor = "#1d4ed8";
      box.style.fontSize = "20px";
      box.style.fontWeight = "bold";
    };

    // Method 2: CSS class (cleaner for real apps)
    document.getElementById("toggle").onclick = function () {
      // add if missing, remove if present
      box.classList.toggle("active");
    };

    document.getElementById("reset").onclick = function () {
      // clear inline styles
      box.style.cssText = "";
      // remove class
      box.classList.remove("active");
    };
  </script>
</body>
</html>
```

### classList helpers (very useful)

```js
el.classList.add("active");      // add class
el.classList.remove("active");   // remove class
el.classList.toggle("active");   // switch on/off
el.classList.contains("active"); // true / false
```

---

# 8. Mini Project — Live Text Editor

## Goal

Build a tiny page where the user types in a box, and another area updates live.  
Also let them change color and size with buttons.

### Features

1. Live preview of typed text  
2. Change text color  
3. Change font size  
4. Clear button  
5. Character count  

### Complete project (save as `day1-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 1 Mini Project — Live Text Editor</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      min-height: 100vh;
      margin: 0;
      padding: 30px;
      color: #1e293b;
    }
    .app {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }
    h1 { margin-top: 0; color: #4f46e5; }
    label { font-weight: bold; display: block; margin: 14px 0 6px; }
    textarea {
      width: 100%;
      min-height: 120px;
      padding: 12px;
      font-size: 16px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      resize: vertical;
    }
    textarea:focus { outline: none; border-color: #6366f1; }
    .preview {
      min-height: 100px;
      padding: 16px;
      background: #f8fafc;
      border: 2px dashed #cbd5e1;
      border-radius: 10px;
      font-size: 18px;
      word-wrap: break-word;
    }
    .row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
    button {
      border: none;
      padding: 10px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      background: #4f46e5;
      color: white;
    }
    button.secondary { background: #64748b; }
    button.danger { background: #ef4444; }
    button:hover { opacity: 0.9; }
    #count { margin-top: 10px; color: #64748b; font-size: 14px; }
    .hint { color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="app">
    <h1>Live Text Editor</h1>
    <p class="hint">Day 1 Mini Project — DOM selection + content + style</p>

    <label for="input">Type your text</label>
    <textarea id="input" placeholder="Start typing..."></textarea>
    <div id="count">Characters: 0</div>

    <label>Live Preview</label>
    <div id="preview" class="preview">Your text will appear here...</div>

    <div class="row">
      <button id="red">Red Text</button>
      <button id="green">Green Text</button>
      <button id="blue">Blue Text</button>
      <button id="big" class="secondary">Bigger</button>
      <button id="small" class="secondary">Smaller</button>
      <button id="clear" class="danger">Clear</button>
    </div>
  </div>

  <script>
    // ========== SELECT ELEMENTS ==========
    var input = document.getElementById("input");
    var preview = document.getElementById("preview");
    var count = document.getElementById("count");
    var btnRed = document.getElementById("red");
    var btnGreen = document.getElementById("green");
    var btnBlue = document.getElementById("blue");
    var btnBig = document.getElementById("big");
    var btnSmall = document.getElementById("small");
    var btnClear = document.getElementById("clear");

    // current font size in px
    var fontSize = 18;

    // ========== LIVE UPDATE ==========
    // "input" event fires every time user types
    input.oninput = function () {
      var text = input.value;

      // If empty, show placeholder message
      if (text.trim() === "") {
        preview.innerText = "Your text will appear here...";
      } else {
        // Use textContent so HTML tags typed by user stay safe as text
        preview.textContent = text;
      }

      // Character count
      count.innerText = "Characters: " + text.length;
    };

    // ========== COLOR BUTTONS ==========
    btnRed.onclick = function () {
      preview.style.color = "#dc2626";
    };
    btnGreen.onclick = function () {
      preview.style.color = "#16a34a";
    };
    btnBlue.onclick = function () {
      preview.style.color = "#2563eb";
    };

    // ========== SIZE BUTTONS ==========
    btnBig.onclick = function () {
      fontSize = fontSize + 2;
      preview.style.fontSize = fontSize + "px";
    };
    btnSmall.onclick = function () {
      if (fontSize > 10) {
        fontSize = fontSize - 2;
        preview.style.fontSize = fontSize + "px";
      }
    };

    // ========== CLEAR ==========
    btnClear.onclick = function () {
      input.value = "";
      preview.innerText = "Your text will appear here...";
      preview.style.color = "";
      fontSize = 18;
      preview.style.fontSize = fontSize + "px";
      count.innerText = "Characters: 0";
    };
  </script>
</body>
</html>
```

### Project explanation (line by line idea)

1. HTML builds input, preview, and buttons.  
2. JS selects each important element once.  
3. `oninput` updates preview and character count while typing.  
4. Color buttons change `style.color`.  
5. Size buttons change `style.fontSize`.  
6. Clear resets text and styles.

---

# 9. Day 1 Quick Summary

| Topic              | One-line memory                         |
|--------------------|-----------------------------------------|
| DOM                | Live map of the page                    |
| Browser builds DOM | Reads HTML → tree of objects            |
| HTML/CSS/JS        | Structure / style / behavior            |
| getElementById     | Find one by id                          |
| getElementsByClassName | Find many by class                  |
| getElementsByTagName   | Find many by tag                    |
| querySelector      | First match with CSS selector           |
| querySelectorAll   | All matches with CSS selector           |
| innerHTML          | HTML inside element                     |
| innerText          | Visible text                            |
| textContent        | All plain text                          |
| style / classList  | Change CSS from JS                      |

---

# 10. Interview Questions (Day 1)

1. **What is the DOM?**  
   Answer: A tree of objects the browser builds from HTML so JavaScript can interact with the page.

2. **Difference between HTML and DOM?**  
   Answer: HTML is the source file/text; DOM is the live in-memory object model.

3. **getElementById vs querySelector?**  
   Answer: `getElementById` only finds by id and is very direct; `querySelector` can use any CSS selector and returns the first match.

4. **querySelector vs querySelectorAll?**  
   Answer: First match vs all matches.

5. **innerHTML vs textContent?**  
   Answer: `innerHTML` parses HTML tags; `textContent` treats content as plain text (safer for user data).

6. **Why is id unique?**  
   Answer: `getElementById` expects one element; duplicate ids cause unpredictable selection.

7. **How do you change CSS with JS?**  
   Answer: `element.style.color = "red"` or toggle classes with `classList`.

8. **What does `document` mean?**  
   Answer: The root object representing the whole webpage in the DOM.

---

# 11. Practice Questions

### Practice 1
Create a page with an `h1` id `heading`. On button click, change it to “I Love DOM”.

### Practice 2
Create 3 paragraphs with class `para`. On button click, make all of them blue.

### Practice 3
Use `querySelectorAll("li")` to count list items and show the count in an alert.

### Practice 4
Show a div with bold HTML using `innerHTML`, then replace it with plain text using `textContent`.

### Practice 5
Toggle a class `dark` on the body when a button is clicked (dark mode light version).

---

# 12. Homework

1. Recreate the Live Text Editor without looking.  
2. Add a button that makes the preview **bold**.  
3. Add a button that sets background color of preview.  
4. Write in your notebook: definition of DOM (2 lines) and the 5 selection methods.  
5. Explain to a friend: difference between `innerHTML` and `textContent`.

---

# 13. Self-Check (Can you answer?)

- [ ] I can explain DOM like teaching a friend  
- [ ] I know how browser creates DOM (simple steps)  
- [ ] I can select by id, class, tag, and CSS selector  
- [ ] I can read and change content  
- [ ] I can change color/size with JS  
- [ ] I finished the mini project  

---

