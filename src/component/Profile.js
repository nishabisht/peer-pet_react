import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../img/profile.jpeg";
import Layout from "./Layout";
import "../style/Profile.css"; // Import the global CSS file

const Profile = () => {
  return (
    <section className="profile">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            {/* Profile Picture */}
            <img
              src={profileImage}
              alt="Profile Picture"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            {/* User Information */}
            <h1 className="user-name">User Name</h1>
            <p className="user-info">Email: user@example.com</p>
            <p className="user-info">Location: City, Country</p>
            <p className="user-info">
              Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* Edit Profile Button */}
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
      <Layout />
    </section>
  );
};

export default Profile;
