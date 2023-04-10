import React from "react";
import "./AddCar.css";
import axios from "axios";

export default function AddCar() {
  const addCarHandler = async () => {
    const carid = prompt("Enter car id").toUpperCase();
    const make = prompt("model");
    const model = prompt("name");
    const colour = prompt("color");
    const owner = prompt("owner");

    const details = { carid, make, model, colour, owner };
    try {
      await axios.post("http://4.246.223.78:8080/api/addcar", details);
      console.log("Added car!");
      alert("Added car!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <fieldset className="field">
      <legend>Add a Car</legend>
      <label for="carid">Car ID:</label>
      <input type="number" id="carid" name="carid" />
      <br />
      <label for="model">Model:</label>
      <input type="text" id="model" name="model" />
      <br />
      <label for="cname">Name:</label>
      <input type="text" id="cname" name="cname" />
      <br />
      <label for="color">Color:</label>
      <input type="text" id="color" name="color" />
      <br />
      <label for="color">Owner:</label>
      <input type="text" id="owner" name="owner" />
      <br />
      <div className="addCarButtonHolder">
        <button onClick={addCarHandler}>Add</button>
      </div>
    </fieldset>
  );
}
