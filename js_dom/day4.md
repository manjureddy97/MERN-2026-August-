# Day 4 — JavaScript DOM Masterclass
## Forms · Validation · Radio · Checkbox · Select · Textarea · Dataset

---

## Learning Goals

1. Work with form fields in the DOM  
2. Simple validation (required, email shape, length, match)  
3. Radio buttons and checkboxes  
4. Select dropdowns and textareas  
5. `data-*` attributes and `dataset`  
6. Custom attributes (get/set)  
7. Mini Project: **Registration Form with Live Validation**

---

# 1. Forms in the DOM (Big Picture)

## Definition (2 lines)

A **form** is an HTML container (`<form>`) that groups inputs so users can send information.  
With JavaScript, we read each field’s value, check if it is valid, then decide to accept or show errors — often with `preventDefault` on submit.

### Common fields

| Control    | HTML                         | JS read value        |
|------------|------------------------------|----------------------|
| Text       | `<input type="text">`        | `.value`             |
| Email      | `<input type="email">`       | `.value`             |
| Password   | `<input type="password">`    | `.value`             |
| Number     | `<input type="number">`      | `.value`             |
| Textarea   | `<textarea>`                 | `.value`             |
| Select     | `<select>`                   | `.value`             |
| Checkbox   | `<input type="checkbox">`    | `.checked`           |
| Radio      | `<input type="radio">`       | `.checked` / group   |

### Complete starter form page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Basics</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f8fafc; }
    form {
      max-width: 420px;
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    }
    label { display: block; margin-top: 12px; font-weight: bold; }
    input, textarea, select {
      width: 100%;
      padding: 10px;
      margin-top: 4px;
      box-sizing: border-box;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
    }
    button { margin-top: 16px; padding: 12px 16px; cursor: pointer; }
    #out { margin-top: 16px; white-space: pre-wrap; }
  </style>
</head>
<body>
  <h1>Form Basics</h1>
  <form id="basicForm">
    <label for="fullname">Full name</label>
    <input id="fullname" type="text" placeholder="Your name">

    <label for="email">Email</label>
    <input id="email" type="email" placeholder="you@email.com">

    <button type="submit">Show Values</button>
  </form>
  <div id="out"></div>

  <script>
    var form = document.getElementById("basicForm");
    var out = document.getElementById("out");

    form.onsubmit = function (e) {
      e.preventDefault();

      var name = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;

      out.innerText =
        "Name: " + name + "\n" +
        "Email: " + email;
    };
  </script>
</body>
</html>
```

---

# 2. Validation

## Definition (2 lines)

**Validation** means checking user input before accepting it — empty checks, format checks, length limits, matching passwords, and so on.  
Good validation gives **clear error messages** and stops bad data early (on submit and sometimes while typing).

### Two layers (keep it simple)

1. **HTML validation** — `required`, `type="email"`, `minlength`, `pattern`  
2. **JavaScript validation** — custom rules and custom messages  

HTML helps. JavaScript gives full control.

### Simple rules you will use today

```js
// Not empty
if (value.trim() === "") { /* error */ }

// Minimum length
if (value.length < 6) { /* error */ }

// Basic email shape (simple beginner check)
if (value.indexOf("@") === -1) { /* error */ }

// Passwords match
if (pass1 !== pass2) { /* error */ }
```

### Complete validation example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Validation Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fff7ed; }
    form {
      max-width: 440px;
      background: white;
      padding: 20px;
      border-radius: 12px;
    }
    label { display: block; margin-top: 12px; font-weight: bold; }
    input {
      width: 100%;
      padding: 10px;
      margin-top: 4px;
      box-sizing: border-box;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
    }
    input.bad { border-color: #ef4444; background: #fef2f2; }
    input.good { border-color: #22c55e; background: #f0fdf4; }
    .error { color: #dc2626; font-size: 13px; margin-top: 4px; min-height: 18px; }
    button { margin-top: 16px; padding: 12px 16px; cursor: pointer; }
    #success { margin-top: 12px; color: #15803d; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Simple Validation</h1>
  <form id="vForm" novalidate>
    <!-- novalidate = we handle checks in JS -->

    <label for="username">Username (min 3)</label>
    <input id="username" type="text">
    <div class="error" id="userErr"></div>

    <label for="mail">Email</label>
    <input id="mail" type="email">
    <div class="error" id="mailErr"></div>

    <label for="pass">Password (min 6)</label>
    <input id="pass" type="password">
    <div class="error" id="passErr"></div>

    <button type="submit">Validate</button>
    <div id="success"></div>
  </form>

  <script>
    var form = document.getElementById("vForm");

    function setState(input, errorEl, message) {
      if (message) {
        input.className = "bad";
        errorEl.innerText = message;
        return false;
      } else {
        input.className = "good";
        errorEl.innerText = "";
        return true;
      }
    }

    function validateUsername() {
      var el = document.getElementById("username");
      var err = document.getElementById("userErr");
      var v = el.value.trim();

      if (v === "") return setState(el, err, "Username is required");
      if (v.length < 3) return setState(el, err, "At least 3 characters");
      return setState(el, err, "");
    }

    function validateEmail() {
      var el = document.getElementById("mail");
      var err = document.getElementById("mailErr");
      var v = el.value.trim();

      if (v === "") return setState(el, err, "Email is required");
      // Beginner-friendly check (not perfect, but clear)
      if (v.indexOf("@") === -1 || v.indexOf(".") === -1) {
        return setState(el, err, "Enter a valid email like name@mail.com");
      }
      return setState(el, err, "");
    }

    function validatePass() {
      var el = document.getElementById("pass");
      var err = document.getElementById("passErr");
      var v = el.value;

      if (v === "") return setState(el, err, "Password is required");
      if (v.length < 6) return setState(el, err, "Minimum 6 characters");
      return setState(el, err, "");
    }

    // Live validation while typing
    document.getElementById("username").oninput = validateUsername;
    document.getElementById("mail").oninput = validateEmail;
    document.getElementById("pass").oninput = validatePass;

    form.onsubmit = function (e) {
      e.preventDefault();
      document.getElementById("success").innerText = "";

      var ok1 = validateUsername();
      var ok2 = validateEmail();
      var ok3 = validatePass();

      if (ok1 && ok2 && ok3) {
        document.getElementById("success").innerText = "All good! Form is valid.";
      }
    };
  </script>
</body>
</html>
```

### Validation tips for students

- Always `trim()` text fields before empty checks.  
- Show error **next to the field**.  
- Validate again on submit (users can bypass UI).  
- Never trust only frontend validation for real security (server must check too).

---

# 3. Radio Buttons

## Definition (2 lines)

**Radio buttons** let the user pick **exactly one** option from a group that shares the same `name`.  
In JavaScript, you loop the group and find which one has `.checked === true`.

### HTML idea

```html
<input type="radio" name="size" value="s"> S
<input type="radio" name="size" value="m"> M
<input type="radio" name="size" value="l"> L
```

Same `name` = one group. Different `value` = different choice.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Radio Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #eef2ff; }
    .box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      max-width: 400px;
    }
    label { display: block; margin: 8px 0; cursor: pointer; }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
    #result { margin-top: 12px; font-weight: bold; color: #3730a3; }
  </style>
</head>
<body>
  <h1>Radio Buttons</h1>
  <div class="box">
    <p>Choose your course level:</p>

    <label><input type="radio" name="level" value="beginner"> Beginner</label>
    <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
    <label><input type="radio" name="level" value="advanced"> Advanced</label>

    <button id="read">Read Selection</button>
    <div id="result">No selection yet</div>
  </div>

  <script>
    function getSelectedRadio(name) {
      var radios = document.getElementsByName(name);
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          return radios[i].value;
        }
      }
      return null; // nothing selected
    }

    document.getElementById("read").onclick = function () {
      var level = getSelectedRadio("level");
      var result = document.getElementById("result");

      if (level === null) {
        result.innerText = "Please select a level";
      } else {
        result.innerText = "You selected: " + level;
      }
    };

    // Live update with change event
    var radios = document.getElementsByName("level");
    for (var i = 0; i < radios.length; i++) {
      radios[i].onchange = function () {
        document.getElementById("result").innerText =
          "Live: " + getSelectedRadio("level");
      };
    }
  </script>
</body>
</html>
```

### Interview-friendly one-liner

Radios = **one choice**; checkboxes = **many choices**.

---

# 4. Checkbox

## Definition (2 lines)

A **checkbox** is an on/off control; several checkboxes can be checked at the same time.  
In JavaScript, read the boolean `.checked`, or collect all checked values into an array.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Checkbox Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #ecfdf5; }
    .box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      max-width: 420px;
    }
    label { display: block; margin: 8px 0; cursor: pointer; }
    button { margin-top: 12px; padding: 10px 14px; cursor: pointer; }
    #out { margin-top: 12px; }
  </style>
</head>
<body>
  <h1>Checkboxes</h1>
  <div class="box">
    <p>Select skills you know:</p>

    <label><input class="skill" type="checkbox" value="html"> HTML</label>
    <label><input class="skill" type="checkbox" value="css"> CSS</label>
    <label><input class="skill" type="checkbox" value="js"> JavaScript</label>
    <label><input class="skill" type="checkbox" value="dom"> DOM</label>

    <label style="margin-top:16px;">
      <input id="terms" type="checkbox"> I accept the terms
    </label>

    <button id="go">Submit Choices</button>
    <div id="out"></div>
  </div>

  <script>
    document.getElementById("go").onclick = function () {
      var skills = document.querySelectorAll(".skill");
      var selected = [];

      for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
          selected.push(skills[i].value);
        }
      }

      var terms = document.getElementById("terms").checked;
      var out = document.getElementById("out");

      if (!terms) {
        out.innerText = "You must accept the terms.";
        out.style.color = "#dc2626";
        return;
      }

      if (selected.length === 0) {
        out.innerText = "Pick at least one skill.";
        out.style.color = "#dc2626";
        return;
      }

      out.style.color = "#047857";
      out.innerText = "Skills: " + selected.join(", ");
    };
  </script>
</body>
</html>
```

### Checkbox facts

```js
checkbox.checked        // true or false
checkbox.checked = true // check it with JS
checkbox.value          // the value string if checked matters
```

---

# 5. Select (Dropdown)

## Definition (2 lines)

A **select** element shows a dropdown list of `<option>` choices and stores the chosen option’s `value`.  
Read it with `selectElement.value`, or use `selectedIndex` to know which option position is active.

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Select Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fdf2f8; }
    select {
      padding: 10px;
      font-size: 16px;
      min-width: 220px;
      border-radius: 8px;
    }
    #info {
      margin-top: 16px;
      background: white;
      padding: 14px;
      border-radius: 10px;
      max-width: 420px;
    }
  </style>
</head>
<body>
  <h1>Select Dropdown</h1>

  <label for="city">Choose city:</label><br>
  <select id="city">
    <option value="">-- Select --</option>
    <option value="isb">Islamabad</option>
    <option value="lhr">Lahore</option>
    <option value="khi">Karachi</option>
    <option value="del">Delhi</option>
  </select>

  <div id="info">Waiting...</div>

  <script>
    var city = document.getElementById("city");
    var info = document.getElementById("info");

    city.onchange = function () {
      var value = city.value;
      var index = city.selectedIndex;
      var text = city.options[index].text;

      if (value === "") {
        info.innerText = "Please choose a city.";
        return;
      }

      info.innerHTML =
        "<strong>Value:</strong> " + value + "<br>" +
        "<strong>Label:</strong> " + text + "<br>" +
        "<strong>Index:</strong> " + index;
    };

    // Set a value with JS
    // city.value = "lhr";
  </script>
</body>
</html>
```

### Multi-select (optional knowledge)

```html
<select id="langs" multiple>
  <option value="js">JS</option>
  <option value="py">Python</option>
</select>
```

Then loop options and collect those with `.selected === true`.

---

# 6. Textarea

## Definition (2 lines)

A **textarea** is a multi-line text box for longer content like comments, bios, or messages.  
Like inputs, you read and write it with `.value` (not `innerText` for user typing value).

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Textarea Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f0f9ff; }
    textarea {
      width: 100%;
      max-width: 480px;
      height: 120px;
      padding: 12px;
      font-size: 15px;
      border: 2px solid #bae6fd;
      border-radius: 10px;
      box-sizing: border-box;
    }
    #meta { margin-top: 8px; color: #0369a1; }
    #preview {
      margin-top: 14px;
      max-width: 480px;
      background: white;
      padding: 14px;
      border-radius: 10px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <h1>Textarea</h1>
  <textarea id="msg" placeholder="Write your feedback..." maxlength="200"></textarea>
  <div id="meta">0 / 200 characters</div>
  <div id="preview">Preview...</div>

  <script>
    var msg = document.getElementById("msg");
    var meta = document.getElementById("meta");
    var preview = document.getElementById("preview");
    var max = 200;

    msg.oninput = function () {
      var text = msg.value;
      var len = text.length;

      meta.innerText = len + " / " + max + " characters";
      preview.textContent = text || "Preview...";

      if (len > 180) {
        meta.style.color = "#dc2626";
      } else {
        meta.style.color = "#0369a1";
      }
    };
  </script>
</body>
</html>
```

---

# 7. Dataset and data-* Attributes

## Definition (2 lines)

**`data-*` attributes** are custom HTML attributes you invent (like `data-id`, `data-price`) to store extra info on elements.  
JavaScript reads them easily through the `element.dataset` object (`data-user-id` becomes `dataset.userId`).

### Why useful?

- Store product id on a button  
- Store category on a card  
- Avoid hidden extra DOM when a small string is enough  

### Naming rules (simple)

HTML:

```html
<div data-id="10" data-user-name="Asif" data-price="99"></div>
```

JavaScript:

```js
el.dataset.id        // "10"
el.dataset.userName  // "Asif"   (kebab-case → camelCase)
el.dataset.price     // "99"
```

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>dataset Demo</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f5f3ff; }
    .product {
      background: white;
      padding: 16px;
      margin: 10px 0;
      border-radius: 10px;
      max-width: 360px;
      border: 2px solid #ddd6fe;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button { padding: 8px 12px; cursor: pointer; }
    #cart {
      margin-top: 16px;
      background: #0f172a;
      color: #e2e8f0;
      padding: 14px;
      border-radius: 10px;
      max-width: 360px;
      min-height: 40px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <h1>data-* and dataset</h1>

  <div class="product">
    <span>Keyboard</span>
    <button
      class="buy"
      data-id="101"
      data-name="Keyboard"
      data-price="25"
    >Buy</button>
  </div>

  <div class="product">
    <span>Mouse</span>
    <button
      class="buy"
      data-id="102"
      data-name="Mouse"
      data-price="15"
    >Buy</button>
  </div>

  <div class="product">
    <span>USB Cable</span>
    <button
      class="buy"
      data-id="103"
      data-name="USB Cable"
      data-price="5"
    >Buy</button>
  </div>

  <div id="cart">Cart is empty</div>

  <script>
    var cart = [];
    var cartEl = document.getElementById("cart");
    var buttons = document.querySelectorAll(".buy");

    function renderCart() {
      if (cart.length === 0) {
        cartEl.innerText = "Cart is empty";
        return;
      }

      var total = 0;
      var lines = cart.map(function (item, i) {
        total += Number(item.price);
        return (i + 1) + ") " + item.name + " - $" + item.price + " (id " + item.id + ")";
      });

      cartEl.innerText = lines.join("\n") + "\n\nTotal: $" + total;
    }

    buttons.forEach(function (btn) {
      btn.onclick = function () {
        // Read custom data attributes
        var item = {
          id: btn.dataset.id,
          name: btn.dataset.name,
          price: btn.dataset.price
        };
        cart.push(item);
        renderCart();
      };
    });

    // Write dataset from JS
    // btn.dataset.price = "20";
  </script>
</body>
</html>
```

### dataset read / write

```js
el.dataset.role = "admin";     // creates data-role="admin"
delete el.dataset.role;        // removes it
```

---

# 8. Custom Attributes

## Definition (2 lines)

**Custom attributes** are extra attributes on HTML tags (including `data-*`, or others you set yourself) used to hold app-specific information.  
Prefer `data-*` for custom data; use `getAttribute` / `setAttribute` when you need full control of any attribute name.

### Methods

```js
el.getAttribute("data-id");
el.setAttribute("data-id", "55");
el.hasAttribute("data-id");
el.removeAttribute("data-id");
```

### data-* vs getAttribute

```js
// Same info, two styles
el.dataset.id;
el.getAttribute("data-id");
```

`dataset` is nicer for `data-*`.  
`getAttribute` works for **any** attribute (`href`, `class`, `aria-label`, custom...).

### Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom Attributes</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #fefce8; }
    #card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      max-width: 400px;
      border: 2px solid #facc15;
    }
    button { margin: 8px 8px 0 0; padding: 10px 12px; cursor: pointer; }
    #log { margin-top: 14px; white-space: pre-wrap; }
  </style>
</head>
<body>
  <h1>Custom Attributes</h1>
  <div id="card" data-status="draft" data-owner="teacher" title="Lesson card">
    Lesson Card
  </div>
  <button id="read">Read Attributes</button>
  <button id="write">Set status=published</button>
  <button id="remove">Remove owner</button>
  <div id="log"></div>

  <script>
    var card = document.getElementById("card");
    var log = document.getElementById("log");

    document.getElementById("read").onclick = function () {
      log.innerText =
        "data-status (dataset): " + card.dataset.status + "\n" +
        "data-owner (getAttribute): " + card.getAttribute("data-owner") + "\n" +
        "title: " + card.getAttribute("title") + "\n" +
        "has data-owner? " + card.hasAttribute("data-owner");
    };

    document.getElementById("write").onclick = function () {
      card.setAttribute("data-status", "published");
      // same as: card.dataset.status = "published";
      card.setAttribute("title", "Published lesson");
      log.innerText = "Updated status and title.";
    };

    document.getElementById("remove").onclick = function () {
      card.removeAttribute("data-owner");
      log.innerText = "data-owner removed.";
    };
  </script>
</body>
</html>
```

---

# 9. Mini Project — Registration Form with Live Validation

## Goal

Build a registration form with:

- Text, email, password, confirm password  
- Gender radios  
- Skills checkboxes  
- Country select  
- Bio textarea  
- Terms checkbox  
- `data-*` on submit button  
- Live + submit validation  

### Complete project (`day4-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 4 Mini Project — Registration Form</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #14b8a6, #6366f1);
      min-height: 100vh;
      padding: 28px 14px;
    }
    .app {
      max-width: 560px;
      margin: 0 auto;
      background: #fff;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 18px 40px rgba(0,0,0,0.15);
    }
    h1 { margin: 0 0 6px; }
    .sub { color: #64748b; font-size: 14px; margin-bottom: 18px; }
    label.field {
      display: block;
      margin-top: 12px;
      font-weight: bold;
      font-size: 14px;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
      width: 100%;
      padding: 11px;
      margin-top: 5px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 14px;
    }
    input.bad, select.bad, textarea.bad { border-color: #ef4444; background: #fef2f2; }
    input.good, select.good, textarea.good { border-color: #22c55e; background: #f0fdf4; }
    .error { color: #dc2626; font-size: 12px; min-height: 16px; margin-top: 3px; }
    .row { margin-top: 10px; }
    .row label { font-weight: normal; margin-right: 12px; cursor: pointer; }
    button[type="submit"] {
      width: 100%;
      margin-top: 18px;
      padding: 14px;
      border: none;
      border-radius: 10px;
      background: #4f46e5;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    button[type="submit"]:hover { background: #4338ca; }
    #summary {
      margin-top: 16px;
      background: #0f172a;
      color: #e2e8f0;
      padding: 14px;
      border-radius: 10px;
      white-space: pre-wrap;
      display: none;
    }
  </style>
</head>
<body>
  <div class="app">
    <h1>Create Account</h1>
    <p class="sub">Day 4 Mini Project — forms, validation, dataset</p>

    <form id="regForm" novalidate>
      <label class="field" for="fullName">Full name</label>
      <input id="fullName" type="text" autocomplete="name">
      <div class="error" id="errName"></div>

      <label class="field" for="email">Email</label>
      <input id="email" type="email" autocomplete="email">
      <div class="error" id="errEmail"></div>

      <label class="field" for="password">Password</label>
      <input id="password" type="password" autocomplete="new-password">
      <div class="error" id="errPass"></div>

      <label class="field" for="confirm">Confirm password</label>
      <input id="confirm" type="password" autocomplete="new-password">
      <div class="error" id="errConfirm"></div>

      <div class="field" style="margin-top:12px;">Gender</div>
      <div class="row">
        <label><input type="radio" name="gender" value="female"> Female</label>
        <label><input type="radio" name="gender" value="male"> Male</label>
        <label><input type="radio" name="gender" value="other"> Other</label>
      </div>
      <div class="error" id="errGender"></div>

      <div class="field" style="margin-top:12px;">Skills</div>
      <div class="row">
        <label><input class="skill" type="checkbox" value="html"> HTML</label>
        <label><input class="skill" type="checkbox" value="css"> CSS</label>
        <label><input class="skill" type="checkbox" value="js"> JS</label>
      </div>
      <div class="error" id="errSkills"></div>

      <label class="field" for="country">Country</label>
      <select id="country">
        <option value="">Select country</option>
        <option value="pk">Pakistan</option>
        <option value="in">India</option>
        <option value="bd">Bangladesh</option>
        <option value="ae">UAE</option>
      </select>
      <div class="error" id="errCountry"></div>

      <label class="field" for="bio">Short bio</label>
      <textarea id="bio" maxlength="150" placeholder="Tell us about you..."></textarea>
      <div class="error" id="errBio"></div>
      <div id="bioCount" style="font-size:12px;color:#64748b;">0 / 150</div>

      <div class="row" style="margin-top:14px;">
        <label><input id="terms" type="checkbox"> I agree to Terms</label>
      </div>
      <div class="error" id="errTerms"></div>

      <button
        type="submit"
        id="submitBtn"
        data-form="registration"
        data-version="1.0"
      >Register</button>
    </form>

    <div id="summary"></div>
  </div>

  <script>
    var form = document.getElementById("regForm");
    var summary = document.getElementById("summary");

    function mark(el, errorEl, msg) {
      if (!el) {
        errorEl.innerText = msg || "";
        return !msg;
      }
      if (msg) {
        el.classList.remove("good");
        el.classList.add("bad");
        errorEl.innerText = msg;
        return false;
      }
      el.classList.remove("bad");
      el.classList.add("good");
      errorEl.innerText = "";
      return true;
    }

    function getGender() {
      var list = document.getElementsByName("gender");
      for (var i = 0; i < list.length; i++) {
        if (list[i].checked) return list[i].value;
      }
      return "";
    }

    function getSkills() {
      var boxes = document.querySelectorAll(".skill");
      var arr = [];
      boxes.forEach(function (b) {
        if (b.checked) arr.push(b.value);
      });
      return arr;
    }

    function validateName() {
      var el = document.getElementById("fullName");
      var v = el.value.trim();
      if (v === "") return mark(el, errName, "Name is required");
      if (v.length < 3) return mark(el, errName, "At least 3 characters");
      return mark(el, errName, "");
    }

    function validateEmail() {
      var el = document.getElementById("email");
      var v = el.value.trim();
      if (v === "") return mark(el, errEmail, "Email is required");
      if (v.indexOf("@") === -1 || v.indexOf(".") === -1) {
        return mark(el, errEmail, "Enter a valid email");
      }
      return mark(el, errEmail, "");
    }

    function validatePass() {
      var el = document.getElementById("password");
      var v = el.value;
      if (v === "") return mark(el, errPass, "Password is required");
      if (v.length < 6) return mark(el, errPass, "Minimum 6 characters");
      return mark(el, errPass, "");
    }

    function validateConfirm() {
      var el = document.getElementById("confirm");
      var p = document.getElementById("password").value;
      var v = el.value;
      if (v === "") return mark(el, errConfirm, "Confirm your password");
      if (v !== p) return mark(el, errConfirm, "Passwords do not match");
      return mark(el, errConfirm, "");
    }

    function validateGender() {
      if (getGender() === "") {
        errGender.innerText = "Select gender";
        return false;
      }
      errGender.innerText = "";
      return true;
    }

    function validateSkills() {
      if (getSkills().length === 0) {
        errSkills.innerText = "Pick at least one skill";
        return false;
      }
      errSkills.innerText = "";
      return true;
    }

    function validateCountry() {
      var el = document.getElementById("country");
      if (el.value === "") return mark(el, errCountry, "Select a country");
      return mark(el, errCountry, "");
    }

    function validateBio() {
      var el = document.getElementById("bio");
      var v = el.value.trim();
      document.getElementById("bioCount").innerText = el.value.length + " / 150";
      if (v === "") return mark(el, errBio, "Bio is required");
      if (v.length < 10) return mark(el, errBio, "Write at least 10 characters");
      return mark(el, errBio, "");
    }

    function validateTerms() {
      if (!document.getElementById("terms").checked) {
        errTerms.innerText = "You must agree to Terms";
        return false;
      }
      errTerms.innerText = "";
      return true;
    }

    // Error element shortcuts
    var errName = document.getElementById("errName");
    var errEmail = document.getElementById("errEmail");
    var errPass = document.getElementById("errPass");
    var errConfirm = document.getElementById("errConfirm");
    var errGender = document.getElementById("errGender");
    var errSkills = document.getElementById("errSkills");
    var errCountry = document.getElementById("errCountry");
    var errBio = document.getElementById("errBio");
    var errTerms = document.getElementById("errTerms");

    // Live listeners
    document.getElementById("fullName").oninput = validateName;
    document.getElementById("email").oninput = validateEmail;
    document.getElementById("password").oninput = function () {
      validatePass();
      if (document.getElementById("confirm").value) validateConfirm();
    };
    document.getElementById("confirm").oninput = validateConfirm;
    document.getElementById("country").onchange = validateCountry;
    document.getElementById("bio").oninput = validateBio;
    document.getElementById("terms").onchange = validateTerms;

    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
      genderRadios[i].onchange = validateGender;
    }
    document.querySelectorAll(".skill").forEach(function (c) {
      c.onchange = validateSkills;
    });

    form.onsubmit = function (e) {
      e.preventDefault();

      var ok =
        validateName() &
        validateEmail() &
        validatePass() &
        validateConfirm() &
        validateGender() &
        validateSkills() &
        validateCountry() &
        validateBio() &
        validateTerms();

      // & used so all validators still run; convert to boolean
      if (!ok) {
        summary.style.display = "none";
        return;
      }

      var btn = document.getElementById("submitBtn");
      var countryEl = document.getElementById("country");
      var countryText = countryEl.options[countryEl.selectedIndex].text;

      summary.style.display = "block";
      summary.innerText =
        "Registration OK\n" +
        "Form: " + btn.dataset.form + " v" + btn.dataset.version + "\n" +
        "Name: " + document.getElementById("fullName").value.trim() + "\n" +
        "Email: " + document.getElementById("email").value.trim() + "\n" +
        "Gender: " + getGender() + "\n" +
        "Skills: " + getSkills().join(", ") + "\n" +
        "Country: " + countryText + "\n" +
        "Bio: " + document.getElementById("bio").value.trim();
    };
  </script>
</body>
</html>
```

---

# 10. Day 4 Quick Summary

| Topic        | Remember                                      |
|--------------|-----------------------------------------------|
| Form values  | Mostly `.value`                               |
| Checkbox/Radio | `.checked` / shared `name` for radios       |
| Validation   | Check → message → block submit if invalid     |
| Select       | `.value`, `.selectedIndex`, option text       |
| Textarea     | Multi-line `.value` + length checks           |
| data-*       | Custom data in HTML                           |
| dataset      | Easy JS access (`data-user-id` → `userId`)    |
| getAttribute | Read any attribute by name                    |

---

# 11. Interview Questions (Day 4)

1. **How do you get a text input value?**  
   `document.getElementById("x").value`

2. **Checkbox vs radio?**  
   Checkbox: many on/off; radio group: one choice.

3. **How do you know which radio is selected?**  
   Loop `getElementsByName("group")` and find `.checked`.

4. **What is validation?**  
   Checking input before accepting it.

5. **Why use novalidate on form sometimes?**  
   To turn off browser default popups and use custom JS messages.

6. **What is dataset?**  
   JS API for reading/writing `data-*` attributes.

7. **data-user-id maps to?**  
   `element.dataset.userId`

8. **change vs input on forms?**  
   input is live; change is after commit for many fields.

---

# 12. Practice Questions

1. Validate phone number length == 11 (simple digits check).  
2. Build a pizza order form: size radios + toppings checkboxes + select crust.  
3. Show remaining characters for a 280-char textarea.  
4. Product buttons with `data-price`; click adds price to total.  
5. Disable submit button until terms checkbox is checked.

---

# 13. Homework

1. Recreate registration form from scratch.  
2. Add “Show password” checkbox that toggles `type` between `password` and `text`.  
3. Write 2-line definitions for: validation, radio, checkbox, dataset.  
4. Use `setAttribute` to mark invalid fields with `aria-invalid="true"`.  
5. Save valid form summary into a JS object and `console.log` it.

---

# 14. Self-Check

- [ ] I can read all major form controls  
- [ ] I can write basic validation with messages  
- [ ] I understand radio groups and checkboxes  
- [ ] I can use select and textarea  
- [ ] I can use data-* and dataset  
- [ ] Mini project works end-to-end  

---
