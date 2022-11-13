import "./App.css";
import "./style.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Employees from "./pages/Employees";
//npm install react-router-dom
//Routes
//Route / /about /contact - 2 props path = '/' '/about' element = {  }
//redirect  /messages to /contact
//Navigate
// route path= '*'
//useNavigate - programmatic redirct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/messages" element={<Navigate to="/contact" />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <h1> Copyright, 2022</h1>
      </div>
    </Router>
  );
}

export default App;
