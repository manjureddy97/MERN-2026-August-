# Day 5: Multimedia and Advanced HTML

## Audio - `<audio>` Tag

### What is the audio tag?
Plays audio files on your webpage.

### Why use it?
- Music player
- Podcast player
- Sound effects
- Background music

### Syntax:
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser doesn't support audio.
</audio>
```

### Key Attributes:
- `controls` = Show play/pause buttons
- `autoplay` = Start playing automatically
- `loop` = Repeat after finishing
- `muted` = Start muted
- `src` = Audio file location

### Supported Formats:
- MP3 (most common)
- WAV
- OGG

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Music Player</h1>
  
  <h2>My Favorite Song</h2>
  <audio controls width="300">
    <source src="song.mp3" type="audio/mpeg">
    Your browser doesn't support HTML5 audio.
  </audio>
  
  <h2>Podcast</h2>
  <audio controls autoplay>
    <source src="podcast.mp3" type="audio/mpeg">
  </audio>
</body>
</html>
```

### Key Points:
- `<source>` tag specifies audio file
- `type` helps browser understand format
- Fallback text for old browsers
- Mobile browsers may require user click

---

## Video - `<video>` Tag

### What is the video tag?
Plays video files on your webpage.

### Why use it?
- Tutorial videos
- Product demonstrations
- Entertainment
- Training videos

### Syntax:
```html
<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>
```

### Key Attributes:
- `controls` = Show play/pause buttons
- `width` = Video width
- `height` = Video height
- `autoplay` = Start automatically
- `loop` = Repeat
- `muted` = Start silent
- `poster` = Preview image before play

### Supported Formats:
- MP4 (most common)
- WebM
- Ogg

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Video Tutorials</h1>
  
  <h2>How to Bake a Cake</h2>
  <video controls width="400" height="300">
    <source src="cake-tutorial.mp4" type="video/mp4">
    Your browser doesn't support video.
  </video>
  
  <h2>Product Demo</h2>
  <video 
    controls 
    width="600" 
    height="400" 
    poster="thumbnail.jpg"
  >
    <source src="demo.mp4" type="video/mp4">
  </video>
</body>
</html>
```

### Using Poster Image:
```html
<video controls poster="preview.jpg" width="400">
  <source src="video.mp4" type="video/mp4">
</video>
```
Shows "preview.jpg" until user clicks play.

---

## YouTube Videos - Embedding

### What is embedding?
Putting someone else's video (like YouTube) on your page.

### Why embed?
- Share YouTube videos
- No upload needed
- Saves space
- Easy to use

### How to Embed YouTube:

1. Find video on YouTube
2. Click "Share"
3. Click "Embed"
4. Copy the code

### Simple Syntax:
```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0" 
  allowfullscreen>
</iframe>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Web Development Tutorial</h1>
  <p>Watch this tutorial to learn HTML:</p>
  
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; 
           encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</body>
</html>
```

### Key Points:
- Use YouTube's embed code (not copy URL)
- Remove `frameborder` if you want no border
- `allowfullscreen` allows fullscreen button
- Mobile responsive requires CSS (we'll learn later)

---

## iFrame - `<iframe>` Tag

### What is iframe?
Embeds another webpage inside your page.

### Why use it?
- YouTube videos
- Google Maps
- External websites
- Interactive content

### Syntax:
```html
<iframe src="https://example.com" width="600" height="400">
</iframe>
```

### Real-World Examples:

#### 1. Google Maps
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Our Location</h1>
  
  <iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</body>
</html>
```

#### 2. Google Form
```html
<iframe 
  src="https://docs.google.com/forms/d/e/..." 
  width="640" 
  height="500" 
  frameborder="0">
</iframe>
```

#### 3. Weather Widget
```html
<iframe 
  src="https://weather-widget.com/embed?city=nyc" 
  width="300" 
  height="400">
</iframe>
```

### Key Attributes:
- `src` = Webpage to embed
- `width`, `height` = Size
- `frameborder` = Border (0=no border)
- `allowfullscreen` = Allow fullscreen
- `loading="lazy"` = Load only when visible

---

## Progress Bar - `<progress>` Tag

### What is progress?
Shows how much of a task is complete.

### Why use it?
- File upload progress
- Task completion
- Loading indicator
- Progress through content

### Syntax:
```html
<progress value="70" max="100"></progress>
```

### Key Attributes:
- `value` = Current progress (0-max)
- `max` = Total amount (default 100)

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Course Progress</h1>
  
  <p>HTML Course: 60% complete</p>
  <progress value="60" max="100"></progress>
  
  <p>CSS Course: 30% complete</p>
  <progress value="30" max="100"></progress>
  
  <p>JavaScript Course: 80% complete</p>
  <progress value="80" max="100"></progress>
</body>
</html>
```

### Expected Output:
```
HTML Course: 60% complete
[=================>      ] 60%

CSS Course: 30% complete
[===========>           ] 30%

JavaScript Course: 80% complete
[========================>] 80%
```

---

## Meter - `<meter>` Tag

### What is meter?
Shows a measurement on a scale (like temperature, disk usage).

### Why use it?
- Temperature gauge
- Disk usage
- Rating (stars)
- Skill level

### Syntax:
```html
<meter value="6" min="0" max="10"></meter>
```

### Key Attributes:
- `value` = Current measurement
- `min` = Minimum value
- `max` = Maximum value
- `low` = Low threshold
- `high` = High threshold
- `optimum` = Ideal value

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Computer Status</h1>
  
  <p>CPU Usage:</p>
  <meter value="45" min="0" max="100"></meter>
  
  <p>Memory Usage:</p>
  <meter value="80" min="0" max="100" low="30" high="70"></meter>
  
  <p>Disk Space:</p>
  <meter value="95" min="0" max="100"></meter>
  
  <h1>Rating</h1>
  <p>Product Rating: 8/10</p>
  <meter value="8" min="0" max="10" low="3" high="7"></meter>
</body>
</html>
```

### Color Coding:
- **Red** = Low (below `low` value)
- **Yellow** = Medium (between `low` and `high`)
- **Green** = Optimum (at `optimum` value)

---

## Details & Summary - Expandable Content

### What is details?
A collapsible box that shows/hides content.

### Why use it?
- FAQ section
- Hide long content
- Collapse/expand sections
- Save space

### Syntax:
```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content here</p>
</details>
```

### Key Elements:
- `<details>` = Container
- `<summary>` = Clickable title
- Content inside = Hidden until clicked

### Real-World Example - FAQ:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Frequently Asked Questions</h1>
  
  <details>
    <summary>What is HTML?</summary>
    <p>
      HTML is HyperText Markup Language used to create webpages.
      It provides structure to web content.
    </p>
  </details>
  
  <details>
    <summary>How do I learn HTML?</summary>
    <p>
      Start with basic tags like h1, p, and div. 
      Practice by building small projects.
    </p>
  </details>
  
  <details>
    <summary>Is HTML hard to learn?</summary>
    <p>
      No! HTML is beginner-friendly and easy to learn. 
      You can create your first page in minutes.
    </p>
  </details>
</body>
</html>
```

### Expected Interaction:
```
Frequently Asked Questions

▶ What is HTML?
▶ How do I learn HTML?
▶ Is HTML hard to learn?

[Click on any question to expand]

✓ What is HTML?
▼
HTML is HyperText Markup Language used to create webpages.
It provides structure to web content.

▶ How do I learn HTML?
▶ Is HTML hard to learn?
```

### With `open` Attribute:
```html
<details open>
  <summary>Already expanded</summary>
  <p>This is visible by default</p>
</details>
```

---

## Data Attributes - `data-*`

### What are data attributes?
Custom HTML attributes to store extra information.

### Why use them?
- Store custom data
- Use in JavaScript later
- Add metadata
- Clean way to add info

### Syntax:
```html
<div data-color="red" data-size="large">
  Special box
</div>
```

### Real-World Example:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Products</h1>
  
  <div data-product-id="101" data-price="99.99" data-category="electronics">
    <h3>Laptop</h3>
    <p>High-performance laptop</p>
  </div>
  
  <div data-product-id="102" data-price="19.99" data-category="books">
    <h3>HTML Guide</h3>
    <p>Learn HTML from scratch</p>
  </div>
  
  <div data-user-id="5" data-role="admin" data-verified="true">
    <p>Admin Panel</p>
  </div>
</body>
</html>
```

### Key Points:
- Starts with `data-`
- Can have any name after `data-`
- Not displayed on page
- Used by JavaScript to access data
- Better than using `class` or `id` for data

---

## Complete Multimedia Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Multimedia Page</title>
</head>
<body>

  <header>
    <h1>Multimedia Examples</h1>
  </header>

  <!-- Audio Section -->
  <section>
    <h2>Audio Player</h2>
    <audio controls>
      <source src="song.mp3" type="audio/mpeg">
      Your browser doesn't support audio.
    </audio>
  </section>

  <!-- Video Section -->
  <section>
    <h2>Video Tutorial</h2>
    <video controls width="500" height="300">
      <source src="tutorial.mp4" type="video/mp4">
      Your browser doesn't support video.
    </video>
  </section>

  <!-- YouTube Embed -->
  <section>
    <h2>YouTube Tutorial</h2>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      allowfullscreen>
    </iframe>
  </section>

  <!-- Progress Bars -->
  <section>
    <h2>Course Progress</h2>
    <p>HTML: <progress value="100" max="100"></progress></p>
    <p>CSS: <progress value="60" max="100"></progress></p>
    <p>JavaScript: <progress value="40" max="100"></progress></p>
  </section>

  <!-- Meter -->
  <section>
    <h2>Difficulty Level</h2>
    <p>Easy: <meter value="2" min="0" max="10"></meter></p>
    <p>Medium: <meter value="5" min="0" max="10"></meter></p>
    <p>Hard: <meter value="8" min="0" max="10"></meter></p>
  </section>

  <!-- Collapsible FAQ -->
  <section>
    <h2>FAQ</h2>
    <details>
      <summary>What should I learn first?</summary>
      <p>Start with HTML, then CSS, then JavaScript.</p>
    </details>
    
    <details>
      <summary>How long does it take?</summary>
      <p>3-6 months of consistent practice.</p>
    </details>
  </section>

  <footer>
    <p>&copy; 2024 Multimedia Examples</p>
  </footer>

</body>
</html>
```

---

## Best Practices for Multimedia

✅ **DO:**
- Compress audio/video files
- Provide multiple formats
- Always include `controls`
- Use `poster` image for videos
- Include fallback text
- Test on mobile devices
- Use appropriate file sizes

❌ **DON'T:**
- Auto-play with sound on page load
- Use huge video files
- Forget `alt` text for images
- Embed too many videos
- Use outdated video formats

---

## Common Mistakes

### ❌ Mistake 1: Wrong Embed Code
```html
<!-- WRONG - Using YouTube URL -->
<iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
</iframe>

<!-- WRONG - Missing source tag -->
<audio controls>
  song.mp3
</audio>
```

**FIX:**
```html
<!-- CORRECT - Using embed URL -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ">
</iframe>

<!-- CORRECT - With source tag -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

### ❌ Mistake 2: Missing Type Attribute
```html
<!-- WRONG -->
<source src="video.mp4">
```

**FIX:**
```html
<!-- CORRECT -->
<source src="video.mp4" type="video/mp4">
```

### ❌ Mistake 3: Auto-play with Sound
```html
<!-- ANNOYING - Starts playing automatically with sound -->
<audio autoplay>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

**FIX:**
```html
<!-- BETTER - User controls playback -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

---

## Interview Questions

1. **What's the difference between `<audio>` and `<video>`?**
   - Answer: `<audio>` for sound files, `<video>` for video files. Similar syntax.

2. **How do you embed a YouTube video?**
   - Answer: Use `<iframe>` with YouTube's embed URL (not watch URL).

3. **What is a `data-*` attribute?**
   - Answer: Custom HTML attribute to store extra data, starts with `data-`.

4. **What does `<details>` and `<summary>` do?**
   - Answer: Creates collapsible content. `<summary>` is clickable title.

5. **Why use `<source>` tag inside `<audio>`?**
   - Answer: To specify audio file, file type, and provide fallback formats.

6. **What is the `poster` attribute in video?**
   - Answer: Shows a preview image before user clicks play.

---

## Practice Assignment

### Task 1: Music Player Page
Create a page with:
- Header
- Audio player with 3 songs
- Song titles
- Control buttons

### Task 2: Video Gallery
Create a page with:
- Multiple videos
- Video titles
- Poster images
- Controls enabled

### Task 3: YouTube Playlist
Embed 3 YouTube videos on a page:
- Tutorial videos
- With titles
- Proper sizing

### Task 4: FAQ with Details
Create FAQ page with:
- At least 5 questions
- Using `<details>` and `<summary>`
- Include answers
- Professional layout

### Task 5: Progress Dashboard
Create a dashboard with:
- Course progress bars
- Skill level meters
- Data attributes for storage

---

## Summary Notes

- **`<audio>`** = Audio player (MP3, WAV, OGG)
- **`<video>`** = Video player (MP4, WebM, Ogg)
- **`<source>`** = Specifies media file (inside audio/video)
- **`<iframe>`** = Embed external pages (YouTube, Maps)
- **`<progress>`** = Progress bar (value/max)
- **`<meter>`** = Gauge/measurement
- **`<details>`** = Collapsible content
- **`<summary>`** = Title for collapsible content
- **`data-*`** = Custom attributes for data storage
- **Always include `controls`** for media
- **Use `<source>` tag** for media files

---
