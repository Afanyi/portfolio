# 🌐 Personal Portfolio Website

This is a **personal portfolio project** showcasing skills, experience, education, and contact information in a clean and responsive layout. The portfolio is built using **HTML, CSS, and JavaScript**, with data dynamically loaded from **language-specific files**.

---

## 🚀 Features

- **Responsive design** that works on desktop and mobile
- **Dynamic, multi-language content** (EN / DE / FR) via `/lang/data-*.js`
- **Language switcher** that remembers your choice in `localStorage`
- **Hero section** with introduction and call-to-action buttons
- **About section** with personal description
- **Experience & Education sections** with structured layouts
- **Skills & Languages sections** to highlight technical and communication abilities
- **Contact section** with email, phone, location, and social links
- **Download CV** button and **Get in Touch** link

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling & layout (responsive, animations, gradients)
- **JavaScript (ES Modules)** – Dynamic rendering & interactivity
- **Language data files** – `/lang/data-en.js`, `/lang/data-de.js`, `/lang/data-fr.js`

---

## 📂 Project Structure

```
portfolio/
│── index.html # Main HTML file (loads script.js as an ES module)
│── styles.css # Stylesheet
│── script.js # Rendering logic + dynamic language loader
│── main_cv.pdf # CV (download link)
│── favico.png # Favicon
└── lang/ # Language-specific portfolio data
├── data-en.js # English
├── data-de.js # Deutsch
└── data-fr.js # Français
```

---

## ⚡ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Afanyi/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your browser.  
   *(No build tools required – pure HTML/CSS/JS project.)*

---

## 🎨 Customization


- Modify **styles** inside `styles.css` to match your preferred theme.  
- Replace **social links & contact details** in `data.js`.  

---

## 📬 Contact

Created by **Blasius Fornge Afanyi**  
📧 [afanyiblasius4@gmail.com](mailto:afanyiblasius4@gmail.com)  
