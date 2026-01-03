===========================================
DASHBOARD APPLICATION
===========================================

📌 Project Objective:
---------------------
A responsive and interactive dashboard web application built using 
React, Redux, and TailwindCSS. The app demonstrates skills in state 
management, API integration, responsive design, error handling, 
and professional Git version control practices.

===========================================
🚀 FEATURES
===========================================
1. Responsive dashboard layout using TailwindCSS
2. Sidebar navigation with "Home" and "Data" sections
3. Dynamic data table with:
   - Public API integration (DummyJSON)
   - Search/filter functionality
   - Pagination for improved user experience
4. Error handling for failed API requests
5. Redux Toolkit for global state management
6. Clean, modern TailwindCSS styling
7. Professional Git workflow and structure

===========================================
🧩 TECH STACK
===========================================
- React (Frontend)
- Redux Toolkit (State Management)
- TailwindCSS (Styling)
- Axios (API Calls)
- Vite (Build Tool)
- Git (Version Control)
- DummyJSON Public API

===========================================
🔗 API USED
===========================================
DummyJSON API
Base URL: https://dummyjson.com/products
Description: Provides a list of products with fields like title, category, and price.

===========================================
🛠️ INSTALLATION AND SETUP
===========================================
Follow these steps to set up the project locally:

1. Clone the repository
   git clone https://github.com/yourusername/dashboard-app.git

2. Navigate into the project folder
   cd dashboard-app

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open in browser:
   http://localhost:5173

===========================================
📂 PROJECT STRUCTURE
===========================================
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

===========================================
📖 USAGE GUIDE
===========================================
➡️ HOME PAGE:
   - Displays dashboard overview and quick statistics
   - Shows total products, unique categories, and tips

➡️ DATA PAGE:
   - Fetches product data from DummyJSON API
   - Provides search bar to filter products by title
   - Includes pagination for navigation between pages
   - Handles loading and error states gracefully

===========================================
✅ REQUIREMENTS CHECKLIST
===========================================
✔ Responsive Layout using TailwindCSS
✔ Sidebar Navigation (Home, Data)
✔ Table Display with Columns
✔ API Integration (DummyJSON)
✔ Search & Pagination
✔ Error Handling
✔ Redux State Management
✔ Git Version Control
✔ README File with Setup Instructions

===========================================
💡 BONUS (OPTIONAL ENHANCEMENTS)
===========================================
- TypeScript support for type safety
- Unit tests with Jest or React Testing Library
- E2E testing with Cypress
- Deployment on Netlify or Vercel

===========================================
🧠 GIT WORKFLOW (RECOMMENDED)
===========================================
1. Create feature branch:
   git checkout -b feature/dashboard

2. Commit regularly:
   git add .
   git commit -m "feat: add sidebar and layout"

3. Push to GitHub:
   git push origin feature/dashboard

4. Create Pull Request and merge into main.

===========================================
👨‍💻 AUTHOR
===========================================
Developed by: [Your Name]
GitHub: https://github.com/yourusername
Date: January 2026

===========================================
📜 LICENSE
===========================================
This project is open-source and available under the MIT License.
