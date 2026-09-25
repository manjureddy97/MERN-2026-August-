# Day 3 — JavaScript DOM Masterclass
## Events · Mouse · Keyboard · Form Events · preventDefault · stopPropagation

---

## Learning Goals

1. What an event is  
2. Click, double-click, mouse move / leave  
3. Keyboard: keydown, keyup  
4. Form-related: input, change, submit  
5. `preventDefault()` and `stopPropagation()`  
6. Mini Project: **Interactive Mood Board**

---

# 1. What Are Events?

## Definition (2 lines)

An **event** is a signal that something happened in the browser — a click, a key press, a form submit, a mouse move, and more.  
JavaScript can **listen** for events and run a function (called a handler) when that signal fires.

### Simple picture

```
User action  →  Browser creates event  →  Your function runs
```

### Two common ways to attach handlers (Day 3 level)

**Way A — property (simple for beginners)**

```js
button.onclick = function () {
  alert("Clicked!");
};
```

**Way B — addEventListener (better for real apps)**

```js
button.addEventListener("click", function () {
  alert("Clicked!");
});
```

We will mostly use **property style** and **addEventListener** both, so you recognize them.

### Event object

When a handler runs, the browser often passes an **event object** with details:

```js
button.onclick = function (event) {
  console.log(event.type);   // "click"
  console.log(event.target); // the element clicked
};
```

You can name it `event`, `e`, or `ev` — your choice.

---

# 2. onclick

## Definition (2 lines)

`onclick` fires when the user **presses and releases** the left mouse button on an element (or activates it with keyboard in many cases).  
It is the most common event for buttons, links, and cards.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>onclick Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eff6ff; }
    #box {
      width: 200px;
      height: 100px;
      background: white;
      border: 2px solid #3b82f6;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
    }
    button { padding: 10px 16px; cursor: pointer; margin-right: 8px; }
  </style>
</head>
<body>
  <h1>onclick</h1>
  <div id="box">Not clicked yet</div>
  <button id="btn1">Click Me</button>
  <button id="btn2">Also Click Me</button>

  <script>
    var box = document.getElementById("box");
    var count = 0;

    // Property style
    document.getElementById("btn1").onclick = function () {
      count++;
      box.innerText = "Clicked " + count + " time(s)";
      box.style.background = "#dbeafe";
    };

    // addEventListener style
    document.getElementById("btn2").addEventListener("click", function () {
      box.innerText = "Button 2 was clicked!";
      box.style.background = "#bfdbfe";
    });
  </script>
</body>
</html>
```

### Tips

- One element can have only **one** `onclick` property assignment (later overwrites earlier).  
- `addEventListener` can add **many** handlers for the same event.

---

# 3. ondblclick

## Definition (2 lines)

`ondblclick` (or the `dblclick` event) fires when the user **quickly clicks twice** on an element.  
Use it for “open details”, “edit mode”, or special power actions — not for primary actions (single click is clearer).

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ondblclick Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fdf2f8; }
    #card {
      width: 240px;
      padding: 24px;
      background: white;
      border-radius: 12px;
      text-align: center;
      border: 2px dashed #ec4899;
      user-select: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>ondblclick</h1>
  <p>Double-click the card</p>
  <div id="card">Double-click me</div>

  <script>
    var card = document.getElementById("card");
    var open = false;

    card.ondblclick = function () {
      open = !open;
      if (open) {
        card.innerText = "OPEN — details visible";
        card.style.background = "#fce7f3";
        card.style.borderStyle = "solid";
      } else {
        card.innerText = "CLOSED — double-click again";
        card.style.background = "white";
        card.style.borderStyle = "dashed";
      }
    };

    // Optional: also react to single click differently
    card.onclick = function () {
      console.log("Single click (not double)");
    };
  </script>
</body>
</html>
```

---

# 4. mouseover

## Definition (2 lines)

`mouseover` fires when the mouse pointer **enters** an element’s area (including when it enters from a child in some cases).  
It is often used for hover effects, tooltips, and highlights (CSS `:hover` can do simple styles without JS).

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>mouseover Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #ecfdf5; }
    #panel {
      width: 260px;
      height: 120px;
      background: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #10b981;
      transition: 0.2s;
    }
  </style>
</head>
<body>
  <h1>mouseover</h1>
  <div id="panel">Hover over me</div>
  <p id="status">Status: waiting...</p>

  <script>
    var panel = document.getElementById("panel");
    var status = document.getElementById("status");

    panel.onmouseover = function () {
      panel.innerText = "Mouse is over!";
      panel.style.background = "#d1fae5";
      panel.style.transform = "scale(1.05)";
      status.innerText = "Status: mouseover fired";
    };
  </script>
</body>
</html>
```

### Note

For “hover in / hover out” pairs, people also use `mouseenter` / `mouseleave` (cleaner for many UI cases). Today we stick to the syllabus names.

---

# 5. mouseleave

## Definition (2 lines)

`mouseleave` fires when the mouse pointer **leaves** the element’s area.  
Pair it with `mouseover` (or `mouseenter`) to reset styles when the user moves away.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>mouseleave Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff7ed; }
    #box {
      width: 280px;
      height: 140px;
      background: #ffedd5;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      border: 2px solid #f97316;
    }
  </style>
</head>
<body>
  <h1>mouseover + mouseleave</h1>
  <div id="box">Move mouse in and out</div>

  <script>
    var box = document.getElementById("box");

    box.onmouseover = function () {
      box.innerText = "INSIDE";
      box.style.background = "#fdba74";
      box.style.color = "#7c2d12";
    };

    box.onmouseleave = function () {
      box.innerText = "OUTSIDE";
      box.style.background = "#ffedd5";
      box.style.color = "#000";
    };
  </script>
</body>
</html>
```

---

# 6. mousemove

## Definition (2 lines)

`mousemove` fires **repeatedly** as the mouse moves inside an element (or the document).  
Use it for drawing, custom cursors, or showing coordinates — be careful, it can fire very often.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>mousemove Demo</title>
  <style>
    body { font-family: Arial; margin: 0; }
    #stage {
      height: 250px;
      background: #0f172a;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      user-select: none;
    }
    #info { padding: 20px; }
  </style>
</head>
<body>
  <div id="stage">Move mouse here</div>
  <div id="info">X: 0 | Y: 0</div>

  <script>
    var stage = document.getElementById("stage");
    var info = document.getElementById("info");

    stage.onmousemove = function (e) {
      // clientX / clientY = position in the viewport
      var x = e.clientX;
      var y = e.clientY;

      info.innerText = "X: " + x + " | Y: " + y;
      stage.innerText = "Tracking...";

      // Fun: change background brightness based on X
      var blue = Math.min(255, Math.floor(x / 4));
      stage.style.background = "rgb(15, 23, " + blue + ")";
    };

    stage.onmouseleave = function () {
      stage.innerText = "Move mouse here";
      stage.style.background = "#0f172a";
    };
  </script>
</body>
</html>
```

### Useful event properties

| Property   | Meaning                          |
|-----------|-----------------------------------|
| clientX   | X position in the window          |
| clientY   | Y position in the window          |
| target    | Element that received the event   |
| type      | Event name string                 |

---

# 7. keydown

## Definition (2 lines)

`keydown` fires when the user **presses down** a key on the keyboard.  
It repeats if the key is held, so it is useful for games and continuous actions.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>keydown Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f8fafc; }
    #log {
      background: #0f172a;
      color: #4ade80;
      padding: 16px;
      border-radius: 10px;
      min-height: 80px;
      font-family: Consolas, monospace;
    }
    input {
      width: 100%;
      max-width: 400px;
      padding: 12px;
      font-size: 16px;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>keydown</h1>
  <p>Type in the box (or click page and press keys)</p>
  <input id="field" type="text" placeholder="Type here...">
  <div id="log">Press any key...</div>

  <script>
    var field = document.getElementById("field");
    var log = document.getElementById("log");

    field.onkeydown = function (e) {
      log.innerText =
        "keydown\n" +
        "key: " + e.key + "\n" +
        "code: " + e.code;

      // Example: detect Enter
      if (e.key === "Enter") {
        log.innerText += "\n→ Enter detected!";
      }

      // Example: detect Escape
      if (e.key === "Escape") {
        field.value = "";
        log.innerText += "\n→ Cleared with Escape";
      }
    };
  </script>
</body>
</html>
```

### Remember

- `e.key` → character / name (`"a"`, `"Enter"`, `"ArrowUp"`)  
- `e.code` → physical key (`"KeyA"`, `"Enter"`)

---

# 8. keyup

## Definition (2 lines)

`keyup` fires when the user **releases** a key.  
It fires once per release (does not repeat while holding), so it is good for “after typing a character” logic.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>keyup Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f5f3ff; }
    input {
      width: 100%;
      max-width: 420px;
      padding: 12px;
      font-size: 16px;
    }
    #mirror {
      margin-top: 16px;
      padding: 16px;
      background: white;
      border-radius: 10px;
      border: 2px solid #c4b5fd;
      min-height: 40px;
    }
  </style>
</head>
<body>
  <h1>keyup</h1>
  <input id="name" type="text" placeholder="Type your name">
  <div id="mirror">Live mirror will appear...</div>

  <script>
    var nameInput = document.getElementById("name");
    var mirror = document.getElementById("mirror");

    nameInput.onkeyup = function (e) {
      var value = nameInput.value;

      if (value.trim() === "") {
        mirror.innerText = "Live mirror will appear...";
      } else {
        mirror.innerText = "Hello, " + value + "!";
      }

      // Show last released key
      console.log("Released:", e.key);
    };
  </script>
</body>
</html>
```

### keydown vs keyup (simple)

| Event   | When              | Repeats while held? |
|---------|-------------------|---------------------|
| keydown | Key goes down     | Yes                 |
| keyup   | Key comes up      | No                  |

---

# 9. input

## Definition (2 lines)

The `input` event fires whenever the value of an input/textarea **changes** (typing, paste, delete, many UI edits).  
It is the best everyday choice for live search boxes and live previews.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>input Event Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #ecfeff; }
    input, textarea {
      width: 100%;
      max-width: 480px;
      padding: 12px;
      font-size: 16px;
      margin-bottom: 12px;
      display: block;
    }
    #out {
      background: white;
      padding: 14px;
      border-radius: 10px;
      border-left: 4px solid #06b6d4;
    }
  </style>
</head>
<body>
  <h1>input event</h1>
  <input id="email" type="email" placeholder="Email">
  <textarea id="bio" rows="4" placeholder="Short bio"></textarea>
  <div id="out">Waiting for input...</div>

  <script>
    var email = document.getElementById("email");
    var bio = document.getElementById("bio");
    var out = document.getElementById("out");

    function update() {
      out.innerHTML =
        "<strong>Email:</strong> " + (email.value || "(empty)") +
        "<br><strong>Bio length:</strong> " + bio.value.length +
        "<br><strong>Bio:</strong> " + (bio.value || "(empty)");
    }

    email.oninput = update;
    bio.oninput = update;
  </script>
</body>
</html>
```

---

# 10. change

## Definition (2 lines)

The `change` event fires when a value is committed — often when an input **loses focus** after editing, or when a select/checkbox/radio value is finalized.  
Unlike `input`, it does not fire on every keystroke for text fields.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>change Event Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fefce8; }
    label { display: block; margin: 10px 0 4px; font-weight: bold; }
    input, select { padding: 10px; font-size: 15px; min-width: 220px; }
    #log {
      margin-top: 18px;
      background: white;
      padding: 14px;
      border-radius: 10px;
      border: 2px solid #facc15;
    }
  </style>
</head>
<body>
  <h1>change event</h1>

  <label for="city">City (select)</label>
  <select id="city">
    <option value="">Choose...</option>
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="lahore">Lahore</option>
  </select>

  <label for="age">Age (text — change fires on blur)</label>
  <input id="age" type="number" placeholder="Your age">

  <label>
    <input id="agree" type="checkbox"> I agree
  </label>

  <div id="log">Make a change...</div>

  <script>
    var city = document.getElementById("city");
    var age = document.getElementById("age");
    var agree = document.getElementById("agree");
    var log = document.getElementById("log");

    city.onchange = function () {
      log.innerText = "City changed to: " + city.value;
    };

    age.onchange = function () {
      log.innerText = "Age committed: " + age.value;
    };

    agree.onchange = function () {
      log.innerText = "Agree checkbox: " + agree.checked;
    };
  </script>
</body>
</html>
```

### input vs change

| Event  | Text typing        | Select / checkbox     |
|--------|--------------------|------------------------|
| input  | Every key          | Often also works       |
| change | After blur/commit  | When value finalized   |

---

# 11. submit

## Definition (2 lines)

The `submit` event fires when a **form** is submitted (button click type=submit, or Enter in a field).  
Listen on the `<form>` element, not only on the button — that way all submit paths are covered.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>submit Event Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f0fdf4; }
    form {
      background: white;
      padding: 20px;
      border-radius: 12px;
      max-width: 400px;
    }
    label { display: block; margin-top: 10px; font-weight: bold; }
    input { width: 100%; padding: 10px; margin-top: 4px; box-sizing: border-box; }
    button { margin-top: 16px; padding: 10px 16px; cursor: pointer; }
    #msg { margin-top: 14px; color: #166534; font-weight: bold; }
  </style>
</head>
<body>
  <h1>submit event</h1>
  <form id="loginForm">
    <label>Username</label>
    <input id="user" type="text" required>

    <label>Password</label>
    <input id="pass" type="password" required>

    <button type="submit">Login</button>
  </form>
  <div id="msg"></div>

  <script>
    var form = document.getElementById("loginForm");
    var msg = document.getElementById("msg");

    form.onsubmit = function (e) {
      // Stop page reload (important!)
      e.preventDefault();

      var user = document.getElementById("user").value;
      var pass = document.getElementById("pass").value;

      msg.innerText = "Form submitted for user: " + user;
      console.log("Password length:", pass.length);
      // In real apps, send data to server here
    };
  </script>
</body>
</html>
```

---

# 12. preventDefault()

## Definition (2 lines)

`event.preventDefault()` tells the browser: **do not run the normal built-in action** for this event.  
Examples: stop a form from reloading the page, stop a link from navigating, stop a key’s default behavior.

### Why it matters

Without it, form submit often **refreshes** the page and your JS result disappears.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>preventDefault Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff1f2; }
    a { color: #e11d48; font-size: 18px; }
    #out {
      margin-top: 16px;
      padding: 12px;
      background: white;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>preventDefault()</h1>

  <p>
    <a id="link" href="https://example.com">
      This link will NOT leave the page
    </a>
  </p>

  <form id="f">
    <input type="text" placeholder="Type something">
    <button type="submit">Submit without reload</button>
  </form>

  <div id="out">Actions will log here...</div>

  <script>
    var out = document.getElementById("out");

    document.getElementById("link").onclick = function (e) {
      e.preventDefault(); // block navigation
      out.innerText = "Link click blocked with preventDefault()";
    };

    document.getElementById("f").onsubmit = function (e) {
      e.preventDefault(); // block page reload
      out.innerText = "Form submit blocked — page did not reload";
    };
  </script>
</body>
</html>
```

### Common uses

- Form validation before send  
- Custom link behavior  
- Disable right-click menu (`contextmenu` + preventDefault) — use carefully  

---

# 13. stopPropagation()

## Definition (2 lines)

`event.stopPropagation()` stops the event from traveling to **parent elements** (stops bubbling up).  
Use it when a click on a child should not also trigger the parent’s click handler.

### First understand bubbling (simple)

```
Click on child
  → child handler runs
  → then parent handler
  → then grandparent...
```

That upward travel is **bubbling**. Day 6 covers it deeper; today you only need `stopPropagation`.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>stopPropagation Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eef2ff; }
    #outer {
      background: #c7d2fe;
      padding: 30px;
      border-radius: 12px;
    }
    #inner {
      background: #818cf8;
      color: white;
      padding: 20px;
      border-radius: 10px;
      display: inline-block;
      cursor: pointer;
    }
    #log {
      margin-top: 16px;
      background: white;
      padding: 12px;
      border-radius: 8px;
      min-height: 60px;
      white-space: pre-line;
    }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>stopPropagation()</h1>
  <div id="outer">
    OUTER (parent)
    <div id="inner">INNER (child) — click me</div>
  </div>
  <button id="reset">Clear Log</button>
  <div id="log">Click inner or outer...</div>

  <script>
    var outer = document.getElementById("outer");
    var inner = document.getElementById("inner");
    var log = document.getElementById("log");

    function addLine(text) {
      log.innerText = log.innerText + "\n" + text;
    }

    outer.onclick = function () {
      addLine("OUTER clicked (bubbled or direct)");
      outer.style.outline = "3px solid #3730a3";
    };

    // Toggle this to see the difference
    var stopIt = true;

    inner.onclick = function (e) {
      addLine("INNER clicked");
      if (stopIt) {
        e.stopPropagation(); // parent will NOT receive this click
        addLine("→ stopPropagation() called — outer will not run");
      } else {
        addLine("→ bubbling allowed — outer will also run");
      }
    };

    document.getElementById("reset").onclick = function (e) {
      e.stopPropagation(); // if button were inside outer, still safe
      log.innerText = "Log cleared.";
      outer.style.outline = "none";
    };
  </script>
</body>
</html>
```

### preventDefault vs stopPropagation

| Method            | What it stops                          |
|-------------------|----------------------------------------|
| preventDefault    | Browser’s default action               |
| stopPropagation   | Event traveling to parents             |

They solve **different** problems. You can use both together when needed.

---

# 14. Mini Project — Interactive Mood Board

## Goal

Buttons change page mood (color + message).  
Track mouse position.  
Type a note with live preview.  
Form “saves” mood with preventDefault.

### Complete project (`day3-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 3 Mini Project — Mood Board</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      min-height: 100vh;
      background: #f1f5f9;
      transition: background 0.35s;
    }
    .wrap { max-width: 720px; margin: 0 auto; padding: 28px 16px; }
    .card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      margin-bottom: 16px;
    }
    h1 { margin-top: 0; }
    .moods { display: flex; flex-wrap: wrap; gap: 8px; }
    .moods button {
      border: none;
      padding: 12px 16px;
      border-radius: 999px;
      cursor: pointer;
      color: white;
      font-size: 14px;
    }
    #happy { background: #eab308; color: #422006; }
    #calm { background: #0ea5e9; }
    #focus { background: #6366f1; }
    #energy { background: #ef4444; }
    #stage {
      height: 140px;
      border-radius: 12px;
      background: #0f172a;
      color: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      user-select: none;
    }
    #coords { margin-top: 8px; color: #64748b; font-size: 14px; }
    input, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 15px;
      margin-top: 8px;
    }
    #preview {
      margin-top: 10px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 10px;
      min-height: 48px;
    }
    button.submit {
      margin-top: 12px;
      background: #16a34a;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
    }
    #saveMsg { margin-top: 10px; font-weight: bold; color: #166534; }
    .hint { color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Interactive Mood Board</h1>
      <p class="hint">Day 3 — mouse, keyboard, form events</p>
      <div class="moods">
        <button id="happy">Happy</button>
        <button id="calm">Calm</button>
        <button id="focus">Focus</button>
        <button id="energy">Energy</button>
      </div>
      <p id="moodText">Current mood: Neutral</p>
    </div>

    <div class="card">
      <div id="stage">Move mouse here · Double-click to pulse</div>
      <div id="coords">X: 0 | Y: 0</div>
    </div>

    <div class="card">
      <form id="noteForm">
        <label for="title"><strong>Note title</strong></label>
        <input id="title" type="text" placeholder="Title..." autocomplete="off">

        <label for="note"><strong>Your note</strong></label>
        <textarea id="note" rows="3" placeholder="Type a note..."></textarea>

        <div id="preview">Preview...</div>
        <button class="submit" type="submit">Save Mood Note</button>
        <div id="saveMsg"></div>
      </form>
    </div>
  </div>

  <script>
    // ===== SELECT =====
    var body = document.body;
    var moodText = document.getElementById("moodText");
    var stage = document.getElementById("stage");
    var coords = document.getElementById("coords");
    var title = document.getElementById("title");
    var note = document.getElementById("note");
    var preview = document.getElementById("preview");
    var form = document.getElementById("noteForm");
    var saveMsg = document.getElementById("saveMsg");

    var currentMood = "Neutral";

    // ===== MOOD BUTTONS (onclick) =====
    function setMood(name, bg) {
      currentMood = name;
      body.style.background = bg;
      moodText.innerText = "Current mood: " + name;
    }

    document.getElementById("happy").onclick = function () {
      setMood("Happy", "#fef9c3");
    };
    document.getElementById("calm").onclick = function () {
      setMood("Calm", "#e0f2fe");
    };
    document.getElementById("focus").onclick = function () {
      setMood("Focus", "#e0e7ff");
    };
    document.getElementById("energy").onclick = function () {
      setMood("Energy", "#fee2e2");
    };

    // ===== MOUSE MOVE / LEAVE =====
    stage.onmousemove = function (e) {
      coords.innerText = "X: " + e.clientX + " | Y: " + e.clientY;
      stage.innerText = "Tracking mood energy...";
    };
    stage.onmouseleave = function () {
      stage.innerText = "Move mouse here · Double-click to pulse";
    };
    stage.onmouseover = function () {
      stage.style.outline = "3px solid #38bdf8";
    };
    stage.onmouseleave = function () {
      stage.style.outline = "none";
      stage.innerText = "Move mouse here · Double-click to pulse";
    };

    // ===== DOUBLE CLICK =====
    stage.ondblclick = function () {
      stage.innerText = "PULSE! Mood: " + currentMood;
      stage.style.transform = "scale(1.03)";
      setTimeout(function () {
        stage.style.transform = "scale(1)";
      }, 150);
    };

    // ===== LIVE INPUT =====
    function updatePreview() {
      var t = title.value.trim();
      var n = note.value.trim();
      preview.textContent =
        (t || "(no title)") + " — " + (n || "(no note)") +
        " | Mood: " + currentMood;
    }
    title.oninput = updatePreview;
    note.oninput = updatePreview;

    // ===== KEY EVENTS =====
    note.onkeydown = function (e) {
      if (e.key === "Escape") {
        note.value = "";
        updatePreview();
      }
    };
    title.onkeyup = function (e) {
      if (e.key === "Enter") {
        note.focus();
      }
    };

    // ===== SUBMIT + preventDefault =====
    form.onsubmit = function (e) {
      e.preventDefault();

      if (title.value.trim() === "" && note.value.trim() === "") {
        saveMsg.style.color = "#b91c1c";
        saveMsg.innerText = "Write something before saving.";
        return;
      }

      saveMsg.style.color = "#166534";
      saveMsg.innerText =
        "Saved! [" + currentMood + "] " +
        title.value + " / " + note.value;

      // Optional: clear after save
      // title.value = "";
      // note.value = "";
      // updatePreview();
    };

    // Demo stopPropagation on stage clicks vs body (simple)
    stage.onclick = function (e) {
      e.stopPropagation();
      console.log("Stage click stopped from bubbling further if parents listened");
    };

    updatePreview();
  </script>
</body>
</html>
```

---

# 15. Day 3 Quick Summary

| Event / Method     | Simple meaning                          |
|--------------------|-----------------------------------------|
| onclick            | Single click                            |
| ondblclick         | Double click                            |
| mouseover          | Pointer enters                          |
| mouseleave         | Pointer leaves                          |
| mousemove          | Pointer moves (often)                   |
| keydown            | Key pressed down                        |
| keyup              | Key released                            |
| input              | Value changing live                     |
| change             | Value committed                         |
| submit             | Form submitted                          |
| preventDefault     | Block browser default action            |
| stopPropagation    | Stop event from going to parents        |

---

# 16. Interview Questions (Day 3)

1. **What is an event?**  
   A signal that something happened (click, key, submit...).

2. **onclick property vs addEventListener?**  
   Property holds one handler; addEventListener can register multiple.

3. **input vs change?**  
   input is live while editing; change is after commit/blur for text.

4. **Why use preventDefault on submit?**  
   To stop page reload and handle data with JavaScript.

5. **What is event bubbling (basic)?**  
   Event goes from target up through ancestors.

6. **What does stopPropagation do?**  
   Stops the event from reaching parent handlers.

7. **keydown vs keyup?**  
   Press vs release; keydown can repeat while held.

8. **What is event.target?**  
   The element that actually originated the event.

---

# 17. Practice Questions

1. Button click changes body background randomly.  
2. Double-click an image placeholder to toggle a “liked” message.  
3. Show live character count with `input`.  
4. On `change` of a select, show the chosen value in an `h2`.  
5. Form validates empty name and uses `preventDefault`.  
6. Nested divs: child click uses `stopPropagation` so parent does not alert.

---

# 18. Homework

1. Rebuild Mood Board from memory.  
2. Add a `keyup` shortcut: press `h` anywhere to set Happy mood (use `document.onkeyup`).  
3. Write 2-line definitions for all events in today’s list.  
4. Explain preventDefault vs stopPropagation to a classmate.  
5. Make a mini calculator UI: buttons with onclick add numbers into an input.

---

# 19. Self-Check

- [ ] I can attach click and double-click handlers  
- [ ] I understand mouseover / mouseleave / mousemove  
- [ ] I can use keydown and keyup  
- [ ] I know input vs change vs submit  
- [ ] I can use preventDefault and stopPropagation  
- [ ] Mini project runs correctly  

---

