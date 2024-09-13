import React from "react";
import "../style/Registration.css";
import Layout from "./Layout";

const RegistrationPage = () => {
  return (
    <div className="container-fluid ">
      <main className="signin">
        <div class="form-container">
          <h2>Register</h2>
          <form>
            <label for="name"> Name :</label>
            <input type="text" id="name" name="name" required />

            <label for="password">password :</label>
            <input type="password" id="password" name="password" required />

            <label for="cpassword"> Confirm password :</label>
            <input type="cpassword" id="cpassword" name="cpassword" required />
            <button className="btn btn-primary" type="submit" id="regis">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Layout></Layout>
    </div>
  );
};

export default RegistrationPage;
