# DASHBOARD APPLICATION

## Overview

A responsive and interactive dashboard web application built using 
React, Redux, and TailwindCSS. The app demonstrates skills in state 
management, API integration, responsive design, error handling, 
and professional Git version control practices.

---

## Features

1. Display a list of tasks (title, due date, status).
2. Add new tasks with title and due date.
3. Edit task status (Pending / Done) and delete tasks.
4. Filter tasks by status (All, Pending, Done).
5. Search tasks by title with **debounced input**.
6. Sort tasks by **date** or **name**.
7. Responsive and clean design using TailwindCSS.
8. Built using **React Hooks**.

---

## Tech Stack

- React (Frontend)
- Redux Toolkit (State Management)
- TailwindCSS (Styling)
- Axios (API Calls)
- Vite (Build Tool)
- Git (Version Control)
- DummyJSON Public API

---

## API USED
DummyJSON API
- Base URL: https://dummyjson.com/products
- Description: Provides a list of products with fields like title, category, and price.

---

## Project Structure

```
src/
├── api/
│   └── api.js
├── components/
│   ├── Sidebar.jsx
│   ├── Table.jsx
│   └── Pagination.jsx
├── pages/
│   ├── Home.jsx
│   └── Data.jsx
├── redux/
│   ├── store.js
│   └── dataSlice.js
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

---

## Installation
- Follow these steps to set up the project locally:

1. Clone the repository:

```
git clone https://github.com/its-maneeshk/React-Dashboard-Application.git

```

2. Navigate into the project folder
```
cd React-Dashboard-Application
```

3. Install dependencies:

```
npm install
```

4. Run the project:

```
npm run dev
```

5. Open in browser:

```
http://localhost:5173
```

---

## Usage

1. HOME PAGE:
   - Displays dashboard overview and quick statistics
   - Shows total products, unique categories, and tips

2. DATA PAGE:
   - Fetches product data from DummyJSON API
   - Provides search bar to filter products by title
   - Includes pagination for navigation between pages
   - Handles loading and error states gracefully
3. ABOUT PAGE:
   - Shows project basic details about this project.

---

## Demo Screenshots  

| **Interface** | **Preview** |
|--------------|------------|
| **Home Page** | <img src="https://github.com/its-maneeshk/React-Dashboard-Application/blob/6655ae16663e2c178618e63b84e3eb001c6d6733/public/screenshot/Dashboard-application-screenshot-Home.png" width="500px"> |
| **Data Page** | <img src="https://github.com/its-maneeshk/React-Dashboard-Application/blob/6655ae16663e2c178618e63b84e3eb001c6d6733/public/screenshot/Dashboard-application-screenshot-Data.png" width="500px"> |
| **Filtering Data** | <img src="https://github.com/its-maneeshk/React-Dashboard-Application/blob/6655ae16663e2c178618e63b84e3eb001c6d6733/public/screenshot/Dashboard-application-screenshot-Data-FilteringOperation.png" width="500px"> |
| **About Page** | <img src="https://github.com/its-maneeshk/React-Dashboard-Application/blob/6655ae16663e2c178618e63b84e3eb001c6d6733/public/screenshot/Dashboard-application-screenshot-About.png" width="500px"> |

---