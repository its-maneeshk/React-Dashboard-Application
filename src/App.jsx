import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element=
              {
                <Home />
              }
            />
            <Route
              path="/data"
              element=
              {
                <Data />
              }
            />
            <Route
              path="/about"
              element=
              {
                <About />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
