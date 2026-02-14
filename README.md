# 💖 Valentine's Day Microsite

A beautiful, interactive Valentine's Day microsite built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 Premium glassmorphism design with soft gradients
- 🖼️ Hero section with girlfriend's photo + animated typewriter message
- 🎠 Interactive memory gallery carousel with 3D tilt effects
- 💻 Fake "love algorithm" calculator with BFS visualization
- 🖥️ Secret terminal with fun commands
- 💘 Playful "Yes/No" buttons (No button dodges cursor)
- 🎊 Confetti explosion on "Yes" click
- ✨ Particle effects & floating hearts
- 📱 Fully responsive

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Content

**Edit `src/App.jsx`** and change these variables at the top:

```jsx
export const CONFIG = {
  herName: "Sarah",           // Your girlfriend's name
  myName: "Alex",             // Your name
  anniversaryDate: "2023-02-14", // Optional
}
```

**Add her photo:**
- Place your girlfriend's photo at `src/assets/gf.jpg`
- Best if it's square (1:1 ratio), 512x512px or larger
- If the image doesn't exist, a gradient heart will show instead

**Customize memories** in `src/components/MemoryGallery.jsx`:
```jsx
const memories = [
  {
    id: 1,
    title: "Your Custom Title",
    description: "Your description",
    emoji: "🎉",
    color: "from-pink-400 to-rose-500"
  },
  // Add more...
]
```

**Customize terminal commands** in `src/components/Terminal.jsx`:
```jsx
const commands = {
  love: `Your custom message...`,
  playlist: `Your songs...`,
  // Add more commands...
}
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

This creates a `dist` folder with your production files.

## 🌐 Deploy to GitHub Pages

### Step 1: Update Base Path

Edit `vite.config.js` and change the `base` to your repo name:

```js
base: '/your-repo-name/', // e.g., '/valentine-microsite/'
```

### Step 2: Deploy

```bash
npm run deploy
```

This will build and deploy to GitHub Pages automatically!

### Step 3: Enable GitHub Pages

1. Go to your repo settings on GitHub
2. Navigate to "Pages" section
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Save

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## 🎨 Customization

### Change Colors

Edit `src/index.css` to change the background gradient:

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change to your preferred colors */
}
```

### Add Background Music (Optional)

1. Place audio file at `public/sounds/music.mp3`
2. Uncomment the sound logic in `src/App.jsx`

## 📁 Project Structure

```
valentine-microsite/
├── src/
│   ├── components/         # React components
│   ├── utils/             # Utility functions
│   ├── assets/            # Images (put gf.jpg here)
│   ├── App.jsx            # Main app (CUSTOMIZE HERE)
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/
│   └── sounds/            # Optional audio files
├── package.json
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind configuration
```

## 🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Canvas Confetti** - Confetti effects

## 💝 Made with Love

Feel free to customize this template to make it uniquely yours!

---

**Happy Valentine's Day! 💖**
