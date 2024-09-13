import React from "react";

const Dashboard = () => {
  return (
    <div>
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          User Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* User Profile */}
      <div className="container mt-4">
        <h2>User Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        {/* Add more profile information as needed */}
      </div>

      {/* Main Content Area */}
      <div className="container mt-4">
        <h2>Main Content</h2>
        {/* Add widgets, panels, or other content here */}
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-4">
        <div className="container">
          <p>&copy; 2024 User Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
