

# 🌸 Mother’s Day Tribute Blog

**A Responsive Tribute Blog built with React.js, Tailwind CSS, React Router DOM, and Material UI**

## 👩‍💻 Author

**Lakshyaraj Singh Ranawat**  
B.Tech CSE, VIT Bhopal University
👉 [My LinkedIn ](https://www.linkedin.com/in/lakshyarajsinghranawat/) 
## 📍 Live Demo

👉 [Visit the Live Website](https://travelblogchallenge.vercel.app)  
_(Deployed on Vercel)_

---

## 📌 Project Overview

This is a fully responsive Mother’s Day Tribute Blog website created for the **Mother’s Day Tribute Blog Challenge**. It replicates a given Figma design and includes dynamic routing, category-based filtering, search functionality, and a detailed article view — all using a React.js frontend and local JSON data handling.

---

## ⚙️ How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Lakshyaraj-Singh/TravelBlogWebsite-Mothers-dayChallenge.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd MOTHER'S DAY CHALLENGE
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the app in your browser:**

   Navigate to `http://localhost:3000`

---

## ✨ Features Implemented

- **🎡 Hero Section Carousel** – Showcasing 3–5 tribute stories with next/prev navigation.
- **🔍 Search Functionality (Bonus)** – Filter articles by title or excerpt using client-side search.
- **📚 Explore by Category** – Filter articles dynamically by clicking on categories.
- **📰 Recent Articles Section** – Displays image, title, excerpt, category, and read time.
- **📄 Detailed Story Page** – Dynamic routing to `/articles/:id` for full article content.
- **🎨 Random Background Image** – Random image generation for the homepage background.
- **📱 Fully Responsive** – Optimized for Desktop, Tablet, and Mobile views.
- **💅 Styled with Tailwind CSS & Material UI** – Tailored design using Tailwind utility classes and Material UI components.
- **📁 Clean Code Structure** – Modular components with a well-organized folder system.
- **🧠 Enhanced Data Schema** – Updated JSON format for easy, component-friendly rendering:
  ```json
  {
    "id": 1,
    "title": "When Is the Best Time to Visit Japan?",
    "excerpt": "...",
    "authorName": "Emily Nomad",
    "submissionDate": "2025-04-25",
    "category": "travel",
    "readingTime": "6 min read",
    "sections": [
      {
        "subtitle": "Spring in Japan",
        "paragraph": "...",
        "image": "..."
      },
      ...
    ]
  }
  ```

---

## 🛠 Tech Stack

- **React.js**
- **Tailwind CSS & Tailwind Dev Tools**
- **React Router DOM**
- **Material UI**
- **Local JSON for data (No backend)**

---

## 📂 Folder Structure

```
├── public/
├── src/
│   ├── styles/
│   ├── components/
│       ├── Main/
│       ├── About/
│       ├── Contact/
│       ├── Categories/
│   └── App.jsx
│   └── Navbar.jsx
│   └── Footer.jsx
│   └── locals.json
│   └── Main.jsx
├── README.md
├── Index.Html
├── package.json
```

---

## 💡 Bonus Additions

- 🔎 **Search bar** for live filtering articles by title.
- 🧭 **Category click filter**.
- 🎨 **Random hero background images**.
- 💻 **Improved data schema for maintainable components**.

---

## 📄 License

This project was built as a part of the **Mother’s Day Tribute Blog Challenge** hosted by Expert Hire.  


