# 📊 Student Attendance Planner

A practical and responsive web application built using **HTML, CSS, and JavaScript** that helps college students calculate their attendance percentage and plan safe bunking without falling below the required attendance criteria.

---

## 🚀 About the Project

Maintaining minimum attendance is a common challenge for college students. Many students often find themselves manually calculating attendance and wondering:

> "Can I bunk today without dropping below the required percentage?"

The **Student Attendance Planner** solves this problem by providing a clean, intuitive, and easy-to-use interface where students can enter their attendance details and instantly receive accurate results.

The application:

- Calculates the current attendance percentage  
- Determines attendance status (Safe, Warning, Danger)  
- Calculates how many additional classes can be safely bunked  
- Validates incorrect or unrealistic inputs  
- Stores user data using `localStorage` for a smoother experience  

This project emphasizes **logical correctness, simplicity, and real-world usability**.

---

## ✨ Features

- 📈 Calculate current attendance percentage  
- 🟢 Safe Zone indicator  
- 🟡 Warning Zone indicator  
- 🔴 Danger Zone indicator  
- 🎯 Smart bunk planner (safe bunk limit calculation)  
- ⚠️ Input validation for incorrect entries  
- 💾 LocalStorage integration (data persistence)  
- 🎨 Clean and student-friendly UI  
- 📱 Responsive layout (works on desktop and mobile)

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Logic, calculations, and DOM manipulation  
- **LocalStorage API** – Client-side data persistence  

---

## 🧠 How It Works

### 📌 Attendance Formula

Attendance % = (Attended Classes / Total Classes) × 100

### 📌 Bunk Calculation Logic

The system calculates how many additional classes can be skipped while still maintaining the required attendance percentage.

It repeatedly checks the percentage condition and determines the maximum number of safe bunk classes without dropping below the required threshold.

---

## 📂 Project Structure

student-attendance-planner/
│
├── index.html
├── student.css
├── student.js
└── README.md

---

## ▶️ How to Run Locally

1. Clone the repository:

git clone https://github.com/Rahamatullamandal2005/student-attendance-percentage-checker.git

2. Open the project folder  
3. Double-click `index.html`  

No server setup required.

---

## 🎯 Learning Outcomes

Through this project, I strengthened my understanding of:

- Writing efficient JavaScript logic  
- Performing percentage-based mathematical calculations  
- Handling user input validation  
- DOM manipulation  
- Client-side storage using LocalStorage  
- Designing clean and readable UI  

This project demonstrates practical frontend development skills focused on solving real-world student problems.

---

## 🔮 Future Improvements

- Subject-wise attendance tracking  
- Visual charts or progress bars  
- Full mobile optimization improvements  
- Edit/reset history feature  
- Attendance alerts when reaching danger zone  
- Export attendance report as PDF  
- Authentication system for multiple users  

---

## 👨‍💻 Author

**Rahamatulla Mandal**  
Frontend Developer  
Kolkata, India  

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
