import React from "react";
import "../style/Login.css";
import Layout from "./Layout";

const Login = () => {
  const handleLogin = ({ setIsAuthenticated }) => {
    setIsAuthenticated(true);
  };
  return (
    <div className="container-fluid ">
      <main className="login">
        <div class="form-container">
          <h2>Login</h2>
          <form>
            <label for="name"> Name :</label>
            <input type="text" id="name" name="name" required />

            <label for="password">password :</label>
            <input type="password" id="password" name="password" required />

            <button
              className="btn btn-primary lbtn"
              type="submit"
              onClick={handleLogin}
              id="regis"
            >
              Login
            </button>
            <button className="btn btn-secondary lbtn" type="submit" id="reset">
              Reset password
            </button>
          </form>
        </div>
      </main>
      <Layout></Layout>
    </div>
  );
};

export default Login;
