import React from "react";
import { useState } from "react";
import axios from "axios";
import "../style/Pets.css";
import Layout from "./Layout";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/shop/home");
      setPets(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching data", err);
      setError("Error fetching data: " + err.message);
    }
  };

  const removePet = (id) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const resetTable = () => {
    setPets([]);
    setError("");
  };

  return (
    <div className="App">
      <div className="container-fluid pets">
        <main>
          <h1>Welcome to the Pet Shop</h1>
          <table>
            <thead>
              <tr>
                <th>Pet ID</th>
                <th>Pet Name</th>
                <th>Pet Age</th>
                <th>Pet Place</th>
                <th>Buy</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.place}</td>
                  <td>
                    {pet.available ? (
                      <a href={`/buy/${pet.id}`}>Buy</a>
                    ) : (
                      "Sold Out"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removePet(pet.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="button">
            <button className="btn btn-primary" onClick={fetchData}>
              Get Pet
            </button>
            <button className="btn btn-dark" onClick={resetTable}>
              Hide Pet
            </button>
          </div>
        </main>
      </div>
      <Layout></Layout>
    </div>
  );
};

export default Pets;
