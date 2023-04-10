import React from "react";
import "./AddCar.css";

export default function AddCar() {
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
        <button>Add</button>
      </div>
    </fieldset>
  );
}
