import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import Layout from "./Layout";
import dogImage from "../img/dog.jpg";
import rabbitImage from "../img/rabbit.jpg";
import catImage from "../img/cat.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="header">
          <div className="header-overlay"></div>
          <div className="container">
            <h1>Welcome to Pet Shop</h1>
            <p>Your one-stop shop for all your pet needs</p>
            <a href="#" className="btn btn-primary btn-lg">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Pets</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={dogImage} className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Dogs</h5>
                <p className="card-text">
                  Dogs are loyal, loving companions that bring joy and
                  companionship to families and individuals. Providing emotional
                  support and enhancing social interactions.
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={rabbitImage} className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Rabbits</h5>
                <p className="card-text">
                  Rabbits are gentle, social pets that thrive on companionship
                  and enjoy interactive play, making them wonderful additions to
                  any household.
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={catImage} className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Cats</h5>
                <p className="card-text">
                  Cats, known for their grace and independence, are beloved for
                  their playful antics and affectionate nature, enriching homes
                  with their charm
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Layout></Layout>
    </div>
  );
};

export default Home;
