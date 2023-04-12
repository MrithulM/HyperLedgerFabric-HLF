import React, { useRef } from "react";
import "./AddCar.css";
import axios from "axios";

export default function AddCar(props) {
  const idRef = useRef(null);
  const modelRef = useRef(null);
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const ownerRef = useRef(null);

  const addCarHandler = async () => {
    const carid = "CAR" + idRef.current.value;
    const model = modelRef.current.value;
    const name = nameRef.current.value;
    const colour = colorRef.current.value;
    const owner = ownerRef.current.value;

    const details = { carid, make: model, model: name, colour, owner };
    try {
      await axios.post("http://4.246.223.78:8080/api/addcar", details);
      console.log("Added car!");
      alert("Added car!");
      idRef.current.value = "";
      modelRef.current.value = "";
      nameRef.current.value = "";
      colorRef.current.value = "";
      ownerRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="model-holder">
      <div className="field">
        <p>Add a Car</p>
        <div className="input-properties">
          <label for="carid">Car ID:</label>
          <input type="number" id="carid" name="carid" ref={idRef} />
          <br />
          <label for="model">Model:</label>
          <input type="text" id="model" name="model" ref={modelRef} />
          <br />
          <label for="cname">Name:</label>
          <input type="text" id="cname" name="cname" ref={nameRef} />
          <br />
          <label for="color">Color:</label>
          <input type="text" id="color" name="color" ref={colorRef} />
          <br />
          <label for="color">Owner:</label>
          <input type="text" id="owner" name="owner" ref={ownerRef} />
          <br />
          <div className="addCarButtonHolder">
            <button onClick={addCarHandler}>Add</button>
            <button
              className="close-button"
              onClick={() => {
                props.closemodal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
