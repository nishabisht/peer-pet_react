import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateNav from "./component/PrivateNav";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";
import Pets from "./component/Pets";
import RegistrationPage from "./component/RegistrationPage";
import Dashboard from "./component/Dashboard";
import Profile from "./component/Profile";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Router>
      {isAuthenticated ? <Nav /> : <PrivateNav />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/pets" element={isAuthenticated ? <Pets /> : <Home />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Home />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
